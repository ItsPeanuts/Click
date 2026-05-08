import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

export const runtime = 'nodejs'

// Stripe sends raw body — must not parse
export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err: unknown) {
    console.error('Webhook signature failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Handle relevant events
  switch (event.type) {
    case 'checkout.session.completed':
      // Access token is set via redirect in /api/stripe/success
      // This webhook is for logging / fulfillment backup
      console.log('Payment completed:', (event.data.object as Stripe.CheckoutSession).id)
      break
    case 'customer.subscription.deleted':
      // Subscription cancelled — token will expire naturally via JWT expiry
      console.log('Subscription cancelled:', (event.data.object as Stripe.Subscription).id)
      break
    default:
      break
  }

  return NextResponse.json({ received: true })
}
