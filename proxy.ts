import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALE_COOKIE = 'NEXT_LOCALE';
const LOCALES = ['en', 'de'] as const;
const DEFAULT_LOCALE = 'en';
const NEXT_INTL_LOCALE_HEADER = 'X-NEXT-INTL-LOCALE';

type Locale = (typeof LOCALES)[number];

function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

function pickLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = request.headers.get('accept-language')?.toLowerCase() ?? '';
  return acceptLanguage.includes('de') ? 'de' : DEFAULT_LOCALE;
}

function setLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60,
    sameSite: 'lax',
  });
}

function requestHeadersWithLocale(request: NextRequest, locale: Locale): Headers {
  const headers = new Headers(request.headers);
  headers.set(NEXT_INTL_LOCALE_HEADER, locale);
  return headers;
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl;

  // Allow switching locales without URL prefixes.
  const localeParam = url.searchParams.get('locale');
  if (isLocale(localeParam)) {
    const redirectUrl = url.clone();
    redirectUrl.searchParams.delete('locale');
    const response = NextResponse.redirect(redirectUrl);
    setLocaleCookie(response, localeParam);
    return response;
  }

  // Keep URLs clean if a locale prefix is ever used.
  const [, maybeLocale, ...rest] = url.pathname.split('/');
  if (isLocale(maybeLocale)) {
    const redirectUrl = url.clone();
    redirectUrl.pathname = `/${rest.join('/')}`.replace(/\/+$/, '') || '/';
    const response = NextResponse.redirect(redirectUrl);
    setLocaleCookie(response, maybeLocale);
    return response;
  }

  const locale = pickLocale(request);
  const rewriteUrl = new URL(request.url);
  const suffix = url.pathname === '/' ? '' : url.pathname;
  rewriteUrl.pathname = `/${locale}${suffix}`;

  const response = NextResponse.rewrite(rewriteUrl, {
    request: { headers: requestHeadersWithLocale(request, locale) },
  });
  response.headers.set('Vary', 'Accept-Language, Cookie');

  const existing = request.cookies.get(LOCALE_COOKIE)?.value;
  if (!isLocale(existing)) setLocaleCookie(response, locale);

  return response;
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|opengraph-image|twitter-image|.*\\..*).*)'],
};
