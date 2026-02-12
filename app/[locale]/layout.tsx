import type { Metadata, Viewport } from 'next';
import { STIX_Two_Text } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { SITE_CONFIG } from '@/lib/constants';
import { getSiteUrl } from '@/lib/site-url';
import { routing } from '@/i18n/routing';

const stix = STIX_Two_Text({ subsets: ['latin'], weight: ['400', '500'] });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
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
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [`${SITE_CONFIG.url}/opengraph-image`],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/twitter-image`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = { themeColor: '#1a1a1a' };

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering for next-intl APIs.
  setRequestLocale(locale);

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
      <body className={`${stix.className} antialiased`} suppressHydrationWarning>
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

