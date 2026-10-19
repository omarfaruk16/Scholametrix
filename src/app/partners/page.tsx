import { ArrowRight, Award, BadgeCheck, BookOpenText, Building2, Check, FlaskConical, GraduationCap, HandCoins, LineChart, Megaphone, Rocket, School } from 'lucide-react';
import { PageHero } from '@/components/blocks';
import { LeadForm } from '@/components/LeadForm';
import { Reveal } from '@/components/Reveal';
import { Accent, Card, Container, Heading, Section } from '@/components/ui';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Partners, Sponsors & Investors',
  description:
    'Partner with Scholametrix to modernise assessment: pilot institutions, research partners, sponsors and investors helping bring fair, fast, AI-assisted marking to classrooms in Bangladesh and beyond.',
  path: '/partners',
});

const TRACKS = [
  {
    icon: <School />,
    t: 'Pilot institutions',
    b: 'Run AI-assisted marking for one course or department, free. At the end you receive an agreement report comparing AI suggestions with your teachers’ final marks.',
  },
  {
    icon: <FlaskConical />,
    t: 'Research partners',
    b: 'Co-author studies on AI-assisted assessment, marking consistency and Bangla-language evaluation with real, anonymised data from consenting institutions.',
  },
  {
    icon: <HandCoins />,
    t: 'Sponsors & investors',
    b: 'Help us reach more institutions faster — from funding free pilots for public universities to backing the company’s growth.',
  },
];

const TIERS = [
  {
    icon: <GraduationCap />,
    name: 'Pilot sponsor',
    body: 'Fund a free AI-evaluation pilot for a public university, college or school that couldn’t otherwise try it.',
    perks: ['Your name on the pilot and its report', 'Recognition on our Partners page', 'A summary of the pilot’s results'],
  },
  {
    icon: <Award />,
    name: 'Programme sponsor',
    body: 'Support a programme of pilots, teacher training workshops or a Bangla-language assessment research project.',
    perks: ['Logo on our website and pilot reports', 'Co-branded workshops and events', 'Quarterly impact updates', 'Speaking slot at our showcase events'],
    featured: true,
  },
  {
    icon: <Rocket />,
    name: 'Founding partner',
    body: 'Strategic partners and investors who help shape Scholametrix from the start.',
    perks: ['Founding-partner recognition', 'Direct access to the founders and roadmap', 'First look at new products and markets', 'Terms agreed individually'],
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners & sponsors"
        title={
          <>
            Partner with us to <Accent>modernise</Accent> assessment
          </>
        }
        lead="Written exams test real understanding, but marking them doesn’t scale. We’re looking for institutions, researchers, sponsors and investors who want every student to get a fair, fast and explained mark."
        crumbs={[{ name: 'Partners & sponsors', path: '/partners' }]}
      />

      <Section className="pt-0 sm:pt-0 lg:pt-0" labelledBy="tracks-title">
        <Container>
          <h2 id="tracks-title" className="sr-only">
            Ways to partner
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {TRACKS.map((t, i) => (
              <Reveal key={t.t} delay={i * 0.06}>
                <Card className="h-full p-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow [&_svg]:size-6">{t.icon}</div>
                  <h3 className="mt-5 text-xl font-bold">{t.t}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{t.b}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface" labelledBy="why-title">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Heading
            id="why-title"
            align="left"
            eyebrow="Why now"
            title="Exams are moving online. Marking capacity isn’t."
            lead="Universities and colleges are bringing exams online quickly, but every written answer still needs a careful read. AI can now mark against a rubric and explain itself — and with teachers approving every mark, institutions can adopt it responsibly."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: <BadgeCheck />, t: 'Live in production', b: 'Running at the University of Rajshahi, our first client.' },
              { icon: <BookOpenText />, t: 'English & Bangla', b: 'Built for Bangladeshi classrooms from day one.' },
              { icon: <Building2 />, t: 'Two products', b: 'An AI evaluation API and a complete e-Exam platform.' },
              { icon: <LineChart />, t: 'Usage-based revenue', b: 'Institutions pay per answer marked — it grows with every exam.' },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.05}>
                <Card className="h-full">
                  <div className="text-brand-600 [&_svg]:size-6">{f.icon}</div>
                  <h3 className="mt-3 font-semibold">{f.t}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{f.b}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="sponsor" labelledBy="tiers-title">
        <Container>
          <Heading
            id="tiers-title"
            eyebrow="Sponsorship"
            title={
              <>
                Ways to <Accent>sponsor</Accent> Scholametrix
              </>
            }
            lead="Every sponsorship is agreed individually. These are starting points — tell us what matters to you."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className={`flex h-full flex-col rounded-3xl border p-8 ${t.featured ? 'border-brand-600 bg-navy text-white shadow-float' : 'border-line bg-white shadow-card'}`}>
                  <div className={`flex size-12 items-center justify-center rounded-2xl [&_svg]:size-6 ${t.featured ? 'bg-white/10 text-aqua' : 'bg-brand-50 text-brand-600'}`}>{t.icon}</div>
                  <h3 className={`mt-5 text-xl font-bold ${t.featured ? 'text-white' : ''}`}>{t.name}</h3>
                  <p className={`mt-3 leading-relaxed ${t.featured ? 'text-white/75' : 'text-muted'}`}>{t.body}</p>
                  <ul className="mt-6 space-y-2.5 text-[15px]">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <Check className={`mt-0.5 size-4.5 shrink-0 ${t.featured ? 'text-aqua' : 'text-brand-600'}`} /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface" labelledBy="partner-form-title">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Heading id="partner-form-title" align="left" eyebrow="Get in touch" title="Let’s talk" lead="Tell us how you’d like to work together. The founders read every message and reply personally." />
            <ul className="mt-8 space-y-3 text-[15px]">
              {['Pilots for institutions of any size', 'Research collaborations and data partnerships', 'Sponsorship of pilots, training and events', 'Investment conversations'].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <Megaphone className="mt-0.5 size-4.5 shrink-0 text-brand-600" /> {t}
                </li>
              ))}
            </ul>
            <a href="/pilot" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline">
              Looking for a free pilot instead? <ArrowRight className="size-4" />
            </a>
          </div>
          <LeadForm kind="partner" />
        </Container>
      </Section>
    </>
  );
}
