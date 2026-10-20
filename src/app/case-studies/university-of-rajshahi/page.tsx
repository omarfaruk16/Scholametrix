import Image from 'next/image';
import { ListChecks as IListChecks, Timer as ITimer, Sparkles as ISparkles, BarChart3 as IBarChart3 } from 'lucide-react';
import { OrbitArt, DevicesArt, FlowArt, ReceiptArt, ChecklistArt } from '@/components/art';
import { Check, Clock3, FileStack, Users } from 'lucide-react';
import { BrowserFrame, CtaBand, PageHero } from '@/components/blocks';
import { Reveal } from '@/components/Reveal';
import { Accent, Card, Container, Heading, Section } from '@/components/ui';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Case Study: University of Rajshahi Online Exams with AI-Assisted Marking',
  description:
    'How the University of Rajshahi, our first client, runs online examinations on the Scholametrix e-Exam platform with AI-suggested marks for written answers and teacher approval.',
  path: '/case-studies/university-of-rajshahi',
});

export default function RuCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case study"
        title={
          <>
            Our <Accent>first client</Accent>: University of Rajshahi
          </>
        }
        lead="One of Bangladesh’s largest public universities runs its online examinations on the Scholametrix e-Exam platform, with AI-suggested marks for written answers and teachers approving every result."
        crumbs={[{ name: 'Case study: University of Rajshahi', path: '/case-studies/university-of-rajshahi' }]}
        art={<OrbitArt light center={<Image src="/images/ru-logo.png" alt="" width={80} height={80} />} items={[{ icon: <IListChecks />, label: 'Rubrics' }, { icon: <ITimer />, label: 'Online exams' }, { icon: <ISparkles />, label: 'AI marking' }, { icon: <IBarChart3 />, label: 'Results' }]} />}
      >
        <div className="mt-10 flex items-center gap-4">
          <Image src="/images/ru-logo.png" alt="University of Rajshahi logo" width={64} height={64} className="size-16 object-contain" />
          <div>
            <p className="font-display text-lg font-bold">University of Rajshahi</p>
            <p className="text-sm text-muted">Rajshahi, Bangladesh · Public university · e-exam.ru.ac.bd</p>
          </div>
        </div>
      </PageHero>

      <Section className="pt-0 sm:pt-0 lg:pt-0" labelledBy="challenge-title">
        <Container className="grid gap-6 md:grid-cols-3">
          <h2 id="challenge-title" className="sr-only">
            The challenge
          </h2>
          {[
            { icon: <Users />, t: 'Many departments', b: 'Exams across faculties and departments, each with its own teachers, courses and approval process.' },
            { icon: <FileStack />, t: 'Written answers', b: 'Short and long written answers that a teacher has to read one by one. They are the slowest part of every result.' },
            { icon: <Clock3 />, t: 'Results that wait', b: 'Students waiting weeks for marks, with little explanation of what they missed.' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <Card className="h-full">
                <div className="flex size-11 items-center justify-center rounded-xl bg-missing-bg text-missing [&_svg]:size-5">{c.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.b}</p>
              </Card>
            </Reveal>
          ))}
        </Container>
      </Section>

      <Section className="bg-surface" labelledBy="solution-title">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Heading id="solution-title" align="left" eyebrow="The solution" title="One platform, from question bank to published result" />
            <ul className="mt-8 space-y-4">
              {[
                'Teachers build question banks by course, with a rubric approved for every written question',
                'Department heads and admins review and approve exams before they go live',
                'Students sit timed exams online; answers save as they type',
                'MCQs are marked instantly; written answers get AI-suggested marks per criterion',
                'Teachers accept or adjust each suggestion in the evaluation workspace',
                'Results publish automatically once every answer is approved',
              ].map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand-600" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <BrowserFrame src="/images/screens/exam-login.webp" alt="University of Rajshahi e-Exam sign-in page, powered by Scholametrix" />
          </Reveal>
        </Container>
      </Section>

      <Section labelledBy="screens-title">
        <Container>
          <Heading id="screens-title" eyebrow="Inside the platform" title="What teachers and students use every day" />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <BrowserFrame src="/images/screens/teacher-dashboard.webp" alt="Teacher dashboard at the University of Rajshahi" />
              <p className="mt-3 text-center text-sm text-muted">Teacher dashboard: exams, answers to mark, top students</p>
            </Reveal>
            <Reveal delay={0.08}>
              <BrowserFrame src="/images/screens/student-dashboard.webp" alt="Student dashboard at the University of Rajshahi" />
              <p className="mt-3 text-center text-sm text-muted">Student dashboard: courses, exams, scores, typing practice</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Want the same for your institution?"
        lead="Start with a free pilot for one department: the same platform, the same AI evaluation, your teachers in charge."
      />
    </>
  );
}
