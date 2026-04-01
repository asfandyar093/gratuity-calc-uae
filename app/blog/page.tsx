import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Gratuity Blog — Guides & Labour Law Updates 2026',
  description: 'Expert guides on UAE end-of-service gratuity, labour law updates, and EOSB calculations. Updated for 2026.',
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