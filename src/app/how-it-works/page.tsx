import { ArrowRight, Check, FileCheck2, ListChecks, Rocket, Sparkles, UserCheck } from 'lucide-react';
import { CtaBand, PageHero } from '@/components/blocks';
import { MarkingDemo } from '@/components/MarkingDemo';
import { Reveal } from '@/components/Reveal';
import { ReviewDemo } from '@/components/ReviewDemo';
import { Accent, ButtonLink, Container, Section } from '@/components/ui';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'How It Works — From Rubric to Released Results',
  description:
    'How Scholametrix AI evaluation works: approve a rubric, collect answers in your system or our e-Exam platform, get AI-suggested marks with evidence, and let teachers approve every result.',
  path: '/how-it-works',
});

const STEPS = [
  {
    icon: <ListChecks />,
    title: 'Set and approve the rubric',
    body: 'For each written question, a teacher writes criteria with marks — or pastes the model answer and lets Scholametrix draft a rubric. Scholametrix checks that marks add up and that every criterion comes from the model answer. The teacher edits and approves it.',
    points: ['AI-drafted rubrics from your model answer', 'Marks in steps you choose (e.g. 0.5)', 'Approved once, reused for every student'],
  },
  {
    icon: <FileCheck2 />,
    title: 'Students sit the exam',
    body: 'Students answer in your existing exam system, LMS or portal — or in the Scholametrix e-Exam platform with its secure timer and autosave. When the exam ends, written answers are sent to Scholametrix with an anonymous reference; names and IDs stay in your system.',
    points: ['Your system via API, or our e-Exam platform', 'Only answer text leaves your system', 'Blank answers scored zero instantly'],
  },
  {
    icon: <Sparkles />,
    title: 'AI suggests marks with evidence',
    body: 'Each answer is read against the approved rubric. Scholametrix returns a mark for every criterion, highlights the words that earned it, lists strengths, weaknesses and missing points, and writes a short reason. Small exams finish in seconds; large exams queue and finish steadily.',
    points: ['Per-criterion marks and reasons', 'Highlights on the student’s own words', 'English, Bangla and mixed answers'],
  },
  {
    icon: <UserCheck />,
    title: 'Teachers review and approve',
    body: 'Teachers open the evaluation workspace: answer, highlights and suggested marks side by side. One tick accepts; adjusting a criterion takes seconds, and raising a mark asks for a reason. Every decision is saved, so agreement between teachers and the AI can be measured.',
    points: ['Accept with one tick', 'Adjust any criterion with a note', 'Full audit trail of decisions'],
  },
  {
    icon: <Rocket />,
    title: 'Results go out — with reasons',
    body: 'Once every answer is approved, results are published. Students see the marks for each criterion with their answer highlighted, so they learn from the exam instead of just receiving a number.',
    points: ['Results in days, not weeks', 'Criterion marks for students', 'Reports and mark sheets'],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            From rubric to released results — <Accent>step by step</Accent>
          </>
        }
        lead="Scholametrix does the first careful read of every written answer. Your teachers keep the final say. Here’s exactly what happens."
        crumbs={[{ name: 'How it works', path: '/how-it-works' }]}
      />

      <Section className="pt-0 sm:pt-0 lg:pt-0" labelledBy="steps-title">
        <Container className="max-w-5xl">
          <h2 id="steps-title" className="sr-only">
            The five steps
          </h2>
          <ol className="relative space-y-6 before:absolute before:top-4 before:bottom-4 before:left-7 before:w-0.5 before:bg-gradient-to-b before:from-brand-600/50 before:to-brand-100 max-sm:before:hidden">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} className="relative grid gap-5 sm:grid-cols-[56px_1fr]">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow [&_svg]:size-6">{s.icon}</div>
                <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
                  <p className="text-sm font-semibold text-brand-600">Step {i + 1}</p>
                  <h3 className="mt-1 text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-[13px] font-medium ring-1 ring-line">
                        <Check className="size-3.5 text-brand-600" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-surface" labelledBy="see-title">
        <Container>
          <h2 id="see-title" className="text-center text-[2rem] font-bold sm:text-[2.6rem]">
            Steps 3 and 4, <Accent>live</Accent>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">Real answers and the AI’s real suggestions — first in English, then in Bangla with a teacher’s adjustment.</p>
          <div className="mx-auto mt-12 grid max-w-[980px] items-start gap-8">
            <Reveal>
              <MarkingDemo />
            </Reveal>
            <Reveal delay={0.1}>
              <ReviewDemo />
            </Reveal>
          </div>
          <div className="mt-14 text-center">
            <ButtonLink href="/pilot" size="lg">
              Try it on your own exam <ArrowRight />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
