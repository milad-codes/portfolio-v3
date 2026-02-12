import { GoogleAnalytics } from '@next/third-parties/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { routing } from '@/i18n/routing';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering for next-intl APIs.
  setRequestLocale(locale);

  const messages = await getMessages();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <LocaleSwitcher />
        {children}
      </NextIntlClientProvider>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </>
  );
}

