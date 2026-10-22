import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return { title: t('bioTitle'), description: t('bioDescription'), alternates: { canonical: '/bio' } };
}
export default async function BioPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('Bio');
  return (
    <main className="lr-page">
      <Link href="/" className="text-sm">{t('back')}</Link>
      <h1 className="lr-h1 mt-6 mb-6">{t('title')}</h1>
      <div className="space-y-6 text-[17px] leading-7">
        <p>{t('intro')}</p>
        <p>{t('aampere')}</p>
        <p>{t('maarif')}</p>
        <p>{t('education')}</p>
        <p>{t('approach')}</p>
        <p><a href="https://www.linkedin.com/in/miladcodes">{t('experience')}</a></p>
      </div>
    </main>
  );
}
