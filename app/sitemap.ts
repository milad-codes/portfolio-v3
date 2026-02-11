import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site-url';

const ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/bio', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/beliefs', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/writing', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/feedback', changeFrequency: 'monthly', priority: 0.6 },
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

