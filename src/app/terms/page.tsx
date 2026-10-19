import { PageHero, Prose } from '@/components/blocks';
import { Container, Section } from '@/components/ui';
import { SITE } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Terms of Service',
  description: 'Terms for using the Scholametrix website, AI evaluation service and e-Exam platform.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of service" lead="Last updated: 19 October 2026" crumbs={[{ name: 'Terms of service', path: '/terms' }]} />
      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <Prose>
            <p>These terms apply to the scholametrix.tech website. Institutions that use our AI evaluation service or e-Exam platform also sign an agreement with us, which takes precedence over these terms where they differ.</p>
            <h2>1. Using this website</h2>
            <p>You may browse this website and contact us through its forms. Please don’t misuse the forms (for example by sending spam or automated requests) or try to disrupt the website or our services.</p>
            <h2>2. AI suggestions are not final marks</h2>
            <p>Scholametrix produces marking suggestions. Institutions remain responsible for the marks they award: every suggestion should be reviewed and approved by a qualified teacher before it is released to students.</p>
            <h2>3. Pilots</h2>
            <p>Free pilots are offered at our discretion, for a limited scope agreed with the institution in writing.</p>
            <h2>4. Intellectual property</h2>
            <p>The Scholametrix name, logo, website content and software belong to Scholametrix. Institutions keep all rights to their questions, rubrics, answers and results.</p>
            <h2>5. Liability</h2>
            <p>This website is provided “as is”. To the extent the law allows, we are not liable for losses arising from its use. Liability for our services is set out in each institution’s agreement.</p>
            <h2>6. Contact</h2>
            <p>
              Questions about these terms: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
