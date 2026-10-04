import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Two root layouts (English app/(site), Arabic app/(ar)) need a global 404.
    globalNotFound: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'uaegratuitycheck.com' }],
        destination: 'https://www.uaegratuitycheck.com/:path*',
        permanent: true,
      },
      // SEO Oct 2026: legacy/typo 404s and merged duplicate pages (all 308 permanent).
      { source: '/blog/uae-repatrication-ticket-final-settlement', destination: '/blog/uae-repatriation-ticket-final-settlement', permanent: true }, // typo URL (404 in GSC)
      { source: '/blog/uae-repatration-ticket-and-final-settlement', destination: '/blog/uae-repatriation-ticket-final-settlement', permanent: true }, // typo URL (404 in GSC)
      { source: '/blog/repatriation-ticket-final-settlement', destination: '/blog/uae-repatriation-ticket-final-settlement', permanent: true }, // legacy slug (404)
      { source: '/blog/dews-gratuity-explained', destination: '/blog/difc-dews-gratuity-explained', permanent: true }, // legacy slug (404)
      { source: '/blog/resignation-vs-termination-does-it-change-uae-gratuity-in-2026', destination: '/blog/uae-gratuity-resignation-vs-termination', permanent: true }, // legacy slug (404)
      { source: '/domestic-workers', destination: '/gratuity-calculator/domestic-workers', permanent: true }, // legacy URL (404)
      { source: '/blog/gratuity-for-domestic-workers-uae', destination: '/gratuity-calculator/domestic-workers', permanent: true }, // merged (duplicate intent)
      { source: '/blog/uae-gratuity-domestic-workers-2026', destination: '/gratuity-calculator/domestic-workers', permanent: true }, // merged (crawled, not indexed)
      { source: '/uae-visa-cancellation-gratuity', destination: '/blog/uae-gratuity-visa-cancellation', permanent: true }, // merged into stronger page
      { source: '/blog/gcc-gratuity-comparison-2026', destination: '/gcc-gratuity-comparison', permanent: true }, // merged
      { source: '/blog/jafza-gratuity-calculator-guide', destination: '/calculate-jafza-gratuity', permanent: true }, // merged (crawled, not indexed)
      { source: '/blog/sharjah-airport-free-zone-gratuity', destination: '/calculate-sharjah-airport-free-zone-gratuity', permanent: true }, // merged
      { source: '/blog/adgm-gratuity-explained', destination: '/calculate-adgm-gratuity', permanent: true }, // merged; ADGM facts corrected on keeper
      { source: '/blog/free-zone-gratuity-calculator-uae', destination: '/gratuity-calculator', permanent: true }, // merged into hub
      { source: '/blog/uae-teachers-gratuity-calculator', destination: '/gratuity-calculator/education', permanent: true }, // merged
      { source: '/blog/uae-healthcare-workers-gratuity', destination: '/gratuity-calculator/healthcare', permanent: true }, // merged
      { source: '/blog/uae-hospitality-workers-gratuity', destination: '/gratuity-calculator/hospitality', permanent: true }, // merged
      { source: '/blog/how-to-dispute-gratuity-uae', destination: '/blog/how-to-file-mohre-complaint', permanent: true }, // merged
      { source: '/blog/uae-labour-law-2026-gratuity-changes', destination: '/uae-labor-law', permanent: true }, // merged into "What changed" section
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
};

export default nextConfig;
