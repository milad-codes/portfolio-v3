import { SITE_CONFIG } from './constants';

function stripTrailingSlash(url: string) {
  return url.replace(/\/+$/, '');
}

export function getSiteUrl() {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (env) return stripTrailingSlash(env);

  // Vercel provides this without protocol (e.g. "my-app.vercel.app")
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${stripTrailingSlash(vercel)}`;

  // Local/dev fallback
  return stripTrailingSlash(SITE_CONFIG.url || 'http://localhost:3000');
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}
