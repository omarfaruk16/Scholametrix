import type { Metadata } from 'next';
import { FOUNDERS, SITE } from '@/content/site';

export const OG_IMAGE = { url: '/og.png', width: 1200, height: 630, alt: 'Scholametrix — Fair, fast AI marking for written exams' };

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${SITE.url}${path === '/' ? '' : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE.name, type: 'website', locale: 'en_US', images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url] },
  };
}

export const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo.png`,
  description: SITE.description,
  email: SITE.email,
  foundingDate: SITE.founded,
  address: { '@type': 'PostalAddress', addressLocality: 'Rajshahi', addressCountry: 'BD' },
  founder: FOUNDERS.map((f) => ({ '@type': 'Person', name: f.name, jobTitle: f.role, sameAs: [f.linkedin] })),
  sameAs: [SITE.linkedin.omar, SITE.linkedin.khalid],
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: SITE.email, availableLanguage: ['English', 'Bengali'] }],
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { '@id': `${SITE.url}/#organization` },
  inLanguage: 'en',
};

export const productLd = (p: { name: string; description: string; path: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: p.name,
  description: p.description,
  url: `${SITE.url}${p.path}`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  provider: { '@id': `${SITE.url}/#organization` },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free pilot for one course or department' },
});

export const faqLd = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((i, n) => ({
    '@type': 'ListItem',
    position: n + 1,
    name: i.name,
    item: `${SITE.url}${i.path === '/' ? '' : i.path}`,
  })),
});
