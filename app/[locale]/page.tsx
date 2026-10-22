import Image from 'next/image';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return { title: t('homeTitle'), description: t('homeDescription'), alternates: { canonical: '/' } };
}

const projects = [
  { key: 'typescript', repo: 'express-typescript-api-boilerplate', stack: 'TypeScript · Express · MongoDB · JWT' },
  { key: 'graphql', repo: 'graphql-apollo-api', stack: 'JavaScript · GraphQL · Apollo Server · MongoDB' },
  { key: 'prisma', repo: 'prisma-orm-api', stack: 'JavaScript · Express · Prisma · SQLite' },
] as const;

export default async function Home({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('Home');

  return (
    <main className="lr-page">
      <header className="flex items-start gap-6 mb-8">
        <div className="min-w-0 flex-1">
          <h1 className="lr-h1">Milad Akbari</h1>
          <p className="lr-subtitle">{t('subtitle')}</p>
          <p className="mt-2 text-sm text-muted">{t('location')}</p>
        </div>
        <Image src="/profile.jpg" alt="Milad Akbari" width={88} height={88} priority className="rounded-full object-cover w-20 h-20 shrink-0" />
      </header>
      <nav aria-label={t('navigation')} className="flex flex-wrap gap-x-5 gap-y-2 text-sm mb-8">
        <a href="#projects">{t('projectsTitle')}</a>
        <Link href="/bio">{t('about')}</Link>
        <a href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={SITE_CONFIG.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:contact@miladcodes.com">{t('contact')}</a>
      </nav>
      <div className="space-y-5 text-[17px] leading-[1.6]">
        <p>{t('introPrefix')} <a href="https://www.aampere.com" target="_blank" rel="noopener noreferrer">Aampere</a>{t('introSuffix')}</p>
        <p>{t('backend')}</p>
        <p>{t('ai')}</p>
      </div>
      <section id="projects" className="mt-12 scroll-mt-8" aria-labelledby="projects-title">
        <h2 id="projects-title" className="lr-h2">{t('projectsTitle')}</h2>
        <p className="mt-3 mb-6 text-muted leading-7">{t('projectsIntro')}</p>
        <div className="space-y-7">
          {projects.map(({ key, repo, stack }) => (
            <article key={key} className="border-t border-muted/25 pt-5">
              <h3 className="font-medium text-heading">{t(`projects.${key}.title`)}</h3>
              <p className="mt-2 leading-7">{t(`projects.${key}.description`)}</p>
              <p className="mt-2 text-sm text-muted">{stack}</p>
              <details className="mt-3">
                <summary className="cursor-pointer text-sm">{t('implementation')}</summary>
                <p className="mt-2 leading-7">{t(`projects.${key}.detail`)}</p>
              </details>
              <a href={`https://github.com/milad-codes/${repo}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm">{t('viewSource')} <span className="sr-only">{t(`projects.${key}.title`)}</span></a>
            </article>
          ))}
        </div>
      </section>
      <footer className="mt-12 border-t border-muted/25 pt-6 text-sm leading-7">
        <p>{t('contactIntro')}</p>
        <a href="mailto:contact@miladcodes.com">contact@miladcodes.com</a>
        <p className="text-muted mt-2">Milad Akbari · {t('location')}</p>
      </footer>
    </main>
  );
}
