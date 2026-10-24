import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';

const ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: '/', changeFrequency: 'daily', priority: 1.0 },
  { path: '/bio', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/beliefs', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/writing', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/feedback', changeFrequency: 'weekly', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

