import type { MetadataRoute } from 'next';
import { SITE } from '@/content/site';

export const dynamic = 'force-static';

const PAGES: [string, number][] = [
  ['/', 1],
  ['/ai-evaluation', 0.9],
  ['/e-exam', 0.9],
  ['/how-it-works', 0.8],
  ['/pilot', 0.8],
  ['/pricing', 0.8],
  ['/case-studies/university-of-rajshahi', 0.8],
  ['/security', 0.7],
  ['/developers', 0.7],
  ['/about', 0.7],
  ['/partners', 0.7],
  ['/contact', 0.7],
  ['/privacy', 0.3],
  ['/terms', 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-19');
  return PAGES.map(([path, priority]) => ({ url: `${SITE.url}${path === '/' ? '' : path}`, lastModified, changeFrequency: 'monthly', priority }));
}
