import { ArrowRight, Ban, Check, CircleAlert, Copy, FileText, Gauge, Highlighter, Languages, Layers3, ListChecks, MessageSquareText, Scale, Sparkles, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Sparkles as ISparkles, ListChecks as IListChecks, Layers3 as ILayers3, Highlighter as IHighlighter, MessageSquareText as IMessageSquareText, Languages as ILanguages, UserCheck as IUserCheck } from 'lucide-react';
import { OrbitArt, DevicesArt, FlowArt, ReceiptArt, ChecklistArt } from '@/components/art';
import { CtaBand, Faq, Feature } from '@/components/blocks';
import { PageHero } from '@/components/blocks';
import { IntegrationFlow } from '@/components/IntegrationFlow';
import { JsonLd } from '@/components/JsonLd';
import { MarkingDemo } from '@/components/MarkingDemo';
import { Reveal } from '@/components/Reveal';
import { Accent, ButtonLink, Card, Container, Heading, Section } from '@/components/ui';
import demo from '@/content/demo-marking.json';
import { pageMeta, productLd } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'AI Evaluation: Rubric-Based Marking for Written Answers',
  description:
    'Scholametrix AI Evaluation marks written and essay answers against your rubric: marks per criterion, highlighted evidence, strengths, gaps and a clear reason. English & Bangla. Teachers approve every mark.',
  path: '/ai-evaluation',
});

const ANATOMY = [
  { icon: <Layers3 />, title: 'Marks per criterion', body: 'Each rubric criterion gets its own mark and a one-line reason, rounded to your mark step.' },
  { icon: <Highlighter />, title: 'Highlighted evidence', body: 'The phrases that earned marks are highlighted on the answer itself, linked to their criterion.' },
  { icon: <MessageSquareText />, title: 'Why this mark', body: 'A short summary of what the answer did well and what it missed, written for a teacher to check.' },
  { icon: <ThumbsUp />, title: 'Strengths', body: 'What the student understood. Useful feedback when results are released.' },
  { icon: <ThumbsDown />, title: 'Weaknesses', body: 'Misconceptions or vague points that cost marks.' },
  { icon: <CircleAlert />, title: 'Missing points', body: 'Rubric points the answer never reached, so teachers can see the gap at a glance.' },
];

const FAQ = [
  {
    q: 'What kinds of questions can Scholametrix mark?',
    a: 'Short answers, structured answers and essays: any written answer that can be marked against criteria. MCQs don’t need AI: the e-Exam platform marks them instantly.',
  },
  {
    q: 'Do we have to write rubrics?',
    a: 'A rubric is what makes marking fair, so yes, but you don’t have to start from a blank page. Paste the model answer and Scholametrix drafts a rubric whose marks add up and whose criteria all trace back to the model answer. Teachers edit and approve it.',
  },
  {
    q: 'Will two identical answers get the same mark?',
    a: 'Yes. Identical answers to the same question and rubric reuse the first result instead of being marked again, and the model runs with fixed settings so marking is as consistent as possible.',
  },
  {
    q: 'What happens with blank or off-topic answers?',
    a: 'Blank answers get zero immediately without calling the AI. Off-topic or pleading answers (“please give me marks”) get the marks the rubric allows (usually none) with a reason the teacher can see.',
  },
];

export default function AiEvaluationPage() {
  const m = demo.en;
  return (
    <>
      <JsonLd data={productLd({ name: 'Scholametrix AI Evaluation', description: 'Rubric-based AI marking for written exam answers with teacher approval.', path: '/ai-evaluation' })} />
      <PageHero
        eyebrow="AI Evaluation"
        title={
          <>
            AI marking that <Accent>shows its work</Accent>
          </>
        }
        lead="Marks for every rubric criterion, the evidence highlighted on the answer, and a clear reason, reviewed and approved by your teachers. Connect it to your existing system or use it inside our e-Exam platform."
        crumbs={[{ name: 'AI Evaluation', path: '/ai-evaluation' }]}
        art={<OrbitArt center={<ISparkles />} items={[{ icon: <IListChecks />, label: 'Rubric' }, { icon: <ILayers3 />, label: 'Marks' }, { icon: <IHighlighter />, label: 'Evidence' }, { icon: <IMessageSquareText />, label: 'Reason' }, { icon: <ILanguages />, label: 'বাংলা' }, { icon: <IUserCheck />, label: 'Approve' }]} />}
        actions={
          <>
            <ButtonLink href="/pilot" size="lg">
              Start a free pilot <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/developers" variant="secondary" size="lg">
              API overview
            </ButtonLink>
          </>
        }
      />

      <Section labelledBy="demo-title" className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <h2 id="demo-title" className="sr-only">
            A marked answer
          </h2>
          <Reveal>
            <div className="rounded-[32px] bg-brand-gradient p-3 sm:p-8">
              <div className="mx-auto max-w-[980px]">
                <MarkingDemo />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section labelledBy="anatomy-title" className="bg-surface">
        <Container>
          <Heading
            id="anatomy-title"
            eyebrow="Anatomy of a marked answer"
            title={
              <>
                Everything a teacher needs to <Accent>decide</Accent> in seconds
              </>
            }
            lead={`For the answer above, the AI awarded ${m.score} out of ${m.maxMarks}: four criteria fully met, and flow control missing. Here’s what each result contains.`}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ANATOMY.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.06}>
                <Card className="h-full">
                  <div className="text-brand-600 [&_svg]:size-6">{a.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{a.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Card>
              <p className="text-sm font-semibold text-earned">Strengths the AI found</p>
              <ul className="mt-3 space-y-2">
                {m.strengths.map((s) => (
                  <li key={s} className="flex gap-2 text-[15px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-earned" /> {s}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <p className="text-sm font-semibold text-missing">What it missed</p>
              <ul className="mt-3 space-y-2">
                {m.weaknesses.map((s) => (
                  <li key={s} className="flex gap-2 text-[15px]">
                    <CircleAlert className="mt-0.5 size-4 shrink-0 text-missing" /> {s}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section labelledBy="rubric-title">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Heading
              id="rubric-title"
              align="left"
              eyebrow="Rubric drafting"
              title={
                <>
                  From model answer to rubric in <Accent>seconds</Accent>
                </>
              }
              lead="A good rubric is the foundation of fair marking. Scholametrix drafts one from your model answer and checks it before a teacher ever sees it."
            />
            <ul className="mt-8 space-y-3">
              {['Criteria marks add up to the question’s total', 'Marks use your mark step (e.g. 0.5)', 'Every criterion traces back to the model answer', 'Teachers edit, approve or draft again'].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand-600" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <Card flush>
              <div className="border-b border-line p-5">
                <p className="text-xs font-semibold tracking-wider text-muted uppercase">Draft rubric · {m.maxMarks} marks</p>
              </div>
              <ul className="divide-y divide-line">
                {m.criteria.map((c) => (
                  <li key={c.id} className="flex items-center gap-4 px-5 py-4">
                    <ListChecks className="size-4 shrink-0 text-brand-600" />
                    <span className="flex-1 text-[15px]">{c.criterion}</span>
                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-sm font-semibold text-brand-700 tabular-nums">{c.max}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-line bg-surface/70 px-5 py-3.5 text-sm">
                <span className="flex items-center gap-1.5 font-medium text-earned">
                  <Check className="size-4" /> Marks add up to {m.maxMarks}
                </span>
                <span className="font-semibold text-brand-700">Approve rubric</span>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>

      <Section labelledBy="design-title" className="bg-surface">
        <Container>
          <Heading id="design-title" eyebrow="Consistent by design" title="Built to mark the way a careful examiner would" />
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <Feature icon={<Scale />} title="Same rules for every student">
              The same rubric, prompt, model and settings for every answer to a question. No tired evenings.
            </Feature>
            <Feature icon={<FileText />} title="Totals that always add up">
              Marks are recomputed on our servers: clamped to each criterion’s maximum and rounded to your mark step.
            </Feature>
            <Feature icon={<Languages />} title="English & Bangla">
              Highlights are located in the original text: Bangla script, English, mixed answers and formulas.
            </Feature>
            <Feature icon={<Gauge />} title="Fast at any scale">
              A real-time lane for classes and a steady queue for exams with thousands of scripts.
            </Feature>
            <Feature icon={<Copy />} title="Duplicates marked once">
              Identical answers reuse the first result. Consistent, and never charged twice.
            </Feature>
            <Feature icon={<Ban />} title="Blank answers skipped">
              Empty answers get zero instantly, without an AI call.
            </Feature>
          </div>
        </Container>
      </Section>

      <Section labelledBy="connect-title">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading
              id="connect-title"
              align="left"
              eyebrow="Works with your system"
              title={
                <>
                  Keep your exam system. <Accent>Add</Accent> AI evaluation.
                </>
              }
              lead="Most institutions already run an exam portal or LMS. Scholametrix connects to it with an API key: your system sends written answers, results come back through a signed webhook, and your teachers approve them where they already work."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/developers">
                See the API <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/e-exam" variant="secondary">
                Or use our e-Exam platform
              </ButtonLink>
            </div>
          </div>
          <Reveal>
            <IntegrationFlow />
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <Sparkles className="size-4 text-brand-600" /> Student names and IDs never leave your system.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section labelledBy="faq-title" className="bg-surface">
        <Container className="max-w-3xl">
          <Heading id="faq-title" eyebrow="FAQ" title="About AI evaluation" />
          <div className="mt-10">
            <Faq items={FAQ} />
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
