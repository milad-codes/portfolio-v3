import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { STIX_Two_Text } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

const stix = STIX_Two_Text({ subsets: ['latin'], weight: ['400', '500'] });
const title = `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`;
const description = SITE_CONFIG.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title,
  description,
  applicationName: 'miladcodes',
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  alternates: { canonical: '/' },
  openGraph: {
    title, description, url: '/', siteName: SITE_CONFIG.name, type: 'website',
    locale: 'en_US', alternateLocale: ['de_DE'],
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: SITE_CONFIG.title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/twitter-image'] },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  manifest: '/manifest.webmanifest',
};
export const viewport: Viewport = { themeColor: '#1a1a1a' };

const personJsonLd = {
  '@context': 'https://schema.org', '@type': 'Person',
  name: SITE_CONFIG.name, url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}/profile.jpg`, jobTitle: 'Full Stack AI Engineer',
  worksFor: { '@type': 'Organization', name: 'Aampere', url: 'https://www.aampere.com' },
  address: { '@type': 'PostalAddress', addressLocality: 'Munich', addressCountry: 'DE' },
  sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.linkedin],
  email: 'contact@miladcodes.com',
  knowsAbout: ['Backend engineering', 'TypeScript', 'Python', 'NestJS', 'Next.js', 'React', 'PostgreSQL', 'REST APIs', 'LLM applications', 'RAG', 'AI agents'],
};
export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${stix.className} antialiased`} suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
