'use client';

import { m as motion, useInView, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { cn } from './ui';

/** Thin brand-coloured bar at the very top that fills as you scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-600 via-brand-500 to-aqua" />;
}

/** A card with a soft light that follows the pointer. */
export function SpotlightCard({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={move} className={cn('group relative overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-float', className)}>
      <div aria-hidden className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

/** A number that counts up the first time it scrolls into view. */
export function CountUp({ to, suffix = '', duration = 1.4, className }: { to: number; suffix?: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / (duration * 1000));
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to, duration]);
  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

/** Two bars that grow when scrolled into view: marking by hand against Scholametrix. */
export function TimeCompare() {
  const bar = 'relative flex h-12 items-center overflow-hidden rounded-xl px-4 text-sm font-semibold';
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-display text-lg font-bold">A class of 300 written scripts</p>
        <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted ring-1 ring-line">Illustration, not a measurement</span>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <p className="mb-1.5 text-[13px] font-medium text-muted">Marking by hand</p>
          <div className="rounded-xl bg-missing/5">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: '0px 0px -20% 0px' }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className={cn(bar, 'bg-[repeating-linear-gradient(135deg,#fb7185_0_12px,#f43f5e_12px_24px)] whitespace-nowrap text-white')}
            >
              Days to weeks of teacher time
            </motion.div>
          </div>
        </div>
        <div>
          <p className="mb-1.5 text-[13px] font-medium text-muted">With Scholametrix</p>
          <div className="rounded-xl bg-brand-50">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '24%' }}
              viewport={{ once: true, margin: '0px 0px -20% 0px' }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={cn(bar, 'bg-brand-gradient whitespace-nowrap text-white')}
            >
              Hours
            </motion.div>
          </div>
          <p className="mt-2 text-[13px] text-muted">AI suggestions arrive in minutes. Teachers then review and approve instead of marking from scratch.</p>
        </div>
      </div>
    </div>
  );
}
