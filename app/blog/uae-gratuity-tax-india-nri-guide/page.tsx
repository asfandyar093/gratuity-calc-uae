import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

export const metadata: Metadata = {
  title: 'Is UAE Gratuity Taxable in India? NRI Tax Guide 2026',
  description: 'UAE gratuity is tax-free in the UAE but may be taxable in India depending on your NRI status. Complete guide for Indian professionals working in UAE.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-tax-india-nri-guide' },
  openGraph: { type: 'article', images: ['/blog-india-tax-og.png'] },
}

export default function Page() {
  return <BlogArticlePage slug="uae-gratuity-tax-india-nri-guide" title="Is UAE Gratuity Taxable in India? The Complete NRI Guide 2026" description="UAE gratuity is tax-free in the UAE but may be taxable in India depending on your NRI status and reporting position." badge="NRI TAX" intro="The UAE does not tax personal gratuity payments, but Indian tax treatment depends on your residential status, timing, and reporting facts." sections={[
    { heading: 'UAE tax position', body: ['The UAE does not impose personal income tax on standard employment gratuity. Your employer normally pays the final settlement in AED without UAE income-tax withholding.', 'This does not automatically answer the India question. Indian tax rules look at residency and the nature of income.'] },
    { heading: 'NRI status matters', body: ['If you are non-resident in India for the relevant tax year, foreign employment income can be treated differently than income received or deemed to accrue in India. If you become resident, additional disclosure or tax questions may arise.', 'Keep your UAE employment contract, visa history, travel days, settlement sheet, and remittance proof. These documents help a CA assess the correct treatment.'] },
    { heading: 'Remittance to India', body: ['Using an NRE or NRO account can change documentation and repatriation handling. The transfer route does not by itself decide taxability, but clean records reduce trouble later.'] },
  ]} faq={[
    ['Is UAE gratuity taxed in the UAE?', 'No personal income tax is charged by the UAE.'],
    ['Is it always tax-free in India?', 'No. It depends on residency and facts. Ask a CA.'],
    ['Should I transfer to an NRE account?', 'Many NRIs do, but account choice should match your residency and banking situation.'],
  ]} note="This article is not tax advice. Consult a Chartered Accountant before filing or remitting a large UAE gratuity amount to India." />
}
