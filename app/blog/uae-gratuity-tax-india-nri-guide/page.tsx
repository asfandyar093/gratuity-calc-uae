import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-gratuity-tax-india-nri-guide'
const pageImage = '/images/blog/real/uae-gratuity-tax-india-nri-advice.png'
const pageTitle = 'Is UAE Gratuity Taxable in India? 2026 NRI Guide'
const pageDescription = 'NRI guide for Indian expats receiving UAE gratuity: UAE tax position, India residential status, remittance records, NRE/NRO account points, and documents to keep.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['UAE gratuity taxable in India', 'UAE gratuity NRI tax', 'Indian expat UAE gratuity tax', 'NRE account gratuity UAE', 'India tax residency NRI UAE'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'Indian expatriate reviewing UAE gratuity remittance and India tax documents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
}

export default function Page() {
  return <BlogArticlePage slug="uae-gratuity-tax-india-nri-guide" title="Is UAE Gratuity Taxable in India? The Complete NRI Guide 2026" description="UAE gratuity is tax-free in the UAE but may be taxable in India depending on your NRI status and reporting position." badge="NRI TAX" intro="The UAE does not tax personal gratuity payments, but Indian tax treatment depends on your residential status, timing, and reporting facts." image={{
    src: '/images/blog/real/uae-gratuity-tax-india-nri-advice.png',
    alt: 'Indian expatriate in the UAE reviewing gratuity payment and India NRI tax documents',
    title: 'Is UAE Gratuity Taxable in India NRI Guide',
    caption: 'For Indian expatriates, UAE gratuity is not taxed in the UAE, but India treatment depends on residency, receipt, remittance, and documentation.',
  }} sections={[
    { heading: 'UAE tax position', body: ['The UAE does not impose personal income tax on standard employment gratuity. In a typical private-sector exit, the employer pays the final settlement in AED without UAE income-tax withholding. That is why many employees describe UAE gratuity as “tax-free”.', 'However, “tax-free in the UAE” does not automatically settle the India question. Indian tax rules look at residential status, source of income, place of receipt, and whether the amount is taxable or reportable in the relevant financial year.', 'The safest approach is to treat the UAE position and the India position as two separate checks. Your UAE employer can explain the settlement calculation, but an Indian Chartered Accountant should review the Indian tax treatment if the amount is significant.'] },
    { heading: 'Why NRI residential status matters', body: ['Indian tax residency can change from year to year based on days spent in India and other conditions. If you are non-resident for the relevant year, foreign employment income and foreign assets may be treated differently than if you are resident and ordinarily resident.', 'If you return to India in the same year you receive gratuity, the timing becomes more sensitive. Your travel dates, last working day, payment date, bank account used, and employment location can all become relevant facts for a CA reviewing the position.', 'Do not rely only on old advice from a colleague. Two employees can receive similar UAE gratuity amounts and still have different Indian tax outcomes because their residency days, bank receipt, return date, and disclosure history differ.'] },
    { heading: 'What documents to keep for your CA', body: ['Keep your UAE employment contract, salary revision letters, visa history, passport travel pages or travel-day summary, final settlement sheet, gratuity calculation, bank credit proof, and remittance receipts. These documents help establish what was paid, why it was paid, and when it was received.', 'If the settlement includes multiple items, ask the employer for a breakdown. Gratuity, unpaid salary, leave encashment, bonus, commission, notice pay, and reimbursements may not all be treated the same way for Indian tax review. A single lump-sum transfer can create confusion later.', 'Also keep evidence of the bank account used. Whether funds were received in a UAE account, NRE account, NRO account, or Indian resident account can affect the questions your CA asks, even if the transfer route alone does not decide taxability.'] },
    { heading: 'Remittance to India and bank account choice', body: ['Many NRIs prefer receiving or transferring foreign earnings through an NRE account because it keeps foreign-source funds clearly identifiable and generally repatriable. Others may use an NRO account depending on residency, banking status, and existing financial arrangements.', 'The transfer route does not magically make a taxable amount tax-free, and it does not make a non-taxable amount taxable by itself. What it does is create a documentation trail. Clean records reduce the chance of questions when filing returns, applying for loans, or explaining large credits.', 'Before remitting a large gratuity amount, speak to your bank and CA. Confirm whether your account status is updated, whether your KYC and residency details are current, and how the transfer should be described in records. A small amount of planning can save a lot of paperwork later.'] },
    { heading: 'Common mistakes Indian expats make', body: ['The first mistake is assuming that because the UAE does not tax gratuity, India can never ask questions. The second is mixing gratuity with salary, bonus, and reimbursements in one unexplained transfer. The third is losing the settlement sheet after leaving the UAE.', 'Another common mistake is waiting until tax filing season to reconstruct travel days and payment dates. By then, emails may be gone, UAE phone numbers may be inactive, and bank access may be harder. Download everything while you still have access to employer portals and UAE banking apps.', 'Finally, avoid online one-line answers for large settlements. If the amount is meaningful, pay for a CA review. The right answer depends on facts, and the cost of fixing a wrong filing can be higher than getting advice before remitting or filing.'] },
  ]} faq={[
    ['Is UAE gratuity taxed in the UAE?', 'No personal income tax is charged by the UAE.'],
    ['Is it always tax-free in India?', 'No. It depends on residency and facts. Ask a CA.'],
    ['Should I transfer to an NRE account?', 'Many NRIs do, but account choice should match your residency and banking situation.'],
  ]} note="This article is not tax advice. Consult a Chartered Accountant before filing or remitting a large UAE gratuity amount to India." />
}
