import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { JsonLd } from './JsonLd';
import { breadcrumbLd, faqLd } from '@/lib/seo';
import { ButtonLink, cn, Container, Eyebrow } from './ui';

/** A real product screenshot in browser chrome. */
export function BrowserFrame({
  src,
  alt,
  url = 'e-exam.ru.ac.bd',
  className,
  priority,
}: {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn('overflow-hidden rounded-2xl border border-line bg-white shadow-float', className)}>
      <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="mx-auto rounded-md bg-white px-3 py-0.5 text-[11px] text-muted ring-1 ring-line">{url}</span>
      </div>
      <Image src={src} alt={alt} width={1600} height={1000} className="h-auto w-full" priority={priority} sizes="(min-width: 1200px) 1100px, 100vw" />
    </figure>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  actions,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  crumbs: { name: string; path: string }[];
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative -mt-18 overflow-hidden pt-18">
      <JsonLd data={breadcrumbLd(crumbs)} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" aria-hidden />
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-aqua/20 blur-3xl" aria-hidden />
      <Container className="relative pt-12 pb-16 sm:pt-16 sm:pb-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-brand-700">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1.5">
                <span aria-hidden>/</span>
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-ink">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-brand-700">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-[2.5rem] leading-[1.06] font-extrabold sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lead}</p>
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {children}
      </Container>
    </section>
  );
}

/** Accessible, crawlable FAQ (native details/summary) with FAQPage structured data. */
export function Faq({ items, schema = true }: { items: { q: string; a: string }[]; schema?: boolean }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
      {schema && <JsonLd data={faqLd(items)} />}
      {items.map((i) => (
        <details key={i.q} className="group px-5 sm:px-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[17px] font-semibold">
            {i.q}
            <ChevronDown className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="-mt-1 pb-5 leading-relaxed text-muted">{i.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = (
    <>
      See your own exam marked — <em className="font-serif font-normal text-aqua italic">free</em>
    </>
  ),
  lead = 'Start a free pilot with one course. Send us a question, your rubric and a few anonymous answers — we’ll show you the suggested marks, side by side with your teachers’.',
}: {
  title?: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className="py-18 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-navy px-6 py-14 text-center sm:px-12 sm:py-18">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-50" aria-hidden />
          <div className="animate-gradient pointer-events-none absolute -inset-x-20 -top-40 h-80 bg-[linear-gradient(110deg,#0164f3,#15d9fc,#0135aa,#0164f3)] bg-[length:300%_300%] opacity-40 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-[2rem] leading-tight font-bold text-white sm:text-5xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">{lead}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/pilot" variant="white" size="lg">
                Start a free pilot <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/contact" variant="outlineWhite" size="lg">
                Book a demo
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** A plain feature list item with an icon. */
export function Feature({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 [&_svg]:size-5">{icon}</div>
      <div>
        <h3 className="text-[17px] font-semibold">{title}</h3>
        <p className="mt-1.5 leading-relaxed text-muted">{children}</p>
      </div>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl text-[17px] leading-relaxed text-ink/85 [&_a]:font-medium [&_a]:text-brand-700 [&_a]:underline [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
      {children}
    </div>
  );
}
