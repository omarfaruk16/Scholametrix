'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { cn } from './ui';

export function CodeBlock({ tabs, className }: { tabs: { label: string; code: string }[]; className?: string }) {
  const [i, setI] = useState(0);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(tabs[i]!.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className={cn('overflow-hidden rounded-2xl border border-white/10 bg-[#071233] shadow-float', className)}>
      <div className="flex items-center gap-1 border-b border-white/10 px-3 py-2">
        {tabs.map((t, n) => (
          <button
            key={t.label}
            type="button"
            onClick={() => setI(n)}
            aria-pressed={i === n}
            className={cn('cursor-pointer rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors', i === n ? 'bg-white/10 text-white' : 'text-white/55 hover:text-white')}
          >
            {t.label}
          </button>
        ))}
        <button type="button" onClick={copy} className="ml-auto flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] text-white/60 hover:text-white" aria-label="Copy code">
          {copied ? <Check className="size-3.5 text-aqua" /> : <Copy className="size-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed text-[#cfe0ff]">
        <code>{tabs[i]!.code}</code>
      </pre>
    </div>
  );
}
