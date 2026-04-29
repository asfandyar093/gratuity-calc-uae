import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

export const metadata: Metadata = {
  title: 'Sharjah Airport Free Zone Gratuity Guide 2026 | SAIF Zone EOSB',
  description: 'Guide to calculating gratuity for Sharjah Airport Free Zone employees using basic salary, service period, and the UAE 21/30 formula.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/sharjah-airport-free-zone-gratuity' },
  openGraph: {
    images: ['/images/blog/sharjah-airport-free-zone-gratuity.png'],
  },
}

export default function Page() {
  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Sharjah Airport Free Zone</div>
        <h1>Sharjah Airport Free Zone Gratuity Guide 2026</h1>
        <p>How SAIF Zone employees can estimate gratuity and check final settlement numbers. · 6 min read</p>
      </div>

      <BlogHeroImage
        src="/images/blog/sharjah-airport-free-zone-gratuity.png"
        alt="Sharjah Airport Free Zone gratuity guide with calculator, employment papers, and airport logistics office backdrop"
        title="Sharjah Airport Free Zone Gratuity Guide 2026"
        caption="SAIF Zone employees can estimate gratuity using basic salary, service period, and the standard UAE 21/30 formula."
      />

      <div className="card">
        <div className="badge bg-blue">SAIF ZONE CALCULATOR</div>
        <h2>Use the dedicated calculator</h2>
        <p>Sharjah Airport Free Zone employees generally estimate gratuity using the standard UAE private-sector formula. Open the <Link href="/calculate-sharjah-airport-free-zone-gratuity">Sharjah Airport Free Zone gratuity calculator</Link>, enter your basic salary and service period, then download the PDF result.</p>
      </div>

      <div className="card">
        <div className="badge bg-teal">FORMULA</div>
        <h2>The usual 21/30 gratuity calculation</h2>
        <ul>
          <li>Less than one year: usually no gratuity.</li>
          <li>Years 1 to 5: 21 days of basic salary per year.</li>
          <li>After year 5: 30 days of basic salary per year.</li>
          <li>Maximum: two years of basic salary.</li>
        </ul>
      </div>

      <div className="card">
        <div className="badge bg-amber">FINAL SETTLEMENT</div>
        <h2>Remember the other line items</h2>
        <p>Your gratuity is only one part of final settlement. Also check final salary, unused annual leave, notice period pay or deductions, agreed ticket benefits, and any written loan or advance deductions.</p>
        <div className="info-box">Use the <Link href="/final-settlement-calculator-uae">UAE final settlement calculator</Link> for a wider estimate.</div>
      </div>

      <Footer />
    </main>
  )
}
