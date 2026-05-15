import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

export const metadata: Metadata = {
  title: 'GCC Gratuity Rules Compared 2026 — UAE, Saudi, Kuwait, Oman, Qatar',
  description: 'How does UAE gratuity compare to Saudi, Kuwait, Oman, and Qatar? Side-by-side end-of-service rules, resignation impact, and salary basis explained.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/gcc-gratuity-comparison-2026' },
  openGraph: { type: 'article', images: ['/blog-gcc-og.png'] },
}

export default function Page() {
  return <BlogArticlePage slug="gcc-gratuity-comparison-2026" title="GCC End-of-Service Gratuity Compared — 5 Countries, 2026 Rules" description="How UAE gratuity compares to Saudi, Kuwait, Oman, and Qatar: salary basis, resignation impact, and headline formula differences." badge="GCC COMPARISON" intro="GCC countries all recognise end-of-service benefits, but the wage basis, service tiers, resignation reductions, and caps differ sharply." sections={[
    { heading: 'UAE versus Saudi Arabia', body: ['The UAE standard formula uses 21 days for each of the first five years and 30 days after that, capped at two years of basic salary. Saudi Arabia generally uses half-month and full-month tiers, with resignation rules that can affect payout.'] },
    { heading: 'Kuwait, Oman, and Qatar', body: ['Kuwait can be generous for monthly-paid employees but has its own wage definitions and resignation treatment. Oman uses a tiered formula linked to basic wage. Qatar commonly uses a minimum three-week-per-year approach after one year.'] },
    { heading: 'Why the full comparison matters', body: ['Cross-country comparisons are useful for job offers, but the contract and local law decide the actual payment. For a full six-country table, use the GCC comparison page linked from this article.'] },
  ]} faq={[
    ['Is UAE gratuity better than Saudi?', 'It depends on service length, wage basis, and resignation facts.'],
    ['Do all GCC countries use basic salary?', 'No. Wage basis differs by country.'],
    ['Where is the full table?', 'See /gcc-gratuity-comparison for the detailed comparison.'],
  ]} />
}
