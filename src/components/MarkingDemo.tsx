'use client';

import { Check, CircleAlert, PenLine, Sparkles } from 'lucide-react';
import { AnimatePresence, m as motion, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import demo from '@/content/demo-marking.json';
import { cn } from './ui';

type Marking = (typeof demo)['en'];

/** Splits the answer into plain and highlighted runs using the AI's character offsets. */
export function segments(m: Pick<Marking, 'answer' | 'highlights'>) {
  const out: { text: string; criterionId?: string; kind?: string }[] = [];
  let at = 0;
  for (const h of [...m.highlights].sort((a, b) => a.start - b.start)) {
    if (h.start > at) out.push({ text: m.answer.slice(at, h.start) });
    out.push({ text: m.answer.slice(h.start, h.end), criterionId: h.criterionId, kind: h.kind });
    at = h.end;
  }
  if (at < m.answer.length) out.push({ text: m.answer.slice(at) });
  return out;
}

const STEP_MS = 750;

/**
 * The hero: a real answer marked by the Scholametrix AI (output captured from the live service),
 * replayed step by step — highlights, criterion marks, total, then the teacher's approval.
 */
export function MarkingDemo() {
  const m = demo.en;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-10% 0px' });
  const prefersReduced = useReducedMotion();
  // Decided after mount: the server can't know the visitor's setting.
  const [reduce, setReduce] = useState(false);
  useEffect(() => setReduce(!!prefersReduced), [prefersReduced]);
  const n = m.criteria.length;
  const FINAL = n + 3; // criteria…, summary, total, approved
  const [step, setStep] = useState(0);
  const shown = reduce ? FINAL : step;

  useEffect(() => {
    if (reduce || !inView) return;
    const t = setTimeout(() => setStep((s) => (s >= FINAL + 3 ? 0 : s + 1)), step === 0 ? 900 : step >= FINAL ? 1400 : STEP_MS);
    return () => clearTimeout(t);
  }, [step, inView, reduce, FINAL]);

  const segs = useMemo(() => segments(m), [m]);
  const doneIds = new Set(m.criteria.slice(0, Math.min(shown, n)).map((c) => c.id));
  const total = m.criteria.slice(0, Math.min(shown, n)).reduce((s, c) => s + c.awarded, 0);
  const approved = shown >= FINAL;

  return (
    <div ref={ref} className="relative">
      <div className="overflow-hidden rounded-[22px] border border-white/60 bg-white/95 shadow-float ring-1 ring-brand-600/5 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-line bg-surface/80 px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <p className="ml-3 truncate text-xs font-medium text-muted">Written Exam Evaluation · Computer Networks · Question 2</p>
          <span className="ml-auto hidden items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700 sm:inline-flex">
            <Sparkles className="size-3" /> AI-suggested
          </span>
        </div>

        <div className="grid gap-0 md:grid-cols-[1.35fr_1fr]">
          <div className="p-5 sm:p-6">
            <p className="text-[11px] font-semibold tracking-wider text-muted uppercase">Question · {m.maxMarks} marks</p>
            <p className="mt-1.5 font-display text-[15px] leading-snug font-semibold">{m.question}</p>
            <p className="mt-5 text-[11px] font-semibold tracking-wider text-muted uppercase">Student answer</p>
            <p className="mt-2 rounded-xl border border-line bg-surface/60 p-4 text-[14.5px] leading-[1.75] text-ink/90">
              {segs.map((s, i) =>
                s.criterionId ? (
                  <mark key={i} className={cn('transition-[background,box-shadow] duration-500', doneIds.has(s.criterionId) ? 'mark-earned' : 'bg-transparent')}>
                    {s.text}
                  </mark>
                ) : (
                  <span key={i}>{s.text}</span>
                ),
              )}
            </p>
            <AnimatePresence>
              {shown > n && (
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 rounded-xl border border-brand-100 bg-brand-50/70 p-4"
                >
                  <p className="text-[11px] font-semibold tracking-wider text-brand-700 uppercase">Why this mark</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink/85">{m.summary}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-t border-line bg-surface/40 p-5 sm:p-6 md:border-t-0 md:border-l">
            <div className="flex items-end justify-between">
              <p className="text-[11px] font-semibold tracking-wider text-muted uppercase">Marks per criterion</p>
              <p className="font-display text-3xl leading-none font-extrabold whitespace-nowrap tabular-nums" aria-live="polite">
                {total}
                <span className="text-base font-semibold text-muted"> / {m.maxMarks}</span>
              </p>
            </div>
            <ul className="mt-4 space-y-2.5">
              {m.criteria.map((c, i) => {
                const done = i < shown;
                const full = c.awarded === c.max;
                const none = c.awarded === 0;
                return (
                  <li key={c.id} className="rounded-xl border border-line bg-white p-3">
                    <div className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300',
                          !done ? 'bg-line' : full ? 'bg-earned text-white' : none ? 'bg-missing text-white' : 'bg-partial text-white',
                        )}
                      >
                        {done && (full ? <Check className="size-3" strokeWidth={3} /> : <CircleAlert className="size-3" strokeWidth={3} />)}
                      </span>
                      <p className="flex-1 text-[12.5px] leading-snug font-medium text-ink/85">{c.criterion}</p>
                      <span className="text-[13px] font-bold tabular-nums">
                        {done ? c.awarded : '–'}
                        <span className="font-medium text-muted">/{c.max}</span>
                      </span>
                    </div>
                    <div className="mt-2 ml-7.5 h-1 overflow-hidden rounded-full bg-line">
                      <div
                        className={cn('h-full rounded-full transition-[width] duration-700 ease-out', none ? 'bg-missing' : 'bg-earned')}
                        style={{ width: done ? `${Math.max(none ? 100 : 0, (c.awarded / c.max) * 100)}%` : '0%', opacity: done && none ? 0.25 : 1 }}
                      />
                    </div>
                    {done && none && <p className="mt-1.5 ml-7.5 text-[11.5px] text-missing">{m.missing[0]?.note}</p>}
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex gap-2">
              <span
                className={cn(
                  'inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full text-[13px] font-semibold transition-all duration-300',
                  approved ? 'bg-earned text-white' : 'bg-brand-600 text-white shadow-glow',
                )}
              >
                <Check className="size-4" /> {approved ? 'Approved' : 'Accept'}
              </span>
              <span className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-white px-4 text-[13px] font-semibold text-ink/80">
                <PenLine className="size-4" /> Adjust
              </span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {approved && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold whitespace-nowrap text-white shadow-float"
            role="status"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-earned">
              <Check className="size-3" strokeWidth={3} />
            </span>
            Approved by teacher · released to the student
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
