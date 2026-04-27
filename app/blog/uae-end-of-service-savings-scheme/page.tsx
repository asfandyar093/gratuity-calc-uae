import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

const title = 'UAE Alternative End-of-Service Benefits Savings Scheme 2026'
const description = 'Market research guide to the UAE voluntary alternative end-of-service benefits savings scheme. Learn how it works, who it covers, and how it compares with traditional gratuity.'
const url = 'https://www.uaegratuitycheck.com/blog/uae-end-of-service-savings-scheme'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['UAE end of service savings scheme', 'alternative end of service benefits UAE', 'UAE gratuity savings scheme', 'MOHRE savings scheme', 'Cabinet Resolution 96 of 2023'],
  alternates: { canonical: url },
  openGraph: { images: ['/images/blog/uae-end-of-service-savings-scheme.svg'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url,
  datePublished: '2026-04-28',
  dateModified: '2026-04-28',
  author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
  publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
  mainEntityOfPage: url,
  image: 'https://www.uaegratuitycheck.com/images/blog/uae-end-of-service-savings-scheme.svg',
}

export default function SavingsSchemePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Savings Scheme
          </div>
          <h1>UAE Alternative End-of-Service Benefits Savings Scheme</h1>
          <p>How the voluntary savings model compares with traditional gratuity · 8 min read · <time dateTime="2026-04-28">Last updated: April 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/uae-end-of-service-savings-scheme.svg"
          alt="UAE alternative end-of-service benefits savings scheme compared with traditional gratuity"
          title="UAE Alternative End-of-Service Benefits Savings Scheme"
          caption="Market research guide to the UAE voluntary savings scheme and how it compares with traditional gratuity."
        />

        <div className="card" style={{ borderLeft: '6px solid #2563eb', background: '#eff6ff' }}>
          <h2 style={{ color: '#1d4ed8' }}>The short answer</h2>
          <p style={{ color: '#1d4ed8', fontSize: '18px', fontWeight: 700 }}>
            The UAE alternative end-of-service benefits scheme lets subscribed employers replace future traditional gratuity accrual with monthly contributions into approved investment funds.
          </p>
          <p>The scheme is voluntary for employers. Employees keep gratuity earned before the employer joins the scheme, while future benefits are built through fund contributions overseen by MOHRE and the Securities and Commodities Authority.</p>
        </div>

        <div className="card">
          <div className="badge bg-teal">MARKET RESEARCH</div>
          <h2>Why this topic matters in 2026</h2>
          <p>Search demand around UAE gratuity is no longer only about “how much will I get?” Employees and HR teams are also asking whether the traditional unfunded gratuity model will shift toward savings-style benefits, especially after DIFC DEWS and the federal voluntary scheme.</p>
          <div className="two-col">
            <div className="mini-card">
              <h3>Employee concerns</h3>
              <ul>
                <li>Will existing gratuity be protected?</li>
                <li>Can investment returns increase or reduce the benefit?</li>
                <li>When can funds be withdrawn?</li>
              </ul>
            </div>
            <div className="mini-card">
              <h3>Employer concerns</h3>
              <ul>
                <li>How to budget monthly contributions.</li>
                <li>How to communicate the switch.</li>
                <li>How the scheme changes final settlement workflows.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="badge bg-blue">HOW IT WORKS</div>
          <h2>Traditional gratuity vs savings scheme</h2>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Factor</th><th>Traditional gratuity</th><th>Alternative savings scheme</th></tr>
              </thead>
              <tbody>
                <tr><td>Funding model</td><td>Employer pays lump sum at exit</td><td className="hl">Employer contributes to approved funds</td></tr>
                <tr><td>Employee&apos;s prior gratuity</td><td>Accrues under Article 51</td><td className="hl">Preserved up to subscription date</td></tr>
                <tr><td>Investment returns</td><td>No investment growth</td><td className="hl">Potential returns based on selected fund</td></tr>
                <tr><td>Employer cash flow</td><td>Large liability at termination</td><td>Regular contribution rhythm</td></tr>
                <tr><td>Risk</td><td>Employer payment risk at exit</td><td>Investment risk and fund performance risk</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="badge bg-amber">WHAT EMPLOYEES SHOULD ASK</div>
          <h2>Questions to ask HR if your company joins</h2>
          <ul>
            <li>What date does the company subscription start?</li>
            <li>What is my accrued gratuity balance up to that date?</li>
            <li>Which fund options are available and what are their fees?</li>
            <li>Can I make voluntary employee contributions?</li>
            <li>What happens when I resign, transfer employer, or leave the UAE?</li>
          </ul>
          <div className="warn-box">
            This guide is market research and general information, not investment advice. Fund values can move up or down depending on the selected investment strategy.
          </div>
        </div>

        <div className="card">
          <div className="badge bg-blue">OFFICIAL REFERENCES</div>
          <h2>Sources used for this guide</h2>
          <ul>
            <li><a href="https://www.mohre.gov.ae/en/media-center/news/1/11/2023/voluntary-alternative-end-of-service-benefits-scheme-goes-into-effect-by-cabinet-resolution-aiming-t" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>MOHRE: Voluntary Alternative End-of-Service Benefits Scheme</a></li>
            <li><a href="https://www.mohre.gov.ae/assets/download/950e1120/federal-decree-law-regarding-the-regulation-of-employment-relationship.aspx" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>Federal Decree-Law No. 33 of 2021</a></li>
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}
