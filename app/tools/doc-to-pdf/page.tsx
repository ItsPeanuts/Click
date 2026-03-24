import type { Metadata } from 'next'
import ToolUploader from '@/components/ToolUploader'

export const metadata: Metadata = {
  title: 'Document to PDF Converter - Free Online | DocuTools AI',
  description: 'Convert invoices and text documents to PDF online for free. Supports .txt and .html files.',
}

export default function DocToPdfPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <ToolUploader
        toolId="doc-to-pdf"
        title="Document to PDF"
        description="Convert invoices and text documents (.txt, .html) to PDF."
        accept=".txt,.html,text/plain,text/html"
        actionLabel="Convert to PDF"
        outputLabel="Download PDF"
      />
    </div>
  )
}
