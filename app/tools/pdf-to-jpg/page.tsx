import type { Metadata } from 'next'
import ToolUploader from '@/components/ToolUploader'
import ToolPageContent from '@/components/ToolPageContent'
import JsonLd from '@/components/JsonLd'
import { toolsContent } from '@/lib/tools-content'

const tool = toolsContent['pdf-to-jpg']

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: {
    canonical: 'https://vorzapdf.com/tools/pdf-to-jpg',
    languages: { 'nl-NL': 'https://vorzapdf.com/tools/pdf-to-jpg', 'en-US': 'https://vorzapdf.com/en/tools/pdf-to-jpg' },
  },
  openGraph: {
    title: tool.title,
    description: tool.description,
    url: 'https://vorzapdf.com/tools/pdf-to-jpg',
    images: [{ url: '/api/og?tool=pdf-to-jpg', width: 1200, height: 630 }],
  },
}

export default function PDFToJPGPage() {
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
      { '@type': 'ListItem', position: 2, name: tool.nameNL, item: 'https://vorzapdf.com/tools/pdf-to-jpg' },
    ],
  }

  return (
    <>
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ToolUploader
          toolId="pdf-to-jpg"
          title={tool.h1}
          description="Converteer elke PDF-pagina naar een scherpe JPG-afbeelding. Alle afbeeldingen gebundeld in een ZIP."
          accept="application/pdf"
          actionLabel="Converteren naar JPG"
          outputLabel="Download Afbeeldingen (ZIP)"
        />
        <ToolPageContent content={tool} />
      </div>
    </>
  )
}
