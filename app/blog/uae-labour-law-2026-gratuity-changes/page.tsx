import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Labour Law 2026 — Gratuity Changes & Updates You Must Know',
  description:
    'Complete guide to UAE Labour Law 2026 updates affecting gratuity. Federal Decree-Law No. 33 of 2021, the new alternative EOSB savings scheme, contract changes, and what they mean for your end-of-service benefit.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog/uae-labour-law-2026-gratuity-changes',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.uaegratuitycheck.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'UAE Labour Law 2026 Gratuity Changes', item: 'https://www.uaegratuitycheck.com/blog/uae-labour-law-2026-gratuity-changes' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Labour Law 2026 — Gratuity Changes & Updates You Must Know',
      description: 'Federal Decree-Law No. 33 of 2021 explained: contract reforms, alternative savings scheme, payment deadlines.',
      url: 'https://www.uaegratuitycheck.com/blog/uae-labour-law-2026-gratuity-changes',
      datePublished: '2026-01-15',
      dateModified: '2026-01-15',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/uae-labour-law-2026-gratuity-changes',
    },
  ],
}

export default function LabourLaw2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › UAE Labour Law 2026 Changes
          </div>
          <h1>UAE Labour Law 2026 — Gratuity Changes & Updates You Must Know</h1>
          <p>What changed, what stayed the same, and how it affects your end-of-service benefit · 9 min read</p>
        </div>

        {/* Summary */}
        <div className="card" style={{ borderLeft: '6px solid var(--red)', background: 'var(--red-light)' }}>
          <h2 style={{ color: 'var(--red-dark)' }}>Key changes at a glance</h2>
          <ul style={{ color: 'var(--red-dark)' }}>
            <li><strong>No resignation reductions</strong> — Full gratuity for all employees regardless of reason for leaving</li>
            <li><strong>All contracts now fixed-term</strong> — Unlimited contracts phased out by December 2023</li>
            <li><strong>Alternative EOSB Savings Scheme</strong> — Voluntary investment-based alternative to traditional gratuity</li>
            <li><strong>14-day payment rule</strong> — Stricter enforcement of the payment deadline</li>
            <li><strong>Part-time workers included</strong> — Prorated gratuity for part-time employees</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            <Link href="/" style={{ color: 'var(--red-dark)', fontWeight: 700 }}>
              Calculate your gratuity under the new law →
            </Link>
          </p>
        </div>

        {/* Federal decree */}
        <div className="card">
          <div className="badge bg-teal">FEDERAL DECREE-LAW NO. 33 OF 2021</div>
          <h2>The landmark 2022 UAE Labour Law reform</h2>
          <p>Federal Decree-Law No. 33 of 2021 came into effect on 2 February 2022 and represents the most significant overhaul of UAE labour law in decades. It replaced the old Labour Law (Federal Law No. 8 of 1980) and introduced sweeping changes that benefit employees — particularly around gratuity entitlement.</p>
          <p>The law applies to all private sector employees in the UAE mainland and most free zones, supervised by the Ministry of Human Resources and Emiratisation (MOHRE). It does not apply to DIFC and ADGM employees, who have their own separate regulations.</p>
          <div className="info-box">
            The new law was designed to align the UAE with international labour standards and make the country more attractive to global talent by strengthening employee protections and simplifying employment regulations.
          </div>
        </div>

        {/* Change 1 — resignation */}
        <div className="card">
          <div className="badge bg-teal">CHANGE 1</div>
          <h2>Resignation no longer reduces gratuity</h2>
          <p>This is the most impactful change for employees. Under the old law, employees who resigned from unlimited contracts received reduced gratuity based on a sliding scale:</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Service period</th><th>Old law (resigned)</th><th>New law 2026</th></tr>
              </thead>
              <tbody>
                <tr><td>1 to 3 years</td><td>1/3 of full gratuity</td><td className="hl">Full gratuity ✓</td></tr>
                <tr><td>3 to 5 years</td><td>2/3 of full gratuity</td><td className="hl">Full gratuity ✓</td></tr>
                <tr><td>5+ years</td><td>Full gratuity</td><td className="hl">Full gratuity ✓</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem' }}>Under the new law, all eligible employees receive full gratuity regardless of whether they resigned or were terminated. The only exception remains dismissal for gross misconduct under Article 120.</p>
        </div>

        {/* Change 2 — contracts */}
        <div className="card">
          <div className="badge bg-teal">CHANGE 2</div>
          <h2>All contracts are now fixed-term (limited)</h2>
          <p>The new law abolished the distinction between limited (fixed-term) and unlimited (open-ended) employment contracts. As of December 2023, all UAE employment contracts must be fixed-term with a maximum duration of 3 years (renewable).</p>
          <p>This change was phased in over 2022–2023, giving employers time to transition existing unlimited contract employees to the new fixed-term format. Employees who are still on legacy unlimited contracts should have had them converted by now.</p>
          <div className="two-col">
            <div className="mini-card">
              <h3>What this means for employees</h3>
              <ul>
                <li>Contract type no longer affects gratuity calculation</li>
                <li>Same formula applies to everyone</li>
                <li>Contracts renewed every 1–3 years</li>
                <li>Employment continuity is preserved on renewal</li>
              </ul>
            </div>
            <div className="mini-card">
              <h3>What this means for employers</h3>
              <ul>
                <li>Must issue fixed-term contracts for all employees</li>
                <li>Unlimited contracts are no longer legally valid for new hires</li>
                <li>Gratuity liability is the same for all contract types</li>
                <li>Renewal does not reset the gratuity service clock</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Change 3 — savings scheme */}
        <div className="card">
          <div className="badge bg-teal">CHANGE 3</div>
          <h2>Alternative End-of-Service Savings Scheme (2023)</h2>
          <p>Cabinet Resolution No. 96 of 2023 introduced a voluntary Alternative End-of-Service Benefits Scheme for UAE private sector employees. Instead of receiving a traditional lump-sum gratuity at the end of service, participating employees benefit from monthly employer contributions to approved investment funds.</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Factor</th><th>Traditional gratuity</th><th>Savings scheme</th></tr>
              </thead>
              <tbody>
                <tr><td>Payment timing</td><td>Lump sum at end of service</td><td>Monthly contributions, paid at end</td></tr>
                <tr><td>Growth potential</td><td>Fixed formula</td><td>Investment returns possible</td></tr>
                <tr><td>Participation</td><td>Automatic for all eligible employees</td><td>Voluntary for employers</td></tr>
                <tr><td>Who benefits most</td><td>Shorter service employees</td><td>Long-service employees seeking growth</td></tr>
                <tr className="hl"><td>Status in 2026</td><td>Default for all private sector</td><td>Optional — employer must opt in</td></tr>
              </tbody>
            </table>
          </div>
          <div className="info-box" style={{ marginTop: '1rem' }}>
            As of 2026, the traditional gratuity system remains the default for all private sector employees. The savings scheme is only applicable if your employer has specifically registered for it with MOHRE and the Securities and Commodities Authority.
          </div>
        </div>

        {/* Change 4 — part-time */}
        <div className="card">
          <div className="badge bg-teal">CHANGE 4</div>
          <h2>Part-time employees now eligible for gratuity</h2>
          <p>Under Cabinet Resolution No. 1 of 2022, part-time employees working under a valid UAE employment contract are now entitled to prorated end-of-service gratuity. Previously, only full-time employees were clearly covered.</p>
          <div className="formula-box">
            <strong>Part-time gratuity formula</strong>
            <div className="formula-line">Part-time gratuity = (Part-time hours per year ÷ Full-time hours per year) × Full-time gratuity</div>
          </div>
          <p>This change is particularly significant for employees in the healthcare, education, hospitality, and retail sectors where part-time work is common.</p>
        </div>

        {/* What hasn't changed */}
        <div className="card">
          <div className="badge bg-gray">WHAT HASN&apos;T CHANGED</div>
          <h2>What stayed the same in 2026</h2>
          <ul>
            <li><strong>The core formula</strong> — 21 days per year for first 5 years, 30 days per year thereafter</li>
            <li><strong>The 2-year cap</strong> — Total gratuity cannot exceed 24 months of basic salary</li>
            <li><strong>Basic salary only</strong> — Allowances still excluded from the calculation</li>
            <li><strong>14-day payment rule</strong> — Employer must pay within 14 days of last working day</li>
            <li><strong>1-year minimum</strong> — Still required to qualify for any gratuity</li>
            <li><strong>Misconduct forfeiture</strong> — Article 120 dismissals still forfeit gratuity rights</li>
            <li><strong>MOHRE oversight</strong> — Ministry continues to supervise and enforce compliance</li>
          </ul>
        </div>

        {/* Timeline */}
        <div className="card">
          <div className="badge bg-teal">TIMELINE OF CHANGES</div>
          <h2>UAE gratuity law — key dates</h2>
          <div className="timeline-steps">
            <div className="tl-step">
              <div className="tl-num" style={{ background: 'var(--text-muted)', fontSize: '11px' }}>1980</div>
              <div className="tl-body"><h4>Old UAE Labour Law enacted</h4><p>Federal Law No. 8 of 1980 — original gratuity framework with resignation reductions for unlimited contracts.</p></div>
            </div>
            <div className="tl-step">
              <div className="tl-num" style={{ fontSize: '11px' }}>2021</div>
              <div className="tl-body"><h4>Federal Decree-Law No. 33 of 2021 issued</h4><p>New comprehensive labour law signed, replacing the 1980 law.</p></div>
            </div>
            <div className="tl-step">
              <div className="tl-num" style={{ fontSize: '11px' }}>Feb 2022</div>
              <div className="tl-body"><h4>New law takes effect</h4><p>Resignation reductions abolished. All employees entitled to full gratuity regardless of how they left.</p></div>
            </div>
            <div className="tl-step">
              <div className="tl-num" style={{ fontSize: '11px' }}>Dec 2023</div>
              <div className="tl-body"><h4>Contract transition deadline</h4><p>All unlimited contracts must have been converted to fixed-term. Alternative EOSB Savings Scheme launched.</p></div>
            </div>
            <div className="tl-step">
              <div className="tl-num" style={{ fontSize: '11px' }}>2026</div>
              <div className="tl-body"><h4>Current position</h4><p>New law fully in effect. Traditional gratuity remains the default. Savings scheme available on voluntary basis for employers.</p></div>
            </div>
          </div>
        </div>

        {/* Arabic */}
        <div className="ar-block">
          <h2>التغييرات الرئيسية في قانون العمل الإماراتي 2026</h2>
          <p>أحدث المرسوم بقانون الاتحادي رقم 33 لسنة 2021 تحولاً جذرياً في منظومة حقوق العمال بدولة الإمارات، وخاصة فيما يتعلق بمكافأة نهاية الخدمة. من أبرز التغييرات إلغاء التخفيضات التي كانت تطال المكافأة عند الاستقالة في عقود غير المحددة المدة.</p>
          <p>بموجب القانون الجديد، يحق لكل موظف أتم سنة خدمة متواصلة الحصول على كامل مكافأة نهاية الخدمة، سواء أنهى عقده بالاستقالة أو أنهاه صاحب العمل. كما باتت جميع العقود محددة المدة اعتباراً من ديسمبر 2023.</p>
          <div className="ar-tags">
            <span className="ar-tag">قانون العمل الإماراتي 2026</span>
            <span className="ar-tag">تغييرات مكافأة نهاية الخدمة</span>
            <span className="ar-tag">المرسوم بقانون رقم 33 لسنة 2021</span>
            <span className="ar-tag">نظام الادخار البديل</span>
            <span className="ar-tag">حقوق الموظفين الإمارات</span>
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Calculate your gratuity under the 2026 rules</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>Our calculator is fully updated for Federal Decree-Law No. 33 of 2021.</p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}