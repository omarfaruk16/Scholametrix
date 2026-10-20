import { Check, FileCheck2, ListChecks, Sparkles, UserCheck } from 'lucide-react';
import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';
import { cn } from './ui';

/** Slowly drifting colour clouds behind a hero or banner. */
export function Aurora({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className={cn('animate-blob absolute -top-40 left-[6%] size-[520px] rounded-full blur-3xl', dark ? 'bg-brand-500/40' : 'bg-aqua/30')} />
      <div className={cn('animate-blob-2 absolute top-6 right-[4%] size-[460px] rounded-full blur-3xl', dark ? 'bg-aqua/25' : 'bg-brand-500/25')} />
      <div className={cn('animate-blob-3 absolute top-72 left-[38%] size-[420px] rounded-full blur-3xl', dark ? 'bg-brand-700/50' : 'bg-[#8aa6ff]/25')} />
    </div>
  );
}

/** Small drifting rings, dots and plus signs. Purely decorative. */
export function Confetti({ className }: { className?: string }) {
  const items: { s: string; c: string; d: string }[] = [
    { s: 'left-[7%] top-[22%] size-3 rounded-full border-2 border-brand-500/40', c: 'animate-float', d: '0s' },
    { s: 'left-[13%] top-[62%] size-2 rounded-full bg-aqua/70', c: 'animate-float-slow', d: '-2s' },
    { s: 'right-[9%] top-[18%] size-2.5 rounded-full bg-brand-500/50', c: 'animate-float', d: '-1s' },
    { s: 'right-[15%] top-[58%] size-4 rounded-full border-2 border-aqua/60', c: 'animate-float-slow', d: '-3s' },
    { s: 'left-[28%] top-[8%] size-2 rotate-45 bg-brand-600/30', c: 'animate-float', d: '-4s' },
    { s: 'right-[30%] top-[10%] size-2 rotate-45 border border-brand-600/40', c: 'animate-float-slow', d: '-5s' },
  ];
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 hidden sm:block', className)}>
      {items.map((i, n) => (
        <span key={n} className={cn('absolute', i.s, i.c)} style={{ animationDelay: i.d }} />
      ))}
    </div>
  );
}

/** Soft wave edge at the top of a coloured section. `className` sets the colour (text-*). */
export function Wave({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={cn('pointer-events-none absolute inset-x-0 block h-8 w-full sm:h-14', flip ? 'bottom-0 translate-y-[99%] rotate-180' : 'top-0 -translate-y-[99%]', className)}
    >
      <path fill="currentColor" d="M0 90V46c120 30 260 40 420 22s300-62 480-58 360 40 540 18v62H0z" />
    </svg>
  );
}

/** Endless strip of short phrases. Duplicated so the loop is seamless. */
export function Marquee({ items, className }: { items: { icon?: ReactNode; label: string }[]; className?: string }) {
  const row = (hidden?: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center gap-3 pr-3">
      {items.map((i) => (
        <li key={i.label} className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-ink/80 shadow-card [&_svg]:size-4 [&_svg]:text-brand-600">
          {i.icon}
          {i.label}
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn('group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]', className)}>
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}

// ── Orbit illustration ─────────────────────────────────────────────────────

/** A glowing centre with labelled chips slowly orbiting it. Used in page headers. */
export function OrbitArt({ center, items, className, light }: { center: ReactNode; items: { icon: ReactNode; label: string }[]; className?: string; light?: boolean }) {
  const n = items.length;
  return (
    <div className={cn('relative mx-auto aspect-square w-full max-w-[440px] @container', className)} aria-hidden>
      <div className="absolute inset-[6%] rounded-full border border-dashed border-brand-500/25" />
      <div className="absolute inset-[22%] rounded-full border border-brand-500/20" />
      <div className="absolute inset-[34%] rounded-full bg-brand-500/[0.06]" />
      <div className="animate-orbit absolute inset-0">
        {items.map((it, i) => {
          const a = (360 / n) * i;
          return (
            <div key={it.label} className="absolute top-1/2 left-1/2" style={{ transform: `rotate(${a}deg) translateY(-37cqw)` }}>
              <div style={{ transform: `rotate(${-a}deg)` }}>
                <div className="animate-orbit-rev -translate-x-1/2 -translate-y-1/2">
                  <span className="flex items-center gap-2 rounded-full border border-white bg-white/95 p-1.5 text-[13px] font-semibold whitespace-nowrap text-ink shadow-float backdrop-blur @sm:pr-3.5">
                    <span className="flex size-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 @sm:size-7 [&_svg]:size-4">{it.icon}</span>
                    <span className="hidden @sm:inline">{it.label}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="animate-ring absolute inset-0 rounded-full bg-brand-500/30" />
        <span className="animate-ring absolute inset-0 rounded-full bg-brand-500/20 [animation-delay:1.1s]" />
        <div className={cn('relative flex size-28 items-center justify-center rounded-full shadow-glow sm:size-32 [&_svg]:size-12 sm:[&_svg]:size-14 [&_img]:size-16 sm:[&_img]:size-20', light ? 'bg-white ring-4 ring-brand-100' : 'bg-brand-gradient text-white')}>{center}</div>
      </div>
    </div>
  );
}

// ── Problem illustrations (viewBox 200 x 130) ───────────────────────────────

const SHEET = 'fill-white stroke-line';

export function ArtWeeks() {
  return (
    <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden>
      <g transform="rotate(-8 60 80)">
        <rect x="26" y="26" width="64" height="86" rx="6" className={SHEET} strokeWidth="1.5" />
      </g>
      <g transform="rotate(5 60 80)">
        <rect x="30" y="22" width="64" height="86" rx="6" className={SHEET} strokeWidth="1.5" />
      </g>
      <rect x="34" y="18" width="64" height="86" rx="6" className="fill-white stroke-brand-500/50" strokeWidth="1.5" />
      {[32, 42, 52, 62, 72].map((y, i) => (
        <rect key={y} x="44" y={y} width={i % 2 ? 36 : 44} height="4" rx="2" className="fill-brand-100" />
      ))}
      <rect x="44" y="84" width="22" height="8" rx="4" className="fill-missing/20" />
      <circle cx="148" cy="64" r="36" className="fill-white stroke-brand-500/60" strokeWidth="2" />
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1="148" y1="32" x2="148" y2={i % 3 === 0 ? 38 : 35} transform={`rotate(${i * 30} 148 64)`} className="stroke-brand-500/50" strokeWidth="2" strokeLinecap="round" />
      ))}
      <line x1="148" y1="64" x2="148" y2="46" className="stroke-ink" strokeWidth="3" strokeLinecap="round" transform="rotate(40 148 64)" />
      <g className="animate-tick" style={{ transformOrigin: '148px 64px' }}>
        <line x1="148" y1="64" x2="148" y2="40" className="stroke-brand-600" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <circle cx="148" cy="64" r="3.5" className="fill-ink" />
      <rect x="116" y="108" width="64" height="16" rx="8" className="fill-missing/10" />
      <text x="148" y="120" textAnchor="middle" className="fill-missing text-[10px] font-bold">
        Weeks
      </text>
    </svg>
  );
}

export function ArtScales() {
  return (
    <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden>
      <rect x="66" y="22" width="68" height="88" rx="6" className="fill-white stroke-line" strokeWidth="1.5" />
      {[36, 46, 56, 66, 76, 86].map((y, i) => (
        <rect key={y} x="76" y={y} width={i % 2 ? 40 : 48} height="4" rx="2" className="fill-brand-100" />
      ))}
      {[{ x: 30, label: '6', c: 'fill-partial', d: '0s' }, { x: 170, label: '8', c: 'fill-earned', d: '-1.7s' }].map((a) => (
        <g key={a.x}>
          <circle cx={a.x} cy="84" r="13" className="fill-brand-50 stroke-brand-500/40" strokeWidth="1.5" />
          <circle cx={a.x} cy="80" r="5" className="fill-brand-500/60" />
          <path d={`M${a.x - 9} 94 q9 -9 18 0`} className="fill-brand-500/60" />
          <g className="animate-swing" style={{ transformOrigin: `${a.x}px 56px`, animationDelay: a.d }}>
            <rect x={a.x - 20} y="26" width="40" height="26" rx="13" className="fill-white stroke-line" strokeWidth="1.5" />
            <text x={a.x} y="44" textAnchor="middle" className={cn(a.c, 'text-[14px] font-extrabold')}>
              {a.label}/10
            </text>
          </g>
        </g>
      ))}
      <path d="M52 76 H64 M136 76 H148" className="stroke-brand-500/40" strokeWidth="2" strokeDasharray="3 4" />
      <text x="100" y="14" textAnchor="middle" className="fill-missing text-[15px] font-extrabold">
        ≠
      </text>
    </svg>
  );
}

export function ArtNumber() {
  return (
    <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden>
      <rect x="40" y="16" width="84" height="100" rx="8" className="fill-white stroke-line" strokeWidth="1.5" />
      {[30, 40, 50, 60].map((y, i) => (
        <rect key={y} x="52" y={y} width={i % 2 ? 40 : 56} height="4" rx="2" className="fill-brand-100" />
      ))}
      <circle cx="82" cy="94" r="17" fill="url(#g)" />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0164f3" />
          <stop offset="1" stopColor="#15d9fc" />
        </linearGradient>
      </defs>
      <text x="82" y="101" textAnchor="middle" className="fill-white text-[20px] font-extrabold">
        7
      </text>
      <g className="animate-float">
        <circle cx="156" cy="48" r="22" className="fill-missing/10 stroke-missing/40" strokeWidth="1.5" />
        <text x="156" y="57" textAnchor="middle" className="fill-missing text-[26px] font-extrabold">
          ?
        </text>
      </g>
      <path d="M126 70 q16 -4 20 -16" className="stroke-missing/40" strokeWidth="2" strokeDasharray="3 4" fill="none" />
    </svg>
  );
}

// ── Mini graphics for the feature tiles ──────────────────────────────────────

export function MiniBars() {
  const h = [58, 88, 40, 100, 72];
  return (
    <div className="flex h-full items-end justify-center gap-2.5 pb-1" aria-hidden>
      {h.map((v, i) => (
        <div key={i} className="flex h-full w-5 items-end rounded-md bg-brand-50">
          <div className="animate-rise-up w-full origin-bottom rounded-md bg-brand-gradient" style={{ height: `${v}%`, animationDelay: `${i * 0.18}s` }} />
        </div>
      ))}
    </div>
  );
}

export function MiniQueue() {
  const rows = ['#1029', '#1030', '#1031'];
  return (
    <div className="mx-auto w-full max-w-[240px] space-y-2" aria-hidden>
      {rows.map((r, i) => (
        <div key={r} className="flex items-center gap-2.5 rounded-lg bg-white px-2.5 py-1.5 shadow-card ring-1 ring-line">
          <span className="text-[11px] font-semibold text-muted tabular-nums">{r}</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-brand-50">
            <div className="animate-fill h-full origin-left rounded-full bg-brand-gradient" style={{ animationDelay: `${i * 0.5}s` }} />
          </div>
          <Check className="animate-pop size-3.5 text-earned" style={{ animationDelay: `${i * 0.5 + 0.4}s` }} strokeWidth={3} />
        </div>
      ))}
    </div>
  );
}

export function MiniBubble() {
  return (
    <div className="mx-auto max-w-[230px]" aria-hidden>
      <div className="relative rounded-2xl rounded-bl-sm bg-white p-3 shadow-card ring-1 ring-line">
        <span className="absolute -top-2.5 -right-2 flex size-6 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow">
          <Sparkles className="size-3.5" />
        </span>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-brand-100" />
          <div className="h-1.5 w-[86%] rounded-full bg-brand-100" />
          <div className="h-1.5 w-[58%] rounded-full bg-brand-100" />
        </div>
        <p className="mt-2 text-[11px] font-semibold text-earned">Criterion met · 2 / 2</p>
      </div>
    </div>
  );
}

export function MiniLang() {
  return (
    <div className="flex h-full items-center justify-center gap-4" aria-hidden>
      {[{ a: 'Aa', b: 'অ' }, { a: 'অ', b: 'Aa' }].map((p, i) => (
        <div key={i} className="relative flex size-16 items-center justify-center rounded-2xl bg-white shadow-card ring-1 ring-line">
          <span className="animate-swap absolute font-display text-2xl font-extrabold text-brand-600" style={{ animationDelay: i ? '-3s' : '0s' }}>
            {p.a}
          </span>
          <span className="animate-swap absolute font-bangla text-2xl font-semibold text-aqua" style={{ animationDelay: i ? '0s' : '-3s' }}>
            {p.b}
          </span>
        </div>
      ))}
    </div>
  );
}

export function MiniMerge() {
  const cards = [
    { x: '-26px', y: '-10px', r: '-9deg' },
    { x: '24px', y: '-4px', r: '8deg' },
    { x: '0px', y: '14px', r: '-3deg' },
  ];
  return (
    <div className="relative mx-auto h-full w-40" aria-hidden>
      {cards.map((c, i) => (
        <div
          key={i}
          className="animate-merge absolute top-1/2 left-1/2 -mt-8 -ml-12 h-16 w-24 rounded-xl bg-white p-2.5 shadow-card ring-1 ring-line"
          style={{ '--x': c.x, '--y': c.y, '--r': c.r } as CSSProperties}
        >
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-brand-100" />
            <div className="h-1.5 w-[70%] rounded-full bg-brand-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function MiniGauge() {
  return (
    <div className="flex h-full items-center justify-center gap-4" aria-hidden>
      <svg viewBox="0 0 64 64" className="size-20 -rotate-90">
        <circle cx="32" cy="32" r="26" fill="none" className="stroke-brand-100" strokeWidth="7" />
        <circle cx="32" cy="32" r="26" fill="none" stroke="url(#gauge)" strokeWidth="7" strokeLinecap="round" strokeDasharray="163" className="animate-gauge" />
        <defs>
          <linearGradient id="gauge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0164f3" />
            <stop offset="1" stopColor="#15d9fc" />
          </linearGradient>
        </defs>
      </svg>
      <div className="space-y-1.5 text-[11px] font-semibold text-muted">
        <p className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-brand-600" /> Used
        </p>
        <p className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-brand-100" /> Limit
        </p>
      </div>
    </div>
  );
}

// ── Animated flow (How it works) ────────────────────────────────────────────

const FLOW = [
  { x: 40, y: 240, icon: <ListChecks />, label: 'Rubric' },
  { x: 150, y: 170, icon: <FileCheck2 />, label: 'Answers' },
  { x: 270, y: 110, icon: <Sparkles />, label: 'AI marks' },
  { x: 380, y: 50, icon: <UserCheck />, label: 'Teacher' },
];

export function FlowArt({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto aspect-[420/290] w-full max-w-[460px]', className)} aria-hidden>
      <div className="absolute inset-[4%] rounded-[40px] bg-gradient-to-br from-brand-50/90 to-white/40 ring-1 ring-brand-100" />
      <svg viewBox="0 0 420 290" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="flowg" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#0164f3" />
            <stop offset="1" stopColor="#15d9fc" />
          </linearGradient>
        </defs>
        <path id="flowpath" d="M40 240 C95 240 100 170 150 170 S215 110 270 110 S335 50 380 50" fill="none" stroke="url(#flowg)" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 12" className="animate-dash" />
        <circle r="7" fill="#15d9fc">
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
            <mpath href="#flowpath" />
          </animateMotion>
        </circle>
        <circle r="14" fill="#15d9fc" opacity="0.25">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#flowpath" />
          </animateMotion>
        </circle>
      </svg>
      {FLOW.map((n, i) => (
        <div key={n.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(n.x / 420) * 100}%`, top: `${(n.y / 290) * 100}%` }}>
          <div className="animate-float flex flex-col items-center gap-1.5" style={{ animationDelay: `${-i * 1.1}s` }}>
            <span className="flex size-[68px] items-center justify-center rounded-3xl bg-white text-brand-600 shadow-float ring-1 ring-line [&_svg]:size-7">{n.icon}</span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink shadow-card">{n.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Device mockups (e-Exam) ──────────────────────────────────────────────────

export function DevicesArt({ className }: { className?: string }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[560px] pb-10', className)}>
      <div className="[transform:perspective(1400px)_rotateY(-9deg)_rotateX(3deg)]">
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-float">
          <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3 py-2">
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
          </div>
          <Image src="/images/screens/teacher-dashboard.webp" alt="Scholametrix e-Exam teacher dashboard" width={1600} height={1000} priority sizes="(min-width: 1024px) 560px, 90vw" className="h-auto w-full" />
        </div>
      </div>
      <div className="animate-float absolute -right-2 -bottom-2 w-[26%] sm:-right-6">
        <div className="overflow-hidden rounded-[22px] border-[5px] border-ink bg-ink shadow-float">
          <Image src="/images/screens/student-mobile.webp" alt="Scholametrix e-Exam student dashboard on a phone" width={560} height={1212} className="h-auto w-full rounded-[16px]" sizes="150px" />
        </div>
      </div>
      <div className="animate-float-slow absolute top-6 -left-3 hidden rounded-2xl bg-white px-3.5 py-2.5 shadow-float sm:block lg:-left-8">
        <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">MCQs</p>
        <p className="flex items-center gap-1.5 font-display text-base font-extrabold">
          <Check className="size-4 text-earned" strokeWidth={3} /> Auto-marked
        </p>
      </div>
      <div className="animate-float absolute top-1/2 -right-3 hidden rounded-2xl bg-white px-3.5 py-2.5 shadow-float [animation-delay:-2s] sm:block lg:-right-10">
        <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">Written</p>
        <p className="flex items-center gap-1.5 font-display text-base font-extrabold">
          <Sparkles className="size-4 text-brand-600" /> AI suggested
        </p>
      </div>
    </div>
  );
}

// ── Pricing and pilot illustrations ─────────────────────────────────────────

export function ReceiptArt({ className }: { className?: string }) {
  const lines = [
    { label: 'Answers marked', w: 'w-16' },
    { label: 'Blank and duplicate answers', free: true },
    { label: 'Rubric drafts', w: 'w-12' },
    { label: 'Monthly allowance', w: 'w-14' },
  ];
  return (
    <div className={cn('relative mx-auto w-full max-w-[380px]', className)} aria-hidden>
      <div className="[transform:rotate(-3deg)] rounded-3xl border border-line bg-white p-6 shadow-float">
        <div className="flex items-center justify-between">
          <p className="font-display text-base font-bold">Monthly statement</p>
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">Example</span>
        </div>
        <ul className="mt-5 space-y-3.5">
          {lines.map((l, i) => (
            <li key={l.label} className="flex items-center justify-between gap-3 text-[13px]">
              <span className="text-muted">{l.label}</span>
              {l.free ? (
                <span className="rounded-full bg-earned-bg px-2 py-0.5 text-[11px] font-bold text-earned">Free</span>
              ) : (
                <span className={cn('h-2.5 overflow-hidden rounded-full bg-brand-100', l.w)}>
                  <span className="animate-fill block h-full origin-left rounded-full bg-brand-gradient" style={{ animationDelay: `${i * 0.4}s` }} />
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-white">
          <span className="text-[13px] font-medium text-white/75">Total</span>
          <span className="h-2.5 w-20 overflow-hidden rounded-full bg-white/20">
            <span className="animate-fill block h-full origin-left rounded-full bg-aqua" style={{ animationDelay: '1.6s' }} />
          </span>
        </div>
      </div>
      <div className="animate-pop absolute top-1/2 -right-5 flex size-16 rotate-12 items-center justify-center rounded-full border-4 border-earned/70 bg-white font-display text-xs font-extrabold tracking-wider text-earned uppercase shadow-float">Paid</div>
      <div className="animate-float absolute -bottom-5 -left-4 rounded-2xl bg-brand-gradient px-4 py-2.5 text-sm font-bold text-white shadow-glow">Pay per answer</div>
    </div>
  );
}

export function ChecklistArt({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[380px]', className)} aria-hidden>
      <div className="[transform:rotate(2deg)] rounded-3xl border border-line bg-white p-6 shadow-float">
        <p className="font-display text-base font-bold">Your pilot</p>
        <ul className="mt-5 space-y-3">
          {items.map((t, i) => (
            <li key={t} className="flex items-center gap-3 rounded-xl bg-surface px-3.5 py-3 text-[14px] font-medium">
              <span className="relative flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-brand-100 bg-white">
                <span className="animate-pop absolute inset-[-2px] flex items-center justify-center rounded-full bg-brand-600 text-white" style={{ animationDelay: `${i * 0.9}s` }}>
                  <Check className="size-3.5" strokeWidth={3.5} />
                </span>
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="animate-float absolute -top-4 -right-3 rounded-2xl bg-white px-3.5 py-2.5 shadow-float">
        <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">Cost</p>
        <p className="font-display text-base font-extrabold text-earned">Free</p>
      </div>
    </div>
  );
}
