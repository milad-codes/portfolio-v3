'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const LOCALE_COOKIE = 'NEXT_LOCALE';
const MAX_AGE_SECONDS = 365 * 24 * 60 * 60;

function setLocaleCookie(locale: 'en' | 'de') {
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax`;
}

export function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchLocale(locale: 'en' | 'de') {
    startTransition(() => {
      setLocaleCookie(locale);
      router.refresh();
    });
  }

  return (
    <nav
      className="fixed top-6 right-8 text-sm text-muted-foreground"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className="text-inherit bg-transparent border-0 p-0 cursor-pointer disabled:opacity-60"
      >
        EN
      </button>
      <span className="mx-1.5" aria-hidden>
        |
      </span>
      <button
        type="button"
        onClick={() => switchLocale('de')}
        disabled={isPending}
        className="text-inherit bg-transparent border-0 p-0 cursor-pointer disabled:opacity-60"
      >
        DE
      </button>
    </nav>
  );
}
