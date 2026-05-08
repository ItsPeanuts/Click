import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DocuTools AI - Free PDF & Document Tools',
  description: 'Convert, compress, and merge PDFs online for free. Fast, easy, and secure document tools.',
  keywords: 'PDF converter, compress PDF, merge PDF, JPG to PDF, PDF to Word',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-50 border-t mt-20 py-8">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} DocuTools AI. Files deleted after 24 hours.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-gray-800">Privacy</a>
              <a href="/terms" className="hover:text-gray-800">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
