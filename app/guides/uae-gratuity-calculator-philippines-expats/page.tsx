import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator for Filipino Expats 2026 — PHP, OFW Tax & Remittance Guide',
  description:
    'Complete UAE gratuity guide for Filipino workers and OFWs 2026. Calculate your EOSB in Philippine pesos, understand OFW income tax exemptions, BIR rules, OWWA benefits, and the best ways to send gratuity home.',
  keywords: [
    'UAE gratuity calculator Filipino expats',
    'UAE gratuity Philippines peso',
    'OFW gratuity UAE',
    'UAE EOSB Filipino workers',
    'gratuity calculator Dubai Filipino',
    'OFW end of service UAE',
    'how to send UAE gratuity to Philippines',
    'UAE gratuity PHP conversion',
  ],
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-philippines-expats',
  },
  openGraph: {
    images: ['/images/guides/uae-gratuity-calculator-philippines-expats.svg'],
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
        { '@type': 'ListItem', position: 3, name: 'UAE Gratuity for Filipino Expats', item: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-philippines-expats' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Gratuity Calculator for Filipino Expats 2026 — PHP, OFW Tax & Remittance Guide',
      description: 'Complete UAE gratuity guide for Filipino workers: PHP conversion, OFW tax exemptions, OWWA, and remittance tips.',
      url: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-philippines-expats',
      datePublished: '2026-04-21',
      dateModified: '2026-04-21',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-philippines-expats',
    },
  ],
}

const AED_TO_PHP = 15.8

function fmtAED(n: number) {
  return 'AED ' + n.toLocaleString('en-AE', { maximumFractionDigits: 0 })
}

function fmtPHP(aed: number) {
  return '₱' + Math.round(aed * AED_TO_PHP).toLocaleString('en-PH')
}

export default function PhilippinesExpatsPage() {
  const examples = [
    { role: 'Nurse / Healthcare', basicAED: 5000, years: 5 },
    { role: 'Engineer', basicAED: 10000, years: 7 },
    { role: 'IT Professional', basicAED: 12000, years: 10 },
    { role: 'Driver / Logistics', basicAED: 3500, years: 3 },
    { role: 'Domestic Worker', basicAED: 2000, years: 4 },
  ]

  function calcGratuity(basicAED: number, years: number): number {
    const daily = basicAED / 30
    if (years <= 5) return daily * 21 * years
    return daily * 21 * 5 + daily * 30 * (years - 5)
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/guides">Guides</Link> › Filipino Expats
          </div>
          <h1>UAE Gratuity Calculator for Filipino Expats 2026</h1>
          <p>End-of-service guide for OFWs and Filipino workers in the UAE — with PHP conversion and tax guidance · 9 min read · <time dateTime="2026-04-21">Last updated: April 2026</time></p>
        </div>

        <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden' }}>
          <Image
            src="/images/guides/uae-gratuity-calculator-philippines-expats.svg"
            alt="UAE Gratuity Calculator for Filipino Expats 2026"
            width={1200}
            height={630}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>

        {/* Intro card */}
        <div className="card" style={{ borderLeft: '6px solid #0284c7', background: '#f0f9ff' }}>
          <h2 style={{ color: '#0c4a6e' }}>Filipino workers — your UAE gratuity rights</h2>
          <p style={{ color: '#0369a1', fontSize: '18px', fontWeight: 700 }}>
            Filipino expatriates are one of the largest communities in the UAE, numbering over 700,000. Under UAE law, every Filipino employee who has completed one year of continuous service is entitled to end-of-service gratuity — the same as any other nationality.
          </p>
          <p>This guide covers how to calculate your UAE gratuity, convert it to Philippine Pesos, understand the OFW tax exemption, and the best ways to send your payout home.</p>
          <p>
            <Link href="/" style={{ color: '#0284c7', fontWeight: 700 }}>
              Calculate your UAE gratuity now →
            </Link>
          </p>
        </div>

        {/* Gratuity examples in PHP */}
        <div className="card">
          <div className="badge bg-teal">GRATUITY EXAMPLES IN AED AND PHP</div>
          <h2>Common Filipino expat roles — gratuity estimates</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Conversion rate used: 1 AED ≈ ₱{AED_TO_PHP.toFixed(1)} PHP (approximate — verify current rate before planning)</p>

          <div className="tbl-wrap" style={{ marginTop: '1rem' }}>
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Basic salary</th>
                  <th>Years</th>
                  <th>Gratuity (AED)</th>
                  <th>Gratuity (PHP)</th>
                </tr>
              </thead>
              <tbody>
                {examples.map((ex) => {
                  const g = calcGratuity(ex.basicAED, ex.years)
                  return (
                    <tr key={ex.role}>
                      <td>{ex.role}</td>
                      <td>{fmtAED(ex.basicAED)}</td>
                      <td>{ex.years} yrs</td>
                      <td className="hl">{fmtAED(g)}</td>
                      <td className="hl"><strong>{fmtPHP(g)}</strong></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: '1rem', fontSize: '14px' }}>These are estimates based on the UAE gratuity formula. Your exact amount depends on your actual basic salary, precise service duration, and whether the two-year cap applies. Use the <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>free calculator</Link> for a precise figure.</p>
        </div>

        {/* How gratuity works */}
        <div className="card">
          <div className="badge bg-teal">HOW GRATUITY IS CALCULATED</div>
          <h2>UAE gratuity formula for Filipino workers</h2>
          <p>The formula is the same for all nationalities:</p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Years of service</th><th>Gratuity rate</th></tr>
              </thead>
              <tbody>
                <tr><td>Less than 1 year</td><td>No gratuity entitlement</td></tr>
                <tr className="hl"><td>1–5 years</td><td>21 days&apos; basic salary per year</td></tr>
                <tr className="hl"><td>More than 5 years</td><td>30 days&apos; basic salary per year (for years beyond 5)</td></tr>
                <tr><td>Maximum</td><td>2 years&apos; total basic salary</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" style={{ marginTop: '1rem' }}>
            <div className="ex-title">EXAMPLE — NURSE, 6 YEARS</div>
            <div className="ex-line">Basic salary: AED 6,000/month</div>
            <div className="ex-line">Daily rate: AED 6,000 ÷ 30 = AED 200</div>
            <div className="ex-line">First 5 years: AED 200 × 21 × 5 = AED 21,000</div>
            <div className="ex-line">Year 6: AED 200 × 30 × 1 = AED 6,000</div>
            <div className="ex-total">Total: AED 27,000 ({fmtPHP(27000)})</div>
          </div>

          <p style={{ marginTop: '1rem' }}>Important: Gratuity is calculated on <strong>basic salary only</strong> — not on housing allowance, transport allowance, food allowance, or any other benefits. See our <Link href="/blog/uae-gratuity-allowances-basic-salary" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>basic salary guide</Link> for details.</p>
        </div>

        {/* POEA and OWWA */}
        <div className="card">
          <div className="badge bg-teal">POEA / OWWA AND YOUR GRATUITY</div>
          <h2>POEA-approved contracts and your entitlements</h2>
          <p>Most Filipino workers in the UAE are deployed through POEA (Philippine Overseas Employment Administration) or directly via OWWA-registered employers. POEA-approved employment contracts must meet minimum UAE labour law standards — including gratuity provisions.</p>
          <ul>
            <li><strong>POEA standard contract:</strong> Must include gratuity entitlement as per UAE law. Any contract that reduces gratuity below the UAE statutory minimum is invalid.</li>
            <li><strong>OWWA membership:</strong> Paying into OWWA provides access to OFW welfare benefits — but OWWA is separate from your UAE gratuity. You are entitled to both.</li>
            <li><strong>Domestic workers:</strong> Covered under Federal Law No. 10 of 2017 with slightly different rules — see our <Link href="/gratuity-calculator/domestic-workers" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>domestic workers calculator</Link>.</li>
          </ul>
          <div className="success-box">
            Your UAE employer cannot pay you less than UAE law requires — even if your POEA contract states a lower amount. UAE law prevails, and you can file a MOHRE complaint if underpaid.
          </div>
        </div>

        {/* OFW tax */}
        <div className="card">
          <div className="badge bg-gray">OFW TAX EXEMPTION</div>
          <h2>Is your UAE gratuity taxable in the Philippines?</h2>
          <p>For most Filipino workers in the UAE, the answer is <strong>no</strong>:</p>
          <ul>
            <li><strong>UAE tax:</strong> The UAE has no personal income tax. Your gratuity is paid in full with zero UAE tax deduction.</li>
            <li><strong>Philippine income tax for OFWs:</strong> Under Philippine law, OFWs (Overseas Filipino Workers) are generally exempt from Philippine income tax on income earned abroad, including UAE gratuity and salary.</li>
            <li><strong>BIR rules:</strong> The Bureau of Internal Revenue (BIR) exempts OFW income from Philippine income tax as long as you hold valid OFW documentation and spent the relevant period working overseas.</li>
            <li><strong>Non-OFW Filipinos:</strong> If you are not classified as an OFW (for example, if you migrated and became an immigrant rather than a contract worker), different rules may apply. Consult a Philippine tax professional.</li>
          </ul>
          <div className="warn-box">
            OFW tax exemption applies to income earned and received while you are working overseas. If you have returned to the Philippines permanently and receive a delayed gratuity payment, the tax treatment may differ. Consult a BIR-registered tax advisor for your specific situation.
          </div>
        </div>

        {/* Sending money home */}
        <div className="card">
          <div className="badge bg-teal">SENDING YOUR GRATUITY TO THE PHILIPPINES</div>
          <h2>Best ways to remit UAE gratuity to the Philippines</h2>
          <p>When you receive your UAE gratuity, you have several options to transfer it to the Philippines. Compare fees and exchange rates — they vary significantly:</p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Transfer method</th><th>Typical fee</th><th>Typical speed</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>UAE Exchange / Al Fardan</td><td>AED 15–25</td><td>Same day</td><td>Widely available in UAE; BDO, BPI, Metrobank partners</td></tr>
                <tr className="hl"><td>Wise (online)</td><td>0.5–1% of amount</td><td>1–2 days</td><td>Best exchange rates; large lump-sums benefit most</td></tr>
                <tr><td>Western Union / MoneyGram</td><td>AED 20–50+</td><td>Minutes–1 day</td><td>High fees; convenient for cash pickup</td></tr>
                <tr><td>Bank wire transfer</td><td>AED 50–100+</td><td>2–5 days</td><td>Useful for very large amounts; bank-to-bank</td></tr>
                <tr><td>LBC / Iremit</td><td>AED 15–30</td><td>Same day–2 days</td><td>Popular with Filipino community; door-to-door option</td></tr>
              </tbody>
            </table>
          </div>

          <div className="success-box" style={{ marginTop: '1rem' }}>
            <strong>Tip for large gratuity payouts:</strong> For amounts over AED 10,000, the exchange rate difference matters more than the flat fee. A 0.5% rate improvement on AED 50,000 saves you AED 250 — compare Wise and your bank before transferring.
          </div>
        </div>

        {/* Rights */}
        <div className="card">
          <div className="badge bg-red">YOUR RIGHTS — WHAT TO DO IF NOT PAID</div>
          <h2>If your UAE employer refuses to pay your gratuity</h2>
          <p>Unfortunately, some employers delay or underpay gratuity. As a Filipino worker in the UAE, you have strong legal protections:</p>
          <ol>
            <li style={{ marginBottom: '0.75rem' }}><strong>File with MOHRE:</strong> Call MOHRE on 800 60, use the MOHRE app, or visit a MOHRE service centre. This is free. See our <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>step-by-step MOHRE complaint guide</Link>.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Contact the Philippine Consulate:</strong> The Philippine Consulate General in Dubai (+971 4 220 7100) and Abu Dhabi (+971 2 635 4212) provide OFW assistance including labour dispute support.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>POLO (Philippine Overseas Labor Office):</strong> POLO-Dubai and POLO-Abu Dhabi can assist OFWs with labour disputes, coordinate with MOHRE, and provide legal referrals.</li>
            <li><strong>Legal aid:</strong> Both MOHRE and the Philippine Consulate can refer you to free or subsidised legal assistance for unresolved disputes.</li>
          </ol>
          <div className="warn-box">
            Your employer must pay gratuity within 14 days of your last working day. If they fail to do so, they can face penalties under UAE labour law. Do not leave the UAE without receiving your full entitlement — once you leave, enforcement becomes harder.
          </div>
        </div>

        {/* Comparison with home country */}
        <div className="card">
          <div className="badge bg-teal">UAE VS PHILIPPINES RETIREMENT BENEFITS</div>
          <h2>UAE gratuity vs Philippine retirement / separation benefits</h2>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Feature</th><th>UAE gratuity</th><th>Philippines (RA 7641)</th></tr>
              </thead>
              <tbody>
                <tr><td>Eligibility threshold</td><td>1 year of service</td><td>5 years of service (retirement at 60)</td></tr>
                <tr><td>Payment rate</td><td>21–30 days per year of service</td><td>22.5 days per year of service</td></tr>
                <tr><td>Calculation basis</td><td>Basic salary</td><td>Latest salary rate</td></tr>
                <tr><td>Maximum cap</td><td>2 years&apos; basic salary</td><td>No statutory cap</td></tr>
                <tr className="hl"><td>Tax status</td><td>Tax-free in UAE</td><td>Tax-exempt (separation/retirement pay)</td></tr>
                <tr><td>Dispute body</td><td>MOHRE → Labour Court</td><td>NLRC / DOLE</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem' }}>Note: Philippine RA 7641 separation pay does not apply when you are working overseas. UAE gratuity is your primary end-of-service entitlement while employed in the UAE.</p>
        </div>

        {/* FAQs in Tagalog */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions</h2>

          <h3 style={{ marginTop: '1rem' }}>I am a domestic worker. Do I get gratuity?</h3>
          <p>Yes — domestic workers in the UAE are entitled to end-of-service benefits under Federal Law No. 10 of 2017. The rules are slightly different from standard private sector employees: domestic workers need two years of service (not one year) to qualify. After two years, the same formula applies — 21 days per year for years 1–5, 30 days per year beyond 5 years.</p>

          <h3 style={{ marginTop: '1.25rem' }}>My employer deducted money from my gratuity for training costs. Is this allowed?</h3>
          <p>No. UAE law prohibits employers from deducting training fees from gratuity or final settlement without a prior written agreement signed before the training took place, and even then there are limits. An employer cannot unilaterally deduct &ldquo;training costs&rdquo; from your gratuity. File a MOHRE complaint if this happens.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Magkano ang aking gratuity sa UAE?</h3>
          <p>Ang iyong gratuity sa UAE ay nakabatay sa iyong basic salary (hindi kasama ang housing allowance o transport allowance). Para sa unang 5 taon: 21 araw ng basic salary bawat taon. Para sa higit sa 5 taon: 30 araw bawat karagdagang taon. Gamitin ang aming <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>libreng gratuity calculator</Link> para sa eksaktong halaga.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Can I claim UAE gratuity and Philippine SSS/GSIS separately?</h3>
          <p>Yes — UAE gratuity and Philippine social security benefits (SSS, GSIS, Pag-IBIG) are entirely separate entitlements from different systems. Receiving UAE gratuity does not affect your Philippine social security claims or retirement benefits.</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0c4a6e 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Calculate your UAE gratuity in AED and PHP</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>Enter your basic salary and service dates — get your full entitlement instantly.</p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}
