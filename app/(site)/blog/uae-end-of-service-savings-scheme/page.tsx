import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'
import RelatedGuides from '@/components/RelatedGuides'
import AuthorBox from '@/components/AuthorBox'

const title = 'UAE Alternative End-of-Service Benefits Savings Scheme 2026'
const description = 'Guide to the UAE alternative end-of-service savings scheme under Article 51(8): how it works, who it covers and how it compares with traditional gratuity.'
const url = 'https://www.uaegratuitycheck.com/blog/uae-end-of-service-savings-scheme'

export const metadata: Metadata = {
  title,
  description,  alternates: { canonical: url },
  openGraph: { ...baseOpenGraph, type: 'article', url: 'https://www.uaegratuitycheck.com/blog/uae-end-of-service-savings-scheme', images: ['/images/blog/real/uae-end-of-service-savings-scheme.png'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url,
  datePublished: '2026-04-28',
  dateModified: '2026-10-09',
  author: {
    '@type': 'Person',
    name: 'Asfandyar Khan',
    url: 'https://www.uaegratuitycheck.com/about',
    jobTitle: 'Editor',
    worksFor: { '@type': 'Organization', '@id': 'https://www.uaegratuitycheck.com/#org' },
  },
  publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
  mainEntityOfPage: url,
  image: 'https://www.uaegratuitycheck.com/images/blog/real/uae-end-of-service-savings-scheme.png',
}

export default function SavingsSchemePage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Blog', path: '/blog' }, { name: 'UAE End-of-Service Savings Scheme', path: '/blog/uae-end-of-service-savings-scheme' }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Savings Scheme
          </div>
          <h1>UAE Alternative End-of-Service Benefits Savings Scheme</h1>
          <p>How the voluntary savings model compares with traditional gratuity · 8 min read · <time dateTime="2026-10-09">Last updated: October 2026</time></p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
        </div>

        <BlogHeroImage
          src="/images/blog/real/uae-end-of-service-savings-scheme.png"
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

        <div className="card">
          <div className="badge bg-teal">WHAT THE LAW SAYS</div>
          <h2>Article 51(8): where the alternative scheme comes from</h2>
          <p>The scheme exists because of a clause in the Labour Law. Article 51(8) of Federal Decree-Law No. 33 of 2021 says the Cabinet may, on the Minister&apos;s proposal and after coordination with the concerned authorities, <strong>approve other alternative schemes for the end of service benefits</strong>, and that the resolution it issues specifies the conditions, rules and mechanism of contribution in those schemes.</p>
          <ul>
            <li>The article only gives the Cabinet the power to approve alternative schemes. The contribution rules are in the Cabinet resolution made under it, so check that resolution (on the UAE Legislation portal and u.ae) for the current terms rather than relying on a summary.</li>
            <li>Gratuity under the standard rule remains Article 51(2): 21 days&apos; basic wage per year for the first five years and 30 days after, on basic wage, capped at two years&apos; wage.</li>
            <li>Whatever scheme applies, the employer must pay your dues within 14 days of the contract ending (Article 53).</li>
          </ul>
          <p>If your employer says you are in a savings scheme, ask for the scheme documents and the start date, and compare with the <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>standard gratuity calculation</Link>. DIFC employees have a different scheme: see <Link href="/blog/difc-dews-gratuity-explained" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>DEWS explained</Link>.</p>
        </div>

        <div className="card">
          <div className="badge bg-blue">FAQ</div>
          <h2>Savings scheme FAQs</h2>
          <h3>Is the alternative end-of-service scheme the same as DEWS?</h3>
          <p>No. DEWS is the DIFC&apos;s own scheme under DIFC law. The alternative scheme discussed here is the one the Cabinet may approve under Article 51(8) for private-sector employers under the federal Labour Law.</p>
          <h3>Does the scheme change the 14-day payment deadline?</h3>
          <p>Article 53 sets the deadline for wages and entitlements under the Labour Law. Check the scheme rules for when scheme balances are paid.</p>
          <h3>Where do I find the official conditions?</h3>
          <p>In the Cabinet resolution approving the scheme and on the u.ae end-of-service benefits page, which you can reach from our sources below.</p>
        </div>

        <div className="card article-links-card">
          <h2>Official text</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://uaelegislation.gov.ae/en/legislations/1541" target="_blank" rel="noopener noreferrer">
              <span>Federal Decree-Law No. 33 of 2021 — UAE Legislation portal</span>
              <small>The full official text, including the articles quoted above.</small>
            </a>
          </div>
        </div>

        <AuthorBox />
        <RelatedGuides path="/blog/uae-end-of-service-savings-scheme" />

        <Footer />
      </main>
    </>
  )
}
