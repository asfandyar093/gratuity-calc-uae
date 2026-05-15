import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

export const metadata: Metadata = {
  title: 'UAE Gratuity for Domestic Workers 2026 — Rights Under the New Law',
  description: 'UAE domestic workers are entitled to end-of-service gratuity. Federal Law No. 10 of 2017 rules, formula differences, and how to claim if withheld.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-domestic-workers-2026' },
  openGraph: { type: 'article', images: ['/blog-domestic-og.png'] },
}

export default function Page() {
  return <BlogArticlePage slug="uae-gratuity-domestic-workers-2026" title="UAE Gratuity for Domestic Workers — Full Rights Guide 2026" description="Domestic workers follow separate UAE rules for gratuity. Learn eligibility, formula differences, and what to do if payment is withheld." badge="DOMESTIC WORKERS" intro="Domestic workers are not covered by the same private-sector formula as most office or free-zone employees. Their rights come from a separate domestic worker framework." sections={[
    { heading: 'Who counts as a domestic worker?', body: ['Domestic worker categories can include housemaids, nannies, private drivers, cooks, gardeners, and similar household roles. The contract and visa category matter.', 'Do not apply the standard 21-day and 30-day private-sector formula without checking the domestic worker law and contract.'] },
    { heading: 'How the formula differs', body: ['Domestic worker gratuity is commonly described using a different accrual approach from the main UAE Labour Law. The exact calculation should be checked against the domestic worker contract and current MOHRE guidance.', 'Payment should still be transparent. Ask for a written calculation and final settlement receipt.'] },
    { heading: 'If gratuity is withheld', body: ['Collect the contract, passport and visa copies, wage proof, messages, and any agency documents. Contact MOHRE or the relevant domestic worker support channel if the sponsor refuses payment.'] },
  ]} faq={[
    ['Do domestic workers get gratuity?', 'Yes, but under separate rules from standard private-sector employees.'],
    ['Can I use the main calculator?', 'Use it only as a rough reference; domestic worker rules can differ.'],
    ['Who should I contact for a dispute?', 'Contact MOHRE or a qualified UAE adviser with domestic worker experience.'],
  ]} />
}
