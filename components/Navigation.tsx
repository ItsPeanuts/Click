'use client'

import Link from 'next/link'
import { useState } from 'react'

const tools = [
  { href: '/tools/pdf-to-word', label: 'PDF to Word' },
  { href: '/tools/compress-pdf', label: 'Compress PDF' },
  { href: '/tools/merge-pdf', label: 'Merge PDF' },
  { href: '/tools/jpg-to-pdf', label: 'JPG to PDF' },
  { href: '/tools/doc-to-pdf', label: 'Doc to PDF' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-blue-600">
          DocuTools AI
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="text-sm text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t.label}
            </Link>
          ))}
        </div>
        <Link href="/#pricing" className="hidden md:block btn-primary text-sm py-2 px-4">
          Pricing
        </Link>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-1">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-gray-700 py-2 hover:text-blue-600"
            >
              {t.label}
            </Link>
          ))}
          <Link href="/#pricing" onClick={() => setOpen(false)} className="block text-sm font-semibold text-blue-600 py-2">
            Pricing
          </Link>
        </div>
      )}
    </nav>
  )
}
