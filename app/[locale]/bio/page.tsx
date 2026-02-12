import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('bioTitle'),
    description: t('bioDescription'),
    alternates: {
      canonical: '/bio',
    },
  };
}

export default async function BioPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations('Bio');

  return (
    <main className="max-w-[650px] mx-auto px-6 py-16">
      <h1 className="lr-h1 mb-6">{t('title')}</h1>

      <p className="mb-6 leading-7">{t('paragraph1')}</p>

      <p className="mb-6 leading-7">
        {t('paragraph2Prefix')}{' '}
        <Link href="#">October Sky</Link> ({t('paragraph2Suffix')})
      </p>

      <details className="mb-6">
        <summary className="cursor-pointer text-muted hover:text-text">
          {t('spoilersTitle')}
        </summary>
        <p className="mt-3 leading-7 pl-4 border-l-2 border-muted/30">
          {t('spoilersContent')}
        </p>
      </details>

      <p className="mb-10 leading-7">{t('paragraph3')}</p>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="aspect-4/3 bg-white/5 rounded flex items-center justify-center text-muted text-sm">
          {t('childhoodPhoto')}
        </div>
        <div className="aspect-4/3 bg-white/5 rounded flex items-center justify-center text-muted text-sm">
          {t('rocketDiagram')}
        </div>
      </div>

      <p className="mb-6 leading-7">{t('paragraph4')}</p>

      <p className="leading-7">{t('paragraph5')}</p>
    </main>
  );
}

