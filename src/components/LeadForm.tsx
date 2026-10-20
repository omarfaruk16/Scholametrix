'use client';

import { ArrowRight, CheckCircle2, Loader2, TriangleAlert } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useId, useState, type FormEvent, type ReactNode } from 'react';
import { SITE } from '@/content/site';
import { buttonClass, cn } from './ui';

type Kind = 'pilot' | 'demo' | 'partner' | 'contact';
type FieldName = 'name' | 'email' | 'phone' | 'institution' | 'website' | 'role' | 'country' | 'size' | 'message';

interface FieldDef {
  name: FieldName;
  label: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel' | 'url' | 'textarea' | 'select';
  placeholder?: string;
  options?: string[];
  autoComplete?: string;
  wide?: boolean;
  hint?: string;
}

const SIZES = ['Under 500 students', '500–2,000 students', '2,000–10,000 students', '10,000–50,000 students', 'More than 50,000 students'];

const FORMS: Record<Kind, { fields: FieldDef[]; submit: string; done: { title: string; body: string } }> = {
  pilot: {
    fields: [
      { name: 'name', label: 'Full name', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Email', required: true, type: 'email', autoComplete: 'email' },
      { name: 'phone', label: 'Phone / WhatsApp', required: true, type: 'tel', autoComplete: 'tel', placeholder: '+880 1…' },
      { name: 'institution', label: 'Institution', required: true, autoComplete: 'organization', placeholder: 'University, college or school' },
      { name: 'website', label: 'Institution website', type: 'url', placeholder: 'example.edu', hint: 'Optional', wide: true },
      {
        name: 'message',
        label: 'Tell us about your exams',
        required: true,
        type: 'textarea',
        wide: true,
        placeholder: 'Which course or department would you like to pilot, roughly how many students, and how you hold exams today (paper, online, LMS…).',
      },
    ],
    submit: 'Request my free pilot',
    done: { title: 'Thank you, your pilot request is in.', body: 'We’ll contact you within one or two working days to plan the pilot with you.' },
  },
  demo: {
    fields: [
      { name: 'name', label: 'Full name', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Work email', required: true, type: 'email', autoComplete: 'email' },
      { name: 'institution', label: 'Institution or company', required: true, autoComplete: 'organization' },
      { name: 'role', label: 'Your role', placeholder: 'e.g. Controller of Examinations', autoComplete: 'organization-title' },
      { name: 'country', label: 'Country', autoComplete: 'country-name' },
      { name: 'size', label: 'Students per term', type: 'select', options: SIZES },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', autoComplete: 'tel', hint: 'Optional', wide: true },
      { name: 'message', label: 'What would you like to see?', required: true, type: 'textarea', wide: true, placeholder: 'Your exams, your current system, and anything you’d like us to show in the demo.' },
    ],
    submit: 'Book my demo',
    done: { title: 'Thank you, we’ll be in touch.', body: 'We’ll email you within one working day to find a time for a live demo.' },
  },
  partner: {
    fields: [
      { name: 'name', label: 'Full name', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Email', required: true, type: 'email', autoComplete: 'email' },
      { name: 'institution', label: 'Organisation', autoComplete: 'organization' },
      { name: 'role', label: 'I’m interested in', type: 'select', options: ['Sponsoring Scholametrix', 'Investing', 'Research partnership', 'Pilot partnership', 'Something else'] },
      { name: 'country', label: 'Country', autoComplete: 'country-name' },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', autoComplete: 'tel', hint: 'Optional' },
      { name: 'message', label: 'Message', required: true, type: 'textarea', wide: true, placeholder: 'Tell us a little about you and what you have in mind.' },
    ],
    submit: 'Send',
    done: { title: 'Thank you for reaching out.', body: 'The founders read every message and will reply personally.' },
  },
  contact: {
    fields: [
      { name: 'name', label: 'Full name', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Email', required: true, type: 'email', autoComplete: 'email' },
      { name: 'message', label: 'Message', required: true, type: 'textarea', wide: true },
    ],
    submit: 'Send message',
    done: { title: 'Message sent.', body: 'We’ll reply by email soon.' },
  },
};

const input =
  'w-full rounded-xl border border-line bg-white px-4 text-[15px] text-ink placeholder:text-muted/70 transition-[border-color,box-shadow] outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-600/12 aria-[invalid=true]:border-missing aria-[invalid=true]:ring-missing/10';

function validate(def: FieldDef[], v: Record<string, string>) {
  const errors: Partial<Record<FieldName, string>> = {};
  for (const f of def) {
    const value = (v[f.name] ?? '').trim();
    if (f.required && !value) errors[f.name] = `Please enter your ${f.label.toLowerCase()}`;
    else if (f.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors[f.name] = 'Please enter a valid email address';
    else if (f.name === 'message' && f.required && value.length < 10) errors[f.name] = 'Please write at least a sentence';
  }
  return errors;
}

export function LeadForm({ kind, className, intro }: { kind: Kind; className?: string; intro?: ReactNode }) {
  const form = FORMS[kind];
  const uid = useId();
  const pathname = usePathname();
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const found = validate(form.fields, data);
    setErrors(found);
    setMessage(null);
    if (Object.keys(found).length) {
      document.getElementById(`${uid}-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setState('sending');
    try {
      const res = await fetch(`${SITE.apiUrl}/v1/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, kind, sourcePage: pathname }),
      });
      if (res.ok) {
        setState('done');
        requestAnimationFrame(() => document.getElementById(`${uid}-done`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
        return;
      }
      const body = (await res.json().catch(() => null)) as { error?: { message?: string; details?: { path: string; message: string }[] } } | null;
      const fieldErrors: Partial<Record<FieldName, string>> = {};
      for (const d of body?.error?.details ?? []) fieldErrors[d.path as FieldName] = d.message;
      setErrors(fieldErrors);
      setMessage(Object.keys(fieldErrors).length ? 'Please check the highlighted fields.' : (body?.error?.message ?? 'Something went wrong. Please try again.'));
      setState('error');
    } catch {
      setMessage(`We couldn’t send your request. Check your connection, or email us at ${SITE.email}.`);
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <div id={`${uid}-done`} className={cn('rounded-3xl border border-line bg-white p-8 text-center shadow-float sm:p-12', className)} role="status">
        <CheckCircle2 className="mx-auto size-14 text-earned" />
        <h2 className="mt-5 text-2xl font-bold">{form.done.title}</h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">{form.done.body}</p>
        <p className="mt-6 text-sm text-muted">
          Anything urgent? Email{' '}
          <a href={`mailto:${SITE.email}`} className="font-medium text-brand-700 underline">
            {SITE.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className={cn('relative rounded-3xl border border-line bg-white p-6 shadow-float sm:p-9', className)}>
      {intro}
      {/* Hidden from people; bots fill it in and are dropped by the server. */}
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {form.fields.map((f) => {
          const id = `${uid}-${f.name}`;
          const err = errors[f.name];
          const common = {
            id,
            name: f.name,
            required: f.required,
            'aria-invalid': !!err,
            'aria-describedby': err ? `${id}-err` : f.hint ? `${id}-hint` : undefined,
          };
          return (
            <div key={f.name} className={cn('grid content-start gap-2', f.wide && 'sm:col-span-2')}>
              <label htmlFor={id} className="flex items-baseline justify-between text-sm font-semibold text-ink">
                <span>
                  {f.label}
                  {f.required && <span className="text-missing"> *</span>}
                </span>
                {f.hint && (
                  <span id={`${id}-hint`} className="text-xs font-normal text-muted">
                    {f.hint}
                  </span>
                )}
              </label>
              {f.type === 'textarea' ? (
                <textarea {...common} rows={5} maxLength={4000} placeholder={f.placeholder} className={cn(input, 'py-3 leading-relaxed')} />
              ) : f.type === 'select' ? (
                <select {...common} defaultValue="" className={cn(input, 'h-12 cursor-pointer')}>
                  <option value="">Choose…</option>
                  {f.options!.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  {...common}
                  type={f.type === 'url' ? 'text' : (f.type ?? 'text')}
                  inputMode={f.type === 'url' ? 'url' : undefined}
                  autoComplete={f.autoComplete}
                  placeholder={f.placeholder}
                  maxLength={f.name === 'website' ? 300 : 200}
                  className={cn(input, 'h-12')}
                />
              )}
              {err && (
                <p id={`${id}-err`} className="text-[13px] text-missing">
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>
      {message && (
        <p role="alert" className="mt-5 flex items-start gap-2 rounded-xl bg-missing-bg px-4 py-3 text-sm text-missing">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" /> {message}
        </p>
      )}
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-relaxed text-muted sm:max-w-sm">
          We use your details only to reply to this request. See our{' '}
          <a href="/privacy" className="underline hover:text-brand-700">
            privacy policy
          </a>
          .
        </p>
        <button type="submit" disabled={state === 'sending'} className={buttonClass('primary', 'lg', 'disabled:opacity-70')}>
          {state === 'sending' ? <Loader2 className="animate-spin" /> : null}
          {state === 'sending' ? 'Sending…' : form.submit}
          {state !== 'sending' && <ArrowRight />}
        </button>
      </div>
    </form>
  );
}
