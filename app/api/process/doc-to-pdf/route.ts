import { NextRequest, NextResponse } from 'next/server'
import { guardProcessing } from '@/lib/processGuard'
import { PDFDocument, StandardFonts, rgb, PageSizes } from 'pdf-lib'

export const runtime = 'nodejs'
export const maxDuration = 60

const LINE_HEIGHT = 14
const FONT_SIZE = 11
const MARGIN = 50

export async function POST(req: NextRequest) {
  const blocked = await guardProcessing(req)
  if (blocked) return blocked

  try {
    const formData = await req.formData()
    const file = formData.get('files') as File | null
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

    const rawText = await file.text()

    // Strip HTML tags if HTML file
    const isHtml = file.name.endsWith('.html') || file.type === 'text/html'
    const text = isHtml ? rawText.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ') : rawText

    const pdf = await PDFDocument.create()
    const font = await pdf.embedFont(StandardFonts.Helvetica)

    const [pageW, pageH] = PageSizes.A4
    const maxWidth = pageW - MARGIN * 2

    // Word-wrap lines
    const inputLines = text.split('\n')
    const wrappedLines: string[] = []
    for (const line of inputLines) {
      const words = line.split(' ')
      let current = ''
      for (const word of words) {
        const test = current ? `${current} ${word}` : word
        const testWidth = font.widthOfTextAtSize(test, FONT_SIZE)
        if (testWidth > maxWidth && current) {
          wrappedLines.push(current)
          current = word
        } else {
          current = test
        }
      }
      wrappedLines.push(current)
    }

    // Paginate
    const linesPerPage = Math.floor((pageH - MARGIN * 2) / LINE_HEIGHT)
    let lineIndex = 0

    while (lineIndex < wrappedLines.length) {
      const page = pdf.addPage(PageSizes.A4)
      let y = pageH - MARGIN

      for (let i = 0; i < linesPerPage && lineIndex < wrappedLines.length; i++, lineIndex++) {
        const lineText = wrappedLines[lineIndex]
        if (lineText.trim()) {
          page.drawText(lineText, { x: MARGIN, y, size: FONT_SIZE, font, color: rgb(0, 0, 0) })
        }
        y -= LINE_HEIGHT
      }
    }

    const pdfBytes = await pdf.save()
    const originalName = file.name.replace(/\.(txt|html)$/i, '')

    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${originalName}.pdf"`,
      },
    })
  } catch (err: unknown) {
    console.error('doc-to-pdf error:', err)
    return NextResponse.json({ error: 'Failed to convert document to PDF' }, { status: 500 })
  }
}
