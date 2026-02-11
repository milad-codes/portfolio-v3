import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/lib/constants';

export const alt = `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`;

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 72,
          background:
            'radial-gradient(1200px 600px at 15% 25%, #2a2a2a 0%, #0b0b0b 55%, #000 100%)',
          color: '#fff',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1 }}>
          {SITE_CONFIG.name}
        </div>
        <div style={{ fontSize: 34, color: '#c7c7c7', marginTop: 14 }}>
          {SITE_CONFIG.title}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

