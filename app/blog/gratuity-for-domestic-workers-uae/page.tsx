import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gratuity for Domestic Workers in UAE 2026 | Housemaids, Drivers, Nannies',
  description: 'Guide to domestic worker gratuity in the UAE, how it differs from standard private-sector gratuity, and how to estimate the amount.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/gratuity-for-domestic-workers-uae' },
}

export default function Page() {
  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Domestic workers</div>
        <h1>Gratuity for Domestic Workers in UAE 2026</h1>
        <p>Housemaids, nannies, drivers, cooks, and household workers are not calculated the same way as standard private-sector employees. · 7 min read</p>
      </div>

      <div className="card">
        <div className="badge bg-red">SEPARATE RULES</div>
        <h2>Domestic workers are not under the standard 21/30 formula</h2>
        <p>Domestic worker end-of-service benefits are handled under a separate UAE domestic worker framework, not the standard mainland private-sector formula used for company employees.</p>
        <p>Because implementation details can depend on the contract and current MOHRE guidance, use our <Link href="/gratuity-calculator/domestic-workers">domestic worker gratuity calculator</Link> as an estimate and confirm final obligations through MOHRE or a legal adviser.</p>
      </div>

      <div className="card">
        <div className="badge bg-teal">WHO THIS COVERS</div>
        <h2>Common domestic worker roles</h2>
        <ul>
          <li>Housemaids and cleaners</li>
          <li>Nannies and childcare workers</li>
          <li>Private drivers</li>
          <li>Cooks and household helpers</li>
          <li>Gardeners, farm workers, and similar household roles</li>
        </ul>
      </div>

      <div className="card">
        <div className="badge bg-amber">DOCUMENTS</div>
        <h2>What families and workers should keep</h2>
        <p>Keep a copy of the MOHRE-registered domestic worker contract, salary payment records, leave records, travel ticket agreements, and written termination or renewal notices. These documents matter if there is a dispute over final settlement.</p>
        <div className="info-box">For dispute steps, read <Link href="/blog/how-to-dispute-gratuity-uae">how to dispute gratuity in the UAE</Link>.</div>
      </div>

      <Footer />
    </main>
  )
}
