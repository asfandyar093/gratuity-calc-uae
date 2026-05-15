import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

export const metadata: Metadata = {
  title: 'UAE Gratuity When Visa is Cancelled 2026 — What Happens to Your EOSB?',
  description: 'Does visa cancellation affect your UAE gratuity? Complete guide: what the law says, employer obligations, and how to claim if payment is withheld.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-visa-cancellation' },
  openGraph: { type: 'article', images: ['/blog-visa-cancellation-og.png'] },
}

export default function Page() {
  return <BlogArticlePage slug="uae-gratuity-visa-cancellation" title="What Happens to Your UAE Gratuity When Your Visa is Cancelled?" description="Does visa cancellation affect your UAE gratuity? Complete guide to what the law says, employer obligations, and how to claim if payment is withheld." badge="VISA CANCELLATION" intro="An employer cannot withhold legally owed gratuity just by cancelling your residence visa. EOSB is based on employment service, not immigration status." sections={[
    { heading: 'Visa cancellation versus employment termination', body: ['Visa cancellation is an immigration step that usually follows resignation, termination, or contract expiry. Employment termination creates the final settlement obligation; visa cancellation does not erase it.', 'Before signing any receipt, ask for the itemised final settlement and compare the gratuity line with your basic salary and service period.'] },
    { heading: 'Your 14-day payment right', body: ['Final settlement should include gratuity, unpaid salary, leave encashment, notice pay, and lawful deductions. UAE law expects end-of-service dues to be settled promptly after the last working day.', 'If payment is delayed, keep written evidence and avoid relying on verbal promises.'] },
    { heading: 'What to do if payment is withheld', body: ['Request the calculation in writing, then file a MOHRE complaint if the employer refuses to pay or gives no clear timeline.', 'Attach your contract, payslips, cancellation papers, resignation or termination letter, and bank records.'] },
  ]} faq={[
    ['Does cancelled visa mean no gratuity?', 'No. Eligibility depends on service and law, not visa status alone.'],
    ['Can I leave the UAE before payment?', 'You can, but keeping a UAE bank account active and having written settlement evidence makes follow-up easier.'],
    ['Should I sign full and final settlement?', 'Only after checking the amount and understanding what the receipt says.'],
    ['Where can I complain?', 'Use MOHRE channels or a qualified UAE employment lawyer for disputed cases.'],
  ]} />
}
