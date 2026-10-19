import Image from 'next/image';
import { ArrowRight, BarChart3, CalendarClock, CheckCheck, ClipboardCheck, FileSpreadsheet, Keyboard, LibraryBig, ScrollText, ShieldCheck, Smartphone, Timer, Users } from 'lucide-react';
import { BrowserFrame, CtaBand, PageHero } from '@/components/blocks';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { Accent, ButtonLink, Card, Container, Heading, Section } from '@/components/ui';
import { pageMeta, productLd } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'e-Exam Platform — Online Examination System with AI Marking',
  description:
    'A secure online examination system for universities and colleges: question bank with rubrics, exam approval, timed exams with autosave, automatic MCQ marking, AI-assisted written marking, results and reports.',
  path: '/e-exam',
});

const MODULES = [
  { icon: <LibraryBig />, title: 'Question bank', body: 'MCQ and written questions organised by course and chapter, with rubrics and Excel import/export.' },
  { icon: <ClipboardCheck />, title: 'Exam builder & approval', body: 'Teachers build exams; department heads and admins review, request changes and approve.' },
  { icon: <Timer />, title: 'Secure exam taking', body: 'Server-side timer, answers saved as students type, and safe submission even on a weak connection.' },
  { icon: <CheckCheck />, title: 'Instant MCQ marking', body: 'Multiple-choice answers are marked exactly, the moment the exam ends.' },
  { icon: <ScrollText />, title: 'AI-assisted written marking', body: 'Written answers arrive in the evaluation workspace with AI-suggested marks; teachers approve or adjust.' },
  { icon: <FileSpreadsheet />, title: 'Results & final marking', body: 'Mark sheets, result publishing and Excel / PDF reports for every course part.' },
  { icon: <Users />, title: 'Roles for everyone', body: 'Super admin, faculty admin, department head, teacher and student — each sees only their own scope.' },
  { icon: <CalendarClock />, title: 'Live dashboards', body: 'Exam calendar, submissions, marking queue and performance at a glance for every role.' },
  { icon: <Keyboard />, title: 'Typing practice', body: 'A built-in typing course, speed tests and badges so students are ready to write online.' },
];

export default function EExamPage() {
  return (
    <>
      <JsonLd data={productLd({ name: 'Scholametrix e-Exam Platform', description: 'Online examination system with AI-assisted written marking.', path: '/e-exam' })} />
      <PageHero
        eyebrow="e-Exam Platform"
        title={
          <>
            The complete online exam system — with AI marking <Accent>built in</Accent>
          </>
        }
        lead="No online exam system yet? Scholametrix e-Exam takes you from question bank to published results in one secure platform. It’s the system the University of Rajshahi runs on."
        crumbs={[{ name: 'e-Exam Platform', path: '/e-exam' }]}
        actions={
          <>
            <ButtonLink href="/contact" size="lg">
              Book a demo <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/case-studies/university-of-rajshahi" variant="secondary" size="lg">
              See it at Rajshahi University
            </ButtonLink>
          </>
        }
      >
        <div className="animate-rise mt-14" style={{ animationDelay: '150ms' }}>
          <BrowserFrame src="/images/screens/student-dashboard.webp" alt="Scholametrix e-Exam student dashboard: courses, upcoming exams, exam calendar, score trend and typing practice" priority />
        </div>
      </PageHero>

      <Section labelledBy="modules-title" className="bg-surface">
        <Container>
          <Heading id="modules-title" eyebrow="Everything in one platform" title="From question bank to final mark sheet" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 0.06}>
                <Card className="h-full">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 [&_svg]:size-5">{m.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold">{m.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{m.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section labelledBy="teachers-title">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Heading
            id="teachers-title"
            align="left"
            eyebrow="For teachers"
            title="Everything for the course in one place"
            lead="The teacher dashboard shows this month’s exams, answers waiting to be marked and the top students — and the question bank keeps every question’s rubric approved and ready for AI marking."
          />
          <Reveal>
            <BrowserFrame src="/images/screens/teacher-questions.webp" alt="Question bank with written questions and approved rubrics in Scholametrix e-Exam" />
          </Reveal>
        </Container>
      </Section>

      <Section labelledBy="students-title" className="bg-surface">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="order-2 lg:order-1">
            <BrowserFrame src="/images/screens/student-lessons.webp" alt="Typing course for students in Scholametrix e-Exam" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <Heading
              id="students-title"
              align="left"
              eyebrow="For students"
              title="Ready for online exams — on any device"
              lead="Students see their courses, upcoming exams, results and score trend in one place. A built-in typing course helps everyone write comfortably before exam day."
            />
            <div className="mt-8 flex items-end gap-5">
              <div className="relative w-36 shrink-0 overflow-hidden rounded-[22px] border-4 border-ink bg-ink shadow-float">
                <Image src="/images/screens/student-mobile.webp" alt="Scholametrix e-Exam student dashboard on a phone" width={560} height={1212} className="h-auto w-full rounded-[18px]" />
              </div>
              <p className="flex items-center gap-2 text-sm text-muted">
                <Smartphone className="size-4 text-brand-600" /> Works on phones, tablets and computers.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section labelledBy="priorities-title">
        <Container>
          <Heading
            id="priorities-title"
            eyebrow="Our priorities, in order"
            title={
              <>
                Integrity first. <Accent>Then</Accent> everything else.
              </>
            }
          />
          <ol className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-5">
            {[
              { icon: <ShieldCheck />, t: 'Integrity' },
              { icon: <CheckCheck />, t: 'Reliability' },
              { icon: <ShieldCheck />, t: 'Security' },
              { icon: <Timer />, t: 'Performance' },
              { icon: <BarChart3 />, t: 'Clean UI' },
            ].map((p, i) => (
              <li key={p.t} className="rounded-2xl border border-line bg-white p-5 text-center shadow-card">
                <p className="text-sm font-bold text-brand-600">{i + 1}</p>
                <p className="mt-1 font-display font-semibold">{p.t}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand
        title="Bring your exams online — with marking that keeps up"
        lead="We’ll set up the e-Exam platform for one department as a pilot, including your question bank and rubrics."
      />
    </>
  );
}
