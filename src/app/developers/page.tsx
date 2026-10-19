import { ArrowRight, KeyRound, Send, ShieldCheck, Webhook } from 'lucide-react';
import { CtaBand, PageHero } from '@/components/blocks';
import { CodeBlock } from '@/components/CodeBlock';
import { Reveal } from '@/components/Reveal';
import { Accent, ButtonLink, Card, Container, Heading, Section } from '@/components/ui';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'AI Marking API for EdTech, LMS and Exam Systems',
  description:
    'Add rubric-based AI marking to your LMS or exam system with the Scholametrix REST API: rubric drafting, batch evaluation, signed webhooks, progress and usage endpoints.',
  path: '/developers',
});

const ENDPOINTS: [string, string, string][] = [
  ['GET', '/v1/me', 'Check your key; see your project, plan and this month’s usage'],
  ['PUT', '/v1/webhook', 'Register where results are sent; returns your signing secret'],
  ['POST', '/v1/rubrics/draft', 'Draft a rubric from a question and model answer'],
  ['POST', '/v1/evaluations', 'Submit one question with up to 500 answers'],
  ['POST', '/v1/evaluations/try', 'Mark one sample answer straight away (nothing stored)'],
  ['GET', '/v1/evaluations/:id', 'One result: criterion marks, highlights, reasons'],
  ['GET', '/v1/evaluations', 'List results by group, updated since a time (for sync)'],
  ['GET', '/v1/groups/:groupId/progress', 'How far marking of an exam has got'],
  ['POST', '/v1/evaluations/:id/review', 'Record the teacher’s decision and final marks'],
  ['POST', '/v1/evaluations/:id/rerun', 'Mark an answer again'],
  ['GET', '/v1/usage', 'Answers and rubric drafts for a period'],
  ['GET', '/v1/billing', 'Your charges per month, split by your groups'],
];

const SUBMIT = `POST https://api.scholametrix.tech/v1/evaluations
Authorization: Bearer $SCHOLAMETRIX_API_KEY
Content-Type: application/json

{
  "groupId": "cse-3101-midterm",
  "question": {
    "externalId": "q2",
    "text": "Explain how TCP provides reliable delivery.",
    "modelAnswer": "Sequence numbers, cumulative ACKs, retransmission…",
    "maxMarks": 10,
    "markStep": 0.5,
    "rubric": {
      "criteria": [
        { "id": "c1", "criterion": "Sequence numbers", "marks": 2 },
        { "id": "c2", "criterion": "Acknowledgements", "marks": 2 }
      ]
    }
  },
  "answers": [
    { "externalId": "ans-1029", "text": "TCP gives each byte a sequence number…" }
  ]
}`;

const RESULT = `{
  "id": "1c0d…",
  "externalId": "ans-1029",
  "groupId": "cse-3101-midterm",
  "status": "completed",
  "maxMarks": 10,
  "suggestedScore": 8,
  "criteria": [
    { "id": "c1", "criterion": "Sequence numbers", "max": 2, "awarded": 2,
      "reason": "States sequence numbers allow reordering and detecting missing data." },
    { "id": "c5", "criterion": "Flow control", "max": 2, "awarded": 0,
      "reason": "Does not mention flow control or a sliding window." }
  ],
  "summary": "Explains sequence numbers, ACKs, retransmission and checksum, but omits flow control.",
  "highlights": [
    { "start": 0, "end": 133, "kind": "strength", "criterionId": "c1" }
  ],
  "missing": [{ "criterionId": "c5", "note": "No mention of flow control or sliding window." }],
  "review": null
}`;

const VERIFY = `import { createHmac, timingSafeEqual } from 'node:crypto';

// X-AMS-Signature: t=<unix seconds>,v1=<hex HMAC-SHA256 of "<t>.<raw body>">
export function verify(secret: string, rawBody: string, header?: string) {
  if (!header) return false;
  const parts = Object.fromEntries(header.split(',').map((p) => p.split('=')));
  const t = Number(parts.t);
  if (!Number.isFinite(t) || Math.abs(Date.now() / 1000 - t) > 300) return false;
  const expected = createHmac('sha256', secret).update(\`\${t}.\${rawBody}\`).digest();
  const given = Buffer.from(parts.v1 ?? '', 'hex');
  return given.length === expected.length && timingSafeEqual(given, expected);
}`;

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow="Developer API"
        title={
          <>
            Add AI marking to your product in an <Accent>afternoon</Accent>
          </>
        }
        lead="A small REST API with signed webhooks. Send written answers with a rubric; get back marks per criterion, highlight positions and reasons you can show teachers straight away."
        crumbs={[{ name: 'Developers', path: '/developers' }]}
        actions={
          <>
            <ButtonLink href="/contact" size="lg">
              Request API access <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/ai-evaluation" variant="secondary" size="lg">
              What the AI returns
            </ButtonLink>
          </>
        }
      />

      <Section className="pt-0 sm:pt-0 lg:pt-0" labelledBy="steps-title">
        <Container>
          <h2 id="steps-title" className="sr-only">
            Getting connected
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: <KeyRound />, t: '1 · Get a key', b: 'We create a project for you and send its API key privately. Check it with GET /v1/me.' },
              { icon: <Webhook />, t: '2 · Register your webhook', b: 'PUT /v1/webhook with your URL; you receive a signing secret for verifying results.' },
              { icon: <Send />, t: '3 · Submit answers', b: 'POST /v1/evaluations per question. Results arrive at your webhook, or sync them with GET.' },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06}>
                <Card className="h-full">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 [&_svg]:size-5">{s.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.b}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <section aria-labelledby="code-title" className="bg-navy-900 py-18 text-white sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 id="code-title" className="text-3xl font-bold text-white">
              Submit answers, get structured results
            </h2>
            <p className="mt-4 text-white/70">Answers are idempotent per <code className="text-aqua">externalId</code>, so retrying a request never marks twice. Use your exam ID as the <code className="text-aqua">groupId</code> to follow progress and costs per exam.</p>
            <CodeBlock className="mt-8" tabs={[{ label: 'Request', code: SUBMIT }]} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white lg:mt-[4.5rem]">The result</h3>
            <p className="mt-2 text-white/70">Highlights are character offsets into the answer text, ready to render.</p>
            <CodeBlock className="mt-6" tabs={[{ label: 'evaluation.completed', code: RESULT }]} />
          </div>
        </Container>
      </section>

      <Section labelledBy="endpoints-title">
        <Container>
          <Heading id="endpoints-title" eyebrow="Reference" title="Endpoints" />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-line shadow-card">
            <table className="w-full min-w-[640px] text-left text-[15px]">
              <thead className="bg-surface text-sm text-muted">
                <tr>
                  <th className="px-5 py-3 font-semibold">Method</th>
                  <th className="px-5 py-3 font-semibold">Path</th>
                  <th className="px-5 py-3 font-semibold">What it does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {ENDPOINTS.map(([m, p, d]) => (
                  <tr key={p + m}>
                    <td className="px-5 py-3">
                      <span className={`rounded-md px-2 py-0.5 font-mono text-xs font-semibold ${m === 'GET' ? 'bg-brand-50 text-brand-700' : m === 'POST' ? 'bg-earned-bg text-earned' : 'bg-partial-bg text-partial'}`}>{m}</span>
                    </td>
                    <td className="px-5 py-3 font-mono text-[13px]">{p}</td>
                    <td className="px-5 py-3 text-muted">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface" labelledBy="verify-title">
        <Container className="grid items-start gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Heading id="verify-title" align="left" eyebrow="Webhooks" title="Signed, retried, safe to replay" />
            <ul className="mt-8 space-y-4 text-[15px]">
              {[
                'Every delivery carries X-AMS-Signature: an HMAC-SHA256 over the timestamp and raw body.',
                'Reply 2xx within 10 seconds; failures retry with exponential backoff, up to 8 attempts.',
                'Deliveries can repeat or arrive out of order — upsert by evaluation id.',
                'Prefer polling? GET /v1/evaluations?groupId=…&updatedSince=… returns the same data.',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand-600" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <CodeBlock tabs={[{ label: 'Verify (Node.js)', code: VERIFY }]} />
        </Container>
      </Section>

      <Section labelledBy="limits-title">
        <Container className="max-w-4xl">
          <Heading id="limits-title" eyebrow="Limits" title="Generous defaults" />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              ['Answers per request', '500'],
              ['Characters per answer', '20,000'],
              ['Highlights per answer', 'Up to 8'],
              ['Rubric criteria', 'Up to 12'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between rounded-xl border border-line bg-white px-5 py-4 shadow-card">
                <dt className="text-muted">{k}</dt>
                <dd className="font-display text-lg font-bold">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-center text-muted">
            Full API documentation is shared with every project.{' '}
            <a href="/contact" className="font-medium text-brand-700 underline">
              Ask for access
            </a>
            .
          </p>
        </Container>
      </Section>

      <CtaBand title="Building an LMS or exam product?" lead="Tell us about your platform. We’ll set up a sandbox project and help you ship AI marking to your users." />
    </>
  );
}
