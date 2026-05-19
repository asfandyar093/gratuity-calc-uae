import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

export const metadata: Metadata = {
  title: 'Can Your Employer Delay UAE Gratuity Payment? Rules and Remedies 2026',
  description: 'UAE law requires gratuity payment within 14 days. What happens if employer delays? Penalties, interest, MOHRE complaint process, and legal options.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-payment-delay-rules' },
  openGraph: { type: 'article', images: ['/images/blog/real/uae-gratuity-payment-delay-documents.png'] },
}

export default function Page() {
  return <BlogArticlePage slug="uae-gratuity-payment-delay-rules" title="Can Your Employer Delay Your UAE Gratuity? What the Law Says" description="UAE law requires timely final settlement payment. Learn what to do if gratuity is delayed and how MOHRE complaints work." badge="PAYMENT DELAY" intro="Gratuity should be paid as part of final settlement after the last working day. Long unexplained delays should be documented and escalated." image={{
    src: '/images/blog/real/uae-gratuity-payment-delay-documents.png',
    alt: 'UAE employee asking HR about delayed gratuity payment and final settlement',
    title: 'UAE Gratuity Payment Delay Rules',
    caption: 'When gratuity payment is delayed, written timelines, settlement breakdowns, and supporting records matter more than verbal promises.',
  }} sections={[
    { heading: 'The 14-day payment expectation', body: ['UAE final settlement practice centres on prompt payment after employment ends. The employer should close salary, gratuity, leave encashment, reimbursements, and lawful deductions without turning the process into an indefinite wait.', 'A short administrative delay can happen while payroll, visa cancellation, and clearance are processed. The problem starts when HR gives no date, changes the date repeatedly, or says payment depends on unrelated business cash flow.', 'If HR says payment is pending, ask for the expected payment date and the reason in writing. Even a simple email reply helps show that you followed up properly and gave the employer a chance to resolve the matter.'] },
    { heading: 'Common reasons employers give for delay', body: ['Employers may mention internal approvals, pending clearance, asset handover, audit review, client payments, or payroll cut-off dates. Some of these are genuine process points, but they should still lead to a clear settlement date and an itemised calculation.', 'Be careful when “clearance” is used broadly. Returning a laptop, access card, uniform, vehicle, or accommodation key can be a legitimate step, but it should not become a blank excuse to hold all gratuity without explanation.', 'If there is a dispute over a deduction, ask the employer to pay the undisputed amount first or at least identify the disputed line. This keeps the discussion focused instead of allowing the whole settlement to disappear behind one unclear issue.'] },
    { heading: 'What to collect before complaining', body: ['Keep your employment contract, offer letter, salary revision letters, payslips, resignation or termination notice, attendance records, leave balance, settlement sheet, clearance emails, and bank statements showing non-payment. If you have only screenshots, save the original messages too.', 'Write a short timeline with dates: joining date, resignation or termination date, last working day, visa cancellation date if applicable, date settlement was promised, and every follow-up. A clear timeline makes MOHRE escalation easier because the issue is no longer vague.', 'Also calculate your expected gratuity using basic salary and service period. You do not need a perfect legal memo, but a reasonable estimate helps you identify whether the employer is delaying payment or also undercalculating the amount.'] },
    { heading: 'How to escalate without hurting your claim', body: ['Start with HR or payroll in writing. Ask for the settlement sheet, payment date, and reason for any deduction. Keep the tone calm and specific. A professional written trail is often stronger than repeated phone calls that leave no record.', 'If the employer does not respond or keeps delaying, use MOHRE channels where applicable. For free zones, check whether the free zone authority has its own employment dispute process. DIFC and ADGM have separate systems, so the right forum depends on where you are employed.', 'For complex disputes, senior employees, commission-heavy packages, or large gratuity amounts, speak with a UAE employment lawyer before signing a waiver. Once you sign broad full-and-final wording, it can become harder to reopen the calculation later.'] },
  ]} faq={[
    ['Can cash-flow problems justify delay?', 'The employer still owes final settlement. Ask for written confirmation and timeline.'],
    ['Can I claim interest?', 'Legal remedies depend on the forum and facts. Get advice for large claims.'],
    ['Can I file after leaving the UAE?', 'Yes, but records and active bank access make the process easier.'],
  ]} />
}
