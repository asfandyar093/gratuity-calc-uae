import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'
import { baseOpenGraph } from '@/lib/seo'
import RelatedGuides from '@/components/RelatedGuides'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator for Filipino Expats 2026 | PHP',
  description:
    'UAE gratuity guide for Filipino workers and OFWs 2026: your EOSB in pesos, OFW income tax exemptions, BIR rules, OWWA benefits and sending gratuity home.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-philippines-expats',
  },
  openGraph: {
    ...baseOpenGraph, type: 'article',
    url: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-philippines-expats',
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
      headline: 'UAE Gratuity Calculator for Filipino Expats 2026 | PHP, OFW Tax and Remittance Guide',
      description: 'Complete UAE gratuity guide for Filipino workers: PHP conversion, OFW tax exemptions, OWWA, and remittance tips.',
      url: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-philippines-expats',
      datePublished: '2026-04-21',
      dateModified: '2026-10-15',
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
          <p>End-of-service guide for OFWs and Filipino workers in the UAE, with PHP conversion and tax guidance · 9 min read · <time dateTime="2026-10-15">Last updated: October 2026</time></p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
        </div>

        <BlogHeroImage
          src="/images/guides/uae-gratuity-calculator-philippines-expats.svg"
          alt="UAE gratuity calculator guide for Filipino expats and OFWs with PHP conversion and remittance planning"
          title="UAE Gratuity Calculator for Filipino Expats 2026"
          caption="Filipino expats can use UAE gratuity estimates to plan PHP remittances, OFW tax treatment, and end-of-service savings."
        />

        {/* Intro card */}
        <div className="card" style={{ borderLeft: '6px solid #0284c7', background: '#f0f9ff' }}>
          <h2 style={{ color: '#0c4a6e' }}>Filipino workers, your UAE gratuity rights</h2>
          <p style={{ color: '#0369a1', fontSize: '18px', fontWeight: 700 }}>
            Filipinos are one of the larger expat communities in the UAE. Under UAE law, every Filipino employee who has completed one year of continuous service is entitled to end-of-service gratuity, the same as any other nationality.
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
          <h2>Common Filipino expat roles, gratuity estimates</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Conversion rate used: 1 AED ≈ ₱{AED_TO_PHP.toFixed(1)} PHP (approximate, verify current rate before planning)</p>

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
                <tr className="hl"><td>1 to 5 years</td><td>21 days&apos; basic salary per year</td></tr>
                <tr className="hl"><td>More than 5 years</td><td>30 days&apos; basic salary per year (for years beyond 5)</td></tr>
                <tr><td>Maximum</td><td>2 years&apos; total basic salary</td></tr>
              </tbody>
            </table>
          </div>

          <div className="example-box" style={{ marginTop: '1rem' }}>
            <div className="ex-title">EXAMPLE, NURSE, 6 YEARS</div>
            <div className="ex-line">Basic salary: AED 6,000/month</div>
            <div className="ex-line">Daily rate: AED 6,000 ÷ 30 = AED 200</div>
            <div className="ex-line">First 5 years: AED 200 × 21 × 5 = AED 21,000</div>
            <div className="ex-line">Year 6: AED 200 × 30 × 1 = AED 6,000</div>
            <div className="ex-total">Total: AED 27,000 ({fmtPHP(27000)})</div>
          </div>

          <p style={{ marginTop: '1rem' }}>Important: Gratuity is calculated on <strong>basic salary only</strong>, not on housing allowance, transport allowance, food allowance, or any other benefits. See our <Link href="/blog/uae-gratuity-allowances-basic-salary" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>basic salary guide</Link> for details.</p>
        </div>

        {/* DMW and OWWA */}
        <div className="card">
          <div className="badge bg-teal">DMW / OWWA AND YOUR GRATUITY</div>
          <h2>Your DMW approved contract and your UAE entitlements</h2>
          <p>Overseas hiring for Filipino workers is now handled by the Department of Migrant Workers (DMW), which took over the functions of the old POEA. Your employment contract and your Overseas Employment Certificate (OEC) are processed through the DMW. The UAE contract is also governed by UAE labour law, and that is what decides your gratuity.</p>
          <ul>
            <li><strong>Contract terms:</strong> A contract cannot take away what the UAE law gives you. If it offers less than the Article 51 formula, the law still applies (Article 65 treats the Decree-Law rights as minimum rights, and a term that is more beneficial to the worker can still apply).</li>
            <li><strong>OWWA membership:</strong> OWWA provides welfare benefits to OFWs. It is separate from your UAE gratuity, which your employer pays.</li>
            <li><strong>Domestic workers:</strong> Covered by Federal Decree-Law No. 9 of 2022, which sets no fixed gratuity formula (Article 22). See our <Link href="/gratuity-calculator/domestic-workers" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>domestic workers calculator</Link>.</li>
          </ul>
          <div className="success-box">
            If your employer pays less than UAE law requires, you can submit a request to MOHRE, and you can also ask the Migrant Workers Office for help.
          </div>
        </div>

        {/* OFW tax */}
        <div className="card">
          <div className="badge bg-gray">OFW TAX POSITION</div>
          <h2>Is your UAE gratuity taxable in the Philippines?</h2>
          <p>For a Filipino working in the UAE under an overseas employment contract, income from that work is generally not taxed in the Philippines. Here is why:</p>
          <ul>
            <li><strong>UAE side:</strong> The UAE has no personal income tax, and the employer can only deduct amounts the law allows (Article 51(7)).</li>
            <li><strong>Philippine side:</strong> Under the National Internal Revenue Code (sections 22(E) and 23(C)), a nonresident citizen is taxed only on income from sources within the Philippines. A citizen who works abroad and must be physically present abroad most of the taxable year counts as a nonresident citizen. BIR Revenue Regulations No. 1-2011 explains how an OFW with an OEC is treated.</li>
            <li><strong>Gratuity earned from that overseas work:</strong> It is income from a foreign source, so the same reasoning generally applies.</li>
            <li><strong>Not covered by this summary:</strong> If you have become an immigrant or permanent resident abroad, or you return home for good and are paid later, the position can differ.</li>
          </ul>
          <div className="warn-box">
            This is a general summary, not tax advice. Confirm your own status with the Bureau of Internal Revenue (BIR) or a Philippine tax adviser, especially if you are returning home permanently.
          </div>
        </div>

        {/* Sending money home */}
        <div className="card">
          <div className="badge bg-teal">SENDING YOUR GRATUITY TO THE PHILIPPINES</div>
          <h2>How to send UAE gratuity to the Philippines</h2>
          <p>Several regulated options exist, and charges differ a lot between providers. For a lump sum such as gratuity, the exchange rate usually matters more than the flat fee.</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Option</th><th>What to compare</th></tr>
              </thead>
              <tbody>
                <tr><td>Bank transfer</td><td>Fees at both banks, the exchange rate, and how long it takes to reach your Philippine account</td></tr>
                <tr><td>Exchange house or money transfer company</td><td>The rate offered for the day, the fee, and whether you can send to a bank account or pick up cash</td></tr>
                <tr><td>Online transfer service</td><td>The final amount in pesos shown before you confirm, and any extra fee for large transfers</td></tr>
              </tbody>
            </table>
          </div>
          <div className="success-box" style={{ marginTop: '1rem' }}>
            <strong>A simple method for a large payout:</strong> ask two or three providers for the exact peso amount that will arrive, in writing, for the same AED amount on the same day. Pick the highest. Use the <Link href="/currency-converter-uae" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>currency converter</Link> to see the indicative rate first.
          </div>
        </div>

        {/* Rights */}
        <div className="card">
          <div className="badge bg-red">YOUR RIGHTS, WHAT TO DO IF NOT PAID</div>
          <h2>If your UAE employer refuses to pay your gratuity</h2>
          <p>If your employer delays or underpays your gratuity, these are the usual steps:</p>
          <ol>
            <li style={{ marginBottom: '0.75rem' }}><strong>File with MOHRE:</strong> Call MOHRE on 80084, use the MOHRE app, or visit a MOHRE service centre. See our <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>step-by-step MOHRE complaint guide</Link>.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Contact the Philippine Embassy or Consulate:</strong> The <a href="https://abudhabipe.dfa.gov.ph" target="_blank" rel="noopener noreferrer">Philippine Embassy in Abu Dhabi</a> and the <a href="https://dubaipcg.dfa.gov.ph" target="_blank" rel="noopener noreferrer">Philippine Consulate General in Dubai</a> list their current assistance hotlines on their websites.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Migrant Workers Office (MWO):</strong> The MWO in Dubai and the one in Abu Dhabi are the DMW&apos;s offices in the UAE, and they handle OFW labour complaints. Details are on the <a href="https://dmw.gov.ph" target="_blank" rel="noopener noreferrer">DMW website</a>.</li>
            <li><strong>If it is still unresolved:</strong> MOHRE refers a dispute that is not settled to the court (Article 54), and the MWO can explain your options. A claim is not heard after two years from the end of employment (Article 54(9), as amended in 2024).</li>
          </ol>
          <div className="warn-box">
            Your employer must pay gratuity within 14 days of the contract ending (Article 53). If they do not, raise it with MOHRE. Try not to leave the UAE without receiving your full entitlement, once you leave, enforcement becomes harder.
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
                <tr><td>Payment rate</td><td>21 to 30 days per year of service</td><td>22.5 days per year of service</td></tr>
                <tr><td>Calculation basis</td><td>Basic salary</td><td>Latest salary rate</td></tr>
                <tr><td>Maximum cap</td><td>2 years&apos; basic salary</td><td>No statutory cap</td></tr>
                                <tr><td>Dispute body</td><td>MOHRE → Labour Court</td><td>NLRC / DOLE</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem' }}>RA 7641 is the Philippine retirement pay law and applies to Philippine employment. While you work in the UAE, your UAE gratuity is your end of service entitlement.</p>
        </div>

        {/* FAQs in Tagalog */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions</h2>

          <h3 style={{ marginTop: '1rem' }}>I am a domestic worker. Do I get gratuity?</h3>
          <p>The current domestic workers law, Federal Decree-Law No. 9 of 2022, has an end-of-service gratuity article (Article 22), but it only says the Cabinet may approve how gratuity is calculated and paid. It sets no number of days. The old rule of 14 days per year after one year came from Federal Law No. 10 of 2017, which has been repealed. Check your contract and use MOHRE&apos;s Domestic Workers Dues Calculator. Our <Link href="/gratuity-calculator/domestic-workers">domestic worker gratuity page</Link> explains the details.</p>

          <h3 style={{ marginTop: '1.25rem' }}>My employer deducted money from my gratuity for training costs. Is this allowed?</h3>
          <p>Not automatically. Under Article 51(7) an employer may deduct from end of service benefits only amounts payable under the law or a court judgment, following the conditions in the Implementing Regulation. A deduction for training costs that is not on that basis can be challenged. Ask for a written breakdown of every deduction, and submit a request to MOHRE if you disagree.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Magkano ang aking gratuity sa UAE?</h3>
          <p>Ang iyong gratuity sa UAE ay nakabatay sa iyong basic salary (hindi kasama ang housing allowance o transport allowance). Para sa unang 5 taon: 21 araw ng basic salary bawat taon. Para sa higit sa 5 taon: 30 araw bawat karagdagang taon. Gamitin ang aming <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>libreng gratuity calculator</Link> para sa eksaktong halaga.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Can I claim UAE gratuity and Philippine SSS/GSIS separately?</h3>
          <p>UAE gratuity is paid by your employer under UAE law. SSS, GSIS and Pag-IBIG are Philippine programmes with their own rules and contributions. Ask the agency concerned how your claim is affected, if at all, by your work abroad.</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0c4a6e 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Calculate your UAE gratuity in AED and PHP</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>Enter your basic salary and service dates, get your full entitlement instantly.</p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free calculator →
          </Link>
        </div>

        <div className="card" style={{ background: 'var(--gray-50)' }}>
          <h2 style={{ fontSize: '17px', marginBottom: '0.75rem' }}>More tools for planning your money in the UAE</h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            <Link href="/currency-converter-uae" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              → AED Currency Converter, check today&apos;s indicative PHP rate
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
        <RelatedGuides path="/guides/uae-gratuity-calculator-philippines-expats" />

        <Footer />
      </main>
    </>
  )
}
