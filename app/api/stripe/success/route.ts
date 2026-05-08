import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createAccessToken } from '@/lib/accessToken'
import { serialize } from 'cookie'

export const runtime = 'nodejs'

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id')
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? `https://${req.headers.get('host')}`

  if (!sessionId) {
    return NextResponse.redirect(`${baseUrl}/?error=missing_session`)
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid' && session.status !== 'complete') {
      return NextResponse.redirect(`${baseUrl}/?error=payment_failed`)
    }

    const isSubscription = session.mode === 'subscription'
    const token = await createAccessToken(
      isSubscription
        ? { type: 'subscription' }
        : { type: 'credits', credits: 5 }
    )

    const cookieOptions = serialize('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: isSubscription ? 32 * 24 * 60 * 60 : 365 * 24 * 60 * 60,
      path: '/',
    })

    const res = NextResponse.redirect(`${baseUrl}/?success=1`)
    res.headers.set('Set-Cookie', cookieOptions)
    return res
  } catch (err: unknown) {
    console.error('stripe success error:', err)
    return NextResponse.redirect(`${baseUrl}/?error=server_error`)
  }
}
