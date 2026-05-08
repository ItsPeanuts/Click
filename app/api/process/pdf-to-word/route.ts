import { NextRequest, NextResponse } from 'next/server'
import { guardProcessing } from '@/lib/processGuard'
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx'

// pdf-parse needs require() in Next.js server context
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pdfParse = require('pdf-parse')

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
    const parsed = await pdfParse(buffer)
    const rawText: string = parsed.text ?? ''

    // Split into paragraphs and build docx
    const lines = rawText.split('\n').filter((l: string) => l.trim().length > 0)
    const paragraphs = lines.map((line: string) => {
      const trimmed = line.trim()
      // Heuristic: short lines in ALL CAPS → heading
      const isHeading = trimmed.length < 80 && trimmed === trimmed.toUpperCase() && trimmed.length > 3
      return new Paragraph({
        heading: isHeading ? HeadingLevel.HEADING_2 : undefined,
        children: [new TextRun({ text: trimmed, size: isHeading ? 28 : 22 })],
        spacing: { after: 120 },
      })
    })

    const doc = new Document({
      sections: [{ children: paragraphs.length > 0 ? paragraphs : [new Paragraph('(No text found in PDF)')] }],
    })

    const docBuffer = await Packer.toBuffer(doc)
    const originalName = file.name.replace(/\.pdf$/i, '')

    return new NextResponse(docBuffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="${originalName}.docx"`,
      },
    })
  } catch (err: unknown) {
    console.error('pdf-to-word error:', err)
    return NextResponse.json({ error: 'Failed to convert PDF to Word' }, { status: 500 })
  }
}
