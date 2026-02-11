import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

const LOCALE_COOKIE = 'NEXT_LOCALE';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as 'en' | 'de')) {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
    locale =
      cookieLocale && routing.locales.includes(cookieLocale as 'en' | 'de')
        ? cookieLocale
        : routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
