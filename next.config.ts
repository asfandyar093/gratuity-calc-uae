import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Two root layouts (English app/(site), Arabic app/(ar)) need a global 404.
    globalNotFound: true,
  },
  async redirects() {
    // Exact path redirects (all 308 permanent). Each one is also emitted below for the bare
    // domain, so an old URL on uaegratuitycheck.com reaches its final www address in ONE hop
    // instead of two (bare domain to www, then the legacy redirect).
    const legacy = [
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
      { source: '/blog/sharjah-airport-free-zone-gratuity', destination: '/gratuity-calculator', permanent: true }, // merged; SAIF page later folded into the hub (Nov 2026)
      { source: '/blog/adgm-gratuity-explained', destination: '/calculate-adgm-gratuity', permanent: true }, // merged; ADGM facts corrected on keeper
      { source: '/blog/free-zone-gratuity-calculator-uae', destination: '/gratuity-calculator', permanent: true }, // merged into hub
      { source: '/blog/uae-teachers-gratuity-calculator', destination: '/gratuity-calculator/education', permanent: true }, // merged
      { source: '/blog/uae-healthcare-workers-gratuity', destination: '/gratuity-calculator/healthcare', permanent: true }, // merged
      { source: '/blog/uae-hospitality-workers-gratuity', destination: '/gratuity-calculator/hospitality', permanent: true }, // merged
      { source: '/blog/how-to-dispute-gratuity-uae', destination: '/blog/how-to-file-mohre-complaint', permanent: true }, // merged
      { source: '/blog/uae-labour-law-2026-gratuity-changes', destination: '/uae-labor-law', permanent: true }, // merged into "What changed" section
      // SEO plan Oct 15 2026: new formula URL and merged pages (single hop, 308 permanent).
      { source: '/how-it-works', destination: '/how-to-calculate-gratuity-uae', permanent: true }, // renamed to match the search query
      { source: '/ar/how-it-works', destination: '/ar/how-to-calculate-gratuity-uae', permanent: true }, // Arabic pair of the rename
      { source: '/blog/how-to-calculate-uae-gratuity-step-by-step', destination: '/how-to-calculate-gratuity-uae', permanent: true }, // merged: same intent as the formula page
      { source: '/blog/uae-annual-leave-rules-unused-leave-pay', destination: '/mohre-annual-leave-calculator', permanent: true }, // merged into the calculator page
      { source: '/blog/uae-employment-visa-cost-breakdown-2026', destination: '/uae-visa-cost-calculator', permanent: true }, // merged into the calculator page
      // AdSense low value content cleanup Nov 2026: templated or stale pages folded into stronger pages.
      { source: '/guides/uae-gratuity-calculator-bangladesh-expats', destination: '/guides', permanent: true }, // templated nationality page, stale exchange rate
      { source: '/guides/uae-gratuity-calculator-british-expats', destination: '/guides', permanent: true }, // templated nationality page, stale exchange rate
      { source: '/guides/uae-gratuity-calculator-egypt-expats', destination: '/guides', permanent: true }, // templated nationality page, stale exchange rate
      { source: '/guides/uae-gratuity-calculator-nepal-expats', destination: '/guides', permanent: true }, // templated nationality page, stale exchange rate
      { source: '/guides/uae-gratuity-calculator-sri-lanka-expats', destination: '/guides', permanent: true }, // templated nationality page, stale exchange rate
      { source: '/calculate-sharjah-airport-free-zone-gratuity', destination: '/gratuity-calculator', permanent: true }, // no published SAIF rule; covered by the hub table
      { source: '/gratuity-investment-calculator', destination: '/blog/uae-end-of-service-savings-scheme', permanent: true }, // unsourced bank and fund return figures removed
      { source: '/blog/how-to-save-your-first-aed-100000-in-uae', destination: '/savings-goal-calculator-uae', permanent: true }, // unsourced bank rate claims removed
      { source: '/currency-converter-uae', destination: '/blog/best-way-to-send-money-home-from-uae-2026', permanent: true }, // hard coded July 2026 rates removed
    ]
    const bareHost = [{ type: 'host' as const, value: 'uaegratuitycheck.com' }]
    const bareDirect = legacy.map((r) => ({
      ...r,
      has: bareHost,
      destination: 'https://www.uaegratuitycheck.com' + r.destination,
    }))
    return [
      ...bareDirect,
      {
        source: '/:path*',
        has: bareHost,
        destination: 'https://www.uaegratuitycheck.com/:path*',
        permanent: true,
      },
      ...legacy,
    ]
  },
  async headers() {
    return [
      {
        // Keep ads.txt freshly crawlable for AdSense verification (support.google.com/adsense/answer/7679060).
        source: '/ads.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
      {
        // Every page except the embeddable calculator frame may only be framed by this site.
        source: '/((?!embed/gratuity).*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // The embed frame is meant to be placed on other sites. It is kept out of search results
        // (the iframe page is a bare copy of the calculator); links on it still count.
        source: '/embed/gratuity',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Content-Security-Policy', value: 'frame-ancestors *' },
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
};

export default nextConfig;
