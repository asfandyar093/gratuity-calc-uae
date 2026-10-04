import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'
import SchemaMarkup from '@/components/SchemaMarkup'
import SourcesBox from '@/components/SourcesBox'
import { baseOpenGraph, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

const URL = 'https://www.uaegratuitycheck.com/uae-labor-law'

export const metadata: Metadata = {
  title: 'UAE Gratuity Law 2026: Article 51 Rules Explained',
  description: 'UAE gratuity law in plain English: Article 51 of Decree-Law 33/2021, eligibility, the 21/30-day formula, the cap, deductions, the 14-day deadline and 2022 changes.',
  alternates: { canonical: URL },
  openGraph: { ...baseOpenGraph, url: URL, title: 'UAE Gratuity Law 2026: Article 51 Rules Explained' },
}

const faqs = [
  { q: 'Which law governs gratuity in the UAE?', a: 'For private-sector employees on the mainland and in most free zones, it is Federal Decree-Law No. 33 of 2021 (the Labour Law), in force since 2 February 2022. Article 51 sets out the end-of-service gratuity. DIFC and ADGM have their own employment laws, and domestic workers fall under Federal Decree-Law No. 9 of 2022.' },
  { q: 'What did the 2022 labour law change about gratuity?', a: 'Resignation no longer reduces gratuity, all contracts became fixed-term (Article 68 required unlimited contracts to be converted), and the current law requires dues to be paid within 14 days of the contract ending (Article 53).' },
  { q: 'Can my employer deduct money from my gratuity?', a: 'Only amounts you owe under the law or a court judgment (Article 51(7)). Undocumented or arbitrary deductions can be challenged through MOHRE.' },
  { q: 'How long do I have to claim unpaid gratuity?', a: 'Article 54(9) says a labour claim is not heard after two years from the date the worker\u2019s entitlement became due.' },
  { q: 'Do UAE nationals get gratuity under Article 51?', a: 'UAE nationals are generally covered by the pensions and social security law instead (Article 51(1)). Check with your pension authority.' },
]

export default function LaborLawPage() {
  return (
    <main>
      <SchemaMarkup schema={{ '@context': 'https://schema.org', '@graph': [breadcrumbSchema([{ name: 'UAE gratuity law', path: '/uae-labor-law' }]), faqSchema(faqs, `${URL}#faq`, true)] }} />
      <div className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › UAE gratuity law</div>
          <h1>UAE Gratuity Law 2026: Article 51 Explained</h1>
          <p>Plain-English guide to the end-of-service rules in Federal Decree-Law No. 33 of 2021 (the UAE Labour Law), in force since 2 February 2022, with the article numbers so you can check them yourself.</p>
        </div>

        <div className="answer-box">
          <p><strong>In short:</strong> after one year of continuous service, a private-sector employee is entitled to 21 days of basic wage for each of the first five years and 30 days for each year after that (Article 51). The total cannot exceed two years&apos; wage, and the employer must pay all dues within 14 days of the contract ending (Article 53). Work out your figure with the <Link href="/">UAE gratuity calculator</Link>.</p>
        </div>

        <div className="sec-title">Key articles governing gratuity</div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLE 51</span><h3>End-of-service gratuity</h3></div>
          <ul>
            <li><strong>Eligibility (51(1)):</strong> foreign workers who complete at least one year of continuous service. UAE nationals are covered by the pensions law instead.</li>
            <li><strong>Rate (51(2)):</strong> 21 days of basic wage for each year of the first five years, and 30 days of basic wage for each year after that.</li>
            <li><strong>Part years (51(3)):</strong> paid pro rata, as long as the first year is complete.</li>
            <li><strong>Unpaid absence (51(4)):</strong> days of absence without pay are not counted in the service period.</li>
            <li><strong>Wage used (51(5)):</strong> the last basic wage. Basic wage excludes allowances.</li>
            <li><strong>Cap (51(6)):</strong> the total gratuity must not exceed two years&apos; wage. Our calculators apply 24 × basic salary as a conservative cap.</li>
            <li><strong>Deductions (51(7)):</strong> the employer may only deduct amounts the worker owes under the law or a court judgment.</li>
          </ul>
          <div className="formula-box" style={{ marginTop: '0.75rem' }}>
            <strong>Daily wage = monthly basic salary ÷ 30</strong>
            <div className="formula-line">Years 1–5: daily wage × 21 × years</div>
            <div className="formula-line">After year 5: (daily wage × 105) + (daily wage × 30 × years after 5)</div>
            <div className="formula-line">Cap: two years&apos; wage (Article 51(6))</div>
          </div>
          <p style={{ marginTop: '0.75rem' }}>For ready-made figures, see the <Link href="/gratuity-by-years-of-service">gratuity by years of service table</Link>. For the step-by-step method, see <Link href="/how-it-works">how to calculate gratuity in the UAE</Link>.</p>
        </div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLE 53</span><h3>Payment deadline: 14 days</h3></div>
          <p>The employer must pay the worker&apos;s wages and all other dues, including gratuity, within 14 days of the end of the employment contract. If payment is late, see our <Link href="/blog/uae-gratuity-payment-delay-rules">gratuity payment delay rules</Link> and <Link href="/blog/how-to-file-mohre-complaint">how to file a MOHRE complaint</Link>.</p>
        </div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLE 54</span><h3>Labour disputes and the two-year limit</h3></div>
          <p>Disputes go to MOHRE first. MOHRE can issue a binding decision on claims up to AED 50,000 (Article 54(2)); larger claims go to the labour courts. A claim is not heard after <strong>two years</strong> from the date the entitlement became due (Article 54(9)).</p>
        </div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLES 29, 43 &amp; 67</span><h3>Leave, notice and how time is counted</h3></div>
          <ul>
            <li><strong>Annual leave (Art. 29):</strong> 30 days a year, or 2 days a month if service is between 6 and 12 months. See the <Link href="/mohre-annual-leave-calculator">MOHRE annual leave calculator</Link>.</li>
            <li><strong>Notice (Art. 43):</strong> at least 30 days and no more than 90 days. See the <Link href="/notice-period-calculator-uae">notice period calculator</Link>.</li>
            <li><strong>Counting time (Art. 67):</strong> a year is 365 days and a month is 30 days, which is why gratuity divides monthly basic salary by 30.</li>
          </ul>
        </div>

        <div className="sec-title" id="what-changed">What changed in 2022 (and what still applies in 2026)</div>
        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">2022 REFORM</span><h3>Old law vs current law</h3></div>
          <div className="tbl-wrap">
            <table className="years-table">
              <thead><tr><th>Topic</th><th>Before 2 Feb 2022 (Federal Law No. 8 of 1980)</th><th>Now (Federal Decree-Law No. 33 of 2021)</th></tr></thead>
              <tbody>
                <tr><td>Contract types</td><td>Limited and unlimited contracts</td><td>Fixed-term contracts only; unlimited contracts had to be converted (Art. 68)</td></tr>
                <tr><td>Resigning</td><td>Gratuity could be reduced on resignation</td><td>No reduction for resigning (Art. 51)</td></tr>
                <tr><td>Payment deadline</td><td>—</td><td>14 days from the contract ending (Art. 53)</td></tr>
                <tr><td>Formula</td><td>21 / 30 days of basic wage</td><td>21 / 30 days of basic wage, capped at two years&apos; wage (Art. 51)</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '0.75rem' }}>Article 68(3) allows the gratuity for service before the new law to be calculated under the rules that applied at the time. If you have service from before February 2022 and resigned, check how your employer treated that period. The <Link href="/blog/uae-gratuity-resignation-vs-termination">resignation vs termination guide</Link> explains the effect.</p>
          <p>An optional alternative end-of-service savings scheme (Cabinet Resolution No. 96 of 2023) lets employers pay monthly contributions into approved funds instead of a lump-sum gratuity. Read more about the <Link href="/blog/uae-end-of-service-savings-scheme">UAE end of service savings scheme</Link>.</p>
        </div>

        <div className="sec-title">Who is not covered by Article 51</div>
        <div className="law-card">
          <ul>
            <li><strong>Domestic workers:</strong> covered by Federal Decree-Law No. 9 of 2022, where Article 22 leaves the gratuity rules to the Cabinet. See <Link href="/gratuity-calculator/domestic-workers">domestic worker gratuity</Link>.</li>
            <li><strong>DIFC employees:</strong> the DEWS savings plan applies. See the <Link href="/calculate-difc-gratuity">DIFC gratuity &amp; DEWS calculator</Link>.</li>
            <li><strong>ADGM employees:</strong> the ADGM Employment Regulations 2024 apply. See the <Link href="/calculate-adgm-gratuity">ADGM gratuity calculator</Link>.</li>
            <li><strong>UAE nationals:</strong> generally the pensions and social security law.</li>
          </ul>
        </div>

        <div className="sec">
          <div className="sec-hd">UAE gratuity law FAQs</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>

        <div className="info-box">⚖️ This guide is general information, not legal advice. For your specific situation, contact MOHRE (600590000) or a UAE employment lawyer.</div>
        <SourcesBox sources={[SOURCES.labourLaw, SOURCES.uaeEosb, SOURCES.domesticLaw, SOURCES.adgmGuidance, SOURCES.dewsGuide]} />
      </div>
      <Footer />
    </main>
  )
}
