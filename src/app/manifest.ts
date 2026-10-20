import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Scholametrix: AI Evaluation for Written Exams',
    short_name: 'Scholametrix',
    description: 'Fair, fast AI marking for written exams. Teachers approve every mark.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0164f3',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
