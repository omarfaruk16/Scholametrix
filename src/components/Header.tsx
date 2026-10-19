'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV } from '@/content/site';
import { buttonClass, cn } from './ui';

export function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <Image src="/images/logo.png" alt="" width={36} height={36} className="size-9" priority />
      <span className={cn('font-display text-[1.2rem] font-extrabold tracking-tight', tone === 'light' ? 'text-white' : 'text-ink')}>
        Scholametrix
      </span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
        scrolled || open ? 'border-b border-line/80 bg-white/85 shadow-[0_8px_30px_-20px_rgba(1,100,243,0.4)] backdrop-blur-xl' : 'border-b border-transparent bg-transparent',
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-card">
        Skip to content
      </a>
      <div className="mx-auto flex h-18 max-w-[1200px] items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Scholametrix home" className="shrink-0">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden flex-1 justify-center xl:flex">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={active(n.href) ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-3.5 py-2 text-[15px] font-medium whitespace-nowrap transition-colors',
                    active(n.href) ? 'bg-brand-50 text-brand-700' : 'text-ink/80 hover:text-brand-700',
                  )}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto hidden items-center gap-2 xl:flex">
          <Link href="/contact" className={buttonClass('ghost', 'sm')}>
            Book a demo
          </Link>
          <Link href="/pilot" className={buttonClass('primary', 'sm')}>
            Free pilot <ArrowRight />
          </Link>
        </div>
        <button
          type="button"
          className="ml-auto flex size-11 items-center justify-center rounded-full text-ink hover:bg-brand-50 xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white px-4 pb-10 sm:px-6 xl:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-line">
            {[...NAV, { href: '/developers', label: 'Developer API' }, { href: '/partners', label: 'Partners & sponsors' }, { href: '/contact', label: 'Contact' }].map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={cn('flex items-center justify-between py-4 text-lg font-semibold', active(n.href) ? 'text-brand-700' : 'text-ink')}
                >
                  {n.label} <ArrowRight className="size-4 text-muted" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 grid gap-3">
          <Link href="/pilot" className={buttonClass('primary', 'lg', 'w-full')}>
            Start a free pilot <ArrowRight />
          </Link>
          <Link href="/contact" className={buttonClass('secondary', 'lg', 'w-full')}>
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
