import { PageHero, Prose } from '@/components/blocks';
import { Container, Section } from '@/components/ui';
import { SITE } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description: 'How Scholametrix collects, uses and protects personal data on its website and in its AI evaluation and e-Exam services.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" lead="Last updated: 19 October 2026" crumbs={[{ name: 'Privacy policy', path: '/privacy' }]} />
      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <Prose>
            <p>
              This policy explains how Scholametrix (“we”, “us”) handles personal data when you visit scholametrix.tech, contact us, or when an institution uses our AI evaluation service or e-Exam platform. If you have questions, email{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
            <h2>1. Information you send us through this website</h2>
            <p>When you request a pilot or demo, or send us a message, we collect what you enter: your name, email, phone number, institution, website, role, country and message. We use it only to reply to you and to discuss working together. We don’t sell it, and we don’t add you to marketing lists without asking.</p>
            <p>We keep these requests for as long as we are in contact with you and for up to 24 months afterwards, unless you ask us to delete them sooner.</p>
            <h2>2. Website analytics and cookies</h2>
            <p>This website does not use advertising or tracking cookies. If we add analytics, we will use a privacy-friendly service that does not track you across sites, and update this policy.</p>
            <h2>3. Data processed for institutions</h2>
            <p>When an institution uses Scholametrix, it decides what data is processed and why; we process it on the institution’s behalf. In particular:</p>
            <ul>
              <li>Our AI evaluation service receives the text of written answers, the question, the model answer and the rubric, with an anonymous reference. It does not receive student names or ID numbers.</li>
              <li>Answers are processed only to produce marking suggestions. They are never used to train AI models.</li>
              <li>AI models are run by providers we restrict to zero-data-retention terms.</li>
              <li>The e-Exam platform stores the accounts, exams, answers and results the institution needs, with access limited by role.</li>
            </ul>
            <h2>4. Security</h2>
            <p>We protect data with encryption in transit, encrypted secrets, hashed API keys and passwords, role-based access and audit logs. See our <a href="/security">security page</a> for details.</p>
            <h2>5. Your rights</h2>
            <p>You can ask us to access, correct or delete the personal data you sent us through this website. If your data is held by your institution in the e-Exam platform, contact your institution first; we will help them respond.</p>
            <h2>6. Changes</h2>
            <p>We may update this policy as our services change. The date at the top shows the latest version.</p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
