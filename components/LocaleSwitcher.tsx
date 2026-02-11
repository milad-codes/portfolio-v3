'use client';

import { usePathname } from 'next/navigation';

export function LocaleSwitcher() {
  const pathname = usePathname();
  const base = pathname || '/';

  return (
    <nav
      className="fixed top-6 right-8 text-sm text-muted-foreground"
      aria-label="Language switcher"
    >
      <a
        href={`${base}${base.includes('?') ? '&' : '?'}locale=en`}
        className="text-inherit no-underline hover:no-underline"
      >
        EN
      </a>
      <span className="mx-1.5" aria-hidden>
        |
      </span>
      <a
        href={`${base}${base.includes('?') ? '&' : '?'}locale=de`}
        className="text-inherit no-underline hover:no-underline"
      >
        DE
      </a>
    </nav>
  );
}
