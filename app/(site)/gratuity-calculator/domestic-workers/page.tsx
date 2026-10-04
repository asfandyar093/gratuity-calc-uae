import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'
import DomesticEstimator from '@/components/DomesticEstimator'
import SourcesBox from '@/components/SourcesBox'
import { baseOpenGraph, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { pairAlternates } from '@/lib/i18nRoutes'
import { domesticFaqsEn } from '@/lib/domesticFaqs'
import { MOHRE_DOMESTIC_DUES_URL, SOURCES, LAST_REVIEWED } from '@/lib/sources'

const PATH = '/gratuity-calculator/domestic-workers'
const URL = `https://www.uaegratuitycheck.com${PATH}`
const title = 'Domestic Worker Gratuity UAE 2026: Calculator & Law'
const description =
  "Do UAE housemaids, nannies and drivers get gratuity in 2026? What Decree-Law 9/2022 says, MOHRE's dues calculator, and an estimator for contract-based EOSB."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: pairAlternates(PATH, 'en'),
  openGraph: { ...baseOpenGraph, title, description, url: URL, alternateLocale: ['ar_AE'] },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([
      { name: 'Gratuity calculators', path: '/gratuity-calculator' },
      { name: 'Domestic workers', path: PATH },
    ]),
    {
      '@type': 'WebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: title,
      description,
      inLanguage: 'en',
      dateModified: LAST_REVIEWED,
      about: { '@type': 'Legislation', name: 'Federal Decree-Law No. 9 of 2022 on Domestic Workers', url: SOURCES.domesticLaw.href },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'UAE Domestic Worker End-of-Service Estimator',
      url: URL,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description: 'Estimates a domestic worker’s end-of-service amount using the days-per-year rate in the contract. There is no statutory formula under Federal Decree-Law No. 9 of 2022.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
    },
    faqSchema(domesticFaqsEn, `${URL}#faq`, true),
  ],
}

const linkStyle = { color: 'var(--green-dark)', fontWeight: 800 } as const

export default function DomesticWorkersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />

      <div className="hero" style={{ background: 'linear-gradient(145deg, #374151 0%, #4b5563 45%, #6b7280 100%)' }}>
        <div className="hero-inner">
          <div className="eyebrow">Domestic workers · Federal Decree-Law No. 9 of 2022 · Reviewed 4 Oct 2026</div>
          <h1>Domestic Worker Gratuity in the UAE (2026)<br /><em>Calculator and current law</em></h1>
          <p className="hero-desc">
            Housemaids, nannies, private drivers, cooks and other household staff are covered by the UAE domestic workers law, not the Labour Law used for company employees. Here is what that law says about end-of-service gratuity today, how to get MOHRE&apos;s official figure, and an estimator that uses the rate in your contract.
          </p>
          <p className="hero-lang-link"><Link href="/ar/gratuity-calculator/domestic-workers" hrefLang="ar" lang="ar">هذه الصفحة باللغة العربية ←</Link></p>
          <div className="pills">
            <span className="pill">Federal Decree-Law No. 9 of 2022</span>
            <span className="pill">Repealed: Federal Law No. 10 of 2017</span>
            <span className="pill">MOHRE Dues Calculator</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <Link href="/gratuity-calculator">Calculators</Link> › Domestic workers
        </nav>

        <div className="answer-box">
          <p>
            <strong>Short answer:</strong> under the current law, Federal Decree-Law No. 9 of 2022, there is <strong>no fixed statutory gratuity formula for domestic workers</strong>. Article 22 leaves the calculation to a future Cabinet decision, and none had been published when we checked on 4 October 2026. What a worker receives at the end of service depends on the MOHRE-approved contract; use <a href={MOHRE_DOMESTIC_DUES_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>MOHRE&apos;s Domestic Workers Dues Calculator</a> for an official figure. The often-quoted &ldquo;14 days per year&rdquo; comes from the repealed Federal Law No. 10 of 2017.
          </p>
        </div>

        <DomesticEstimator lang="en" />

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">WHAT THE LAW SAYS NOW</div>
            <h2>Article 22: gratuity rules are left to the Cabinet</h2>
            <p>The official English text of Federal Decree-Law No. 9 of 2022 on Domestic Workers (in force since 15 December 2022) says, in full:</p>
            <blockquote style={{ borderInlineStart: '4px solid var(--green)', paddingInlineStart: '1rem', margin: '1rem 0', fontStyle: 'italic' }}>
              &ldquo;Article (22) End-of-Service Gratuity — Based on the Minister&apos;s proposal, the Council of Ministers may approve the systems and mechanisms for calculating and paying the end-of-service gratuity for Workers.&rdquo;
            </blockquote>
            <p>The article sets no number of days, no qualifying period and no cap. The executive regulation, Cabinet Resolution No. 106 of 2022, does not mention gratuity at all. Article 31 of the Decree-Law repealed Federal Law No. 10 of 2017 on Domestic Workers.</p>
            <div className="tbl-wrap" style={{ marginTop: '1rem' }}>
              <table>
                <thead><tr><th></th><th>Before 15 Dec 2022</th><th>Now</th></tr></thead>
                <tbody>
                  <tr><td>Law</td><td>Federal Law No. 10 of 2017 (repealed)</td><td>Federal Decree-Law No. 9 of 2022 + Cabinet Resolution No. 106 of 2022</td></tr>
                  <tr className="hl"><td>Gratuity formula</td><td>Commonly cited as 14 days&apos; basic wage per year</td><td>None set — Article 22 defers to a Cabinet decision</td></tr>
                  <tr><td>Official figure</td><td>—</td><td>MOHRE Domestic Workers Dues Calculator</td></tr>
                  <tr><td>Final dues deadline</td><td>—</td><td>10 days after the agreement ends (Art. 19(2))</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">WHAT DOMESTIC WORKERS ARE ENTITLED TO</div>
            <h2>Rights that are set by the 2022 Decree-Law</h2>
            <div className="two-col" style={{ marginTop: '1rem' }}>
              <div className="mini-card">
                <h3 style={{ color: 'var(--green-dark)' }}>Money at the end of the contract</h3>
                <ul>
                  <li>All financial entitlements paid within <strong>10 days</strong> of the agreement ending (Art. 19(2))</li>
                  <li>Cash for unused annual leave, at the <strong>last wage</strong> (Art. 10(5))</li>
                  <li>A ticket home if the employer ends the contract for a reason not attributable to the worker (Art. 20(2))</li>
                  <li>Wage for the month of death plus other dues paid to heirs (Art. 11(12))</li>
                </ul>
              </div>
              <div className="mini-card">
                <h3 style={{ color: 'var(--green-dark)' }}>During employment</h3>
                <ul>
                  <li>Paid annual leave of at least <strong>30 days</strong> a year; 2 days per month if service is between 6 and 12 months (Art. 10(1))</li>
                  <li>Return ticket home once every two years when taking leave in the home country (Art. 10(4))</li>
                  <li>Sick leave up to 30 days a year: 15 days paid, 15 days half-paid (Art. 10(6))</li>
                  <li>A paid weekly rest day and at least 12 hours&apos; daily rest, 8 of them consecutive (Art. 9)</li>
                  <li>Accommodation, meals, medical treatment or insurance, and keeping their own ID documents (Art. 11)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">GET THE OFFICIAL FIGURE</div>
            <h2>Using MOHRE&apos;s Domestic Workers Dues Calculator</h2>
            <p>MOHRE lists a <a href={MOHRE_DOMESTIC_DUES_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>Domestic Workers Dues Calculator</a> in its services directory, and the helpline is <strong>600590000</strong>. Before you start, have these ready:</p>
            <ul>
              <li>The MOHRE-registered contract, with start and end dates</li>
              <li>The monthly wage in the contract and proof of payment (bank transfers, receipts or messages)</li>
              <li>How the contract ended: expiry, resignation, termination, or a breach by either side</li>
              <li>Any unpaid salary, unused leave days and rest days worked</li>
            </ul>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-amber">WHO COUNTS AS A DOMESTIC WORKER?</div>
            <h2>Household staff vs company employees</h2>
            <p>Domestic workers include housemaids, cleaners, nannies, private drivers, cooks, gardeners and similar roles performed for a household. The visa category and the sponsor on the contract decide which law applies: a cleaner employed and sponsored by a cleaning <em>company</em> is normally a private-sector employee under the Labour Law and uses the <Link href="/" style={linkStyle}>standard UAE gratuity calculator</Link>.</p>
            <h3>Records workers and families should keep</h3>
            <ul>
              <li>The MOHRE-approved contract and any renewal or termination notice</li>
              <li>Salary records: transfers, receipts or messages showing the regular wage</li>
              <li>Leave records and ticket arrangements</li>
              <li>A written final settlement listing salary, leave, any end-of-service amount and deductions</li>
            </ul>
            <div className="warn-box">Do not sign a &ldquo;full and final&rdquo; receipt in a language you cannot read. Ask for a translation first, and keep a copy.</div>
            <p>Our <Link href="/blog/end-of-service-benefits-arabic-terms-english" style={linkStyle}>Arabic end-of-service terms in English</Link> glossary explains the Arabic words commonly used on settlement papers. The <Link href="/blog/uae-final-settlement-checklist" style={linkStyle}>final settlement checklist</Link> and the guide on <Link href="/blog/uae-leave-salary-calculation-guide" style={linkStyle}>leave salary calculation</Link> show what to check before signing, although they are written for company employees.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">DISPUTES</div>
            <h2>If final dues are not paid</h2>
            <ol>
              <li><strong>Complain to MOHRE.</strong> Disputes go to the Ministry first, which tries to settle them amicably (Art. 23).</li>
              <li><strong>MOHRE decision.</strong> MOHRE decides disputes worth up to <strong>AED 50,000</strong> itself (Art. 23(3)); larger cases are referred to court.</li>
              <li><strong>Act within 3 months.</strong> A lawsuit cannot be heard more than 3 months after the work relationship ends, and workers pay no court fees (Art. 26).</li>
            </ol>
            <p>Step-by-step guide: <Link href="/blog/how-to-file-mohre-complaint" style={linkStyle}>how to file a MOHRE complaint</Link>.</p>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">Domestic worker gratuity FAQs</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {domesticFaqsEn.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>

        <SourcesBox sources={[SOURCES.domesticLaw, SOURCES.domesticRegs, SOURCES.uaeDomestic, SOURCES.mohreServices]} />

        <div className="card" style={{ background: 'var(--gray-50)', marginTop: '1rem' }}>
          <h2 style={{ fontSize: '17px', marginBottom: '0.75rem' }}>Related calculators and guides</h2>
          <ul>
            <li><Link href="/" style={linkStyle}>UAE gratuity calculator</Link> — standard 21/30-day formula for company employees</li>
            <li><Link href="/mohre-annual-leave-calculator" style={linkStyle}>MOHRE annual leave calculator</Link></li>
            <li><Link href="/blog/uae-repatriation-ticket-final-settlement" style={linkStyle}>Repatriation ticket rules</Link></li>
            <li><Link href="/blog/uae-gratuity-part-time-workers" style={linkStyle}>Gratuity for part-time workers</Link></li>
            <li><Link href="/final-settlement-calculator-uae" style={linkStyle}>UAE final settlement calculator</Link></li>
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}
