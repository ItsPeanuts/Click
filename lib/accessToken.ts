import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(
  process.env.TOKEN_SECRET ?? 'fallback-secret-change-in-production-32ch'
)

export type TokenPayload = {
  type: 'subscription' | 'credits'
  credits?: number
  exp?: number
}

export async function createAccessToken(payload: TokenPayload): Promise<string> {
  const expiry = payload.type === 'subscription' ? '31d' : '365d'
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(expiry)
    .sign(secret)
}

export async function verifyAccessToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload as TokenPayload
  } catch {
    return null
  }
}
