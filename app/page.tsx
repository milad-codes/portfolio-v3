import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

const pClassName = 'text-[17px] leading-[25.5px] my-5';

export default async function Home() {
  const t = await getTranslations('Home');
  const tCommon = await getTranslations('Common');

  return (
    <main className="max-w-[650px] mx-auto px-8 pt-24">
      <div className="flex items-start gap-6 mb-6">
        <div className="min-w-0 flex-1">
          <h1 className="lr-h1">{t('title')}</h1>
          <p className="lr-subtitle">{t('subtitle')}</p>
        </div>
        <div className="shrink-0 -mt-5">
          <Image
            src="/original_profile.png"
            unoptimized
            alt="Milad Akbari"
            width={78}
            height={78}
            className="rounded-full object-cover w-[61.8px] h-[61.8px] sm:w-[78px] sm:h-[78px]"
          />
        </div>
      </div>

      <p className={pClassName}>
        {t('intro')}{' '}
        <a
          href="https://www.aampere.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {t('introAt')}
        </a>{' '}
        {t('introBased')}{' '}
        <a
          href="https://turkiyemaarif.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {t('introTmv')}
        </a>
        . {t('introYears')}
      </p>

      <p className={pClassName}>{t('paragraph2')}</p>

      <p className={pClassName}>{t('thingsIThinkAbout')}</p>

      <ul className="lr-list">
        <li className="lr-li">
          <Link href="/beliefs">{t('thingsIBelieve')}</Link>
        </li>
      </ul>

      <p className={pClassName}>
        {t('youCan')}{' '}
        <a
          href="https://github.com/milad-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {tCommon('code')}
        </a>
        , {t('or')}{' '}
        <a
          href="https://www.linkedin.com/in/miladcodes"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {tCommon('followMeOnline')}
        </a>
        .{' '}
        <a
          href="mailto:contact@miladcodes.com"
          className="underline"
          title="contact@miladcodes.com"
        >
          {tCommon('reachOut')}
        </a>{' '}
        {tCommon('reachOutSuffix')} {t('closing')}
      </p>
    </main>
  );
}
