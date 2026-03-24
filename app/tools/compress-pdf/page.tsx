import type { Metadata } from 'next'
import ToolUploader from '@/components/ToolUploader'

export const metadata: Metadata = {
  title: 'Compress PDF Online - Reduce PDF File Size | DocuTools AI',
  description: 'Compress and reduce PDF file size online for free. Maintain quality while shrinking your PDF.',
}

export default function CompressPdfPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <ToolUploader
        toolId="compress-pdf"
        title="Compress PDF"
        description="Reduce your PDF file size while maintaining quality."
        accept=".pdf,application/pdf"
        actionLabel="Compress PDF"
        outputLabel="Download Compressed PDF"
      />
    </div>
  )
}
