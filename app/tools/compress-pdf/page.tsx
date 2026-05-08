import type { Metadata } from 'next'
import ToolUploader from '@/components/ToolUploader'
import ToolPageContent from '@/components/ToolPageContent'
import JsonLd from '@/components/JsonLd'
import { toolsContent } from '@/lib/tools-content'

const tool = toolsContent['compress-pdf']

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: {
    canonical: 'https://vorzapdf.com/tools/compress-pdf',
    languages: { 'nl-NL': 'https://vorzapdf.com/tools/compress-pdf', 'en-US': 'https://vorzapdf.com/en/tools/compress-pdf' },
  },
  openGraph: {
    title: tool.title,
    description: tool.description,
    url: 'https://vorzapdf.com/tools/compress-pdf',
    images: [{ url: '/api/og?tool=compress-pdf', width: 1200, height: 630 }],
  },
}

export default function CompressPdfPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: tool.h1,
    description: tool.description,
    step: tool.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vorzapdf.com' },
      { '@type': 'ListItem', position: 2, name: tool.nameNL, item: 'https://vorzapdf.com/tools/compress-pdf' },
    ],
  }

  return (
    <>
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} />
      <div className="min-h-screen py-16 px-4">
        <ToolUploader
          toolId="compress-pdf"
          title={tool.h1}
          description="Verklein je PDF-bestand met behoud van kwaliteit."
          accept=".pdf,application/pdf"
          actionLabel="PDF Comprimeren"
          outputLabel="Download Gecomprimeerd PDF"
        />
        <ToolPageContent content={tool} />
      </div>
    </>
  )
}
