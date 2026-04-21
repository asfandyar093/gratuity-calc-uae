import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Gratuity Blog | Guides and Labour Law Updates 2026',
  description: 'Expert guides on UAE end-of-service gratuity, labour law updates, and EOSB calculations. Updated for 2026.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">UAE Gratuity Check › Blog</div>
          <h1>UAE Gratuity Blog</h1>
          <p>Expert guides on UAE end-of-service gratuity, labour law updates, and EOSB calculations — updated for 2026.</p>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>

          <div className="card">
            <div className="badge bg-teal">MUST READ</div>
            <h2>UAE Gratuity — Resignation vs Termination 2026</h2>
            <p>Does resigning affect how much gratuity you get? The 2022 law change that most employees do not know about. Full guide with worked examples.</p>
            <Link href="/blog/uae-gratuity-resignation-vs-termination" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
              Read article →
            </Link>
          </div>

          <div className="card">
            <div className="badge bg-teal">LAW UPDATE</div>
            <h2>UAE Labour Law 2026 — Gratuity Changes You Must Know</h2>
            <p>Federal Decree-Law No. 33 of 2021 explained. What changed, the new savings scheme, contract reforms, and what they mean for your end-of-service benefit.</p>
            <Link href="/blog/uae-labour-law-2026-gratuity-changes" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
              Read article →
            </Link>
          </div>

          <div className="card">
            <div className="badge bg-gray">ELIGIBILITY</div>
            <h2>UAE Gratuity for Less Than 1 Year of Service 2026</h2>
            <p>Do you get gratuity if you leave before completing one year? What you are still owed, the exceptions, and why being close to the one-year mark matters.</p>
            <Link href="/blog/uae-gratuity-less-than-1-year" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
              Read article →
            </Link>
          </div>

          <div className="card">
            <div className="badge bg-gray">MOHRE COMPLAINTS</div>
            <h2>How to File a MOHRE Complaint for Unpaid Gratuity 2026</h2>
            <p>Employer not paying what you are owed? Step-by-step guide to filing a complaint with MOHRE — online, by phone, or in person. Includes document checklist and timelines.</p>
            <Link href="/blog/how-to-file-mohre-complaint" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
              Read article →
            </Link>
          </div>

          <div className="card">
            <div className="badge bg-blue">FREE ZONES</div>
            <h2>DIFC DEWS Gratuity Explained 2026</h2>
            <p>Working in the Dubai International Financial Centre? DEWS replaces standard UAE gratuity for DIFC employees. Full guide to contribution rates, vesting, investment options, and how it compares.</p>
            <Link href="/blog/difc-dews-gratuity-explained" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
              Read article →
            </Link>
          </div>

          <div className="card">
            <div className="badge bg-blue">FREE ZONES</div>
            <h2>ADGM Gratuity Rules Explained 2026</h2>
            <p>Working in Abu Dhabi Global Market? ADGM operates under its own employment regulations separate from UAE mainland law. Full guide to ADGM gratuity calculation, dispute resolution, and how it differs from DIFC DEWS.</p>
            <Link href="/blog/adgm-gratuity-explained" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
              Read article →
            </Link>
          </div>

          <div className="card">
            <div className="badge bg-teal">SALARY</div>
            <h2>Does UAE Gratuity Include Housing Allowance? 2026</h2>
            <p>UAE gratuity is calculated on basic salary only — not housing, transport, or other allowances. Learn exactly what counts, how employers use salary structuring to reduce your payout, and how to check your payslip.</p>
            <Link href="/blog/uae-gratuity-allowances-basic-salary" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
              Read article →
            </Link>
          </div>

          <div className="card">
            <div className="badge bg-gray">FLEXIBLE WORK</div>
            <h2>UAE Gratuity for Part-Time Workers 2026</h2>
            <p>Part-time employees are entitled to proportional gratuity under the 2021 UAE Labour Law. How the calculation works, eligibility rules, worked examples for single and multiple employers, and what freelancers need to know.</p>
            <Link href="/blog/uae-gratuity-part-time-workers" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
              Read article →
            </Link>
          </div>

          <div className="card">
            <div className="badge bg-gray">TAX</div>
            <h2>Is UAE Gratuity Taxable? 2026 Guide for Expats</h2>
            <p>No UAE income tax — but what about your home country? Complete tax guide covering Indian NRI rules, OFW exemptions, US FEIE, UK residency rules, and which nationalities need to be careful with timing.</p>
            <Link href="/blog/is-uae-gratuity-taxable" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
              Read article →
            </Link>
          </div>

          <div className="card">
            <div className="badge bg-teal">CALCULATION</div>
            <h2>UAE Gratuity 2-Year Cap Explained 2026</h2>
            <p>UAE gratuity cannot exceed two years of basic salary. Learn exactly when the cap kicks in (typically at 25+ years of service), how it is calculated, worked examples, and whether your employer can legally pay above the cap.</p>
            <Link href="/blog/uae-gratuity-two-year-cap" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
              Read article →
            </Link>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', textDecoration: 'none' }}>
            Use the free gratuity calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}