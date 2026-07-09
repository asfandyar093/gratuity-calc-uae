import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import IncomeTaxCalculator from '@/components/IncomeTaxCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/uae-income-tax-calculator'

export const metadata: Metadata = {
  title: 'UAE Income Tax Calculator 2026 | 0% Tax — See Your Full Take-Home Pay',
  description: 'The UAE charges 0% personal income tax on salaries. Enter your gross pay to see your full take-home amount, then compare it to an illustrative income tax bill back home.',
  alternates: { canonical: url },
  openGraph: {
    title: 'UAE Income Tax Calculator 2026 | 0% Tax — See Your Full Take-Home Pay',
    description: 'The UAE charges 0% personal income tax on salaries. See your full take-home pay and compare it to an illustrative home-country tax estimate.',
    url,
    images: ['/uae-income-tax-calculator-og.png'],
  },
}

const faq: [string, string][] = [
  ['Do expats pay income tax in Dubai?', 'No. Neither UAE nationals nor expatriates pay personal income tax on salaries, wages, or bonuses anywhere in the UAE, including Dubai. There is no federal or emirate-level payroll tax on individual employment income.'],
  ['Is gratuity (end-of-service benefit) taxed in the UAE?', 'No. Gratuity, also called the end-of-service benefit, is paid by the employer without any UAE tax withholding. Use our gratuity calculator to estimate your payout, and see our tax guide for how gratuity may be treated once it reaches your home country.'],
  ['Do I still owe tax to my home country while working in the UAE?', 'That depends entirely on your home country\'s tax residency rules, not UAE law. Many countries only tax residents on worldwide income, so non-residents or NRIs are often exempt on UAE-sourced salary — but the exact position varies a lot by country and by your individual circumstances. See our India NRI gratuity tax guide for a worked example, and speak with a qualified tax advisor for your specific case.'],
  ['What is UAE corporate tax, and does it apply to me as an employee?', 'UAE Corporate Tax is a 9% tax on business profits above AED 375,000, introduced in 2023. It applies to companies and to individuals operating under a freelance or business trade licence — it does not apply to employees earning a salary under a standard employment contract.'],
  ['Is there tax on savings or investment growth in the UAE?', 'No. The UAE does not levy personal capital gains tax, dividend tax, or interest income tax on individuals. Bank interest, personal investment gains, and savings growth are not taxed at the individual level.'],
  ['What taxes do I actually pay in the UAE?', 'As a resident you mainly encounter 5% VAT on most goods and services you buy, plus occasional municipality or tourism fees (for example on hotel stays). If you run a business or hold a trade licence, 9% corporate tax may also apply to profits above AED 375,000 — but none of this is a tax on your salary.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Income Tax Calculator',
    url,
    description: 'Free UAE income tax calculator showing that salaries are taxed at 0% in the UAE, with an illustrative comparison to home-country income tax.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://www.uaegratuitycheck.com/gratuity-calculator' },
      { '@type': 'ListItem', position: 3, name: 'Income Tax', item: url },
    ],
  },
]

export default function IncomeTaxPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Income Tax</div>
          <h1>UAE Income Tax Calculator 2026</h1>
          <LastUpdated date="July 2026" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>The UAE levies 0% personal income tax on salaries — for everyone, citizens and expats alike. Enter your gross pay below to see your full take-home amount, then compare it to an illustrative income tax bill back home.</p>
        </div>

        <IncomeTaxCalculator />

        <div className="card">
          <h2>Does the UAE have income tax?</h2>
          <p>No. The UAE does not impose a personal or individual income tax on salaries, wages, bonuses, or other employment income — at the federal level or in any individual emirate. Whatever your employment contract states as your gross salary is, in practice, also your net salary. There is no payslip line for income tax because none is deducted.</p>
          <p>This is easy to confuse with two other taxes that do exist in the UAE. <strong>UAE Corporate Tax</strong>, introduced in 2023, is a 9% tax on business profits above AED 375,000. It applies to companies and to individuals who hold a freelance or business trade licence and operate as a business — it is not a tax on employees receiving a salary. <strong>VAT (Value Added Tax)</strong> is a 5% consumption tax charged on most goods and services. Everyone, resident or visitor, pays VAT when they spend money in the UAE, but it is a sales tax, not an income tax, and it is unrelated to what you earn.</p>
          <div className="comp-grid" style={{ marginTop: '1rem' }}>
            <div className="comp-card comp-included">
              <div className="comp-title">✓ NO TAX ON</div>
              <div className="comp-item"><span className="comp-dot dot-green" /><span>Salary and wages</span></div>
              <div className="comp-item"><span className="comp-dot dot-green" /><span>Bonuses and commissions</span></div>
              <div className="comp-item"><span className="comp-dot dot-green" /><span>Gratuity / end-of-service benefit (EOSB)</span></div>
              <div className="comp-item"><span className="comp-dot dot-green" /><span>Personal investment gains</span></div>
              <div className="comp-item"><span className="comp-dot dot-green" /><span>Bank interest and savings growth</span></div>
            </div>
            <div className="comp-card comp-excluded">
              <div className="comp-title">✗ TAXES THAT DO EXIST IN UAE</div>
              <div className="comp-item"><span className="comp-dot dot-gray" /><span>5% VAT on most purchases</span></div>
              <div className="comp-item"><span className="comp-dot dot-gray" /><span>9% corporate tax on business profits above AED 375,000</span></div>
              <div className="comp-item"><span className="comp-dot dot-gray" /><span>Municipality and tourism fees on hotel stays</span></div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>FAQ</h2>
          {faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Related calculators</h2>
          <p>Also check the <Link href="/salary-calculator">UAE salary breakdown calculator</Link>, the <Link href="/">UAE gratuity calculator</Link>, and read <Link href="/blog/is-uae-gratuity-taxable">Is UAE gratuity taxable?</Link>, <Link href="/blog/uae-gratuity-tax-india-nri-guide">the UAE gratuity tax guide for Indian NRIs</Link>, and <Link href="/blog/is-there-income-tax-in-dubai-uae-explained">Is there income tax in Dubai? UAE tax rules explained</Link>.</p>
        </div>

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-rights" target="_blank" rel="noopener noreferrer">
              <span>UAE Government: labour rights</span>
              <small>Official worker-rights information for UAE private-sector employees.</small>
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
