import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

export const metadata: Metadata = {
  title: 'How to Dispute Gratuity in UAE 2026 | Underpaid Final Settlement',
  description: 'Practical guide for disputing an incorrect UAE gratuity or final settlement calculation before filing a MOHRE complaint.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/how-to-dispute-gratuity-uae' },
  openGraph: {
    images: ['/images/blog/how-to-dispute-gratuity-uae.png'],
  },
}

export default function Page() {
  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Dispute gratuity</div>
        <h1>How to Dispute a Gratuity Calculation in UAE 2026</h1>
        <p>If HR gives you a final settlement that looks wrong, here is the clean way to challenge it. · 8 min read</p>
      </div>

      <BlogHeroImage
        src="/images/blog/how-to-dispute-gratuity-uae.png"
        alt="UAE gratuity dispute guide with final settlement papers, calculator, and HR meeting room"
        title="How to Dispute a Gratuity Calculation in UAE 2026"
        caption="A clear written breakdown is the first step when challenging an underpaid gratuity or final settlement."
      />

      <div className="card">
        <div className="badge bg-teal">FIRST STEP</div>
        <h2>Ask for the written breakdown</h2>
        <p>Before arguing over the total, ask HR for the full calculation: basic salary used, service dates, unpaid leave deduction, entitled days, any cap, and every deduction. Most gratuity disputes become clearer once each line is visible.</p>
        <p>Then run your own estimate with the <Link href="/">UAE gratuity calculator</Link> and download the PDF result.</p>
      </div>

      <div className="card">
        <div className="badge bg-red">COMMON DISPUTES</div>
        <h2>Where gratuity calculations usually go wrong</h2>
        <ul>
          <li>Using a lower basic salary than the employment contract shows.</li>
          <li>Deducting resignation penalties that no longer apply under the current standard formula.</li>
          <li>Counting service from visa stamping date instead of the actual employment start date.</li>
          <li>Subtracting unpaid leave without evidence.</li>
          <li>Adding arbitrary deductions for training, recruitment, or visa costs.</li>
          <li>Ignoring unused annual leave, final salary, or notice pay in the broader final settlement.</li>
        </ul>
      </div>

      <div className="card">
        <div className="badge bg-blue">ESCALATION</div>
        <h2>When to file a MOHRE complaint</h2>
        <p>If the employer refuses to correct the calculation or misses the final settlement payment deadline, prepare your documents and file a complaint. Read the step-by-step <Link href="/blog/how-to-file-mohre-complaint">MOHRE complaint process</Link>.</p>
        <div className="warn-box">DIFC and ADGM employees may need to follow their free-zone dispute process rather than a standard MOHRE route.</div>
      </div>

      <div className="card">
        <h2>Special cases</h2>
        <div className="three-col">
          <Link className="mini-card" href="/calculate-difc-gratuity">DIFC / DEWS disputes</Link>
          <Link className="mini-card" href="/calculate-adgm-gratuity">ADGM gratuity disputes</Link>
          <Link className="mini-card" href="/gratuity-calculator/domestic-workers">Domestic worker gratuity</Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
