import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  return {
    title: t('beliefsTitle'),
    description: t('beliefsDescription'),
    alternates: {
      canonical: '/beliefs',
    },
  };
}

export default async function BeliefsPage() {
  const t = await getTranslations('Beliefs');
  const tCommon = await getTranslations('Common');

  return (
    <main className="lr-page lr-beliefs">
      <div className="mb-16">
        <h1 className="lr-h1">{t('title')}</h1>
        <Link
          href="/"
          className="lr-subtitle no-underline text-nav hover:text-nav-hover transition-colors"
        >
          {tCommon('byAuthor')}
        </Link>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="lr-h2 mb-4">{t('shippingFast')}</h2>
          <ul className="lr-list">
            <li className="lr-li">
              {t('speedSuperpower')}{' '}
              <a href="https://x.com/thejamescad/status/1929324444176044047">
                {t('superpower')}
              </a>
            </li>
            <li className="lr-li">{t('biasShipping')}</li>
            <li className="lr-li">{t('smallTeams')}</li>
            <li className="lr-li">
              <a href="https://x.com/leerob/status/1929727742821413331">
                {t('aiNative')}
              </a>{' '}
              {t('aiNativeRest')}
            </li>
            <li className="lr-li">{t('landingsLaunches')}</li>
            <li className="lr-li">{t('listenBuildShip')}</li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">{t('noCareerCeiling')}</h2>
          <ul className="lr-list">
            <li className="lr-li">{t('gritTalent')}</li>
            <li className="lr-li">
              {t('puttingInHoursLink')}{' '}
              <a href="https://www.youtube.com/watch?v=RDyg_41QF1w">
                {t('puttingInHours')}
              </a>
            </li>
            <li className="lr-li">
              {t('getBetter')}{' '}
              <a href="https://x.com/leerob/status/1841226051554308229">
                1%
              </a>{' '}
              {t('betterDaily')}
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">{t('truthSeeking')}</h2>
          <ul className="lr-list">
            <li className="lr-li">{t('truthPainful')}</li>
            <li className="lr-li">{t('changeMind')}</li>
            <li className="lr-li">{t('strongOpinions')}</li>
            <li className="lr-li">{t('exposureHours')}</li>
            <li className="lr-li">{t('anecdata')}</li>
            <li className="lr-li">{t('collectiveTruth')}</li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">{t('communicationJob')}</h2>
          <ul className="lr-list">
            <li className="lr-li">
              <a href="https://paulgraham.com/talk.html">{t('clearWriting')}</a>{' '}
              {t('clearThinking')}
            </li>
            <li className="lr-li">
              {t('everyoneWriter')}{' '}
              <a href="https://sorfis.com/wp-content/uploads/2021/09/Writing-Tips-Scott-Adams-DFW-Sowin-compilation-Zweig.pdf">
                {t('betterWriter')}
              </a>
            </li>
            <li className="lr-li">{t('leadersClarity')}</li>
            <li className="lr-li">{t('takingNotes')}</li>
            <li className="lr-li">{t('mismatchedExpectations')}</li>
            <li className="lr-li">
              {t('slackProTip')}{' '}
              <a href="https://newsletter.weskao.com/p/super-specific-feedback">
                {t('addressThem')}
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">{t('educationMarketing')}</h2>
          <ul className="lr-list">
            <li className="lr-li">{t('authenticFailures')}</li>
            <li className="lr-li">{t('neverWebinar')}</li>
            <li className="lr-li">{t('helpfulCompounds')}</li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">{t('leadershipOutcomes')}</h2>
          <ul className="lr-list">
            <li className="lr-li">{t('influenceTitles')}</li>
            <li className="lr-li">{t('leadersWork')}</li>
            <li className="lr-li">{t('writePlaybook')}</li>
            <li className="lr-li">{t('studyOthers')}</li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">{t('workHobby')}</h2>
          <ul className="lr-list">
            <li className="lr-li">{t('otherHobbies')}</li>
            <li className="lr-li">{t('passionBoundaries')}</li>
            <li className="lr-li">{t('curiosity')}</li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">{t('demosMemos')}</h2>
          <ul className="lr-list">
            <li className="lr-li">
              {t('v0Prototype')}{' '}
              <a href="https://v0.dev/">v0</a>
            </li>
            <li className="lr-li">
              {t('shipExcited')}{' '}
              <a href="https://x.com/rauchg/status/1932126547609334017">
                {t('excitedAbout')}
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">{t('hiringLeaders')}</h2>
          <ul className="lr-list">
            <li className="lr-li">
              {t('twoAnswers')}{' '}
              <a href="https://sive.rs/n">{t('hellYes')}</a> {t('orNo')}
            </li>
            <li className="lr-li">{t('growthPotential')}</li>
            <li className="lr-li">{t('hireLearnFrom')}</li>
            <li className="lr-li">{t('hireWorkFor')}</li>
            <li className="lr-li">{t('interviewQuestion')}</li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">{t('assumeGoodIntent')}</h2>
          <ul className="lr-list">
            <li className="lr-li">{t('leadEmpathy')}</li>
            <li className="lr-li">{t('badDay')}</li>
            <li className="lr-li">
              {t('criticismIs')}{' '}
              <Link href="/feedback">{tCommon('goodFeedback')}</Link>{' '}
              {t('criticismRest')}
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
