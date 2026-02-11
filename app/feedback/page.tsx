import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
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

export default async function FeedbackPage() {
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
