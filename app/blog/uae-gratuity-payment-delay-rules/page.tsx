import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

export const metadata: Metadata = {
  title: 'Can Your Employer Delay UAE Gratuity Payment? Rules and Remedies 2026',
  description: 'UAE law requires gratuity payment within 14 days. What happens if employer delays? Penalties, interest, MOHRE complaint process, and legal options.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-payment-delay-rules' },
  openGraph: { type: 'article', images: ['/blog-delay-og.png'] },
}

export default function Page() {
  return <BlogArticlePage slug="uae-gratuity-payment-delay-rules" title="Can Your Employer Delay Your UAE Gratuity? What the Law Says" description="UAE law requires timely final settlement payment. Learn what to do if gratuity is delayed and how MOHRE complaints work." badge="PAYMENT DELAY" intro="Gratuity should be paid as part of final settlement after the last working day. Long unexplained delays should be documented and escalated." sections={[
    { heading: 'The 14-day rule', body: ['UAE final settlement practice centres on prompt payment after employment ends. Employees should receive gratuity, salary, leave encashment, and other dues without indefinite delay.', 'If HR says payment is pending, ask for a date and written reason.'] },
    { heading: 'What to collect before complaining', body: ['Keep your contract, payslips, resignation or termination notice, attendance records, leave balance, settlement sheet, and bank statements showing non-payment.', 'Write a short timeline with dates. A clear timeline makes MOHRE escalation easier.'] },
    { heading: 'Remedies and escalation', body: ['Start with HR in writing. If that fails, use MOHRE channels. For complex disputes or high amounts, speak with a UAE employment lawyer before signing any waiver.'] },
  ]} faq={[
    ['Can cash-flow problems justify delay?', 'The employer still owes final settlement. Ask for written confirmation and timeline.'],
    ['Can I claim interest?', 'Legal remedies depend on the forum and facts. Get advice for large claims.'],
    ['Can I file after leaving the UAE?', 'Yes, but records and active bank access make the process easier.'],
  ]} />
}
