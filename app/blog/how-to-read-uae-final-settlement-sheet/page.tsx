import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

export const metadata: Metadata = {
  title: 'How to Read Your UAE Final Settlement Sheet — Line by Line Guide 2026',
  description: 'Understand every line of your UAE final settlement document. Gratuity, notice pay, leave encashment, deductions — explained simply with examples.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/how-to-read-uae-final-settlement-sheet' },
  openGraph: { type: 'article', images: ['/blog-settlement-og.png'] },
}

export default function Page() {
  return <BlogArticlePage slug="how-to-read-uae-final-settlement-sheet" title="How to Read Your UAE Final Settlement Sheet — A Line-by-Line Guide" description="Understand every line of your UAE final settlement document: gratuity, notice pay, leave encashment, deductions, and examples." badge="FINAL SETTLEMENT" intro="A final settlement sheet should show what you earned, what is being deducted, and the net amount payable. The gratuity line is only one part of the document." sections={[
    { heading: 'The main lines to check', body: ['Typical settlement sheets include unpaid salary, end-of-service gratuity, leave encashment, notice pay or notice deduction, approved reimbursements, loans or advances, and the net payable amount.', 'The most common mistake is calculating gratuity on total salary instead of basic salary, or applying old resignation reductions that no longer fit current UAE private-sector law.'] },
    { heading: 'Sample settlement table', body: ['Example: basic salary AED 10,000, service 4 years, unused leave 10 days. Gratuity is AED 10,000 / 30 x 21 x 4 = AED 28,000. Leave encashment depends on the wage basis used by the employer policy and law. Salary through last working day should be shown separately.', 'Every deduction should have a reason, date, and supporting record. Do not accept a single unexplained negative line called adjustment.'] },
    { heading: 'Before you sign', body: ['Match the settlement sheet against your contract, payslips, leave balance, resignation or termination letter, and bank payment. If the receipt says you received all dues, signing before payment can weaken a later complaint.'] },
  ]} faq={[
    ['What is the biggest item in final settlement?', 'For long-service employees, gratuity is often the biggest line.'],
    ['Can deductions reduce gratuity?', 'Lawful deductions can reduce net payment, but they should be itemised and documented.'],
    ['What if HR refuses a breakdown?', 'Ask in writing and consider MOHRE if payment is withheld or unclear.'],
  ]} />
}
