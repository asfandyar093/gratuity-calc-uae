import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Free Zone Gratuity Calculator Guide 2026 | JAFZA, DIFC, ADGM',
  description: 'Compare gratuity rules and calculators for UAE free zones including JAFZA, DIFC, ADGM, and Sharjah Airport Free Zone.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/free-zone-gratuity-calculator-uae' },
}

const zones = [
  { zone: 'JAFZA', href: '/calculate-jafza-gratuity', note: 'Usually follows standard UAE labour law gratuity.' },
  { zone: 'DIFC', href: '/calculate-difc-gratuity', note: 'Special regime; DEWS savings usually matters more than standard gratuity.' },
  { zone: 'ADGM', href: '/calculate-adgm-gratuity', note: 'ADGM employment regulations apply; confirm before filing disputes.' },
  { zone: 'Sharjah Airport Free Zone', href: '/calculate-sharjah-airport-free-zone-gratuity', note: 'Usually estimated with the standard UAE private-sector formula.' },
]

export default function Page() {
  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Free zones</div>
        <h1>UAE Free Zone Gratuity Calculator Guide 2026</h1>
        <p>JAFZA, DIFC, ADGM, and Sharjah Airport Free Zone do not all behave the same way. · 7 min read</p>
      </div>

      <div className="card">
        <div className="badge bg-blue">FREE ZONE MAP</div>
        <h2>Pick the right calculator before you rely on the number</h2>
        <div className="tbl-wrap">
          <table>
            <thead><tr><th>Free zone</th><th>Calculator</th><th>Important note</th></tr></thead>
            <tbody>
              {zones.map((zone) => (
                <tr key={zone.zone}>
                  <td>{zone.zone}</td>
                  <td><Link href={zone.href}>Open calculator</Link></td>
                  <td>{zone.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <div className="badge bg-red">SPECIAL REGIMES</div>
        <h2>DIFC and ADGM need extra care</h2>
        <p>Many UAE free-zone employers follow the federal gratuity formula, but DIFC and ADGM have their own employment frameworks. DIFC DEWS in particular can replace the old end-of-service lump sum for covered post-2020 service.</p>
        <p>That is why a free-zone page should do more than show a calculator. It should tell users whether MOHRE, DIFC, ADGM, or a savings statement is the right next document to check.</p>
      </div>

      <div className="card">
        <div className="badge bg-teal">NEXT STEPS</div>
        <h2>Build your evidence pack</h2>
        <ul>
          <li>Download the PDF result from the relevant calculator.</li>
          <li>Keep your contract, salary slips, and termination or resignation records.</li>
          <li>Compare gratuity with leave salary and notice pay using the final settlement calculator.</li>
          <li>Read <Link href="/blog/how-to-dispute-gratuity-uae">how to dispute gratuity</Link> before escalating.</li>
        </ul>
      </div>

      <Footer />
    </main>
  )
}
