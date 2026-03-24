'use client'

interface PaywallModalProps {
  onClose: () => void
}

export default function PaywallModal({ onClose }: PaywallModalProps) {
  const handleCheckout = async (type: 'subscription' | 'credits') => {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
        >
          ×
        </button>
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🔒</div>
          <h2 className="text-2xl font-bold">Free limit reached</h2>
          <p className="text-gray-500 mt-1">You've used your 1 free conversion today. Upgrade to continue.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleCheckout('credits')}
            className="border-2 border-gray-200 rounded-xl p-5 text-left hover:border-blue-400 transition-colors cursor-pointer"
          >
            <div className="text-2xl font-bold text-blue-600">€4.99</div>
            <div className="font-semibold mt-1">5 Credits</div>
            <div className="text-sm text-gray-500">No subscription</div>
          </button>
          <button
            onClick={() => handleCheckout('subscription')}
            className="bg-blue-600 text-white rounded-xl p-5 text-left hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <div className="text-2xl font-bold">€7.99</div>
            <div className="font-semibold mt-1">Monthly</div>
            <div className="text-sm text-blue-100">Unlimited, cancel anytime</div>
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          Secure payment via Stripe. Files deleted after 24h.
        </p>
      </div>
    </div>
  )
}
