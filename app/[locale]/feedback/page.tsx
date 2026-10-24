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
    title: t('feedbackTitle'),
    description: t('feedbackDescription'),
    alternates: {
      canonical: '/feedback',
    },
  };
}

const FEEDBACK_ITEM_KEYS = [
  'stayHumble',
  'dontTakePersonal',
  'notEveryone',
  'turnOffReplies',
  'noHumor',
  'noCorpospeak',
  'admitUnknown',
  'feelHeard',
  'kindEmpathetic',
  'dontReject',
  'writePublic',
  'explainDontDefend',
  'takeResponsibility',
  'narrative',
  'bragging',
  'technicalTopics',
  'apologize',
] as const;

export default async function FeedbackPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations('Feedback');
  const tCommon = await getTranslations('Common');

  return (
    <main className="lr-page">
      <div className="mb-10">
        <h1 className="lr-h1">{t('title')}</h1>
        <Link
          href="/"
          className="lr-subtitle no-underline text-nav hover:text-nav-hover transition-colors"
        >
          {tCommon('byAuthor')}
        </Link>
      </div>

      <p className="text-[17px] leading-[25.5px] mb-6">{t('intro')}</p>

      <ol className="lr-ol">
        {FEEDBACK_ITEM_KEYS.map((key) => (
          <li key={key} className="lr-oli">
            {t(`items.${key}`)}
          </li>
        ))}
      </ol>

      <p className="text-[17px] leading-[25.5px] mt-8">{t('closing')}</p>

      <hr className="my-10 border-muted/30" />

      <p className="text-[17px] leading-[25.5px] italic">{t('inspiredBy')}</p>
    </main>
  );
}

