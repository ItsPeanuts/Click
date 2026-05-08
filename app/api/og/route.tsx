import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { toolsContent } from '@/lib/tools-content'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const toolSlug = req.nextUrl.searchParams.get('tool')
  const tool = toolSlug ? toolsContent[toolSlug] : null

  const title = tool ? tool.nameNL : 'VorzaPDF'
  const subtitle = tool
    ? 'Gratis Online PDF Tool'
    : 'Bewerk & converteer PDFs met AI'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '60px 80px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.9)',
              letterSpacing: '2px',
              marginBottom: '16px',
            }}
          >
            VORZAPDF
          </div>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
            }}
          >
            {subtitle}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          vorzapdf.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
