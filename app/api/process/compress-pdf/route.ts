import { NextRequest, NextResponse } from 'next/server'
import { guardProcessing } from '@/lib/processGuard'
import { PDFDocument } from 'pdf-lib'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: NextRequest) {
  const blocked = await guardProcessing(req)
  if (blocked) return blocked

  try {
    const formData = await req.formData()
    const file = formData.get('files') as File | null
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

    const buffer = Buffer.from(await file.arrayBuffer())

    // Load and re-save with pdf-lib (removes unused objects, re-encodes streams)
    const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true })

    // Remove metadata to reduce size
    pdfDoc.setTitle('')
    pdfDoc.setAuthor('')
    pdfDoc.setSubject('')
    pdfDoc.setKeywords([])
    pdfDoc.setProducer('DocuTools AI')
    pdfDoc.setCreator('DocuTools AI')

    const compressed = await pdfDoc.save({
      useObjectStreams: true,
      addDefaultPage: false,
    })

    const originalName = file.name.replace(/\.pdf$/i, '')

    return new NextResponse(compressed, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${originalName}-compressed.pdf"`,
      },
    })
  } catch (err: unknown) {
    console.error('compress-pdf error:', err)
    return NextResponse.json({ error: 'Failed to compress PDF' }, { status: 500 })
  }
}
