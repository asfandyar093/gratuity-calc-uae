import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'All UAE Calculators 2026 | Gratuity, Salary, Tax, Visa & Money Tools',
  description:
    'Every free UAE calculator in one place: gratuity, final settlement, salary breakdown, leave, notice period, cost of living, currency converter, income tax, visa cost, savings goal, and Dubai rent increase.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/tools' },
}

interface ToolItem {
  emoji: string
  name: string
  href: string
  desc: string
  color: string
}

const gratuityTools: ToolItem[] = [
  { emoji: '🧮', name: 'Gratuity Calculator', href: '/', desc: 'The main UAE end-of-service gratuity calculator — date-based, unpaid leave, accrual chart.', color: '#006630' },
  { emoji: '🧾', name: 'Final Settlement Calculator', href: '/final-settlement-calculator-uae', desc: 'Gratuity, leave salary, notice pay, and deductions in one full settlement estimate.', color: '#0f766e' },
  { emoji: '🏭', name: 'Gratuity by Industry & Free Zone', href: '/gratuity-calculator', desc: 'JAFZA, DIFC, ADGM, construction, hospitality, healthcare, banking, and domestic workers.', color: '#334155' },
  { emoji: '📈', name: 'Gratuity Investment Calculator', href: '/gratuity-investment-calculator', desc: 'Project how your gratuity payout could grow in fixed deposits, index funds, or real estate.', color: '#0284c7' },
]

const salaryLeaveTools: ToolItem[] = [
  { emoji: '💰', name: 'Salary Breakdown Calculator', href: '/salary-calculator', desc: 'Split gross salary into basic, housing, and transport to see your gratuity-eligible amount.', color: '#b45309' },
  { emoji: '🏖️', name: 'Annual Leave Calculator (MOHRE)', href: '/mohre-annual-leave-calculator', desc: 'Leave entitlement, balance, and cash payout under Article 29.', color: '#15803d' },
  { emoji: '⏱️', name: 'Notice Period Calculator', href: '/notice-period-calculator-uae', desc: 'Work out your required notice days and earliest last working day.', color: '#7c3aed' },
  { emoji: '⚡', name: 'Overtime Pay Calculator', href: '/overtime-calculator-uae', desc: '125% and 150% overtime rates under Article 19.', color: '#ea580c' },
  { emoji: '🩺', name: 'Sick Leave Calculator', href: '/sick-leave-calculator-uae', desc: 'Full-pay, half-pay, and unpaid sick days under Article 31.', color: '#0891b2' },
  { emoji: '🤱', name: 'Maternity Leave Calculator', href: '/maternity-leave-calculator-uae', desc: 'Maternity leave pay and entitlement under UAE Labour Law.', color: '#db2777' },
]

const moneyTools: ToolItem[] = [
  { emoji: '🏙️', name: 'Cost of Living Calculator', href: '/cost-of-living-calculator-uae', desc: 'Real monthly budgets for Dubai, Abu Dhabi, and Sharjah by household type and lifestyle.', color: '#009A44' },
  { emoji: '💱', name: 'Currency Converter', href: '/currency-converter-uae', desc: 'Convert AED to 10 currencies for salary comparisons and remittances home.', color: '#2563eb' },
  { emoji: '🧾', name: 'Income Tax Calculator', href: '/uae-income-tax-calculator', desc: 'See your full take-home pay — the UAE has 0% personal income tax.', color: '#16a34a' },
  { emoji: '🛂', name: 'Visa Cost Calculator', href: '/uae-visa-cost-calculator', desc: 'Total employment visa cost: entry permit, Emirates ID, medical, PRO fees, and insurance.', color: '#1a1a2e' },
  { emoji: '🎯', name: 'Savings Goal Calculator', href: '/savings-goal-calculator-uae', desc: 'How long it takes to reach any savings target with UAE bank and investment rates.', color: '#0f766e' },
  { emoji: '🏠', name: 'Dubai Rent Increase Calculator (RERA)', href: '/dubai-rent-increase-calculator-rera', desc: 'Check the legal maximum rent increase under official RERA brackets.', color: '#ce1126' },
]

const allTools = [...gratuityTools, ...salaryLeaveTools, ...moneyTools]

const toolsHubSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.uaegratuitycheck.com/tools/#webpage',
      url: 'https://www.uaegratuitycheck.com/tools',
      name: 'All UAE Calculators 2026',
      description: 'Every free UAE calculator in one place: gratuity, salary, leave, cost of living, currency, tax, visa cost, savings, and rent increase.',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.uaegratuitycheck.com/#website' },
      mainEntity: {
        '@type': 'ItemList',
        name: 'UAE calculators',
        itemListElement: allTools.map((tool, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: tool.name,
          url: `https://www.uaegratuitycheck.com${tool.href}`,
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'All Tools', item: 'https://www.uaegratuitycheck.com/tools' },
      ],
    },
  ],
}

function ToolGrid({ tools }: { tools: ToolItem[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
      {tools.map((tool) => (
        <Link key={tool.href} href={tool.href} style={{ textDecoration: 'none', display: 'block' }}>
          <div
            className="industry-card"
            style={{
              background: '#fff',
              borderRadius: '18px',
              padding: '1.5rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              border: '2px solid var(--gray-200)',
              borderTop: `5px solid ${tool.color}`,
              height: '100%',
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '0.6rem' }}>{tool.emoji}</div>
            <div style={{ fontSize: '18px', fontWeight: 900, color: 'var(--text)', marginBottom: '0.4rem' }}>{tool.name}</div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 1rem', fontWeight: 500 }}>{tool.desc}</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: tool.color, color: '#fff', padding: '9px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 800 }}>
              Open calculator →
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function ToolsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsHubSchema).replace(/</g, '\\u003c') }}
      />
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">All UAE Calculators · Updated 2026</div>
          <h1>Every UAE Calculator in One Place</h1>
          <p className="hero-desc">
            Gratuity, salary, leave, and now cost of living, currency, income tax, visa cost, savings, and Dubai rent increase — 16 free tools built for UAE employees and expats.
          </p>
          <div className="pills">
            <span className="pill">✓ 100% free</span>
            <span className="pill">✓ No data stored</span>
            <span className="pill">✓ Updated for 2026</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Check</Link> › <span>All Tools</span>
        </nav>

        <div className="sec">
          <div className="sec-hd">Gratuity &amp; final settlement</div>
          <div className="sec-sd">Start here for end-of-service benefits, industry-specific rules, and settlement totals</div>
          <ToolGrid tools={gratuityTools} />
        </div>

        <div className="sec">
          <div className="sec-hd">Salary &amp; leave</div>
          <div className="sec-sd">Break down your package and check leave, notice, overtime, sick, and maternity entitlements</div>
          <ToolGrid tools={salaryLeaveTools} />
        </div>

        <div className="sec">
          <div className="sec-hd">Money &amp; living in the UAE</div>
          <div className="sec-sd">Budgeting, currency, tax, visa cost, savings, and tenancy tools for everyday life in the UAE</div>
          <ToolGrid tools={moneyTools} />
        </div>

        <Footer />
      </main>
    </>
  )
}
