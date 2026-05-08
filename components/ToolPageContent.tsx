import Link from 'next/link'
import type { ToolContent } from '@/lib/tools-content'

interface ToolPageContentProps {
  content: ToolContent
}

export default function ToolPageContent({ content }: ToolPageContentProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Hoe werkt {content.nameNL}?
        </h2>
        <div className="space-y-6">
          {content.steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to use */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Wanneer gebruik je {content.nameNL}?
        </h2>
        <div className="text-gray-600 space-y-4">
          {content.whenToUse.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Veelgestelde vragen
        </h2>
        <div className="space-y-4">
          {content.faq.map((item, i) => (
            <details key={i} className="group border border-gray-200 rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-900 hover:bg-gray-50 rounded-lg">
                {item.question}
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="px-5 pb-4 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related tools */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Gerelateerde tools
        </h2>
        <div className="flex flex-wrap gap-3">
          {content.relatedTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-teal-50 hover:text-teal-700 rounded-lg text-sm font-medium text-gray-700 transition-colors"
            >
              {tool.name}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
