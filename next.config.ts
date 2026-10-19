import type { NextConfig } from 'next';

// Fully static site (out/), served by nginx. Forms post straight to api.scholametrix.tech.
const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  poweredByHeader: false,
};

export default config;
