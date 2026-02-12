import type { Metadata, Viewport } from 'next';
import { STIX_Two_Text } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { SITE_CONFIG } from '@/lib/constants';
import { getMetadataBase, getSiteUrl } from '@/lib/site-url';

const stix = STIX_Two_Text({ subsets: ['latin'], weight: ['400', '500'] });

function toOpenGraphLocale(locale: string) {
  switch (locale) {
    case 'de':
      return 'de_DE';
    case 'en':
    default:
      return 'en_US';
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations('Metadata');
  const description = t('homeDescription');

  return {
    metadataBase: getMetadataBase(),
    title: {
      default: t('homeTitle'),
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    applicationName: SITE_CONFIG.name,
    authors: [{ name: SITE_CONFIG.name, url: '/' }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    referrer: 'origin-when-cross-origin',
    keywords: [
      SITE_CONFIG.name,
      'Full-stack developer',
      'Software engineer',
      'TypeScript',
      'Next.js',
      'React',
      'AI',
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'website',
      url: '/',
      title: SITE_CONFIG.name,
      description,
      siteName: SITE_CONFIG.name,
      locale: toOpenGraphLocale(locale),
      images: ['/opengraph-image'],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_CONFIG.name,
      description,
      images: ['/twitter-image'],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
    manifest: '/manifest.webmanifest',
  };
}

export const viewport: Viewport = { themeColor: '#1a1a1a' };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const siteUrl = getSiteUrl();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: siteUrl,
    jobTitle: SITE_CONFIG.title,
    sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.linkedin],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: siteUrl,
    inLanguage: locale,
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${stix.className} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteJsonLd, personJsonLd]),
          }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleSwitcher />
          {children}
        </NextIntlClientProvider>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
