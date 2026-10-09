import type { Metadata } from 'next'
import Link from 'next/link'
import BlogHeroImage from '@/components/BlogHeroImage'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog'
const pageImage = '/images/blog/real/uae-gratuity-blog-guides-cover.png'
const pageTitle = 'UAE Gratuity Blog 2026: End of Service Guides by Topic'
const pageDescription = 'Every UAE gratuity guide in one place, by topic: calculating gratuity, eligibility, final settlement, leave, resignation, MOHRE disputes, free zones and tax.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    ...baseOpenGraph,
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'UAE gratuity blog guides cover with employees reviewing end-of-service documents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
}

type HubLink = { title: string; href: string; description: string; tool?: boolean }
type HubGroup = { id: string; heading: string; intro: string; links: HubLink[] }

const groups: HubGroup[] = [
  {
    id: 'calculating',
    heading: 'Calculating gratuity',
    intro: 'How the Article 51 formula works: what salary counts, the cap and what reduces your service period.',
    links: [
      { title: 'UAE gratuity by years of service (1–30 year table)', href: '/gratuity-by-years-of-service', description: 'Ready-made amounts for common basic salaries and service lengths.', tool: true },
      { title: 'Does UAE gratuity include housing allowance?', href: '/blog/uae-gratuity-allowances-basic-salary', description: 'Why gratuity uses basic salary only, and how to check your contract split.' },
      { title: 'UAE gratuity two-year cap explained', href: '/blog/uae-gratuity-two-year-cap', description: 'When the two-years\u2019 wage cap in Article 51(6) starts to matter.' },
      { title: 'Unpaid leave calculation in the UAE: salary and gratuity', href: '/blog/unpaid-leave-gratuity-uae', description: 'How unpaid days are deducted from salary and from your gratuity service period.' },
      { title: 'End of service terms in Arabic and English', href: '/blog/end-of-service-benefits-arabic-terms-english', description: 'مستحقات نهاية الخدمة and other settlement terms translated.' },
    ],
  },
  {
    id: 'eligibility',
    heading: 'Eligibility and edge cases',
    intro: 'Short service, probation, transfers and alternatives to the lump-sum gratuity.',
    links: [
      { title: 'UAE gratuity for less than 1 year of service', href: '/blog/uae-gratuity-less-than-1-year', description: 'What you can still claim if you leave before the one-year mark.' },
      { title: 'UAE probation period and gratuity', href: '/blog/uae-probation-period-gratuity-2026', description: 'Whether probation counts towards service and what happens if you leave during it.' },
      { title: 'Transferred within the same free zone group: did my service reset?', href: '/blog/transferred-same-free-zone-group-gratuity-reset', description: 'A real case about service continuity between group companies.' },
      { title: 'UAE alternative end-of-service savings scheme', href: '/blog/uae-end-of-service-savings-scheme', description: 'How the optional savings scheme differs from the traditional gratuity.' },
    ],
  },
  {
    id: 'final-settlement',
    heading: 'Final settlement and leave',
    intro: 'Everything else in your full and final settlement besides gratuity.',
    links: [
      { title: 'UAE final settlement calculator', href: '/final-settlement-calculator-uae', description: 'Gratuity, leave salary, notice pay and deductions in one itemised figure.', tool: true },
      { title: 'UAE final settlement checklist', href: '/blog/uae-final-settlement-checklist', description: 'What to check before you sign a full-and-final receipt.' },
      { title: 'How to read your UAE final settlement sheet', href: '/blog/how-to-read-uae-final-settlement-sheet', description: 'Line-by-line explanation of a typical settlement statement.' },
      { title: 'UAE leave salary calculation guide', href: '/blog/uae-leave-salary-calculation-guide', description: 'How leave salary and unused leave encashment are worked out.' },
      { title: 'Repatriation ticket meaning and UAE labour law rules', href: '/blog/uae-repatriation-ticket-final-settlement', description: 'When your employer must pay your ticket home, and ticket allowance vs repatriation.' },
      { title: 'Can notice period deductions reduce UAE gratuity?', href: '/blog/notice-period-deductions-gratuity-uae', description: 'How notice pay and notice deductions interact with your final dues.' },
      { title: 'Visa cancellation and final settlement in the UAE', href: '/blog/uae-gratuity-visa-cancellation', description: 'What is still owed when your visa is cancelled, and when.' },
    ],
  },
  {
    id: 'disputes',
    heading: 'Resigning, termination and disputes',
    intro: 'Resignation vs termination, late payment and how to complain to MOHRE.',
    links: [
      { title: 'UAE gratuity: resignation vs termination', href: '/blog/uae-gratuity-resignation-vs-termination', description: 'Why resigning no longer reduces gratuity under the current law.' },
      { title: 'I resigned without another job lined up: what happened to my gratuity', href: '/blog/i-resigned-without-job-lined-up-uae-gratuity', description: 'A first-person account of resigning and getting paid.' },
      { title: 'How to file a MOHRE complaint online (unpaid gratuity)', href: '/blog/how-to-file-mohre-complaint', description: 'Step-by-step complaint process, documents and timelines.' },
      { title: 'Can your employer delay UAE gratuity?', href: '/blog/uae-gratuity-payment-delay-rules', description: 'The 14-day payment rule in Article 53 and what to do if it is missed.' },
      { title: 'My gratuity was AED 4,200 short: what HR got wrong', href: '/blog/my-gratuity-was-short-what-hr-got-wrong', description: 'Common calculation mistakes to check on your settlement.' },
    ],
  },
  {
    id: 'free-zones',
    heading: 'Free zones (DIFC, ADGM, JAFZA, DMCC)',
    intro: 'Free zones that follow the federal law and the two that have their own rules.',
    links: [
      { title: 'DIFC DEWS explained: contributions and calculation', href: '/blog/difc-dews-gratuity-explained', description: 'What DEWS is and how it replaced gratuity in DIFC.' },
      { title: 'DIFC gratuity & DEWS calculator', href: '/calculate-difc-gratuity', description: 'Estimate DEWS employer contributions.', tool: true },
      { title: 'ADGM gratuity calculator', href: '/calculate-adgm-gratuity', description: 'ADGM Employment Regulations 2024 method (÷365, 21-day deadline).', tool: true },
      { title: 'DMCC gratuity calculator', href: '/calculate-dmcc-gratuity', description: 'The DMCC EOSB guide method with worked examples.', tool: true },
      { title: 'JAFZA gratuity calculator', href: '/calculate-jafza-gratuity', description: 'Federal formula for Jebel Ali Free Zone employees.', tool: true },
      { title: 'All free zone and industry calculators', href: '/gratuity-calculator', description: 'Pick the right calculator for your employer.', tool: true },
    ],
  },
  {
    id: 'special-workers',
    heading: 'Special workers',
    intro: 'Domestic workers, part-time staff and sector-specific situations.',
    links: [
      { title: 'Domestic worker gratuity UAE: calculator and law', href: '/gratuity-calculator/domestic-workers', description: 'What Federal Decree-Law No. 9 of 2022 says, plus an estimator.', tool: true },
      { title: 'UAE gratuity for part-time workers', href: '/blog/uae-gratuity-part-time-workers', description: 'How gratuity works when you work reduced hours.' },
      { title: 'Hotel and restaurant staff gratuity calculator', href: '/gratuity-calculator/hospitality', description: 'Service charge, tips and hospitality contracts.', tool: true },
      { title: 'Healthcare workers gratuity calculator', href: '/gratuity-calculator/healthcare', description: 'Nurses, doctors and allied health roles.', tool: true },
      { title: 'Teachers gratuity calculator', href: '/gratuity-calculator/education', description: 'Private school and academic-year contracts.', tool: true },
    ],
  },
  {
    id: 'tax',
    heading: 'Tax and nationality',
    intro: 'Is gratuity taxed, at home or in the UAE?',
    links: [
      { title: 'Is UAE gratuity taxable?', href: '/blog/is-uae-gratuity-taxable', description: 'The UAE position and home-country tax questions.' },
      { title: 'Is UAE gratuity taxable in India? NRI guide', href: '/blog/uae-gratuity-tax-india-nri-guide', description: 'Residential status and Indian tax on UAE gratuity.' },
      { title: 'Is there income tax in Dubai? UAE explained', href: '/blog/is-there-income-tax-in-dubai-uae-explained', description: 'Whether the UAE taxes your salary, explained simply.' },
      { title: 'Gratuity guides by nationality', href: '/guides', description: 'Guides for Indian, Pakistani, Filipino, Bangladeshi and other expats.', tool: true },
    ],
  },
  {
    id: 'money',
    heading: 'Money in the UAE',
    intro: 'Visa costs, rent, living costs and what to do with your savings.',
    links: [
      { title: 'UAE employment visa cost breakdown', href: '/blog/uae-employment-visa-cost-breakdown-2026', description: 'Typical fee items for a UAE employment visa.' },
      { title: 'RERA rent increase rules in Dubai', href: '/blog/rera-rent-increase-rules-dubai-explained', description: 'How the RERA rental index limits rent increases.' },
      { title: 'UAE cost of living 2026: what expats actually spend', href: '/blog/uae-cost-of-living-2026-what-expats-actually-spend', description: 'Monthly budgets for singles and families.' },
      { title: 'How to save your first AED 100,000 in the UAE', href: '/blog/how-to-save-your-first-aed-100000-in-uae', description: 'A practical savings plan on a UAE salary.' },
      { title: 'Best way to send money home from the UAE', href: '/blog/best-way-to-send-money-home-from-uae-2026', description: 'Comparing remittance options and fees.' },
    ],
  },
]

const hubSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([{ name: 'Blog', path: '/blog' }]),
    {
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: groups.flatMap((g) => g.links.filter((l) => !l.tool)).map((l, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: l.title,
          url: `https://www.uaegratuitycheck.com${l.href}`,
        })),
      },
    },
  ],
}

export default function BlogPage() {
  return (
    <>
      <SchemaMarkup schema={hubSchema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <nav className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Blog</nav>
          <h1>UAE Gratuity Blog: Guides by Topic</h1>
          <p>
            Plain-English guides to UAE end-of-service gratuity, final settlement, leave and labour disputes. Each guide is based on Federal Decree-Law No. 33 of 2021 (the UAE Labour Law) or, for DIFC, ADGM and domestic workers, the rules that apply to them. Pick a topic below, or start with the <Link href="/">UAE gratuity calculator</Link> if you just need a number.
          </p>
        </div>

        <BlogHeroImage
          src="/images/blog/real/uae-gratuity-blog-guides-cover.png"
          alt="UAE employees and an HR advisor reviewing gratuity, final settlement, and end-of-service benefit documents"
          title="UAE Gratuity Blog Cover Image"
          caption="Guides for employees checking gratuity, final settlement, leave, visa cancellation and MOHRE complaints."
        />

        <div className="card" style={{ marginTop: '1.5rem' }}>
          <h2 style={{ fontSize: '20px' }}>Start here</h2>
          <ul>
            <li><Link href="/how-it-works">How to calculate gratuity in the UAE</Link>: the formula step by step.</li>
            <li><Link href="/uae-labor-law">UAE gratuity law (Article 51)</Link>: the rules with article numbers.</li>
            <li><Link href="/final-settlement-calculator-uae">UAE final settlement calculator</Link>: your full and final settlement, itemised.</li>
            <li><Link href="/blog/how-to-file-mohre-complaint">How to file a MOHRE complaint</Link>: if you have not been paid.</li>
          </ul>
          <nav aria-label="Blog topics" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '0.75rem' }}>
            {groups.map((g) => <a key={g.id} href={`#${g.id}`} className="pill" style={{ background: 'var(--gray-100, #f3f4f6)', color: 'var(--text)' }}>{g.heading}</a>)}
          </nav>
        </div>

        {groups.map((g) => (
          <section className="hub-group" id={g.id} key={g.id}>
            <h2>{g.heading}</h2>
            <p>{g.intro}</p>
            <div className="two-col">
              {g.links.map((l) => (
                <Link className="mini-card" href={l.href} key={l.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 style={{ fontSize: '17px' }}>{l.tool ? '🧮 ' : ''}{l.title}</h3>
                  <p>{l.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <Footer />
      </main>
    </>
  )
}
