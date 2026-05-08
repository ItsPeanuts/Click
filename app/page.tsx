import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'VorzaPDF — Bewerk & converteer PDFs met AI',
  description:
    'PDF samenvoegen, comprimeren, converteren en bewerken met AI. Snel, veilig en gratis. De beste PDF-tools voor Nederland.',
  alternates: {
    canonical: 'https://vorzapdf.com',
    languages: { 'nl-NL': 'https://vorzapdf.com', 'en-US': 'https://vorzapdf.com/en' },
  },
}

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VorzaPDF',
    url: 'https://vorzapdf.com',
    logo: 'https://vorzapdf.com/og-image.png',
    sameAs: ['https://vorzaiq.com'],
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VorzaPDF',
    url: 'https://vorzapdf.com',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Gratis: 1 conversie per dag. Betaalde opties vanaf €1,20.',
    },
    description:
      'PDF samenvoegen, comprimeren, converteren en bewerken met AI. Snel, veilig en gratis.',
  }

  return (
    <>
      <JsonLd data={[organizationSchema, softwareSchema]} />
      <HomePageContent />
    </>
  )
}
