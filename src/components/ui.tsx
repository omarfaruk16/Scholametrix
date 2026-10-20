import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

export function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(' ');
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

export function Section({ id, className, children, labelledBy }: { id?: string; className?: string; children: ReactNode; labelledBy?: string }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('relative py-18 sm:py-24 lg:py-28', className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className, tone = 'light' }: { children: ReactNode; className?: string; tone?: 'light' | 'dark' }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.14em] uppercase',
        tone === 'dark' ? 'text-aqua' : 'text-brand-600',
        className,
      )}
    >
      <span className={cn('h-px w-6', tone === 'dark' ? 'bg-aqua/70' : 'bg-brand-600/60')} aria-hidden />
      {children}
    </p>
  );
}

/** Section heading. Wrap one word in <Accent> for the italic-serif brand accent. */
export function Heading({
  id,
  eyebrow,
  title,
  lead,
  align = 'center',
  tone = 'light',
  as: Tag = 'h2',
  className,
}: {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
  as?: 'h1' | 'h2';
  className?: string;
}) {
  return (
    <div className={cn(align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl', className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Tag
        id={id}
        className={cn(
          'mt-4 font-bold',
          Tag === 'h1' ? 'text-[2.5rem] leading-[1.06] sm:text-6xl' : 'text-[2rem] leading-[1.1] sm:text-[2.75rem]',
          tone === 'dark' && 'text-white',
        )}
      >
        {title}
      </Tag>
      {lead && (
        <p className={cn('mt-5 text-lg leading-relaxed', tone === 'dark' ? 'text-white/75' : 'text-muted', align === 'center' && 'mx-auto max-w-2xl')}>
          {lead}
        </p>
      )}
    </div>
  );
}

export function Accent({ children, className }: { children: ReactNode; className?: string }) {
  return <em className={cn('text-gradient pr-1 font-serif font-normal italic', className)}>{children}</em>;
}

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[transform,background-color,box-shadow,color] duration-200 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0';
const variants = {
  primary: 'bg-brand-600 text-white shadow-glow hover:bg-brand-700',
  secondary: 'border border-line bg-white text-ink hover:border-brand-600/40 hover:text-brand-700',
  ghost: 'text-ink hover:text-brand-700',
  white: 'bg-white text-brand-700 hover:bg-brand-50',
  outlineWhite: 'border border-white/30 text-white hover:bg-white/10',
};
const sizes = { md: 'h-11 px-5 text-[15px]', lg: 'h-13 px-7 text-base', sm: 'h-9 px-4 text-sm' };

export function buttonClass(variant: keyof typeof variants = 'primary', size: keyof typeof sizes = 'md', className?: string) {
  return cn(buttonBase, variants[variant], sizes[size], className);
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ComponentProps<typeof Link> & { variant?: keyof typeof variants; size?: keyof typeof sizes }) {
  return <Link className={buttonClass(variant, size, className)} {...rest} />;
}

/** White card. Pass `flush` for edge-to-edge content (images, screenshots); padding is otherwise p-6 unless className sets its own. */
export function Card({ className, children, flush }: { className?: string; children: ReactNode; flush?: boolean }) {
  const ownPadding = flush || /(^|\s)p-\d/.test(className ?? '');
  return <div className={cn('rounded-2xl border border-line bg-white shadow-card', !ownPadding && 'p-6', className)}>{children}</div>;
}

export function IconTile({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 [&_svg]:size-5', className)}>{children}</div>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
