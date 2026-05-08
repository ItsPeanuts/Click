import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | VorzaPDF',
  description: 'Terms of service for VorzaPDF.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Service Description</h2>
      <p className="text-gray-600">VorzaPDF provides online document conversion tools including PDF to Word conversion, PDF compression, PDF merging, image to PDF conversion, and document to PDF conversion.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Free Tier</h2>
      <p className="text-gray-600">Free users may perform 1 file conversion per day. This limit is enforced per IP address and may be changed at our discretion.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Paid Plans</h2>
      <p className="text-gray-600">Monthly subscriptions (€7.99/month) provide unlimited conversions and renew automatically until cancelled. Credit packs (€4.99 for 5 credits) are non-refundable one-time purchases. Cancel subscriptions at any time via your Stripe billing portal.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Acceptable Use</h2>
      <p className="text-gray-600">You may not upload files containing illegal content, malware, or material that infringes third-party rights. You are responsible for ensuring you have the right to convert and process any files you upload.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Disclaimer of Warranties</h2>
      <p className="text-gray-600">The service is provided "as is" without warranties of any kind. We do not guarantee 100% conversion accuracy. Always keep originals of important documents.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Limitation of Liability</h2>
      <p className="text-gray-600">VorzaPDF is not liable for any damages arising from use of the service, including but not limited to loss of data or business interruption.</p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Changes</h2>
      <p className="text-gray-600">We may update these terms at any time. Continued use of the service constitutes acceptance of the updated terms.</p>
    </div>
  )
}
