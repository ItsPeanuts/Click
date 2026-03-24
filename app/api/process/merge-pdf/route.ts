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
    const files = formData.getAll('files') as File[]
    if (files.length < 2) {
      return NextResponse.json({ error: 'Please upload at least 2 PDF files to merge' }, { status: 400 })
    }

    const merged = await PDFDocument.create()

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer())
      const pdf = await PDFDocument.load(buffer, { ignoreEncryption: true })
      const pages = await merged.copyPages(pdf, pdf.getPageIndices())
      pages.forEach((page) => merged.addPage(page))
    }

    const mergedBytes = await merged.save({ useObjectStreams: true })

    return new NextResponse(mergedBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="merged.pdf"',
      },
    })
  } catch (err: unknown) {
    console.error('merge-pdf error:', err)
    return NextResponse.json({ error: 'Failed to merge PDFs' }, { status: 500 })
  }
}
