import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/how-to-read-uae-final-settlement-sheet'
const pageImage = '/images/blog/real/uae-final-settlement-sheet-review.png'
const pageTitle = 'How to Read a UAE Final Settlement Sheet 2026 | Gratuity & Deductions'
const pageDescription = 'Line-by-line UAE final settlement guide covering gratuity, unpaid salary, leave encashment, notice pay, deductions, net payable amount, and what to check before signing.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['UAE final settlement sheet', 'how to read final settlement UAE', 'UAE gratuity settlement', 'leave encashment UAE', 'notice pay deduction UAE'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'UAE final settlement sheet review with gratuity calculator and payslips' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
}

export default function Page() {
  return <BlogArticlePage slug="how-to-read-uae-final-settlement-sheet" title="How to Read Your UAE Final Settlement Sheet — A Line-by-Line Guide" description="Understand every line of your UAE final settlement document: gratuity, notice pay, leave encashment, deductions, and examples." badge="FINAL SETTLEMENT" intro="A final settlement sheet should show what you earned, what is being deducted, and the net amount payable. The gratuity line is only one part of the document." image={{
    src: '/images/blog/real/uae-final-settlement-sheet-review.png',
    alt: 'UAE employee checking a final settlement sheet with gratuity, leave encashment, and deductions',
    title: 'How to Read a UAE Final Settlement Sheet',
    caption: 'A proper UAE final settlement should separate gratuity, salary, leave encashment, notice, deductions, and the net amount payable.',
  }} sections={[
    { heading: 'Start with the service dates and basic salary', body: ['Before reading the money lines, check the facts used to calculate them. Your final settlement should show the joining date, last working day, total service period, and monthly basic salary. If any of these are wrong, the gratuity amount will usually be wrong too.', 'Basic salary is especially important because UAE gratuity is generally calculated from basic salary, not the full package. Housing allowance, transport allowance, commissions, school fees, and other benefits may appear in your monthly pay, but they are not usually part of the gratuity base.', 'If your salary changed during employment, ask which basic salary was used and why. Many final settlements use the last drawn basic salary, but the document should still be clear enough for you to follow the calculation without guessing.'] },
    { heading: 'The main lines to check', body: ['A typical UAE final settlement sheet includes unpaid salary, end-of-service gratuity, unused annual leave encashment, notice pay or notice deduction, approved reimbursements, loans or salary advances, other lawful deductions, and the net payable amount. Each line should have a label and amount.', 'The gratuity line should not be hidden inside a general “settlement” figure. You should be able to see how many years of service were counted, whether the 21-day or 30-day rate applies, and whether any cap was considered for long service.', 'The most common mistakes are calculating gratuity on total salary instead of basic salary, using the wrong start date, deducting unpaid leave incorrectly, or applying old resignation reductions that no longer match the current UAE private-sector rules.'] },
    { heading: 'A simple worked example', body: ['Assume the employee has a basic salary of AED 10,000, completed 4 years of eligible service, and has 10 unused annual leave days. The gratuity for the first five years is commonly calculated as AED 10,000 / 30 x 21 x 4, which equals AED 28,000.', 'Salary through the last working day should be shown separately. Leave encashment should also be shown separately because it may use a different wage basis depending on the contract, employer policy, and applicable rules. Mixing leave pay and gratuity into one line makes it harder to identify an error.', 'Every deduction should have a reason, date, and supporting record. If you see a large negative entry called “adjustment”, “clearance”, or “miscellaneous”, ask for the supporting detail before signing. Vague deductions are where many settlement disputes begin.'] },
    { heading: 'Documents to compare against the settlement', body: ['Match the settlement sheet against your labour contract, internal offer letter, salary revision letters, payslips, bank deposits, leave balance, resignation or termination letter, and any notice-period correspondence. The settlement should tell the same story as the records.', 'If the employer says you took more leave than you believe, ask for the leave ledger. If a loan or advance is deducted, ask for the signed loan document or payroll record. If notice pay is deducted, compare the notice period with your contract and the actual last working day.', 'Do this review before emotions take over. A clean checklist helps you explain the issue clearly: “The joining date is wrong”, “basic salary used is old”, “leave balance is missing”, or “deduction is unsupported”.'] },
    { heading: 'Before you sign', body: ['Read the final receipt as carefully as the calculation. If the receipt says you have received all dues, but the transfer is still pending, ask HR to confirm payment timing in writing or amend the wording. A signed receipt can make a later complaint harder if it suggests everything was already settled.', 'If the amount is correct, keep a signed copy and proof of bank transfer. If the amount is disputed, write a short email explaining the exact difference and asking for correction. Avoid signing under pressure just to complete visa cancellation unless you understand the legal effect of the document.', 'For a large shortfall, a contested deduction, or confusing full-and-final wording, get advice before signing. The cost of a review can be small compared with losing months of gratuity or leave pay.'] },
  ]} faq={[
    ['What is the biggest item in final settlement?', 'For long-service employees, gratuity is often the biggest line.'],
    ['Can deductions reduce gratuity?', 'Lawful deductions can reduce net payment, but they should be itemised and documented.'],
    ['What if HR refuses a breakdown?', 'Ask in writing and consider MOHRE if payment is withheld or unclear.'],
  ]} datePublished="2026-05-15" dateModified="2026-05-15" />
}
