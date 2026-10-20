import { Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FOOTER, SITE } from '@/content/site';
import { Logo } from './Header';
import { Container, LinkedInIcon } from './ui';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white/70">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Scholametrix home">
              <Logo tone="light" />
            </Link>
            <p className="mt-5 leading-relaxed">{SITE.tagline} AI suggests marks against your rubric. Your teachers approve every one.</p>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 hover:text-white">
                  <Mail className="size-4 text-aqua" /> {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="size-4 text-aqua" /> {SITE.location}
              </li>
            </ul>
          </div>
          {FOOTER.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-display text-sm font-semibold tracking-wide text-white">{col.title}</p>
              <ul className="mt-4 space-y-3 text-[15px]">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Scholametrix. Built in Bangladesh for classrooms everywhere.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/50">Founders on</span>
            <a href={SITE.linkedin.omar} target="_blank" rel="noopener noreferrer" aria-label="MD Omar Faruk on LinkedIn" className="hover:text-white">
              <LinkedInIcon className="size-5" />
            </a>
            <a href={SITE.linkedin.khalid} target="_blank" rel="noopener noreferrer" aria-label="Khalid Hossen on LinkedIn" className="hover:text-white">
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
