import { ArrowRight, Check } from 'lucide-react';
import { OrbitArt, DevicesArt, FlowArt, ReceiptArt, ChecklistArt } from '@/components/art';
import { CtaBand, Faq, PageHero } from '@/components/blocks';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { Accent, ButtonLink, cn, Container, Heading, Section } from '@/components/ui';
import { faqLd, pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Pricing: Free Pilot, Then Pay Per Answer Marked',
  description:
    'Start with a free pilot for one course or department. Then pay per written answer marked, with a monthly allowance, usage limits and a clear monthly statement. e-Exam platform and enterprise plans available.',
  path: '/pricing',
});

const PLANS = [
  {
    name: 'Free pilot',
    price: 'Free',
    note: 'One course or department',
    body: 'See Scholametrix on your own exams before you decide anything.',
    cta: { href: '/pilot', label: 'Start a free pilot' },
    features: ['Rubric set-up with your teachers', 'AI evaluation for one course', 'Connect your system or use e-Exam', 'Agreement report: AI vs. teachers', 'Guided onboarding'],
  },
  {
    name: 'Institution',
    price: 'Per answer',
    note: 'Monthly allowance + per extra answer',
    body: 'For universities, colleges and schools marking written exams every term.',
    cta: { href: '/contact', label: 'Get a quote' },
    features: ['AI evaluation for every course', 'Blank and duplicate answers free', 'Monthly usage limits you control', 'Monthly statement and invoice', 'Training for teachers and admins', 'Optional e-Exam platform'],
    featured: true,
  },
  {
    name: 'Enterprise & API',
    price: 'Custom',
    note: 'Exam bodies and EdTech platforms',
    body: 'High volumes, your own product, or your own servers.',
    cta: { href: '/contact', label: 'Talk to us' },
    features: ['Volume pricing', 'Developer API and sandbox', 'On-premise deployment option', 'Service levels and priority support', 'Cost breakdown per course, teacher or exam'],
  },
];

const FAQ = [
  { q: 'What counts as an answer?', a: 'One student’s answer to one written question, marked by the AI. Blank answers and exact duplicates are not charged on standard plans. MCQs are marked without AI and cost nothing extra.' },
  { q: 'Why don’t you list prices?', a: 'Costs depend on answer length, volume and whether you need the e-Exam platform. We give every institution a written quote after the pilot, in BDT for Bangladesh or USD internationally.' },
  { q: 'Is there a setup fee?', a: 'No setup fee for AI evaluation. Deploying the e-Exam platform for a new institution is quoted separately.' },
  { q: 'Can we cap our spending?', a: 'Yes. Every institution has a monthly usage limit, and you see usage and costs per course, department and teacher.' },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqLd(FAQ)} />
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Start <Accent>free.</Accent> Pay only for answers marked.
          </>
        }
        lead="Every institution begins with a free pilot. After that, you pay per written answer the AI marks, with a monthly allowance, limits you control and a clear statement every month."
        crumbs={[{ name: 'Pricing', path: '/pricing' }]}
        art={<ReceiptArt />}
      />
      <Section className="pt-0 sm:pt-0 lg:pt-0" labelledBy="plans-title">
        <Container>
          <h2 id="plans-title" className="sr-only">
            Plans
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div
                  className={cn(
                    'relative flex h-full flex-col rounded-3xl border p-8',
                    p.featured ? 'border-brand-600 bg-navy text-white shadow-float' : 'border-line bg-white shadow-card',
                  )}
                >
                  {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-aqua px-3 py-1 text-xs font-bold text-navy">Most institutions</span>}
                  <h3 className={cn('text-lg font-semibold', p.featured && 'text-white')}>{p.name}</h3>
                  <p className={cn('mt-4 font-display text-4xl font-extrabold', p.featured ? 'text-white' : 'text-ink')}>{p.price}</p>
                  <p className={cn('mt-1 text-sm', p.featured ? 'text-white/70' : 'text-muted')}>{p.note}</p>
                  <p className={cn('mt-5 leading-relaxed', p.featured ? 'text-white/80' : 'text-muted')}>{p.body}</p>
                  <ul className="mt-6 space-y-3 text-[15px]">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <Check className={cn('mt-0.5 size-4.5 shrink-0', p.featured ? 'text-aqua' : 'text-brand-600')} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <ButtonLink href={p.cta.href} variant={p.featured ? 'white' : i === 0 ? 'primary' : 'secondary'} className="w-full">
                      {p.cta.label} <ArrowRight />
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-muted">Prices in BDT for Bangladesh and USD internationally. All plans include the teacher approval workflow, English & Bangla, and usage reports.</p>
        </Container>
      </Section>
      <Section className="bg-surface" labelledBy="price-faq">
        <Container className="max-w-3xl">
          <Heading id="price-faq" eyebrow="FAQ" title="Pricing questions" />
          <div className="mt-10">
            <Faq items={FAQ} schema={false} />
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
