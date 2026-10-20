import { Clock, Mail, MapPin, Sparkles } from 'lucide-react';
import { Mail as IMail, Monitor as IMonitor, Sparkles as ISparkles, Handshake as IHandshake, MessageSquareText as IMessageSquareText } from 'lucide-react';
import { OrbitArt, DevicesArt, FlowArt, ReceiptArt, ChecklistArt } from '@/components/art';
import Link from 'next/link';
import { PageHero } from '@/components/blocks';
import { LeadForm } from '@/components/LeadForm';
import { Accent, Container, LinkedInIcon, Section } from '@/components/ui';
import { FOUNDERS, SITE } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Book a Demo or Contact Us',
  description:
    'Book a live demo of Scholametrix AI evaluation and the e-Exam platform, or contact the founders. We reply within one working day.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a demo"
        title={
          <>
            Let’s mark one of your exams <Accent>together</Accent>
          </>
        }
        lead="Tell us about your institution and what you’d like to see. We reply within one working day to set up a live demo."
        crumbs={[{ name: 'Contact', path: '/contact' }]}
        art={<OrbitArt center={<IMail />} items={[{ icon: <IMonitor />, label: 'Live demo' }, { icon: <ISparkles />, label: 'Free pilot' }, { icon: <IHandshake />, label: 'Partnership' }, { icon: <IMessageSquareText />, label: 'Questions' }]} />}
      />
      <Section className="pt-0 sm:pt-0 lg:pt-0" labelledBy="contact-details">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]">
          <LeadForm kind="demo" />
          <aside className="space-y-5 lg:sticky lg:top-28">
            <h2 id="contact-details" className="sr-only">
              Contact details
            </h2>
            <div className="rounded-3xl border border-line bg-white p-7 shadow-card">
              <ul className="space-y-5 text-[15px]">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <span>
                    <span className="block font-semibold">Email</span>
                    <a href={`mailto:${SITE.email}`} className="text-brand-700 hover:underline">
                      {SITE.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <span>
                    <span className="block font-semibold">Based in</span>
                    {SITE.location}, working with institutions everywhere
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <span>
                    <span className="block font-semibold">Response time</span>
                    Within one working day
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-line bg-white p-7 shadow-card">
              <p className="font-semibold">Talk to the founders</p>
              <ul className="mt-4 space-y-3">
                {FOUNDERS.map((f) => (
                  <li key={f.name}>
                    <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 ring-1 ring-line transition-colors hover:bg-brand-50">
                      <span>
                        <span className="block font-semibold">{f.name}</span>
                        <span className="block text-sm text-muted">{f.role}</span>
                      </span>
                      <LinkedInIcon className="size-5 text-brand-700" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/pilot" className="flex items-center gap-3 rounded-3xl bg-brand-gradient p-6 text-white shadow-glow">
              <Sparkles className="size-6 shrink-0" />
              <span>
                <span className="block font-semibold">Prefer to try it first?</span>
                <span className="block text-sm text-white/85">Request a free pilot for one course →</span>
              </span>
            </Link>
          </aside>
        </Container>
      </Section>
    </>
  );
}
