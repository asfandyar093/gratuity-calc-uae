import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-gratuity-visa-cancellation'
const pageImage = '/images/blog/real/uae-gratuity-visa-cancellation-final-settlement.png'
const pageTitle = 'UAE Gratuity When Visa Is Cancelled 2026 | EOSB & Final Settlement'
const pageDescription = 'Learn what happens to UAE gratuity when your residence visa is cancelled, when final settlement should be paid, what to check before signing, and how to claim unpaid EOSB.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['UAE gratuity visa cancellation', 'visa cancelled gratuity UAE', 'UAE final settlement after visa cancellation', 'end of service benefits UAE', 'EOSB UAE 2026'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'UAE employee reviewing visa cancellation and gratuity final settlement documents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
}

export default function Page() {
  return <BlogArticlePage slug="uae-gratuity-visa-cancellation" title="What Happens to Your UAE Gratuity When Your Visa is Cancelled?" description="Does visa cancellation affect your UAE gratuity? Complete guide to what the law says, employer obligations, and how to claim if payment is withheld." badge="VISA CANCELLATION" intro="An employer cannot withhold legally owed gratuity just by cancelling your residence visa. EOSB is based on employment service, not immigration status." image={{
    src: '/images/blog/real/uae-gratuity-visa-cancellation-final-settlement.png',
    alt: 'UAE expatriate employee reviewing visa cancellation and gratuity final settlement documents',
    title: 'UAE Gratuity When Visa Is Cancelled',
    caption: 'Visa cancellation is an immigration step; gratuity entitlement comes from employment service, basic salary, and the final settlement rules.',
  }} sections={[
    { heading: 'Visa cancellation versus employment termination', body: ['Visa cancellation and employment termination are connected, but they are not the same thing. Termination, resignation, or contract expiry ends the employment relationship and triggers final settlement. Visa cancellation is the immigration process that usually follows, especially where the employer sponsored the residence visa.', 'Because gratuity is an employment benefit, it is not cancelled just because the visa is cancelled. If you completed the minimum service period and are otherwise eligible, the employer should still calculate end-of-service benefit using your basic salary and continuous service.', 'Before signing any receipt or cancellation-related paper, ask for the itemised final settlement. The gratuity line should be visible, and the calculation should be understandable. If HR only gives a net amount, request the breakdown before accepting it.'] },
    { heading: 'When should gratuity be paid after cancellation?', body: ['UAE final settlement is expected to be handled promptly after the last working day. In practice, many employers process the visa cancellation, salary closing, leave balance, gratuity, and deductions together. That can take a few administrative days, but it should not become an open-ended delay.', 'The final settlement should normally include unpaid salary, end-of-service gratuity, leave encashment where due, notice pay or notice deduction, approved reimbursements, and lawful deductions. Visa cancellation costs should not be used casually to reduce gratuity unless there is a clear legal and contractual basis.', 'Keep your UAE bank account active until payment is received if possible. If you are leaving the country, save copies of your cancellation paper, employment contract, Emirates ID, payslips, bank statements, resignation or termination letter, and any settlement sheet.'] },
    { heading: 'What to check before signing full and final settlement', body: ['A full-and-final settlement receipt can be important evidence. Read it slowly. If it says you received all dues, but payment has not actually reached your bank account, ask HR to revise the wording or confirm the pending transfer separately in writing.', 'Check whether gratuity was calculated on basic salary only, not total salary. Then check the service dates. A common error is using the visa issue date or confirmation date instead of the actual employment start date. Another error is applying old resignation reductions that do not fit the current UAE private-sector framework.', 'If the amount looks low, do not argue from memory. Write down your joining date, last working day, monthly basic salary, total years and days of service, and your expected gratuity. A clear calculation makes the conversation easier and gives MOHRE or a lawyer something concrete to review if needed.'] },
    { heading: 'What to do if payment is withheld', body: ['Start with a written request for the calculation and expected payment date. Keep the tone professional: “Please share the itemised final settlement showing gratuity, salary, leave encashment, deductions, and net payable amount.” This creates a record without escalating too early.', 'If the employer refuses, delays without a reason, or pressures you to sign away dues, collect your documents and consider a MOHRE complaint. Attach your contract, payslips, bank records, cancellation documents, resignation or termination letter, and written follow-ups. Screenshots can help, but formal documents carry more weight.', 'If you have already left the UAE, follow-up is still possible, but it is easier when your documents and bank access are organised. For high-value disputes, a qualified UAE employment lawyer can review the settlement wording and the best route before you sign anything further.'] },
  ]} faq={[
    ['Does cancelled visa mean no gratuity?', 'No. Eligibility depends on service and law, not visa status alone.'],
    ['Can I leave the UAE before payment?', 'You can, but keeping a UAE bank account active and having written settlement evidence makes follow-up easier.'],
    ['Should I sign full and final settlement?', 'Only after checking the amount and understanding what the receipt says.'],
    ['Where can I complain?', 'Use MOHRE channels or a qualified UAE employment lawyer for disputed cases.'],
  ]} datePublished="2026-05-15" dateModified="2026-05-15" />
}
