import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-probation-period-gratuity-2026'
const pageImage = '/images/blog/real/uae-probation-period-gratuity-hr-meeting.png'
const pageTitle = 'Does Probation Count Toward UAE Gratuity in 2026? (Answered)'
const pageDescription = 'Quick answer: yes, probation counts toward your service period. Learn how the one-year threshold works, what happens if you resign during probation, and what your final settlement should include.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['UAE probation gratuity', 'does probation count for gratuity UAE', 'UAE probation period 2026', 'gratuity after probation UAE', 'final settlement during probation UAE'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'UAE employee and HR advisor reviewing probation period gratuity eligibility' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
}

export default function Page() {
  return <BlogArticlePage slug="uae-probation-period-gratuity-2026" title="UAE Probation Period and Gratuity — Full 2026 Guide" description="Does the probation period count toward UAE gratuity? Maximum probation duration, resignation during probation, and what the 2022 labour law changed." badge="PROBATION" intro="Probation time can count toward continuous service, but gratuity is only payable after completing at least one eligible year of service." image={{
    src: '/images/blog/real/uae-probation-period-gratuity-hr-meeting.png',
    alt: 'UAE employee discussing probation period gratuity and final settlement with an HR advisor',
    title: 'UAE Probation Period Gratuity Guide 2026',
    caption: 'Probation is usually counted from the joining date when employment continues, but gratuity still depends on completing at least one eligible year of service.',
  }} sections={[
    { heading: 'Does probation count toward gratuity service?', body: ['In most normal UAE private-sector cases, the service clock starts from the joining date written in the employment contract, not from the date probation ends. If you complete probation and remain employed, those first months usually form part of your continuous service for the one-year eligibility threshold and the final gratuity calculation.', 'This matters because employees sometimes assume their gratuity starts only after confirmation. For example, if you joined on 1 January, finished a six-month probation on 30 June, and resigned the following February, your service is counted from January for gratuity eligibility, provided there was no break in employment.', 'The practical point is simple: keep your offer letter, MOHRE contract, joining confirmation, first payslip, and any probation confirmation email. If HR later uses the confirmation date instead of the joining date, those records help you ask for a corrected calculation.'] },
    { heading: 'What if you leave during probation?', body: ['If you leave before completing one year of service, you normally do not qualify for UAE end-of-service gratuity. That is true even if the probation period itself was completed, because the standard minimum service threshold is one full year.', 'No gratuity does not mean no final settlement. You are still owed earned salary up to the last working day, approved reimbursements, and any other contractual dues that are not legally forfeited. If leave was accrued and payable under the employer policy or applicable rules, ask for the basis of calculation in writing.', 'When resigning during probation, read the notice clause carefully. The notice period during probation can differ from the notice period after confirmation, especially if you are moving to another UAE employer. A short email resignation without checking this point can create avoidable deductions later.'] },
    { heading: 'Maximum probation duration and contract wording', body: ['UAE probation is commonly capped at six months. A contract should clearly mention the probation period, notice requirements, basic salary, allowances, job title, and whether any training or recruitment-cost clause exists. If the contract is vague, ask HR to clarify before signing rather than waiting until exit.', 'The phrase “subject to confirmation” should not be used to erase service already worked. Confirmation is an internal employment milestone; it is not normally a new joining date. If your employer issues a new confirmation letter after probation, keep it together with the original contract so the timeline is clear.', 'Employees changing jobs during probation should also consider visa status, cancellation timing, and start-date commitments with the new employer. These do not directly create gratuity, but they can affect final settlement timing and the documents you need for a clean exit.'] },
    { heading: 'How to check your final settlement during probation', body: ['Ask for an itemised settlement sheet even when no gratuity is due. The sheet should show salary through the final working day, any notice pay or notice deduction, reimbursements, advances or loans, and the net amount payable. A single line saying “full and final adjustment” is not enough for a careful review.', 'Compare the settlement with your payslips and bank deposits. If the employer deducts notice, training, visa, or recruitment costs, ask for the contractual clause and legal basis. Some deductions may be valid, but they should be specific, documented, and proportionate rather than punitive.', 'Do not sign a full-and-final receipt unless the amount and wording are clear. If payment will be made later, the receipt should not falsely say that you already received all dues. Keep the discussion polite and written; a calm email trail is often more useful than a heated phone call.'] },
  ]} faq={[
    ['Do I get gratuity after six months?', 'No, the standard gratuity threshold is one completed year.'],
    ['Does probation reset my service date?', 'No, if employment continues, service usually runs from the joining date.'],
    ['Can my employer deduct recruitment costs?', 'Only lawful, documented deductions should appear in final settlement. Get advice if the deduction looks punitive.'],
  ]} />
}
