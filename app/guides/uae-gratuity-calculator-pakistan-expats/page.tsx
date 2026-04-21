import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator for Pakistani Expats 2026 | PKR, Tax and Remittance Guide',
  description:
    'Complete UAE gratuity guide for Pakistani expats 2026. Calculate your EOSB in PKR, understand overseas Pakistani tax rules, compare UAE vs Pakistani gratuity, and get remittance tips.',
  keywords: [
    'UAE gratuity calculator Pakistani expats',
    'UAE gratuity in PKR',
    'Pakistani expat gratuity UAE',
    'UAE end of service benefit Pakistan',
    'gratuity calculator Dubai Pakistanis',
    'how to send gratuity to Pakistan from UAE',
    'UAE EOSB Pakistani workers',
    'مكافأة نهاية الخدمة باكستان',
  ],
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-pakistan-expats',
  },
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
      dateModified: '2026-03-15',
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
            Everything Pakistanis working in Dubai, Abu Dhabi, and Sharjah need to know about UAE end-of-service gratuity — including PKR conversion, overseas Pakistani tax rules, and how to send the money home.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '0.5rem' }}><time dateTime="2026-04-12">Last updated: April 2026</time> · 10 min read</p>
          <div className="ar-hero" style={{ fontSize: '18px' }}>حاسبة مكافأة نهاية الخدمة للعمالة الباكستانية في الإمارات 2026</div>
        </div>

        {/* Quick facts */}
        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>Key facts for Pakistani expats</h2>
          <ul style={{ color: 'var(--green-dark)' }}>
            <li><strong>Pakistani nationals are fully eligible</strong> for UAE end-of-service gratuity after 1 year of continuous service</li>
            <li><strong>UAE does not deduct tax</strong> from your gratuity — you receive the full calculated amount</li>
            <li><strong>Pakistan does not tax overseas remittances</strong> received from UAE — your gratuity is tax-free in both countries</li>
            <li><strong>No resignation penalty</strong> under the 2022 UAE Labour Law — full gratuity whether you resigned or were terminated</li>
            <li>Current exchange rate used in this guide: <strong>1 AED ≈ ₨{AED_TO_PKR}</strong> (indicative — check current rates before transferring)</li>
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
          <div className="badge bg-teal">WORKED EXAMPLES — AED &amp; PKR</div>
          <h2>UAE gratuity examples for Pakistani workers — in AED and PKR</h2>
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
          <p>Good news for Pakistani expats: UAE gratuity sent home to Pakistan is generally <strong>not subject to Pakistani income tax</strong> when remitted through official banking channels.</p>
          <div className="two-col">
            <div className="mini-card" style={{ borderTop: '4px solid var(--green)' }}>
              <h3 style={{ color: 'var(--green-dark)' }}>Tax-free situations</h3>
              <ul>
                <li>Foreign remittances received in Pakistan via official channels (SWIFT, bank transfer)</li>
                <li>Gratuity received as a lump sum on departure from UAE</li>
                <li>NRP (Non-Resident Pakistani) designated bank accounts receiving foreign remittances</li>
                <li>Roshan Digital Account holders — full tax exemption on foreign income</li>
              </ul>
            </div>
            <div className="mini-card" style={{ borderTop: '4px solid var(--red)' }}>
              <h3 style={{ color: 'var(--red-dark)' }}>When tax may apply</h3>
              <ul>
                <li>If you are considered a resident of Pakistan for tax purposes in the year of receipt</li>
                <li>Income earned inside Pakistan (not remittances from abroad)</li>
                <li>Investment income generated in Pakistan after remittance</li>
              </ul>
            </div>
          </div>
          <div className="warn-box" style={{ marginTop: '1rem' }}>
            Tax laws change frequently. Consult an FBR-registered tax advisor or chartered accountant in Pakistan before making major financial decisions. This guide provides general information only.
          </div>
        </div>

        {/* UAE vs Pakistan gratuity */}
        <div className="card">
          <div className="badge bg-blue">UAE VS PAKISTAN COMPARISON</div>
          <h2>UAE gratuity vs Pakistan end-of-service benefits</h2>
          <p>Pakistan&apos;s domestic labour law also provides for gratuity (end-of-service benefit) under the Workmen Compensation Act and provincial labour laws. Here is how the two systems compare:</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Factor</th><th>UAE</th><th>Pakistan</th></tr>
              </thead>
              <tbody>
                <tr><td>Governing law</td><td>Federal Decree-Law No. 33/2021</td><td>Provincial labour laws (KPK, Punjab, Sindh, Balochistan)</td></tr>
                <tr><td>Wage basis</td><td>Basic salary only</td><td>Last drawn gross salary</td></tr>
                <tr><td>Rate</td><td>21 days (yr 1–5), 30 days (yr 5+)</td><td>30 days per year of service</td></tr>
                <tr><td>Minimum service</td><td>1 year</td><td>Varies by province (typically 1 year)</td></tr>
                <tr className="hl"><td>Maximum cap</td><td>2 years&apos; basic salary</td><td>Varies — some provinces have no cap</td></tr>
                <tr><td>Resignation penalty</td><td>None (since 2022)</td><td>May vary by employer and province</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem' }}>UAE gratuity is generally more generous than Pakistani domestic gratuity for the same salary level, particularly because the UAE has no personal income tax and the AED/PKR exchange rate typically amplifies the real value when funds are remitted.</p>
        </div>

        {/* Remittance tips */}
        <div className="card">
          <div className="badge bg-teal">SENDING MONEY HOME</div>
          <h2>Best ways to send UAE gratuity to Pakistan</h2>
          <p>When transferring your gratuity from UAE to Pakistan, the method you choose significantly affects how much arrives. Here are the main options ranked by cost-efficiency:</p>
          <div className="steps-3" style={{ marginTop: '1rem' }}>
            <div className="step-card">
              <div className="step-n">OPTION 01</div>
              <h4>Bank-to-bank SWIFT transfer</h4>
              <p>Direct transfer from your UAE bank to a Pakistani bank account. Safe and traceable but typically slow (2–5 days) and involves SWIFT fees from both sending and receiving banks. Good for large amounts.</p>
            </div>
            <div className="step-card">
              <div className="step-n">OPTION 02</div>
              <h4>Roshan Digital Account (State Bank of Pakistan)</h4>
              <p>Specially designed for overseas Pakistanis. No minimum balance, competitive rates, and special tax incentives. Can hold balances in foreign currency. Highly recommended for large gratuity transfers.</p>
            </div>
            <div className="step-card">
              <div className="step-n">OPTION 03</div>
              <h4>Money transfer services</h4>
              <p>Services like Wise, Western Union, and UAE Exchange often offer better exchange rates and lower fees than banks. Compare rates before transferring — differences can add up to thousands of rupees on large amounts.</p>
            </div>
          </div>
          <div className="info-box" style={{ marginTop: '1rem' }}>
            Always use official, regulated channels. Hawala transfers, while common, may affect your tax status in Pakistan and carry risks. Roshan Digital Account is the most tax-efficient option for overseas Pakistanis.
          </div>
        </div>

        {/* FAQ */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions — Pakistani expats</h2>

          <h3 style={{ marginTop: '1rem' }}>I have worked in UAE for 8 years. How do I calculate my gratuity?</h3>
          <p>For 8 years at, say, AED 6,000 basic salary: Daily wage = AED 200. Gratuity for first 5 years = 200 × 21 × 5 = AED 21,000. Gratuity for years 6–8 = 200 × 30 × 3 = AED 18,000. Total = AED 39,000 (≈ ₨{(39000 * AED_TO_PKR).toLocaleString('en-PK')}). Use the calculator above for your exact figures.</p>

          <h3 style={{ marginTop: '1.25rem' }}>My visa is sponsored by my employer. Can they withhold gratuity if I quit?</h3>
          <p>No. Visa sponsorship status does not affect your gratuity entitlement. Under the 2022 UAE Labour Law, resignation does not reduce gratuity. Your employer must pay within 14 days of your last working day — whether you quit or were terminated.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Can I open a Roshan Digital Account while still working in UAE?</h3>
          <p>Yes. The Roshan Digital Account is open to all overseas Pakistanis regardless of country of residence. You can open it online through major Pakistani banks including HBL, MCB, Meezan, and others. You can send your gratuity there as soon as you receive it.</p>

          <h3 style={{ marginTop: '1.25rem' }}>میں یو اے ای میں پاکستانی مزدور ہوں — کیا مجھے گریجویٹی ملے گی؟</h3>
          <p>جی ہاں۔ یو اے ای میں کام کرنے والے تمام پاکستانی محنت کشوں کو، چاہے وہ کسی بھی شعبے میں کام کریں، فیڈرل ڈیکری قانون نمبر 33 سال 2021 کے تحت گریجویٹی کا حق حاصل ہے — شرط یہ ہے کہ انہوں نے ایک مکمل سال کی مسلسل ملازمت کی ہو۔</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--green) 0%, #1a5c2a 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Calculate your UAE gratuity in AED and PKR</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>Free, instant, and 100% accurate based on MOHRE approved formula. No data stored.</p>
          <Link href="/" style={{ display: 'inline-block', background: '#fff', color: 'var(--green-dark)', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free gratuity calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}
