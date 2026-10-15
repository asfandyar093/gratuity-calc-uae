import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import VisaCostCalculator from '@/components/VisaCostCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'
import RelatedCalculators from '@/components/RelatedCalculators'
import RelatedGuides from '@/components/RelatedGuides'
import AuthorBox from '@/components/AuthorBox'
import { baseOpenGraph } from '@/lib/seo'

const url = 'https://www.uaegratuitycheck.com/uae-visa-cost-calculator'
const title = 'UAE Employment Visa Cost 2026: 2 Year Dubai Estimate'
const description = 'Estimate what a UAE employment visa costs for mainland or free zone, and learn what the labour law says about who pays recruitment and visa costs.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    ...baseOpenGraph,
    title,
    description,
    url,
    images: ['/uae-visa-cost-calculator-og.png'],
  },
}

const faq: [string, string][] = [
  ['Does my employer have to pay my visa costs?', 'Article 6 of Federal Decree Law No. 33 of 2021 prohibits the employer from charging the worker for the fees and costs of recruitment and employment, whether directly or indirectly. In practice that means a private sector employer should bear the cost of your own work permit and employment visa. Dependant visas are a separate matter and are normally paid by the sponsor.'],
  ['Are the numbers in the calculator official fees?', 'No. The calculator gives planning ranges compiled by this site. They are not an official tariff, and typing centre, agent and insurance charges vary. Confirm each fee with your employer, the typing centre or the government channel before you rely on it.'],
  ['Is a free zone or mainland visa cheaper?', 'It depends on the free zone and the package your employer buys. Mainland visas go through MOHRE and the immigration authority, while free zone visas are issued through the free zone authority. Ask your employer for an itemised list, since the difference is usually in the service and processing charges.'],
  ['What happens to my visa when I change jobs?', 'Your old employer cancels the work permit and residence visa, and your new employer applies for a new permit. During the gap you are covered by the grace period for your residence category. See the visa grace period guide for the lengths.'],
  ['Can I get a refund if I leave early?', 'Government and typing fees are normally one off charges, so there is no general refund for unused validity. If your employer paid them, the labour law bars it from charging them back to you.'],
  ['What do I need to sponsor my spouse or children?', 'The u.ae portal lists documents such as the dependant passport copy, Emirates ID application receipt, certified housing lease or proof of ownership, the sponsor\'s passport and job contract, a medical fitness certificate for dependants over 18, and medical insurance or a health card. Requirements vary by emirate, so check the current list.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Visa Cost Calculator',
    url,
    description,
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
      { '@type': 'ListItem', position: 3, name: 'Visa cost', item: url },
    ],
  },
]

export default function VisaCostCalculatorPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/gratuity-calculator">Calculators</Link> › Visa cost</div>
          <h1>UAE Employment Visa Cost Calculator 2026</h1>
          <LastUpdated date="2026-10-15" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>See a planning estimate of what a UAE employment visa costs, mainland or free zone, and check what the law says about who should pay it, before you sign an offer letter.</p>
        </div>

        <VisaCostCalculator />

        <div className="warn-box" style={{ margin: '1rem 0' }}>
          <strong>Planning estimate only.</strong> The ranges above are compiled by this site and are not an official government fee list. Fees change and agents price differently, so confirm each item with your employer, a typing centre or the government channel.
        </div>

        <div className="card">
          <h2>What is in the cost of a UAE employment visa?</h2>
          <p>A UAE employment visa is a sequence of separate government and processing steps, not one payment. The items below are the usual parts. The calculator above gives a planning range for each, and your employer or agent can give the exact quote.</p>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Item</th><th>What it covers</th><th>When it applies</th></tr></thead>
              <tbody>
                <tr><td>Entry permit</td><td>Lets you enter the UAE to complete the process</td><td>Applying from outside the UAE</td></tr>
                <tr><td>Change of status</td><td>Replaces the entry permit for an inside country switch</td><td>Switching status while in the UAE</td></tr>
                <tr><td>Medical fitness test</td><td>Required for applicants aged 18 and over</td><td>Every employment visa</td></tr>
                <tr><td>Emirates ID</td><td>Identity card, priced by validity period</td><td>Every resident</td></tr>
                <tr><td>Typing centre or e-form fee</td><td>Submission of the application</td><td>Most applications</td></tr>
                <tr><td>Visa stamping or residence issuance</td><td>Issues the residence permit</td><td>Every resident</td></tr>
                <tr><td>PRO or agent fee</td><td>A service charge if a PRO handles the process</td><td>Optional, set by the agent</td></tr>
                <tr><td>Health insurance</td><td>Medical cover required for residence</td><td>Required, rules differ by emirate</td></tr>
              </tbody>
            </table>
          </div>
          <p>The u.ae portal confirms that a residence visa requires a medical test for applicants aged 18 and above, a security check and an Emirates ID application. For the rest of the cost picture of moving here, see the <Link href="/blog/uae-cost-of-living-2026-what-expats-actually-spend">UAE cost of living guide</Link> and the <Link href="/salary-calculator">UAE salary calculator</Link>.</p>
        </div>

        <div className="card">
          <h2>Who pays for your visa under UAE law?</h2>
          <p>Article 6(4) of Federal Decree Law No. 33 of 2021 says the employer is prohibited from charging the worker for the fees and costs of recruitment and employment, or collecting them from the worker, whether directly or indirectly. That covers your own work permit and employment visa. If an offer letter asks you to repay visa costs or deducts them from your pay, ask HR which part of the law allows it. The <Link href="/blog/uae-salary-deductions-what-employers-can-deduct">salary deductions guide</Link> lists the only deductions allowed under Article 25.</p>
          <p>Dependants are different. A spouse or child is usually sponsored by the employee, and the sponsor normally covers their medical test, Emirates ID, insurance and residence fees unless the employer agrees to pay. Ask for that in writing before you accept the offer.</p>
        </div>

        <div className="card">
          <h2>Mainland, free zone and inside country routes</h2>
          <p>Mainland employment visas are processed through MOHRE and the immigration authority. Free zone visas are issued through the free zone authority, often through a single window service. The entry permit and medical test steps are broadly similar. What differs is the processing route and service charges, so ask for an itemised quote rather than a single total.</p>
          <p>If you are already in the UAE, for example on a visit visa or between jobs, you may be able to switch status without leaving. That replaces the entry permit with a change of status step. If you lose your job and your permit is cancelled, you have a grace period before overstay fines apply. See the <Link href="/blog/uae-visa-grace-period-after-job-loss">visa grace period guide</Link>.</p>
        </div>

        <div className="card">
          <h2>Questions to ask before you accept an offer</h2>
          <ul>
            <li>Does the company pay my visa, Emirates ID and medical costs in full?</li>
            <li>Is health insurance included, and for how long?</li>
            <li>Will the company help with a spouse or child visa, or is that my cost?</li>
            <li>Which agent or PRO is used, and is there any fee passed to me?</li>
          </ul>
          <p>Put the answers in the offer letter or contract. If the job later ends, your end of service pay is separate from visa costs. Estimate it with the <Link href="/">UAE gratuity calculator</Link>, and read the <Link href="/blog/uae-gratuity-visa-cancellation">visa cancellation and final settlement guide</Link>.</p>
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

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa" target="_blank" rel="noopener noreferrer">
              <span>u.ae: general provisions for the residence visa</span>
              <small>Medical test, required documents, renewal and cancellation steps.</small>
            </a>
            <a className="article-link-item" href="https://uaelegislation.gov.ae/en/legislations/1541" target="_blank" rel="noopener noreferrer">
              <span>Federal Decree Law No. 33 of 2021</span>
              <small>Official text of Article 6 on recruitment costs.</small>
            </a>
          </div>
        </div>

        <AuthorBox />
        <RelatedGuides path="/uae-visa-cost-calculator" />
        <RelatedCalculators path="/uae-visa-cost-calculator" />
        <Footer />
      </main>
    </>
  )
}
