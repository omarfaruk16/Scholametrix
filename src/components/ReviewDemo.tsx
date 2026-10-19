'use client';

import { Check, PenLine, Sparkles, UserCheck } from 'lucide-react';
import { m as motion, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import demo from '@/content/demo-marking.json';
import { segments } from './MarkingDemo';
import { cn } from './ui';

// The AI's real suggestion for a Bangla answer gave full marks for "required materials" although
// chlorophyll is missing (it said so in its own notes). This is exactly what teacher review is for.
const ADJUST = { id: 'b2', to: 1.5, note: 'ক্লোরোফিলের উল্লেখ নেই — Chlorophyll is not mentioned.' };

export function ReviewDemo() {
  const m = demo.bn;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const prefersReduced = useReducedMotion();
  const [reduce, setReduce] = useState(false);
  useEffect(() => setReduce(!!prefersReduced), [prefersReduced]);
  const [reviewed, setReviewed] = useState(false);

  useEffect(() => {
    if (!inView || reduce) return;
    const t = setTimeout(() => setReviewed(true), 2200);
    return () => clearTimeout(t);
  }, [inView, reduce]);

  const criteria = m.criteria.map((c) => (reviewed && c.id === ADJUST.id ? { ...c, final: ADJUST.to } : { ...c, final: c.awarded }));
  const total = criteria.reduce((s, c) => s + c.final, 0);

  return (
    <div ref={ref} className="rounded-[22px] border border-line bg-white shadow-float">
      <div className="flex flex-wrap items-center gap-3 border-b border-line px-5 py-3.5">
        <p className="text-sm font-semibold">Biology · Question 4</p>
        <div role="radiogroup" aria-label="View" className="ml-auto inline-flex rounded-full bg-surface p-1 text-[12.5px] font-semibold">
          {[
            { v: false, label: 'AI suggestion', icon: <Sparkles className="size-3.5" /> },
            { v: true, label: 'After teacher review', icon: <UserCheck className="size-3.5" /> },
          ].map((o) => (
            <button
              key={o.label}
              type="button"
              role="radio"
              aria-checked={reviewed === o.v}
              onClick={() => setReviewed(o.v)}
              className={cn(
                'inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors',
                reviewed === o.v ? 'bg-white text-brand-700 shadow-card' : 'text-muted hover:text-ink',
              )}
            >
              {o.icon}
              {o.label}
            </button>
          ))}
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p lang="bn" className="font-bangla text-[15px] leading-relaxed font-semibold">
          {m.question}
        </p>
        <p lang="bn" className="mt-3 rounded-xl border border-line bg-surface/60 p-4 font-bangla text-[15px] leading-[1.9]">
          {segments(m).map((s, i) => (s.criterionId ? <mark key={i} className="mark-earned">{s.text}</mark> : <span key={i}>{s.text}</span>))}
        </p>
        <ul className="mt-4 space-y-2">
          {criteria.map((c) => {
            const changed = c.final !== c.awarded;
            return (
              <li key={c.id} className={cn('rounded-xl border p-3 transition-colors duration-300', changed ? 'border-partial/40 bg-partial-bg/50' : 'border-line')}>
                <div className="flex items-center gap-3">
                  <p lang="bn" className="flex-1 font-bangla text-[13.5px] leading-snug">
                    {c.criterion}
                  </p>
                  <span className="flex items-baseline gap-1.5 text-sm font-bold tabular-nums">
                    {changed && <s className="text-xs font-medium text-muted">{c.awarded}</s>}
                    {c.final}
                    <span className="font-medium text-muted">/{c.max}</span>
                  </span>
                </div>
                {changed && (
                  <motion.p
                    initial={reduce ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-1.5 flex items-start gap-1.5 text-[12.5px] text-partial"
                  >
                    <PenLine className="mt-0.5 size-3.5 shrink-0" />
                    <span lang="bn" className="font-bangla">
                      Teacher: {ADJUST.note}
                    </span>
                  </motion.p>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-5 flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-white">
          <span className="flex items-center gap-2 text-[13px] font-medium text-white/80">
            {reviewed ? <Check className="size-4 text-aqua" /> : <Sparkles className="size-4 text-aqua" />}
            {reviewed ? 'Final mark, approved by the teacher' : 'Suggested by AI — not yet released'}
          </span>
          <span className="shrink-0 font-display text-2xl font-extrabold whitespace-nowrap tabular-nums">
            {total}
            <span className="text-sm font-semibold text-white/60"> / {m.maxMarks}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
