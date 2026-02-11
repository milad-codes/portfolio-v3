import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALE_COOKIE = 'NEXT_LOCALE';
const LOCALES = ['en', 'de'];
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const localeParam = url.searchParams.get('locale');

  if (localeParam && LOCALES.includes(localeParam)) {
    url.searchParams.delete('locale');
    const response = NextResponse.redirect(url);
    response.cookies.set(LOCALE_COOKIE, localeParam, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60,
    });
    return response;
  }

  const response = NextResponse.next();
  const existing = request.cookies.get(LOCALE_COOKIE)?.value;
  if (existing && LOCALES.includes(existing)) {
    return response;
  }
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  const locale = acceptLanguage.includes('de') ? 'de' : DEFAULT_LOCALE;
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60,
  });
  return response;
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
