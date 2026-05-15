import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Gratuity Guides | Complete Guides for Expats 2026',
  description: 'Complete guides on UAE end-of-service gratuity for Indian expats, nurses, IT professionals, and more. MOHRE approved formulas, tax tips, and remittance advice.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/guides',
  },
}

const guides = [
  {
    slug: 'gratuity-calculator-indian-expats',
    title: 'UAE Gratuity Calculator for Indian Expats 2026',
    desc: 'Complete guide for Indians in UAE — INR conversion, NRI tax implications, how UAE gratuity compares to Indian PF, remittance tips, and sector-specific examples.',
    badge: 'Most popular',
    time: '12 min read',
    tags: ['Indian expats', 'NRI', 'INR', 'Tax'],
  },
  {
    slug: 'uae-gratuity-calculator-pakistan-expats',
    title: 'UAE Gratuity Calculator for Pakistani Expats 2026',
    desc: 'Complete guide for Pakistanis in UAE — PKR conversion, overseas Pakistani tax rules, Roshan Digital Account remittance tips, UAE vs Pakistan gratuity comparison.',
    badge: 'Popular',
    time: '10 min read',
    tags: ['Pakistani expats', 'PKR', 'Remittance', 'Tax'],
  },
  {
    slug: 'uae-gratuity-calculator-philippines-expats',
    title: 'UAE Gratuity Calculator for Filipino Expats 2026',
    desc: 'Complete guide for OFWs and Filipino workers in the UAE — PHP peso conversion, OFW income tax exemption, OWWA, POLO support, and the best ways to remit your payout home.',
    badge: 'New',
    time: '9 min read',
    tags: ['Filipino expats', 'OFW', 'PHP', 'Tax'],
  },
  {
    slug: 'uae-gratuity-calculator-sri-lanka-expats',
    title: 'Sri Lankan Expat UAE Gratuity Guide 2026',
    desc: 'LKR conversion, NRFC account planning, EPF/ETF comparison, and final settlement checks for Sri Lankan employees in the UAE.',
    badge: 'New',
    time: '8 min read',
    tags: ['Sri Lankan expats', 'LKR', 'Remittance', 'EPF'],
  },
  {
    slug: 'uae-gratuity-calculator-bangladesh-expats',
    title: 'Bangladeshi Expat UAE Gratuity Guide 2026',
    desc: 'BDT conversion, Wage Earner Account notes, Bangladesh gratuity comparison, and UAE settlement checklist.',
    badge: 'New',
    time: '8 min read',
    tags: ['Bangladeshi expats', 'BDT', 'Remittance', 'Tax'],
  },
  {
    slug: 'uae-gratuity-calculator-nepal-expats',
    title: 'Nepali Expat UAE Gratuity Guide 2026',
    desc: 'NPR conversion, remittance planning, source-of-funds records, and practical UAE final settlement guidance.',
    badge: 'New',
    time: '8 min read',
    tags: ['Nepali expats', 'NPR', 'Remittance', 'Rights'],
  },
  {
    slug: 'uae-gratuity-calculator-egypt-expats',
    title: 'Egyptian Expat UAE Gratuity Guide 2026',
    desc: 'EGP conversion, Egyptian bank transfer planning, and comparison between UAE EOSB and Egyptian labour rules.',
    badge: 'New',
    time: '8 min read',
    tags: ['Egyptian expats', 'EGP', 'Remittance', 'Tax'],
  },
  {
    slug: 'uae-gratuity-calculator-british-expats',
    title: 'British Expat UAE Gratuity Guide 2026',
    desc: 'GBP conversion, HMRC declaration considerations, National Insurance notes, and UAE gratuity versus UK pension planning.',
    badge: 'New',
    time: '8 min read',
    tags: ['British expats', 'GBP', 'HMRC', 'Pension'],
  },
]

export default function GuidesPage() {
  return (
    <>
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">UAE Gratuity Check › Guides</div>
          <h1>UAE Gratuity Guides</h1>
          <p>In-depth guides on UAE end-of-service gratuity for different expat communities, job sectors, and financial situations — updated for 2026.</p>
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

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', textDecoration: 'none' }}>
            Use the free gratuity calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}
