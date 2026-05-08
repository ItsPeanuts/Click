import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit, getClientIp } from './rateLimit'
import { verifyAccessToken } from './accessToken'
import { cleanupOldFiles } from './cleanup'

/**
 * Returns null if request is allowed, or a 402 Response if paywalled.
 * Checks:
 *   1. Valid paid access token (cookie `access_token`)
 *   2. In-memory rate limit (1/day per IP)
 */
export async function guardProcessing(req: NextRequest): Promise<NextResponse | null> {
  // Fire and forget cleanup
  cleanupOldFiles().catch(() => {})

  // Check for valid paid token
  const tokenCookie = req.cookies.get('access_token')?.value
  if (tokenCookie) {
    const payload = await verifyAccessToken(tokenCookie)
    if (payload) {
      if (payload.type === 'subscription') return null
      if (payload.type === 'credits' && (payload.credits ?? 0) > 0) {
        // Credits are decremented via webhook — just validate existence
        return null
      }
    }
  }

  // Fall back to free tier rate limit
  const ip = getClientIp(req)
  const { allowed } = checkRateLimit(ip)

  if (!allowed) {
    return NextResponse.json({ error: 'Free limit reached. Please upgrade.' }, { status: 402 })
  }

  return null
}
