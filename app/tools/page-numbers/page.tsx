import type { Metadata } from 'next'
import ToolUploaderWithOptions from '@/components/ToolUploaderWithOptions'
import ToolPageContent from '@/components/ToolPageContent'
import JsonLd from '@/components/JsonLd'
import { toolsContent } from '@/lib/tools-content'

const tool = toolsContent['page-numbers']

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: {
    canonical: 'https://vorzapdf.com/tools/page-numbers',
    languages: { 'nl-NL': 'https://vorzapdf.com/tools/page-numbers', 'en-US': 'https://vorzapdf.com/en/tools/page-numbers' },
  },
  openGraph: {
    title: tool.title,
    description: tool.description,
    url: 'https://vorzapdf.com/tools/page-numbers',
    images: [{ url: '/api/og?tool=page-numbers', width: 1200, height: 630 }],
  },
}

export default function PageNumbersPage() {
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
      { '@type': 'ListItem', position: 2, name: tool.nameNL, item: 'https://vorzapdf.com/tools/page-numbers' },
    ],
  }

  return (
    <>
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ToolUploaderWithOptions
          toolId="page-numbers"
          title={tool.h1}
          description="Voeg automatisch paginanummers toe aan elke pagina van je PDF."
          accept="application/pdf"
          actionLabel="Paginanummers Toevoegen"
          outputLabel="Download PDF"
          extraFields={[
            {
              name: 'position',
              label: 'Positie',
              type: 'select',
              defaultValue: 'bottom',
              options: [
                { value: 'bottom', label: 'Onderaan gecentreerd' },
                { value: 'top', label: 'Bovenaan gecentreerd' },
              ],
            },
          ]}
        />
        <ToolPageContent content={tool} />
      </div>
    </>
  )
}
