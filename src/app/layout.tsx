import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, Noto_Sans_Bengali, Plus_Jakarta_Sans } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { ScrollProgress } from '@/components/fx';
import { MotionProvider } from '@/components/MotionProvider';
import { SITE } from '@/content/site';
import { orgLd, websiteLd } from '@/lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap', weight: ['500', '600', '700', '800'] });
const instrument = Instrument_Serif({ subsets: ['latin'], variable: '--font-instrument', display: 'swap', weight: '400', style: 'italic' });
const bangla = Noto_Sans_Bengali({ subsets: ['bengali'], variable: '--font-bangla-src', display: 'swap', weight: ['400', '600'], preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Scholametrix: AI Evaluation for Written Exams | Fair, Fast, Teacher-Approved',
    template: '%s | Scholametrix',
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    'AI exam marking',
    'AI evaluation of written answers',
    'automated essay grading',
    'rubric-based AI marking',
    'AI grading for universities',
    'online examination system',
    'Bangla AI grading',
    'AI marking API',
  ],
  authors: [{ name: 'Scholametrix' }],
  creator: 'Scholametrix',
  openGraph: { siteName: SITE.name, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#0164f3',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${instrument.variable} ${bangla.variable}`}>
      <body>
        <JsonLd data={[orgLd, websiteLd]} />
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
