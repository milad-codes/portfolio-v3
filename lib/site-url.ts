import { SITE_CONFIG } from './constants';

export function getSiteUrl() {
  // Preview builds also identify the public portfolio as the canonical site.
  return SITE_CONFIG.url;
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}
