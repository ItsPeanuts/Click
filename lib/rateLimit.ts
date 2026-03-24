/**
 * In-memory rate limiter keyed by IP.
 * Resets daily. Works for single-instance deployments (Render).
 * For multi-instance (Vercel), swap for Upstash Redis.
 */

interface UsageRecord {
  count: number
  resetAt: number
}

const store = new Map<string, UsageRecord>()
const FREE_LIMIT = 1
const WINDOW_MS = 24 * 60 * 60 * 1000 // 24 hours

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = store.get(ip)

  if (!record || now > record.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, remaining: FREE_LIMIT - 1 }
  }

  if (record.count >= FREE_LIMIT) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: FREE_LIMIT - record.count }
}

export function getClientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}

// Cleanup old entries every hour to prevent memory leak
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of store.entries()) {
    if (now > record.resetAt) store.delete(key)
  }
}, 60 * 60 * 1000)
