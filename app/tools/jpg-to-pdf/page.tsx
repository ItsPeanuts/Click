import type { Metadata } from 'next'
import ToolUploader from '@/components/ToolUploader'

export const metadata: Metadata = {
  title: 'JPG to PDF Converter - Free Online Tool | DocuTools AI',
  description: 'Convert JPG and PNG images to PDF online for free. Create professional PDFs from your photos.',
}

export default function JpgToPdfPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <ToolUploader
        toolId="jpg-to-pdf"
        title="JPG to PDF"
        description="Convert your images (JPG, PNG) into a PDF document."
        accept=".jpg,.jpeg,.png,image/jpeg,image/png"
        multiple={true}
        actionLabel="Convert to PDF"
        outputLabel="Download PDF"
      />
    </div>
  )
}
