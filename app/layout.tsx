import type { Metadata, Viewport } from 'next';
import { STIX_Two_Text } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

const stix = STIX_Two_Text({ subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Milad Akbari',
  description: 'Fullstack developer @Aampere',
};

export const viewport: Viewport = { themeColor: '#1a1a1a' };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${stix.className} antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
