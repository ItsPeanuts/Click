import { NextRequest, NextResponse } from 'next/server'
import { guardProcessing } from '@/lib/processGuard'
import { PDFDocument, PageSizes } from 'pdf-lib'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: NextRequest) {
  const blocked = await guardProcessing(req)
  if (blocked) return blocked

  try {
    const formData = await req.formData()
    const files = formData.getAll('files') as File[]
    if (files.length === 0) {
      return NextResponse.json({ error: 'No images provided' }, { status: 400 })
    }

    const pdf = await PDFDocument.create()

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer())
      const mime = file.type.toLowerCase()

      let image
      if (mime === 'image/png') {
        image = await pdf.embedPng(buffer)
      } else {
        // Default: JPEG
        image = await pdf.embedJpg(buffer)
      }

      const page = pdf.addPage(PageSizes.A4)
      const { width, height } = page.getSize()

      // Scale image to fit page with padding
      const padding = 40
      const maxW = width - padding * 2
      const maxH = height - padding * 2
      const scale = Math.min(maxW / image.width, maxH / image.height)
      const scaledW = image.width * scale
      const scaledH = image.height * scale

      page.drawImage(image, {
        x: (width - scaledW) / 2,
        y: (height - scaledH) / 2,
        width: scaledW,
        height: scaledH,
      })
    }

    const pdfBytes = await pdf.save()

    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="images.pdf"',
      },
    })
  } catch (err: unknown) {
    console.error('jpg-to-pdf error:', err)
    return NextResponse.json({ error: 'Failed to convert images to PDF' }, { status: 500 })
  }
}
