import type { Metadata } from 'next'
import ToolUploaderWithOptions from '@/components/ToolUploaderWithOptions'
import ToolPageContent from '@/components/ToolPageContent'
import JsonLd from '@/components/JsonLd'
import { toolsContent } from '@/lib/tools-content'

const tool = toolsContent['remove-pages']

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: {
    canonical: 'https://vorzapdf.com/tools/remove-pages',
    languages: { 'nl-NL': 'https://vorzapdf.com/tools/remove-pages', 'en-US': 'https://vorzapdf.com/en/tools/remove-pages' },
  },
  openGraph: {
    title: tool.title,
    description: tool.description,
    url: 'https://vorzapdf.com/tools/remove-pages',
    images: [{ url: '/api/og?tool=remove-pages', width: 1200, height: 630 }],
  },
}

export default function RemovePagesPage() {
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
      { '@type': 'ListItem', position: 2, name: tool.nameNL, item: 'https://vorzapdf.com/tools/remove-pages' },
    ],
  }

  return (
    <>
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ToolUploaderWithOptions
          toolId="remove-pages"
          title={tool.h1}
          description="Verwijder specifieke pagina's uit je PDF. Voer de paginanummers in, gescheiden door komma's."
          accept="application/pdf"
          actionLabel="Pagina's Verwijderen"
          outputLabel="Download PDF"
          extraFields={[
            {
              name: 'pages',
              label: "Te verwijderen pagina's (kommagescheiden)",
              type: 'text',
              placeholder: 'bijv. 1, 3, 5-7',
              defaultValue: '',
              required: true,
            },
          ]}
        />
        <ToolPageContent content={tool} />
      </div>
    </>
  )
}
