import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

export const metadata: Metadata = {
  title: 'JAFZA Gratuity Calculator Guide 2026 | Jebel Ali Free Zone EOSB',
  description: 'Guide to calculating gratuity for JAFZA employees, with examples, common salary mistakes, and links to the dedicated JAFZA calculator.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/jafza-gratuity-calculator-guide' },
  openGraph: {
    images: ['/images/blog/jafza-gratuity-calculator-guide.png'],
  },
}

export default function Page() {
  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › JAFZA gratuity</div>
        <h1>JAFZA Gratuity Calculator Guide 2026</h1>
        <p>How Jebel Ali Free Zone employees can estimate end-of-service gratuity using the UAE private-sector formula. · 6 min read</p>
      </div>

      <BlogHeroImage
        src="/images/blog/jafza-gratuity-calculator-guide.png"
        alt="JAFZA gratuity calculator guide with employment documents, calculator, and Jebel Ali logistics background"
        title="JAFZA Gratuity Calculator Guide 2026"
        caption="JAFZA employees usually start with the standard UAE gratuity formula, using basic salary and continuous service."
      />

      <div className="card">
        <div className="badge bg-blue">QUICK ANSWER</div>
        <h2>Does JAFZA have a different gratuity formula?</h2>
        <p>For most JAFZA-registered employers, end-of-service gratuity follows the standard UAE labour law approach: 21 days of basic salary per year for the first five years, then 30 days per year after that, capped at two years of basic salary.</p>
        <p>Use the dedicated <Link href="/calculate-jafza-gratuity">JAFZA gratuity calculator</Link> to get the amount and download a PDF copy of the result.</p>
      </div>

      <div className="card">
        <div className="badge bg-teal">WHAT TO CHECK</div>
        <h2>JAFZA employees should verify these inputs</h2>
        <ul>
          <li>The basic salary figure in the signed employment contract.</li>
          <li>The exact joining date and last working day.</li>
          <li>Any unpaid leave that should be excluded from continuous service.</li>
          <li>Whether a company savings plan gives a better benefit than statutory gratuity.</li>
          <li>Whether the final settlement also includes leave salary, notice pay, or deductions.</li>
        </ul>
      </div>

      <div className="card">
        <div className="badge bg-amber">COMMON MISTAKE</div>
        <h2>Do not use total salary</h2>
        <p>JAFZA employees in logistics, trading, manufacturing, and warehousing often have housing, transport, phone, or shift allowances. These are normally excluded from gratuity. The safe starting point is the monthly basic salary written in the contract.</p>
        <div className="info-box">Related: <Link href="/blog/uae-gratuity-allowances-basic-salary">Does UAE gratuity include housing allowance?</Link></div>
      </div>

      <div className="card">
        <h2>Free-zone calculators to compare</h2>
        <div className="three-col">
          <Link className="mini-card" href="/calculate-difc-gratuity">DIFC gratuity calculator</Link>
          <Link className="mini-card" href="/calculate-adgm-gratuity">ADGM gratuity calculator</Link>
          <Link className="mini-card" href="/calculate-sharjah-airport-free-zone-gratuity">Sharjah Airport Free Zone calculator</Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
