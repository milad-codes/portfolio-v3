import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  return { title: t('writingTitle') };
}

const POST_KEYS = [
  'agents',
  'pixo',
  'compression',
  'beliefs',
  'ai',
  'dx',
  'developerMarketing',
  'devrel',
  'devtools',
  'docs',
  'moderation',
  'feedback',
  'reflections',
  'vercel',
  'personalSoftware',
  'stack',
  'css',
  'productEngineers',
  'rust',
  'heroku',
] as const;

const POST_HREFS: Record<(typeof POST_KEYS)[number], string> = {
  agents: '/agents',
  pixo: '/pixo',
  compression: '/compression',
  beliefs: '/beliefs',
  ai: '/ai',
  dx: '/dx',
  developerMarketing: '/developer-marketing',
  devrel: '/devrel',
  devtools: '/devtools',
  docs: '/docs',
  moderation: '/moderation',
  feedback: '/feedback',
  reflections: '/reflections',
  vercel: '/vercel',
  personalSoftware: '/personal-software',
  stack: '/stack',
  css: '/css',
  productEngineers: '/product-engineers',
  rust: '/rust',
  heroku: '/heroku',
};

export default async function WritingPage() {
  const t = await getTranslations('Writing');
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

      <ul className="lr-list">
        {POST_KEYS.map((key) => (
          <li key={key} className="lr-li">
            <Link href={POST_HREFS[key]}>{t(`posts.${key}`)}</Link>
          </li>
        ))}
      </ul>

      <hr className="mt-16 border-muted/30" />
    </main>
  );
}
