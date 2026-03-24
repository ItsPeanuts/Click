import type { Metadata } from 'next'
import ToolUploader from '@/components/ToolUploader'

export const metadata: Metadata = {
  title: 'PDF to Word Converter - Free Online Tool | DocuTools AI',
  description: 'Convert PDF files to editable Word documents (.docx) online for free. Fast, accurate, and secure.',
}

export default function PdfToWordPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <ToolUploader
        toolId="pdf-to-word"
        title="PDF to Word"
        description="Convert your PDF to an editable Word document in seconds."
        accept=".pdf,application/pdf"
        actionLabel="Convert to Word"
        outputLabel="Download Word File"
      />
    </div>
  )
}
