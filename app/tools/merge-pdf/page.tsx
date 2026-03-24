import type { Metadata } from 'next'
import ToolUploader from '@/components/ToolUploader'

export const metadata: Metadata = {
  title: 'Merge PDF Files Online - Combine PDFs Free | DocuTools AI',
  description: 'Merge multiple PDF files into one document online for free. Fast and easy PDF combiner.',
}

export default function MergePdfPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <ToolUploader
        toolId="merge-pdf"
        title="Merge PDF"
        description="Combine multiple PDF files into a single document."
        accept=".pdf,application/pdf"
        multiple={true}
        actionLabel="Merge PDFs"
        outputLabel="Download Merged PDF"
      />
    </div>
  )
}
