import type { Metadata } from 'next'
import ToolUploader from '@/components/ToolUploader'
import ToolPageContent from '@/components/ToolPageContent'
import JsonLd from '@/components/JsonLd'
import { toolsContent } from '@/lib/tools-content'

const tool = toolsContent['merge-pdf']

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: {
    canonical: 'https://vorzapdf.com/tools/merge-pdf',
    languages: { 'nl-NL': 'https://vorzapdf.com/tools/merge-pdf', 'en-US': 'https://vorzapdf.com/en/tools/merge-pdf' },
  },
  openGraph: {
    title: tool.title,
    description: tool.description,
    url: 'https://vorzapdf.com/tools/merge-pdf',
    images: [{ url: '/api/og?tool=merge-pdf', width: 1200, height: 630 }],
  },
}

export default function MergePdfPage() {
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
      { '@type': 'ListItem', position: 2, name: tool.nameNL, item: 'https://vorzapdf.com/tools/merge-pdf' },
    ],
  }

  return (
    <>
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} />
      <div className="min-h-screen py-16 px-4">
        <ToolUploader
          toolId="merge-pdf"
          title={tool.h1}
          description="Combineer meerdere PDF-bestanden tot één document."
          accept=".pdf,application/pdf"
          multiple={true}
          actionLabel="PDF's Samenvoegen"
          outputLabel="Download Samengevoegd PDF"
        />
        <ToolPageContent content={tool} />
      </div>
    </>
  )
}
