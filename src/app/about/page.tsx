import Image from 'next/image';
import { UserCheck as IUserCheck, Eye as IEye, ShieldCheck as IShieldCheck, BookOpenCheck as IBookOpenCheck } from 'lucide-react';
import { OrbitArt, DevicesArt, FlowArt, ReceiptArt, ChecklistArt } from '@/components/art';
import { ArrowRight, Eye, HeartHandshake, Scale, ShieldCheck, Target, UserCheck } from 'lucide-react';
import { CtaBand, PageHero } from '@/components/blocks';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { Accent, ButtonLink, Card, Container, Heading, LinkedInIcon, Section } from '@/components/ui';
import { FOUNDERS, SITE } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'About Us: Our Mission and Founders',
  description:
    'Scholametrix is an AI assessment startup from Rajshahi, Bangladesh, founded by MD Omar Faruk (Founder & CEO) and Khalid Hossen (Co-founder). Our mission: fair, fast and explained marks for every written answer.',
  path: '/about',
});

const VALUES = [
  { icon: <UserCheck />, t: 'Teachers decide', b: 'AI is an assistant to examiners, never a replacement. Every released mark is a teacher’s decision.' },
  { icon: <Eye />, t: 'Show the evidence', b: 'A mark without a reason isn’t good enough. We always show what earned it and what was missing.' },
  { icon: <ShieldCheck />, t: 'Privacy by default', b: 'Student work is processed only to mark it, anonymously, and never to train AI.' },
  { icon: <Scale />, t: 'Build for real classrooms', b: 'Bangla and English, weak connections, huge exam days, tight budgets. We design for the institutions we serve.' },
];

const MILESTONES = [
  { when: '2026', t: 'Scholametrix founded', b: 'Started by MD Omar Faruk and Khalid Hossen in Rajshahi, Bangladesh.' },
  { when: 'Oct 2026', t: 'AI evaluation service launched', b: 'Rubric drafting and rubric-based marking with teacher approval, in English and Bangla.' },
  { when: 'Oct 2026', t: 'First client: University of Rajshahi', b: 'Online exams and AI-assisted written marking on the Scholametrix e-Exam platform.' },
  { when: 'Next', t: 'More institutions & research', b: 'Pilots with new institutions, and studies of agreement between AI suggestions and teachers.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={FOUNDERS.map((f) => ({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: f.name,
          jobTitle: f.role,
          image: `${SITE.url}${f.image}`,
          sameAs: [f.linkedin],
          worksFor: { '@id': `${SITE.url}/#organization` },
        }))}
      />
      <PageHero
        eyebrow="About Scholametrix"
        title={
          <>
            Every written answer deserves a fair, fast and <Accent>explained</Accent> mark
          </>
        }
        lead="Online exams made submitting answers instant, but written answers still take weeks to mark, and students rarely learn why they lost marks. We started Scholametrix to fix that, without taking the decision away from teachers."
        crumbs={[{ name: 'About', path: '/about' }]}
        art={<OrbitArt light center={<Image src="/images/logo.png" alt="" width={80} height={80} />} items={[{ icon: <IUserCheck />, label: 'Teachers decide' }, { icon: <IEye />, label: 'Show evidence' }, { icon: <IShieldCheck />, label: 'Privacy' }, { icon: <IBookOpenCheck />, label: 'Real classrooms' }]} />}
      />

      <Section className="pt-0 sm:pt-0 lg:pt-0" labelledBy="mission-title">
        <Container className="grid gap-6 md:grid-cols-2">
          <h2 id="mission-title" className="sr-only">
            Mission and vision
          </h2>
          <Reveal>
            <Card className="h-full p-8">
              <Target className="size-7 text-brand-600" />
              <h3 className="mt-4 text-2xl font-bold">Our mission</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">Make high-quality written assessment fast and fair for every institution, in every language its students write in.</p>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl bg-navy p-8 text-white shadow-card">
              <HeartHandshake className="size-7 text-aqua" />
              <h3 className="mt-4 text-2xl font-bold text-white">Our vision</h3>
              <p className="mt-3 text-lg leading-relaxed text-white/75">A world where students get their marks, and the reasons behind them, while the exam is still fresh in their minds.</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="team" labelledBy="team-title" className="bg-surface">
        <Container>
          <Heading id="team-title" eyebrow="The team" title="Meet the founders" />
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08}>
                <article className="h-full overflow-hidden rounded-3xl border border-line bg-white shadow-card">
                  <div className="relative aspect-[4/3.6] bg-brand-50">
                    <Image src={f.image} alt={`${f.name}, ${f.role} of Scholametrix`} fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover object-top" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">{f.name}</h3>
                        <p className="mt-0.5 font-semibold text-brand-600">{f.role}</p>
                      </div>
                      <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-2 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-600 hover:text-white">
                        <LinkedInIcon className="size-4" /> LinkedIn
                      </a>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted">{f.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section labelledBy="values-title">
        <Container>
          <Heading id="values-title" eyebrow="What we believe" title="Our values" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <Card className="h-full">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 [&_svg]:size-5">{v.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold">{v.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{v.b}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section labelledBy="timeline-title" className="bg-surface">
        <Container className="max-w-3xl">
          <Heading id="timeline-title" eyebrow="Our journey" title="So far" />
          <ol className="relative mt-12 space-y-8 border-l-2 border-brand-100 pl-8">
            {MILESTONES.map((m) => (
              <Reveal as="li" key={m.t} className="relative">
                <span className="absolute top-1.5 -left-[41px] size-4 rounded-full border-4 border-white bg-brand-600 shadow-glow" aria-hidden />
                <p className="text-sm font-semibold text-brand-600">{m.when}</p>
                <h3 className="mt-1 text-xl font-semibold">{m.t}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{m.b}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/partners">
              Partner with us <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact the founders
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
