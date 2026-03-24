import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DocuTools AI - Free PDF Tools Online',
  description: 'Convert PDF to Word, compress PDFs, merge files, and more. Free online document tools — no signup required.',
}

const tools = [
  {
    href: '/tools/pdf-to-word',
    icon: '📄',
    title: 'PDF to Word',
    description: 'Convert any PDF to an editable Word document instantly.',
    badge: 'Most Popular',
  },
  {
    href: '/tools/compress-pdf',
    icon: '🗜️',
    title: 'Compress PDF',
    description: 'Reduce PDF file size without losing quality.',
    badge: null,
  },
  {
    href: '/tools/merge-pdf',
    icon: '🔗',
    title: 'Merge PDF',
    description: 'Combine multiple PDFs into one file in seconds.',
    badge: null,
  },
  {
    href: '/tools/jpg-to-pdf',
    icon: '🖼️',
    title: 'JPG to PDF',
    description: 'Turn images into a professional PDF file.',
    badge: null,
  },
  {
    href: '/tools/doc-to-pdf',
    icon: '📑',
    title: 'Document to PDF',
    description: 'Convert invoices and documents to PDF format.',
    badge: null,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            PDF Tools That Just Work
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Convert, compress, merge, and transform your documents in seconds. Free to start.
          </p>
          <Link
            href="/tools/pdf-to-word"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors"
          >
            Start for Free
          </Link>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">All Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
            >
              {tool.badge && (
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                  {tool.badge}
                </span>
              )}
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600">
                {tool.title}
              </h3>
              <p className="text-gray-500 text-sm">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-16 px-4" id="pricing">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Simple Pricing</h2>
          <p className="text-gray-500 mb-10">1 free conversion per day. Upgrade for unlimited access.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-1">Credits</h3>
              <div className="text-4xl font-bold text-blue-600 my-3">€4.99</div>
              <p className="text-gray-500 mb-4">5 conversions, no expiry</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
                <li>✓ 5 file conversions</li>
                <li>✓ All tools included</li>
                <li>✓ Files deleted after 24h</li>
                <li>✓ No subscription</li>
              </ul>
            </div>
            <div className="bg-blue-600 text-white rounded-2xl p-8 relative">
              <span className="absolute top-4 right-4 bg-white text-blue-700 text-xs font-bold px-2 py-1 rounded-full">Best Value</span>
              <h3 className="text-xl font-bold mb-1">Monthly</h3>
              <div className="text-4xl font-bold my-3">€7.99</div>
              <p className="text-blue-100 mb-4">per month, unlimited</p>
              <ul className="text-sm text-blue-100 space-y-2 mb-6 text-left">
                <li>✓ Unlimited conversions</li>
                <li>✓ All tools included</li>
                <li>✓ Priority processing</li>
                <li>✓ Cancel anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="grid grid-cols-3 gap-8 text-gray-600">
          <div>
            <div className="text-3xl font-bold text-gray-900">100%</div>
            <div className="text-sm">Secure Upload</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">24h</div>
            <div className="text-sm">Auto File Delete</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">Free</div>
            <div className="text-sm">To Start</div>
          </div>
        </div>
      </section>
    </div>
  )
}
