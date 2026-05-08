import type { Metadata } from 'next'
import ToolUploaderWithOptions from '@/components/ToolUploaderWithOptions'
import ToolPageContent from '@/components/ToolPageContent'
import JsonLd from '@/components/JsonLd'
import { toolsContent } from '@/lib/tools-content'

const tool = toolsContent['rotate-pdf']

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: {
    canonical: 'https://vorzapdf.com/tools/rotate-pdf',
    languages: { 'nl-NL': 'https://vorzapdf.com/tools/rotate-pdf', 'en-US': 'https://vorzapdf.com/en/tools/rotate-pdf' },
  },
  openGraph: {
    title: tool.title,
    description: tool.description,
    url: 'https://vorzapdf.com/tools/rotate-pdf',
    images: [{ url: '/api/og?tool=rotate-pdf', width: 1200, height: 630 }],
  },
}

export default function RotatePDFPage() {
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
      { '@type': 'ListItem', position: 2, name: tool.nameNL, item: 'https://vorzapdf.com/tools/rotate-pdf' },
    ],
  }

  return (
    <>
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ToolUploaderWithOptions
          toolId="rotate-pdf"
          title={tool.h1}
          description="Draai alle pagina's in je PDF. Kies hieronder de hoek."
          accept="application/pdf"
          actionLabel="PDF Draaien"
          outputLabel="Download Gedraaide PDF"
          extraFields={[
            {
              name: 'rotation',
              label: 'Draaihoek',
              type: 'select',
              defaultValue: '90',
              options: [
                { value: '90', label: '90° met de klok mee' },
                { value: '180', label: '180°' },
                { value: '270', label: '270° (90° tegen de klok in)' },
              ],
            },
          ]}
        />
        <ToolPageContent content={tool} />
      </div>
    </>
  )
}
