import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { STIX_Two_Text } from 'next/font/google';
import './globals.css';

const stix = STIX_Two_Text({ subsets: ['latin'], weight: ['400', '500'] });

const SITE_URL = 'https://miladcodes.com';
const TITLE = 'Milad Akbari | Full Stack AI Engineer in Munich';
const DESCRIPTION =
  'Milad Akbari is a Full Stack AI Engineer in Munich, Germany, building AI-powered web apps with Next.js, NestJS, LangChain, LangGraph, TypeScript and Python.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'miladcodes',
  keywords: [
    'Milad Akbari',
    'miladcodes',
    'Full Stack AI Engineer',
    'Full Stack Developer Munich',
    'Full Stack Developer Germany',
    'Full Stack Engineer Europe',
    'Remote full stack developer',
    'AI-powered web app developer',
    'LLM integration developer',
    'NestJS Next.js TypeScript developer',
    'Next.js',
    'NestJS',
    'TypeScript',
    'Python',
    'LangChain',
    'LangGraph',
    'AWS',
    'Serverless',
    'GraphQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'Microservices',
    'TDD',
  ],
  authors: [{ name: 'Milad Akbari', url: SITE_URL }],
  creator: 'Milad Akbari',
  publisher: 'Milad Akbari',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    siteName: 'Milad Akbari',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['de_DE'],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Milad Akbari — Full Stack AI Engineer · Munich',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = { themeColor: '#1a1a1a' };

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Milad Akbari',
  url: SITE_URL,
  jobTitle: 'Full Stack AI Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Aampere',
    url: 'https://www.aampere.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Munich',
    addressCountry: 'DE',
  },
  sameAs: [
    'https://github.com/milad-codes',
    'https://www.linkedin.com/in/miladcodes',
    'https://www.instagram.com/miladcodes',
  ],
  email: 'contact@miladcodes.com',
  knowsAbout: [
    'Full-stack development',
    'AI engineering',
    'LLM integrations',
    'Next.js',
    'NestJS',
    'TypeScript',
    'Python',
    'LangChain',
    'LangGraph',
    'AWS',
    'Serverless',
    'GraphQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'Tailwind CSS',
    'Microservices',
    'TDD',
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${stix.className} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
