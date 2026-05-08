import type { Metadata } from 'next'
import ToolUploader from '@/components/ToolUploader'
import ToolPageContent from '@/components/ToolPageContent'
import JsonLd from '@/components/JsonLd'
import { toolsContent } from '@/lib/tools-content'

const tool = toolsContent['pdf-to-word']

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: {
    canonical: 'https://vorzapdf.com/tools/pdf-to-word',
    languages: { 'nl-NL': 'https://vorzapdf.com/tools/pdf-to-word', 'en-US': 'https://vorzapdf.com/en/tools/pdf-to-word' },
  },
  openGraph: {
    title: tool.title,
    description: tool.description,
    url: 'https://vorzapdf.com/tools/pdf-to-word',
    images: [{ url: '/api/og?tool=pdf-to-word', width: 1200, height: 630 }],
  },
}

export default function PdfToWordPage() {
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
      { '@type': 'ListItem', position: 2, name: tool.nameNL, item: 'https://vorzapdf.com/tools/pdf-to-word' },
    ],
  }

  return (
    <>
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} />
      <div className="min-h-screen py-16 px-4">
        <ToolUploader
          toolId="pdf-to-word"
          title={tool.h1}
          description="Converteer je PDF naar een bewerkbaar Word-document in seconden."
          accept=".pdf,application/pdf"
          actionLabel="Converteren naar Word"
          outputLabel="Download Word-bestand"
        />
        <ToolPageContent content={tool} />
      </div>
    </>
  )
}
