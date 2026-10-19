import { CalendarCheck2, ClipboardList, FileBarChart2, Handshake } from 'lucide-react';
import { PageHero } from '@/components/blocks';
import { LeadForm } from '@/components/LeadForm';
import { Accent, Container, Section } from '@/components/ui';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Free Pilot — Try AI Evaluation on Your Own Exams',
  description:
    'Request a free Scholametrix pilot for one course or department. We set up rubrics with your teachers, mark real exams with AI and report how closely the AI agrees with your teachers.',
  path: '/pilot',
});

const STEPS = [
  { icon: <Handshake />, t: 'We call you', b: 'Within one or two working days, to understand your exams and pick the course.' },
  { icon: <ClipboardList />, t: 'Set up together', b: 'We help your teachers write or draft rubrics and connect your system — or set up e-Exam.' },
  { icon: <CalendarCheck2 />, t: 'Mark a real exam', b: 'Students sit the exam as usual. Teachers review AI-suggested marks and approve them.' },
  { icon: <FileBarChart2 />, t: 'Get the report', b: 'How often teachers agreed with the AI, how much time it saved, and what it would cost.' },
];

export default function PilotPage() {
  return (
    <>
      <PageHero
        eyebrow="Free pilot"
        title={
          <>
            Try Scholametrix on your own exams — <Accent>free</Accent>
          </>
        }
        lead="One course or department, real exams, your teachers in charge. Tell us a little about your institution and we’ll contact you to plan it."
        crumbs={[{ name: 'Free pilot', path: '/pilot' }]}
      />
      <Section className="pt-0 sm:pt-0 lg:pt-0" labelledBy="pilot-form">
        <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-28">
            <h2 id="pilot-form" className="text-2xl font-bold">
              How the pilot works
            </h2>
            <ol className="mt-8 space-y-6">
              {STEPS.map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow [&_svg]:size-5">{s.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-brand-600">Step {i + 1}</p>
                    <h3 className="font-semibold">{s.t}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 rounded-2xl border border-line bg-surface p-5 text-[15px] leading-relaxed text-muted">
              No payment details, no commitment. If the pilot isn’t useful for your teachers, you simply stop.
            </p>
          </div>
          <LeadForm kind="pilot" />
        </Container>
      </Section>
    </>
  );
}
