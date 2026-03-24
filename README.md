# DocuTools AI

A production-ready freemium PDF & document tools SaaS. Converts PDFs to Word, compresses PDFs, merges PDFs, converts images to PDFs, and converts documents to PDFs.

## Business Model

- **Free**: 1 conversion/day per IP
- **Credits**: €4.99 for 5 conversions (one-time)
- **Subscription**: €7.99/month unlimited

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- pdf-lib (PDF manipulation)
- pdf-parse + docx (PDF to Word)
- Stripe Checkout
- JWT access tokens (jose)
- Deployed on Render or Vercel

---

## Local Development

### 1. Clone & Install

```bash
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_SUBSCRIPTION=price_...
STRIPE_PRICE_CREDITS=price_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
TOKEN_SECRET=any-32-character-random-string-here
```

### 3. Create Stripe Products

In your Stripe dashboard:

1. Create **Product: DocuTools Monthly** → Price: €7.99 recurring monthly → copy Price ID to `STRIPE_PRICE_SUBSCRIPTION`
2. Create **Product: DocuTools Credits Pack** → Price: €4.99 one-time → copy Price ID to `STRIPE_PRICE_CREDITS`

### 4. Run Dev Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 5. Test Stripe Webhooks Locally

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## Deploy to Render

1. Push to GitHub
2. Create new **Web Service** on Render, connect repo
3. Set Build Command: `npm install && npm run build`
4. Set Start Command: `npm start`
5. Add all environment variables from `.env.example`
6. Set Stripe webhook endpoint to: `https://yourdomain.onrender.com/api/stripe/webhook`

## Deploy to Vercel

1. `npx vercel --prod`
2. Add env vars in Vercel dashboard
3. Set Stripe webhook endpoint to your Vercel URL

> **Note for Vercel**: The in-memory rate limiter resets per function instance. For production on Vercel, replace `lib/rateLimit.ts` with Upstash Redis for consistent rate limiting across instances.

---

## Project Structure

```
app/
  page.tsx                    # Homepage
  layout.tsx                  # Root layout + nav
  tools/
    pdf-to-word/page.tsx
    compress-pdf/page.tsx
    merge-pdf/page.tsx
    jpg-to-pdf/page.tsx
    doc-to-pdf/page.tsx
  api/
    process/
      pdf-to-word/route.ts    # PDF → Word conversion
      compress-pdf/route.ts   # PDF compression
      merge-pdf/route.ts      # PDF merging
      jpg-to-pdf/route.ts     # Image → PDF
      doc-to-pdf/route.ts     # Text/HTML → PDF
    stripe/
      checkout/route.ts       # Create Stripe session
      success/route.ts        # Post-payment redirect, sets cookie
      webhook/route.ts        # Stripe events
  privacy/page.tsx
  terms/page.tsx
components/
  Navigation.tsx
  ToolUploader.tsx            # Shared upload UI
  PaywallModal.tsx            # Upgrade prompt
lib/
  rateLimit.ts                # In-memory IP rate limiter
  accessToken.ts              # JWT sign/verify
  processGuard.ts             # Auth middleware for API routes
  stripe.ts                   # Stripe client
  cleanup.ts                  # Temp file cleanup
```

---

## Paywall Logic

1. User uploads file → `POST /api/process/[tool]`
2. `processGuard.ts` checks:
   - Valid `access_token` cookie? → Allow
   - IP under free limit (1/day)? → Allow
   - Otherwise → return HTTP 402
3. Frontend catches 402 → shows `PaywallModal`
4. User clicks plan → `POST /api/stripe/checkout` → redirect to Stripe
5. After payment → `GET /api/stripe/success` → sets signed JWT cookie → redirect home

## Security

- Files processed in memory, never written to disk permanently
- `access_token` cookie is HTTP-only, signed with `TOKEN_SECRET`
- No user accounts, no email collection
- Stripe handles all payment data
