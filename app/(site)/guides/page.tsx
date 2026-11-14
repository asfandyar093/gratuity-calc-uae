import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'
import { gratuityAmount, formatAed } from '@/lib/gratuity'

export const metadata: Metadata = {
  title: 'UAE Gratuity Guides for Expats: India, Pakistan, Philippines',
  description: 'Detailed gratuity guides for Indian, Pakistani and Filipino workers in the UAE, plus the checks every expat should make before moving a gratuity home.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/guides',
  },
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/guides' },
}

const guides = [
  {
    slug: 'gratuity-calculator-indian-expats',
    title: 'UAE Gratuity Calculator for Indian Expats 2026',
    desc: 'For Indians in the UAE: converting to INR, NRI tax questions, how UAE gratuity differs from Indian PF, remittance tips and worked examples by sector.',
    badge: 'Most popular',
    time: '12 min read',
    tags: ['Indian expats', 'NRI', 'INR', 'Tax'],
  },
  {
    slug: 'uae-gratuity-calculator-pakistan-expats',
    title: 'UAE Gratuity Calculator for Pakistani Expats 2026',
    desc: 'For Pakistanis in the UAE: converting to PKR, overseas Pakistani tax questions, Roshan Digital Account transfers and how UAE gratuity compares with Pakistan.',
    badge: 'Popular',
    time: '10 min read',
    tags: ['Pakistani expats', 'PKR', 'Remittance', 'Tax'],
  },
  {
    slug: 'uae-gratuity-calculator-philippines-expats',
    title: 'UAE Gratuity Calculator for Filipino Expats 2026',
    desc: 'For OFWs and Filipino workers in the UAE: converting to PHP, the OFW income tax position, OWWA and labour office support, and ways to send a payout home.',
    badge: 'New',
    time: '9 min read',
    tags: ['Filipino expats', 'OFW', 'PHP', 'Tax'],
  },
]

const EXAMPLES = [
  { salary: 3500, years: 3, label: '3 years' },
  { salary: 9000, years: 6.5, label: '6 years 6 months' },
  { salary: 20000, years: 12, label: '12 years' },
]

export default function GuidesPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Guides', path: '/guides' }])} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">UAE Gratuity Check › Guides</div>
          <h1>UAE Gratuity Guides</h1>
          <p>Your nationality does not change how UAE gratuity is calculated. What does change is what happens after you are paid: converting the money, sending it home and any questions from your home tax office. These guides cover that second part for the three largest groups who read this site.</p>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {guides.map(g => (
            <Link key={g.slug} href={`/guides/${g.slug}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ cursor: 'pointer', border: '2px solid var(--border)', transition: 'border-color 0.15s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                      <span className="badge bg-teal">{g.badge}</span>
                      {g.tags.map(t => <span key={t} className="badge bg-gray">{t}</span>)}
                    </div>
                    <h2 style={{ fontSize: '20px', marginBottom: '0.5rem', color: 'var(--text)' }}>{g.title}</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>{g.desc}</p>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap' }}>{g.time}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>


        <div className="card" style={{ marginTop: '2rem' }}>
          <h2>The formula is the same for every nationality</h2>
          <p>Article 51 of Federal Decree-Law No. 33 of 2021 applies to every private sector employee on the mainland, whatever their passport. An Indian accountant and a British accountant on the same basic salary and the same service get exactly the same gratuity. Here are three examples worked out with the same code that runs our calculator:</p>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Basic salary</th><th>Service</th><th>Days earned</th><th>Gratuity</th></tr></thead>
              <tbody>
                {EXAMPLES.map((e) => {
                  const r = gratuityAmount(e.salary, e.years)
                  return (
                    <tr key={`${e.salary}-${e.years}`}>
                      <td>{formatAed(e.salary)} a month</td>
                      <td>{e.label}</td>
                      <td>{Math.round(r.days)} days</td>
                      <td>{formatAed(r.amount)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p>The daily wage is the monthly basic salary divided by 30. The first five years earn 21 days each and every year after that earns 30 days. Allowances such as housing and transport are not included. The full method is on the <Link href="/how-to-calculate-gratuity-uae">how to calculate gratuity</Link> page.</p>
        </div>

        <div className="card">
          <h2>Before you send a gratuity home: checks for every country</h2>
          <ul>
            <li><strong>Check the settlement first.</strong> Compare the basic salary on the settlement sheet with your MOHRE contract, not your payslip total. Our <Link href="/blog/how-to-read-uae-final-settlement-sheet">guide to reading a final settlement sheet</Link> shows each line.</li>
            <li><strong>Know the deadline.</strong> Article 53 gives the employer 14 days from the end of the contract to pay. If it is late, the <Link href="/blog/uae-gratuity-payment-delay-rules">payment delay guide</Link> explains your options.</li>
            <li><strong>Get the receiving amount in writing.</strong> For a large transfer the exchange rate matters more than the fee. Ask two or three licensed banks or exchange houses for the exact amount that will arrive, for the same AED amount on the same day.</li>
            <li><strong>Use licensed channels only.</strong> Informal transfer networks give you no protection if the money goes missing, and many home countries treat them as illegal.</li>
            <li><strong>Keep the paperwork together.</strong> Your contract, settlement sheet, salary certificate and transfer receipt answer most source of funds questions from a bank at home.</li>
            <li><strong>Ask about tax at home, not in the UAE.</strong> The UAE does not tax gratuity. Whether your home country does depends on your residence status there. See <Link href="/blog/is-uae-gratuity-taxable">is UAE gratuity taxable</Link>.</li>
          </ul>
          <p>Before November 2026 this section had separate pages for Bangladeshi, Nepali, Sri Lankan, Egyptian and British readers. They repeated the same formula with an exchange rate that went out of date, so we folded them into this page.</p>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', textDecoration: 'none' }}>
            Use the free gratuity calculator
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}
