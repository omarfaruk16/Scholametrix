import { ArrowRight } from 'lucide-react';
import { Accent, ButtonLink, Container } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="relative -mt-18 overflow-hidden pt-18">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden />
      <Container className="relative py-28 text-center sm:py-36">
        <p className="font-display text-7xl font-extrabold text-brand-600 sm:text-8xl">404</p>
        <h1 className="mx-auto mt-6 max-w-xl text-3xl font-bold sm:text-4xl">
          This page went missing — like an <Accent>unmarked</Accent> script.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">The page you were looking for doesn’t exist or has moved.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">
            Back to home <ArrowRight />
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
