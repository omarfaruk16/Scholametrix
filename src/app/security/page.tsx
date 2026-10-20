import { Database, EyeOff, Fingerprint, KeyRound, Lock, ScrollText, Server, ShieldCheck, UserCheck, Webhook } from 'lucide-react';
import { ShieldCheck as IShieldCheck, Lock as ILock, KeyRound as IKeyRound, Webhook as IWebhook, ScrollText as IScrollText, EyeOff as IEyeOff } from 'lucide-react';
import { OrbitArt, DevicesArt, FlowArt, ReceiptArt, ChecklistArt } from '@/components/art';
import { CtaBand, Faq, Feature, PageHero } from '@/components/blocks';
import { Reveal } from '@/components/Reveal';
import { Accent, Container, Heading, Section } from '@/components/ui';
import { SITE } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Security & Data Privacy',
  description:
    'How Scholametrix protects exam data: zero-data-retention AI providers, no training on student answers, anonymous processing, encrypted secrets, signed webhooks, role-based access and audit logs.',
  path: '/security',
});

const GROUPS = [
  {
    title: 'Student data',
    items: [
      { icon: <EyeOff />, t: 'Never used for training', b: 'Answers are processed only to mark them. AI providers are restricted to zero-data-retention hosts.' },
      { icon: <Fingerprint />, t: 'Anonymous processing', b: 'The AI service never receives student names or IDs. It only sees the answer text and an anonymous reference your system maps back.' },
      { icon: <UserCheck />, t: 'A teacher decides every mark', b: 'AI output is stored as a suggestion. Nothing is released to students without a teacher’s approval.' },
    ],
  },
  {
    title: 'Access & accountability',
    items: [
      { icon: <ShieldCheck />, t: 'Role-based access', b: 'Admins, department heads, teachers and students each see only their own scope: faculty, department or course.' },
      { icon: <Lock />, t: 'Strong sign-in', b: 'Hashed passwords, rate-limited sign-in and two-factor authentication for administrators.' },
      { icon: <ScrollText />, t: 'Audit log', b: 'Approvals, mark changes, publishing and configuration changes are recorded with who and when.' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { icon: <KeyRound />, t: 'Encrypted secrets', b: 'API keys are stored as hashes. Connection secrets are encrypted with AES-256-GCM and only ever shown masked.' },
      { icon: <Webhook />, t: 'Signed integrations', b: 'Results are delivered with an HMAC-SHA256 signature and timestamp, so they can’t be forged or replayed.' },
      { icon: <Database />, t: 'Private databases', b: 'Databases and queues are never exposed to the internet. All traffic is encrypted with TLS.' },
      { icon: <Server />, t: 'Your servers, if you prefer', b: 'Institutions with strict data-residency rules can run the evaluation service on their own infrastructure.' },
    ],
  },
];

const FAQ = [
  { q: 'Where is data processed?', a: 'Our hosted service runs on dedicated servers. AI marking calls go to zero-data-retention model hosts. If your policy requires it, the service can run entirely on your own servers.' },
  { q: 'Who can see student answers?', a: 'In the e-Exam platform, only the teachers assigned to the course and the administrators of that scope. The AI service sees answer text without names or IDs.' },
  { q: 'Can we get our data out?', a: 'Yes. Results, mark sheets and reports export to Excel, and API customers keep all results in their own system.' },
  { q: 'Do you have a security contact?', a: `Yes. Email ${SITE.email} with “Security” in the subject. We respond to security reports as a priority.` },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & privacy"
        title={
          <>
            Built for exam-grade <Accent>security</Accent>
          </>
        }
        lead="Exam answers are sensitive. Scholametrix is designed so that student data stays private, every mark is accountable, and your institution stays in control."
        crumbs={[{ name: 'Security', path: '/security' }]}
        art={<OrbitArt center={<IShieldCheck />} items={[{ icon: <ILock />, label: 'Encrypted' }, { icon: <IKeyRound />, label: 'Hashed keys' }, { icon: <IWebhook />, label: 'Signed results' }, { icon: <IScrollText />, label: 'Audit log' }, { icon: <IEyeOff />, label: 'No training' }]} />}
      />
      {GROUPS.map((g, gi) => (
        <Section key={g.title} className={gi % 2 === 1 ? 'bg-surface' : gi === 0 ? 'pt-0 sm:pt-0 lg:pt-0' : ''} labelledBy={`sec-${gi}`}>
          <Container>
            <Heading id={`sec-${gi}`} align="left" eyebrow={`${gi + 1} / ${GROUPS.length}`} title={g.title} />
            <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((i, n) => (
                <Reveal key={i.t} delay={(n % 3) * 0.06}>
                  <Feature icon={i.icon} title={i.t}>
                    {i.b}
                  </Feature>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ))}
      <Section labelledBy="sec-faq">
        <Container className="max-w-3xl">
          <Heading id="sec-faq" eyebrow="For your IT and legal teams" title="Common questions" />
          <div className="mt-10">
            <Faq items={FAQ} />
          </div>
        </Container>
      </Section>
      <CtaBand title="Need a security review before a pilot?" lead="We’ll walk your IT team through the architecture, data flows and deployment options." />
    </>
  );
}
