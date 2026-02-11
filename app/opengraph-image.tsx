import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/lib/constants';
import { getSiteUrl } from '@/lib/site-url';

export const alt = `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  const host = new URL(getSiteUrl()).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background:
            'radial-gradient(1200px 630px at 20% 20%, #2a2a2a 0%, #0b0b0b 55%, #000 100%)',
          color: '#fff',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1 }}>
            {SITE_CONFIG.name}
          </div>
          <div style={{ fontSize: 36, color: '#c7c7c7' }}>
            {SITE_CONFIG.title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 24,
            color: '#a7a7a7',
          }}
        >
          <div>Portfolio</div>
          <div>{host}</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
