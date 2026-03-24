import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | DocuTools AI',
  description: 'Privacy policy for DocuTools AI. We respect your data.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-gray">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Files You Upload</h2>
      <p className="text-gray-600">Files uploaded to DocuTools AI are processed entirely on our servers and are automatically and permanently deleted within 24 hours. We do not read, store, share, or sell your file contents. Files are processed in temporary memory and never stored permanently.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Data We Collect</h2>
      <p className="text-gray-600">We collect minimal data: IP addresses for rate-limiting abuse prevention (not logged permanently), and payment details processed securely by Stripe. We do not create user accounts or store personal information beyond what Stripe requires for billing.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Cookies</h2>
      <p className="text-gray-600">We use a single HTTP-only cookie to verify paid access. This cookie contains no personal information — only a cryptographically signed token indicating your subscription or credit status. No tracking or analytics cookies are used.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Payments</h2>
      <p className="text-gray-600">All payments are processed by Stripe, Inc. We never see or store your card details. Stripe's privacy policy applies to payment processing.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Third Parties</h2>
      <p className="text-gray-600">We do not sell, share, or transfer your data to third parties. We do not use advertising networks or tracking pixels.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Contact</h2>
      <p className="text-gray-600">Questions about this policy? Contact us through our support email listed on the homepage.</p>
    </div>
  )
}
