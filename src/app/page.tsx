import {
  ArrowRight,
  Blocks,
  BookOpenCheck,
  Building2,
  Check,
  Clock3,
  Code2,
  EyeOff,
  FileCheck2,
  Gauge,
  GraduationCap,
  Highlighter,
  KeyRound,
  Languages,
  Layers3,
  ListChecks,
  Lock,
  MessageSquareText,
  ScrollText,
  Server,
  ShieldCheck,
  Sparkles,
  Timer,
  UserCheck,
  Users,
  Wallet,
  Webhook,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BrowserFrame, CtaBand, Faq } from '@/components/blocks';
import { CodeBlock } from '@/components/CodeBlock';
import { JsonLd } from '@/components/JsonLd';
import { MarkingDemo } from '@/components/MarkingDemo';
import { Reveal } from '@/components/Reveal';
import { ReviewDemo } from '@/components/ReviewDemo';
import { Accent, ButtonLink, Card, Container, Eyebrow, Heading, LinkedInIcon, Section } from '@/components/ui';
import { FAQ_HOME, FOUNDERS } from '@/content/site';
import { pageMeta, productLd } from '@/lib/seo';
import { IntegrationFlow } from '@/components/IntegrationFlow';

export const metadata = pageMeta({
  title: 'Scholametrix — AI Evaluation for Written Exams | Fair, Fast, Teacher-Approved',
  description:
    'Mark written exam answers with AI against your own rubric. Marks per criterion, highlighted evidence and a clear reason for every answer — teachers approve every result. Connect your existing system or use our e-Exam platform.',
  path: '/',
});

const STEPS = [
  { icon: <ListChecks />, title: 'Set the rubric', body: 'Write criteria with marks — or let Scholametrix draft a balanced rubric from your model answer. You review and approve it.' },
  { icon: <FileCheck2 />, title: 'Students answer', body: 'In your existing exam system or LMS (connected by API), or in the Scholametrix e-Exam platform.' },
  { icon: <Sparkles />, title: 'AI suggests marks', body: 'Every answer gets marks per criterion, highlighted evidence, strengths, gaps and a short reason — in seconds.' },
  { icon: <UserCheck />, title: 'Teachers approve', body: 'Accept with one tick, or adjust any criterion and note why. Only approved marks ever reach students.' },
];

const PROBLEMS = [
  { icon: <Clock3 />, title: 'Weeks of marking', body: 'One course can mean hundreds of scripts. Results wait while teachers mark late into the night.' },
  { icon: <Users />, title: 'Inconsistent marks', body: 'Different markers — or the same marker on a tired evening — give the same answer different marks.' },
  { icon: <MessageSquareText />, title: 'A number, not a reason', body: 'Students rarely see why they lost marks, so they can’t learn from the exam they just sat.' },
];

const AUDIENCES = [
  { icon: <Building2 />, title: 'Universities', body: 'Faculty-wide written exams with department-level control, approval and audit trails.' },
  { icon: <GraduationCap />, title: 'Colleges & schools', body: 'Faster, consistent results for board-style written and short-answer exams.' },
  { icon: <BookOpenCheck />, title: 'Exam & admission bodies', body: 'Thousands of scripts marked to the same rubric, on schedule, every time.' },
  { icon: <Code2 />, title: 'EdTech & LMS companies', body: 'Add rubric-based AI evaluation to your own product with one API.' },
];

const SECURITY = [
  { icon: <EyeOff />, title: 'No training on student work', body: 'Answers are processed only to mark them, through zero-data-retention AI providers.' },
  { icon: <ShieldCheck />, title: 'Anonymous by design', body: 'Student names and IDs never reach the AI — only the answer text and an anonymous reference.' },
  { icon: <KeyRound />, title: 'Encrypted secrets', body: 'API keys are stored hashed; connection secrets are encrypted with AES-256-GCM.' },
  { icon: <Webhook />, title: 'Signed results', body: 'Every result is delivered by an HMAC-SHA256 signed, time-stamped webhook.' },
  { icon: <ScrollText />, title: 'Full audit trail', body: 'Who approved or changed which mark, and when — recorded for every answer.' },
  { icon: <Server />, title: 'Your cloud or ours', body: 'Use our hosted service, or run it on your own servers for full data residency.' },
];

const CURL = `curl https://api.scholametrix.tech/v1/evaluations \\
  -H "Authorization: Bearer $SCHOLAMETRIX_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "groupId": "cse-3101-midterm",
    "question": {
      "externalId": "q2",
      "text": "Explain how TCP provides reliable delivery.",
      "modelAnswer": "Sequence numbers, ACKs, retransmission…",
      "maxMarks": 10, "markStep": 0.5,
      "rubric": { "criteria": [ … ] }
    },
    "answers": [{ "externalId": "ans-1029", "text": "TCP gives each byte…" }]
  }'`;

const NODE = `const res = await fetch('https://api.scholametrix.tech/v1/evaluations', {
  method: 'POST',
  headers: {
    Authorization: \`Bearer \${process.env.SCHOLAMETRIX_API_KEY}\`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ groupId, question, answers }),
});
// Suggested marks arrive at your webhook, signed with X-AMS-Signature.`;

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={productLd({
          name: 'Scholametrix AI Evaluation',
          description: 'Rubric-based AI marking for written exam answers with teacher approval, in English and Bangla.',
          path: '/ai-evaluation',
        })}
      />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative -mt-18 overflow-hidden pt-18" aria-labelledby="hero-title">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" aria-hidden />
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_65%)]" aria-hidden />
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-aqua/25 blur-3xl" aria-hidden />
        <Container className="relative pt-14 text-center sm:pt-20">
          <div className="animate-rise" style={{ animationDelay: '0ms' }}>
            <Link
              href="/case-studies/university-of-rajshahi"
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 py-1.5 pr-4 pl-1.5 text-[13px] font-medium text-ink/80 shadow-card backdrop-blur hover:text-brand-700"
            >
              <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-[11px] font-semibold text-white">Live</span>
              Now marking exams at the University of Rajshahi
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="animate-rise" style={{ animationDelay: '50ms' }}>
            <h1 id="hero-title" className="mx-auto mt-7 max-w-4xl text-[2.6rem] leading-[1.04] font-extrabold sm:text-6xl lg:text-[4.4rem]">
              Mark written exams in hours, not weeks — <Accent>fairly.</Accent>
            </h1>
          </div>
          <div className="animate-rise" style={{ animationDelay: '100ms' }}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Scholametrix reads every answer against your rubric, suggests marks for each criterion, highlights the evidence and explains the reason. Your teachers approve every mark with one tick.
            </p>
          </div>
          <div className="animate-rise" style={{ animationDelay: '150ms' }}>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/pilot" size="lg">
                Start a free pilot <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary" size="lg">
                See how it works
              </ButtonLink>
            </div>
            <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink/70">
              {['Teacher-approved marks', 'English & বাংলা', 'Works with your system', 'Zero-data-retention AI'].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <Check className="size-4 text-brand-600" strokeWidth={2.5} /> {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <Container className="relative mt-14 pb-20 sm:mt-16 sm:pb-24">
          <div className="animate-rise" style={{ animationDelay: '220ms' }}>
            <div className="relative rounded-[32px] bg-brand-gradient p-3 shadow-float sm:p-6 lg:p-10">
              <div className="bg-dots pointer-events-none absolute inset-0 rounded-[32px] opacity-60" aria-hidden />
              <div className="relative mx-auto max-w-[980px]">
                <MarkingDemo />
              </div>
              <div className="animate-float pointer-events-none absolute top-16 -left-16 hidden rounded-2xl bg-white px-4 py-3 text-left shadow-float xl:block" aria-hidden>
                <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-muted uppercase">
                  <Timer className="size-3.5 text-brand-600" /> Suggested in
                </p>
                <p className="font-display text-xl font-extrabold">7.7 seconds</p>
              </div>
              <div className="animate-float-slow pointer-events-none absolute -right-16 -bottom-6 hidden rounded-2xl bg-white px-4 py-3 text-left shadow-float xl:block" aria-hidden>
                <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-muted uppercase">
                  <Languages className="size-3.5 text-brand-600" /> Languages
                </p>
                <p className="font-display text-xl font-extrabold">
                  English · <span className="font-bangla">বাংলা</span>
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-[13px] text-muted">
              A real answer, marked by the Scholametrix AI against a five-criterion rubric. Replayed step by step.
            </p>
          </div>
        </Container>
      </section>

      {/* ── First client ───────────────────────────────────────────────────── */}
      <section aria-label="Our first client" className="border-y border-line bg-surface/60">
        <Container className="flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
          <p className="text-sm font-semibold tracking-[0.14em] text-muted uppercase">Our first client</p>
          <Link href="/case-studies/university-of-rajshahi" className="group flex items-center gap-4">
            <Image src="/images/ru-logo.png" alt="University of Rajshahi logo" width={52} height={52} className="size-13 object-contain" />
            <span className="text-left">
              <span className="block font-display text-lg font-bold group-hover:text-brand-700">University of Rajshahi</span>
              <span className="block text-sm text-muted">Online exams and AI-assisted written marking</span>
            </span>
          </Link>
          <ButtonLink href="/case-studies/university-of-rajshahi" variant="secondary" size="sm">
            Read the case study <ArrowRight />
          </ButtonLink>
        </Container>
      </section>

      {/* ── Problem ────────────────────────────────────────────────────────── */}
      <Section labelledBy="problem-title">
        <Container>
          <Heading
            id="problem-title"
            eyebrow="The problem"
            title={
              <>
                Written exams are the best test of understanding — and the <Accent>hardest</Accent> to mark.
              </>
            }
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Card className="h-full p-7">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-missing-bg text-missing [&_svg]:size-6">{p.icon}</div>
                  <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── How it works ───────────────────────────────────────────────────── */}
      <Section id="how-it-works" labelledBy="how-title" className="bg-surface">
        <Container>
          <Heading
            id="how-title"
            eyebrow="How it works"
            title={
              <>
                From rubric to released results in <Accent>four</Accent> steps
              </>
            }
            lead="Scholametrix fits around the way your teachers already mark — it just does the first careful read for them."
          />
          <div className="relative mt-16">
          <div className="pointer-events-none absolute top-7 right-[12%] left-[12%] hidden h-0.5 bg-gradient-to-r from-brand-100 via-brand-600/40 to-brand-100 lg:block" aria-hidden />
          <ol className="relative grid gap-10 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.1} className="relative">
                <div className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow [&_svg]:size-6 lg:mx-0">
                  {s.icon}
                </div>
                <p className="mt-6 text-sm font-semibold text-brand-600">Step {i + 1}</p>
                <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </ol>
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/how-it-works" variant="secondary">
              The full walkthrough <ArrowRight />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ── Features bento ─────────────────────────────────────────────────── */}
      <Section labelledBy="features-title">
        <Container>
          <Heading
            id="features-title"
            eyebrow="What you get"
            title={
              <>
                Everything a careful examiner does — at the <Accent>speed</Accent> of software
              </>
            }
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-6">
            <Reveal className="lg:col-span-4">
              <Card flush className="h-full overflow-hidden">
                <div className="p-7 pb-0">
                  <Highlighter className="size-6 text-brand-600" />
                  <h3 className="mt-4 text-2xl font-semibold">Highlighted evidence, mark by mark</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-muted">
                    The exact phrases that earned each mark are highlighted on the student’s own answer — and anything missing is called out against the rubric.
                  </p>
                </div>
                <div className="mt-6 border-t border-line bg-surface/70 p-6 text-[14.5px] leading-[1.8]">
                  <mark className="mark-earned">TCP gives each byte a sequence number, so the receiver can put segments back in the right order</mark> and notice when something is missing.{' '}
                  <mark className="mark-earned">The receiver sends an ACK back for the data it got.</mark> It is connection oriented…
                  <p className="mt-3 flex items-center gap-2 text-[13px] font-medium text-missing">
                    <span className="size-2 rounded-full bg-missing" /> Missing: flow control with a sliding window (0 / 2)
                  </p>
                </div>
              </Card>
            </Reveal>
            <Reveal className="lg:col-span-2" delay={0.08}>
              <div className="flex h-full flex-col rounded-2xl bg-navy p-7 text-white shadow-card">
                <ListChecks className="size-6 text-aqua" />
                <h3 className="mt-4 text-2xl font-semibold text-white">Rubric drafting</h3>
                <p className="mt-2 leading-relaxed text-white/70">Paste a model answer; get a balanced rubric where marks add up and every criterion traces back to the answer.</p>
                <div className="mt-auto space-y-2 pt-6">
                  {['Sequence numbers · 2', 'Acknowledgements · 2', 'Retransmission · 2'].map((r) => (
                    <div key={r} className="flex items-center gap-2 rounded-lg bg-white/8 px-3 py-2 text-[13px] text-white/85">
                      <Check className="size-3.5 text-aqua" /> {r}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            {[
              { icon: <Layers3 />, title: 'Marks per criterion', body: 'Not one opaque number: a mark for each criterion, rounded to your mark step (e.g. 0.5).' },
              { icon: <MessageSquareText />, title: 'Why this mark', body: 'A short, plain reason the teacher can check — and the student can learn from.' },
              { icon: <Languages />, title: 'English & বাংলা', body: 'Bangla script, English and mixed answers with formulas — highlights land on the right words.' },
              { icon: <Gauge />, title: 'Built for exam day', body: 'Small exams are marked in real time; huge exams queue and finish steadily without slowing anyone down.' },
              { icon: <Blocks />, title: 'Smart skips', body: 'Blank answers get zero instantly and identical answers reuse the first result — you never pay twice.' },
              { icon: <Wallet />, title: 'Cost control', body: 'A clear price per answer, monthly usage limits and a statement every month.' },
            ].map((f, i) => (
              <Reveal key={f.title} className="lg:col-span-2" delay={(i % 3) * 0.06}>
                <Card className="h-full p-7">
                  <div className="text-brand-600 [&_svg]:size-6">{f.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Teacher in control ─────────────────────────────────────────────── */}
      <Section labelledBy="control-title" className="bg-surface">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Heading
              id="control-title"
              align="left"
              eyebrow="Human in the loop"
              title={
                <>
                  The AI suggests. Your teachers <Accent>decide.</Accent>
                </>
              }
              lead="Every Scholametrix mark starts as a suggestion. Teachers see the highlighted answer, the reason and the criterion marks side by side — then accept with a tick or adjust."
            />
            <ul className="mt-8 space-y-4">
              {[
                'Nothing reaches a student without a teacher’s approval',
                'Adjust any criterion and record why — raising a mark requires a reason',
                'Every decision is stored, so you can measure how often teachers agree with the AI',
              ].map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              On the right: a real Bangla answer and the AI’s real suggestion. The AI gave full marks for “required materials” even though chlorophyll is missing — the teacher catches it and adjusts. That’s the point of review.
            </p>
          </div>
          <Reveal>
            <ReviewDemo />
          </Reveal>
        </Container>
      </Section>

      {/* ── Two ways ───────────────────────────────────────────────────────── */}
      <Section labelledBy="ways-title">
        <Container>
          <Heading
            id="ways-title"
            eyebrow="Two ways to use Scholametrix"
            title={
              <>
                Plug AI evaluation into your system — or use <Accent>ours</Accent>
              </>
            }
            lead="Our core service is AI evaluation. Connect it to the exam system or LMS you already run, or adopt our complete e-Exam platform with AI marking built in."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="flex h-full flex-col p-8">
                <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">Most institutions start here</span>
                <h3 className="mt-5 text-2xl font-bold">AI Evaluation for your existing system</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Keep your exam system, LMS or portal. Connect it to Scholametrix with an API key: send written answers, receive suggested marks through a signed webhook, show them to teachers for approval.
                </p>
                <IntegrationFlow />
                <ul className="mt-6 grid gap-2.5 text-[15px] sm:grid-cols-2">
                  {['REST API + webhooks', 'Rubric drafting', 'Per-criterion marks', 'Usage & billing reports'].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check className="size-4 text-brand-600" /> {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <ButtonLink href="/ai-evaluation">
                    Explore AI Evaluation <ArrowRight />
                  </ButtonLink>
                  <ButtonLink href="/developers" variant="secondary">
                    API docs
                  </ButtonLink>
                </div>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card flush className="flex h-full flex-col overflow-hidden">
                <div className="p-8 pb-0">
                  <span className="w-fit rounded-full bg-surface px-3 py-1 text-xs font-semibold text-ink/70 ring-1 ring-line">Complete platform</span>
                  <h3 className="mt-5 text-2xl font-bold">Scholametrix e-Exam Platform</h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    No online exam system yet? Get ours: question bank, exam approval, timed exams with autosave, automatic MCQ marking, AI-assisted written marking, results and reports.
                  </p>
                  <ButtonLink href="/e-exam" variant="secondary" className="mt-6">
                    Explore e-Exam <ArrowRight />
                  </ButtonLink>
                </div>
                <div className="mt-8 px-8">
                  <BrowserFrame src="/images/screens/teacher-dashboard.webp" alt="Scholametrix e-Exam teacher dashboard with exam calendar, submissions and top students" className="-mb-px rounded-b-none" />
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── Audiences ──────────────────────────────────────────────────────── */}
      <Section labelledBy="who-title" className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <Heading id="who-title" eyebrow="Who it’s for" title="Built for everyone who marks written answers" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <Card className="h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 [&_svg]:size-5">{a.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{a.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Case study ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="case-title" className="py-6">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] bg-navy text-white">
            <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
            <div className="pointer-events-none absolute -right-40 -bottom-40 size-[520px] rounded-full bg-brand-500/30 blur-3xl" aria-hidden />
            <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.15fr] lg:p-16">
              <div>
                <Eyebrow tone="dark">Case study</Eyebrow>
                <h2 id="case-title" className="mt-4 text-[2rem] leading-tight font-bold text-white sm:text-4xl">
                  The University of Rajshahi runs its online exams on Scholametrix
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/75">
                  Our first client. Departments build question banks with rubrics, students sit timed online exams, and written answers arrive in the teacher’s evaluation workspace with AI-suggested marks already waiting.
                </p>
                <ButtonLink href="/case-studies/university-of-rajshahi" variant="white" className="mt-8">
                  Read the case study <ArrowRight />
                </ButtonLink>
              </div>
              <Reveal>
                <BrowserFrame src="/images/screens/student-dashboard.webp" alt="Student dashboard on the University of Rajshahi e-Exam system powered by Scholametrix" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Security ───────────────────────────────────────────────────────── */}
      <Section labelledBy="security-title">
        <Container>
          <Heading
            id="security-title"
            eyebrow="Security & privacy"
            title={
              <>
                Student data, treated like exam papers — <Accent>locked</Accent> down
              </>
            }
          />
          <div className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 [&_svg]:size-5">{s.icon}</div>
                <div>
                  <h3 className="text-[17px] font-semibold">{s.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/security" variant="secondary">
              <Lock /> Read our security approach
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ── Developers ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="dev-title" className="bg-navy-900 py-18 text-white sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow tone="dark">For developers</Eyebrow>
            <h2 id="dev-title" className="mt-4 text-[2rem] leading-tight font-bold text-white sm:text-[2.6rem]">
              Three calls to add AI evaluation to any system
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">Check your key, register your webhook, submit answers. Results come back signed, with marks per criterion and highlight positions you can render directly.</p>
            <ul className="mt-7 grid gap-3 text-[15px] text-white/85 sm:grid-cols-2">
              {['REST + JSON', 'Signed webhooks', 'Idempotent per answer', 'Progress per exam'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-4 text-aqua" /> {t}
                </li>
              ))}
            </ul>
            <ButtonLink href="/developers" variant="white" className="mt-9">
              Read the API overview <ArrowRight />
            </ButtonLink>
          </div>
          <Reveal>
            <CodeBlock
              tabs={[
                { label: 'cURL', code: CURL },
                { label: 'Node.js', code: NODE },
              ]}
            />
          </Reveal>
        </Container>
      </section>

      {/* ── Team ───────────────────────────────────────────────────────────── */}
      <Section labelledBy="team-title">
        <Container>
          <Heading
            id="team-title"
            eyebrow="The founders"
            title={
              <>
                Built by people who know the <Accent>exam hall</Accent>
              </>
            }
            lead="Scholametrix started at the University of Rajshahi. We build every part of it ourselves — from the AI evaluation engine to the screens teachers mark on."
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08}>
                <Card flush className="group h-full overflow-hidden">
                  <div className="relative aspect-[4/4.2] overflow-hidden bg-brand-50">
                    <Image src={f.image} alt={`${f.name}, ${f.role} of Scholametrix`} fill sizes="(min-width: 640px) 440px, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <h3 className="text-xl font-bold">{f.name}</h3>
                      <p className="mt-0.5 font-medium text-brand-600">{f.role}</p>
                    </div>
                    <a href={f.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${f.name} on LinkedIn`} className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors hover:bg-brand-600 hover:text-white">
                      <LinkedInIcon className="size-4.5" />
                    </a>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/about" variant="secondary">
              Our story <ArrowRight />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ── Partners ───────────────────────────────────────────────────────── */}
      <section aria-labelledby="partner-title" className="pb-6">
        <Container>
          <div className="grid items-center gap-8 rounded-[28px] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-[#e9fbff] p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Eyebrow>Partners & sponsors</Eyebrow>
              <h2 id="partner-title" className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
                Help us bring fair marking to every classroom
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">We’re looking for pilot institutions, research partners and sponsors who believe written exams deserve fast, consistent and explained marks.</p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <ButtonLink href="/partners" size="lg">
                Partner with us <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/partners#sponsor" variant="secondary" size="lg">
                Sponsorship options
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <Section labelledBy="faq-title">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Heading id="faq-title" align="left" eyebrow="FAQ" title="Questions institutions ask us" />
            <p className="mt-5 leading-relaxed text-muted">
              Something else on your mind?{' '}
              <Link href="/contact" className="font-medium text-brand-700 underline">
                Ask us directly
              </Link>
              .
            </p>
          </div>
          <Faq items={FAQ_HOME} />
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
