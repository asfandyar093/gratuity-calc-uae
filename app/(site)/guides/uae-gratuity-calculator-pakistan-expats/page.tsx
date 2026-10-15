import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AffiliateBox from '@/components/AffiliateBox'
import { baseOpenGraph } from '@/lib/seo'
import RelatedGuides from '@/components/RelatedGuides'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator for Pakistani Expats 2026 | PKR',
  description:
    'UAE gratuity guide for Pakistani expats 2026: calculate your EOSB in PKR, overseas Pakistani tax rules, UAE vs Pakistani gratuity, and remittance tips.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-pakistan-expats',
  },
  openGraph: { ...baseOpenGraph, type: 'article', url: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-pakistan-expats' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.uaegratuitycheck.com/guides' },
        { '@type': 'ListItem', position: 3, name: 'UAE Gratuity for Pakistani Expats', item: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-pakistan-expats' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Gratuity Calculator for Pakistani Expats 2026 | PKR, Tax and Remittance Guide',
      description: 'Complete UAE gratuity guide for Pakistani expats: PKR conversion, overseas Pakistani tax rules, and remittance tips.',
      url: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-pakistan-expats',
      datePublished: '2026-03-15',
      dateModified: '2026-10-15',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-pakistan-expats',
    },
  ],
}

const AED_TO_PKR = 77.5

function fmtAED(n: number) {
  return 'AED ' + n.toLocaleString('en-AE', { maximumFractionDigits: 0 })
}

function fmtPKR(n: number) {
  return '₨' + Math.round(n * AED_TO_PKR).toLocaleString('en-PK')
}

export default function PakistaniExpatsPage() {
  const examples = [
    { role: 'IT / Software Engineer', salary: 12000, years: 5 },
    { role: 'Civil / Construction Engineer', salary: 7000, years: 6 },
    { role: 'Accountant / Finance', salary: 8000, years: 4 },
    { role: 'Driver / Transport', salary: 3000, years: 3 },
    { role: 'Sales / Marketing', salary: 6000, years: 7 },
  ]

  function calcGratuity(salary: number, years: number) {
    const daily = salary / 30
    const g = years <= 5
      ? daily * 21 * years
      : daily * 21 * 5 + daily * 30 * (years - 5)
    return Math.min(g, salary * 24)
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        {/* BREADCRUMB + HERO */}
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> ›{' '}
            <Link href="/guides">Guides</Link> › UAE Gratuity for Pakistani Expats
          </div>
          <h1>UAE Gratuity Calculator for Pakistani Expats 2026</h1>
          <p>
            Everything Pakistanis working in Dubai, Abu Dhabi, and Sharjah need to know about UAE end-of-service gratuity, including PKR conversion, overseas Pakistani tax rules, and how to send the money home.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '0.5rem' }}><time dateTime="2026-10-15">Last updated: October 2026</time> · 10 min read</p>
          <div className="ar-hero" style={{ fontSize: '18px' }}>حاسبة مكافأة نهاية الخدمة للعمالة الباكستانية في الإمارات 2026</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
        </div>

        {/* Quick facts */}
        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>Key facts for Pakistani expats</h2>
          <ul style={{ color: 'var(--green-dark)' }}>
            <li><strong>Pakistani nationals are fully eligible</strong> for UAE end-of-service gratuity after 1 year of continuous service</li>
            <li><strong>No UAE income tax</strong> is charged on your gratuity, and your employer can deduct only what the law allows</li>
            <li><strong>Pakistani tax depends on your residency</strong> in the year you receive the money, so read the tax section below</li>
            <li><strong>No resignation penalty</strong> under the 2022 UAE Labour Law, full gratuity whether you resigned or were terminated</li>
            <li>Current exchange rate used in this guide: <strong>1 AED ≈ ₨{AED_TO_PKR}</strong> (indicative, check current rates before transferring)</li>
          </ul>
        </div>

        {/* Calculator prompt */}
        <div className="card">
          <div className="badge bg-teal">CALCULATE YOUR GRATUITY</div>
          <h2>How much gratuity are you owed? Use the free calculator</h2>
          <p>Before diving into PKR conversions and remittance tips, calculate your exact UAE gratuity entitlement first. Enter your basic monthly salary (in AED), your employment dates, and your contract type.</p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '12px 28px', borderRadius: '10px', fontWeight: 800, fontSize: '16px', textDecoration: 'none', marginTop: '0.5rem' }}>
            Calculate my gratuity →
          </Link>
        </div>

        {/* Example calculations */}
        <div className="card">
          <div className="badge bg-teal">WORKED EXAMPLES, AED &amp; PKR</div>
          <h2>UAE gratuity examples for Pakistani workers, in AED and PKR</h2>
          <p>The table below shows estimated gratuity amounts for common Pakistani expat salary levels and lengths of service. These use the standard UAE formula: 21 days per year for the first 5 years, 30 days per year thereafter.</p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '1rem' }}>Exchange rate used: 1 AED = ₨{AED_TO_PKR} (indicative only)</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Basic salary</th>
                  <th>Service</th>
                  <th>Gratuity (AED)</th>
                  <th>Gratuity (PKR)</th>
                </tr>
              </thead>
              <tbody>
                {examples.map(e => {
                  const g = calcGratuity(e.salary, e.years)
                  return (
                    <tr key={e.role}>
                      <td>{e.role}</td>
                      <td>{fmtAED(e.salary)}/mo</td>
                      <td>{e.years} years</td>
                      <td className="hl">{fmtAED(g)}</td>
                      <td>{fmtPKR(g)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="info-box" style={{ marginTop: '1rem' }}>
            These are estimates based on basic salary only. Gratuity does not include housing allowance, transport allowance, or any other allowances. Enter your actual salary in the calculator for a precise figure.
          </div>
        </div>

        {/* Pakistan tax rules */}
        <div className="card">
          <div className="badge bg-blue">PAKISTAN TAX RULES FOR OVERSEAS PAKISTANIS</div>
          <h2>Is UAE gratuity taxable in Pakistan?</h2>
          <p>It depends mainly on whether you are a tax resident of Pakistan in the year you receive the money. The UAE does not charge personal income tax on gratuity, and your employer can only deduct amounts the law allows (Article 51(7)). What happens in Pakistan is set by the Income Tax Ordinance 2001, which the Federal Board of Revenue (FBR) explains on its website.</p>
          <div className="two-col">
            <div className="mini-card" style={{ borderTop: '4px solid var(--green)' }}>
              <h3 style={{ color: 'var(--green-dark)' }}>Residency decides the starting point</h3>
              <ul>
                <li>The FBR treats an individual as resident if present in Pakistan for 183 days or more in the tax year, and lists other tests as well.</li>
                <li>A non resident individual is taxed in Pakistan only on Pakistan source income.</li>
                <li>If you are non resident when you receive the gratuity, Pakistan generally has no claim on income earned abroad.</li>
              </ul>
            </div>
            <div className="mini-card" style={{ borderTop: '4px solid var(--red)' }}>
              <h3 style={{ color: 'var(--red-dark)' }}>Where questions can arise</h3>
              <ul>
                <li>If you return to Pakistan and are a resident in the year you receive the money.</li>
                <li>If you cannot show where a large amount came from.</li>
                <li>Income earned inside Pakistan, including returns on money you invest there.</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: '1rem' }}>On documentation, section 111(4) of the Ordinance lets foreign remittances received through normal banking channels be treated as explained, subject to conditions such as an encashment certificate from the bank and limits set in the law. FBR Circular 05 of 2022 explains which channels count. Keep your UAE settlement sheet, the transfer receipt and the encashment certificate together.</p>
          <div className="warn-box" style={{ marginTop: '1rem' }}>
            Tax rules and limits change. Check the current position with the FBR or a tax adviser in Pakistan before you move a large sum, especially if you are returning to Pakistan for good. This guide gives general information only.
          </div>
        </div>

        {/* UAE vs Pakistan gratuity */}
        <div className="card">
          <div className="badge bg-blue">IF YOU RETURN TO PAKISTAN</div>
          <h2>UAE gratuity and Pakistani end of service benefits</h2>
          <p>This guide covers the UAE side only. Pakistani employers may offer gratuity, a provident fund or other end of service benefits, and the rules depend on the employer and the provincial labour law. They do not replace or reduce your UAE gratuity, which is based on your UAE employment under Article 51 of Federal Decree-Law No. 33 of 2021. If you are comparing a job offer in Pakistan with your UAE package, ask the new employer in writing which benefits it provides and on what salary they are calculated.</p>
        </div>

        {/* Remittance tips */}
        <div className="card">
          <div className="badge bg-teal">SENDING MONEY HOME</div>
          <h2>How to send UAE gratuity to Pakistan</h2>
          <p>How you send the money changes how much arrives, and what paperwork you hold afterwards. Compare the total cost of each option: the exchange rate you are given compared with the market rate, plus any fees, plus the speed.</p>
          <div className="steps-3" style={{ marginTop: '1rem' }}>
            <div className="step-card">
              <div className="step-n">OPTION 01</div>
              <h4>Bank transfer</h4>
              <p>A transfer from your UAE bank account to a Pakistani bank account. It leaves a clear record. Ask both banks about their fees and the exchange rate before you send a large amount.</p>
            </div>
            <div className="step-card">
              <div className="step-n">OPTION 02</div>
              <h4>Roshan Digital Account</h4>
              <p>The State Bank of Pakistan framework for non resident Pakistanis. Applicants include non resident Pakistanis holding a CNIC, SNIC or NICOP. Check the current eligibility and charges with the Pakistani bank offering it.</p>
            </div>
            <div className="step-card">
              <div className="step-n">OPTION 03</div>
              <h4>Exchange house or transfer service</h4>
              <p>Licensed exchange houses and money transfer providers often quote different rates from banks. Ask for the final amount in rupees in writing and keep the receipt.</p>
            </div>
          </div>
          <div className="info-box" style={{ marginTop: '1rem' }}>
            Use regulated channels so that you hold paperwork for the transfer. Unlicensed or informal channels leave no record to show your bank or the tax authority.
          </div>
        </div>

        <AffiliateBox category="remittance" />

        <div className="card">
          <div className="badge bg-amber">GETTING HELP</div>
          <h2>If your gratuity is not paid: who to contact</h2>
          <p>Start with your employer in writing, then submit a request to MOHRE, which you can reach on 80084 or through its app and website. Pakistani workers can also contact the Community Welfare Attaché at the <a href="https://pakistanembassyuae.org/contact-us/" target="_blank" rel="noopener noreferrer">Embassy of Pakistan in Abu Dhabi</a> or the Welfare Wing of the <a href="https://pakistanconsulatedubai.ae/pages/our-team" target="_blank" rel="noopener noreferrer">Consulate General of Pakistan in Dubai</a>. For the steps and the documents to bring, see <Link href="/blog/how-to-file-mohre-complaint">how to file a MOHRE complaint</Link>. A claim is not heard after 2 years from the end of employment.</p>
        </div>

        {/* FAQ */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions, Pakistani expats</h2>

          <h3 style={{ marginTop: '1rem' }}>I have worked in UAE for 8 years. How do I calculate my gratuity?</h3>
          <p>For 8 years at, say, AED 6,000 basic salary: Daily wage = AED 200. Gratuity for first 5 years = 200 × 21 × 5 = AED 21,000. Gratuity for years 6 to 8 = 200 × 30 × 3 = AED 18,000. Total = AED 39,000 (≈ ₨{(39000 * AED_TO_PKR).toLocaleString('en-PK')}). Use the calculator above for your exact figures.</p>

          <h3 style={{ marginTop: '1.25rem' }}>My visa is sponsored by my employer. Can they withhold gratuity if I quit?</h3>
          <p>No. Visa sponsorship status does not affect your gratuity entitlement. Under the 2022 UAE Labour Law, resignation does not reduce gratuity. Your employer must pay within 14 days of the contract end date (Article 53), whether you quit or were terminated.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Can I open a Roshan Digital Account while still working in UAE?</h3>
          <p>Roshan Digital Account is for non resident Pakistanis, including those with a CNIC, SNIC or NICOP, under State Bank of Pakistan rules. Ask a participating Pakistani bank about current eligibility and charges. Your gratuity can only be sent once you actually receive it from your employer.</p>

          <h3 style={{ marginTop: '1.25rem' }}>میں یو اے ای میں پاکستانی مزدور ہوں, کیا مجھے گریجویٹی ملے گی؟</h3>
          <p>جی ہاں۔ یو اے ای میں کام کرنے والے تمام پاکستانی محنت کشوں کو، چاہے وہ کسی بھی شعبے میں کام کریں، فیڈرل ڈیکری قانون نمبر 33 سال 2021 کے تحت گریجویٹی کا حق حاصل ہے, شرط یہ ہے کہ انہوں نے ایک مکمل سال کی مسلسل ملازمت کی ہو۔</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--green) 0%, #1a5c2a 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Calculate your UAE gratuity in AED and PKR</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>Free, instant, and Based on the official Article 51 formula. No data stored.</p>
          <Link href="/" style={{ display: 'inline-block', background: '#fff', color: 'var(--green-dark)', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free gratuity calculator →
          </Link>
        </div>

        <div className="card" style={{ background: 'var(--gray-50)' }}>
          <h2 style={{ fontSize: '17px', marginBottom: '0.75rem' }}>More tools for planning your money in the UAE</h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            <Link href="/currency-converter-uae" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              → AED Currency Converter, check today&apos;s indicative PKR rate
            </Link>
            <Link href="/cost-of-living-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              → UAE Cost of Living Calculator, real monthly budgets for Dubai, Abu Dhabi &amp; Sharjah
            </Link>
            <Link href="/savings-goal-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              → UAE Savings Goal Calculator, plan what to do with your gratuity once it arrives
            </Link>
          </div>
        </div>

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector" target="_blank" rel="noopener noreferrer">
              <span>UAE Government: end-of-service benefits</span>
              <small>Official UAE Government overview of private-sector end-of-service benefit provisions.</small>
            </a>
            <a className="article-link-item" href="https://mohre.gov.ae" target="_blank" rel="noopener noreferrer">
              <span>MOHRE: Ministry of Human Resources and Emiratisation</span>
              <small>Official UAE ministry responsible for labour law, complaints, and private-sector employment regulation.</small>
            </a>
          </div>
        </div>

        <AuthorBox />
        <RelatedGuides path="/guides/uae-gratuity-calculator-pakistan-expats" />

        <Footer />
      </main>
    </>
  )
}
