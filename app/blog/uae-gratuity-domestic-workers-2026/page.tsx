import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-gratuity-domestic-workers-2026'
const pageImage = '/images/blog/real/uae-domestic-worker-gratuity-rights.png'
const pageTitle = 'UAE Gratuity for Domestic Workers 2026 | Rights, Formula & Claims'
const pageDescription = 'Domestic worker gratuity guide for UAE housemaids, nannies, drivers, and household staff: eligibility, formula differences, final dues, documents, and complaint options.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['UAE domestic worker gratuity', 'housemaid gratuity UAE', 'nanny gratuity UAE', 'domestic worker final settlement UAE', 'MOHRE domestic worker complaint'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'UAE domestic worker reviewing employment contract and gratuity final settlement papers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
}

export default function Page() {
  return <BlogArticlePage slug="uae-gratuity-domestic-workers-2026" title="UAE Gratuity for Domestic Workers — Full Rights Guide 2026" description="Domestic workers follow separate UAE rules for gratuity. Learn eligibility, formula differences, and what to do if payment is withheld." badge="DOMESTIC WORKERS" intro="Domestic workers are not covered by the same private-sector formula as most office or free-zone employees. Their rights come from a separate domestic worker framework." image={{
    src: '/images/blog/real/uae-domestic-worker-gratuity-rights.png',
    alt: 'UAE domestic worker reviewing end-of-service gratuity rights and final settlement paperwork',
    title: 'UAE Gratuity for Domestic Workers 2026',
    caption: 'Domestic workers have separate UAE end-of-service rules, so the contract, wage proof, and sponsor records should be checked carefully.',
  }} sections={[
    { heading: 'Who counts as a domestic worker?', body: ['Domestic worker categories can include housemaids, nannies, private drivers, cooks, gardeners, family chauffeurs, household cooks, and similar roles performed for a household rather than a standard private-sector company. The exact category shown on the visa and contract matters.', 'This distinction is important because domestic workers do not simply fall under the same gratuity formula used for office staff, retail employees, or most free-zone workers. Their rights come from a separate domestic worker framework and the contract issued for that employment relationship.', 'If you are unsure, start by checking the contract, visa category, sponsor name, and whether a recruitment agency was involved. A worker sponsored by a household usually needs domestic worker guidance, while a cleaner employed by a cleaning company may fall under a different employment setup.'] },
    { heading: 'How the formula can differ', body: ['Domestic worker gratuity is commonly discussed using a different accrual approach from the main UAE Labour Law. That is why applying the standard 21-day and 30-day private-sector formula can produce the wrong expectation.', 'The exact calculation should be checked against the domestic worker contract and current official guidance. Wages, service length, unpaid absences, early termination facts, and whether the worker completed the required service period can all affect the final amount.', 'Even where the formula differs, the payment should still be transparent. The sponsor or employer should be able to explain the calculation, show the wage basis used, and provide a final settlement receipt that the worker can understand before signing.'] },
    { heading: 'What should be paid at the end of service?', body: ['A domestic worker exit may involve more than gratuity. Final salary, unused leave where applicable, return travel arrangements, recruitment-related documents, personal documents, and any agreed benefits may need to be settled. The exact list depends on the contract and facts.', 'Wage proof is often the biggest practical issue. If salary was paid in cash, keep receipts, messages, bank deposits, or agency records. If salary was transferred, save statements showing the regular wage pattern. These records help prove both service and payment history.', 'The worker should not be pressured to sign a receipt in a language they do not understand. If translation is needed, ask for help before signing. A signed full-and-final paper can become important later if a dispute arises.'] },
    { heading: 'If gratuity or final dues are withheld', body: ['Collect the contract, passport and visa copies, Emirates ID copy if available, wage proof, WhatsApp or SMS messages, agency documents, travel records, and any written promise about payment. Keep copies of documents before leaving the household if it is safe and lawful to do so.', 'Contact MOHRE or the relevant domestic worker support channel if the sponsor refuses payment or withholds documents. If a recruitment agency arranged the work, keep their details too, because they may help identify the contract record or complaint route.', 'For sponsors, the best practice is to prepare a written settlement showing salary, leave, gratuity or other end-of-service amount, deductions if any, and payment method. Clear paperwork protects both sides and reduces misunderstandings at the end of the relationship.'] },
  ]} faq={[
    ['Do domestic workers get gratuity?', 'Yes, but under separate rules from standard private-sector employees.'],
    ['Can I use the main calculator?', 'Use it only as a rough reference; domestic worker rules can differ.'],
    ['Who should I contact for a dispute?', 'Contact MOHRE or a qualified UAE adviser with domestic worker experience.'],
  ]} />
}
