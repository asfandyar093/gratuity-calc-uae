import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Gratuity Blog | Guides and Labour Law Updates 2026',
  description: 'Expert guides on UAE end-of-service gratuity, labour law updates, and EOSB calculations. Updated for 2026.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog',
  },
}

const posts = [
  {
    badge: 'FREE ZONES',
    badgeClass: 'bg-blue',
    title: 'UAE Free Zone Gratuity Calculator Guide 2026',
    description: 'Compare JAFZA, DIFC, ADGM, and Sharjah Airport Free Zone gratuity calculators, with notes on when special regimes apply.',
    href: '/blog/free-zone-gratuity-calculator-uae',
    image: '/og-image.png',
    imageAlt: 'UAE free zone gratuity calculator guide for JAFZA DIFC ADGM and Sharjah Airport Free Zone',
  },
  {
    badge: 'JAFZA',
    badgeClass: 'bg-teal',
    title: 'JAFZA Gratuity Calculator Guide 2026',
    description: 'Jebel Ali Free Zone employees: calculate gratuity using basic salary, service years, and the standard UAE 21/30 formula.',
    href: '/blog/jafza-gratuity-calculator-guide',
    image: '/og-image.png',
    imageAlt: 'JAFZA gratuity calculator guide for Jebel Ali Free Zone employees',
  },
  {
    badge: 'DISPUTES',
    badgeClass: 'bg-red',
    title: 'How to Dispute a Gratuity Calculation in UAE',
    description: 'HR calculation looks wrong? Learn how to request the breakdown, prove the shortfall, and escalate cleanly.',
    href: '/blog/how-to-dispute-gratuity-uae',
    image: '/images/blog/how-to-file-mohre-complaint.svg',
    imageAlt: 'How to dispute a UAE gratuity calculation or final settlement',
  },
  {
    badge: 'DOMESTIC WORKERS',
    badgeClass: 'bg-amber',
    title: 'Gratuity for Domestic Workers in UAE 2026',
    description: 'Housemaids, nannies, private drivers, and cooks follow separate domestic worker rules. Here is what to check.',
    href: '/blog/gratuity-for-domestic-workers-uae',
    image: '/og-image.png',
    imageAlt: 'UAE gratuity guide for domestic workers including maids drivers and nannies',
  },
  {
    badge: 'SAIF ZONE',
    badgeClass: 'bg-blue',
    title: 'Sharjah Airport Free Zone Gratuity Guide',
    description: 'Calculate SAIF Zone gratuity, check basic salary inputs, and connect the result to final settlement.',
    href: '/blog/sharjah-airport-free-zone-gratuity',
    image: '/og-image.png',
    imageAlt: 'Sharjah Airport Free Zone gratuity calculator guide',
  },
  {
    badge: 'MUST READ',
    badgeClass: 'bg-teal',
    title: 'UAE Gratuity — Resignation vs Termination 2026',
    description: 'Does resigning affect how much gratuity you get? The 2022 law change that most employees do not know about. Full guide with worked examples.',
    href: '/blog/uae-gratuity-resignation-vs-termination',
    image: '/images/blog/uae-gratuity-resignation-vs-termination.svg',
    imageAlt: 'UAE gratuity comparison for resignation versus termination in 2026',
  },
  {
    badge: 'LAW UPDATE',
    badgeClass: 'bg-teal',
    title: 'UAE Labour Law 2026 — Gratuity Changes You Must Know',
    description: 'Federal Decree-Law No. 33 of 2021 explained. What changed, the new savings scheme, contract reforms, and what they mean for your end-of-service benefit.',
    href: '/blog/uae-labour-law-2026-gratuity-changes',
    image: '/images/blog/uae-labour-law-2026-gratuity-changes.svg',
    imageAlt: 'UAE labour law 2026 gratuity changes guide',
  },
  {
    badge: 'FINAL SETTLEMENT',
    badgeClass: 'bg-red',
    title: 'UAE Final Settlement Checklist 2026',
    description: 'Gratuity is only one line item. Learn how final salary, unused annual leave, notice pay, deductions, and the 14-day payment rule fit together.',
    href: '/blog/uae-final-settlement-checklist',
    image: '/images/blog/uae-final-settlement-checklist.svg',
    imageAlt: 'UAE final settlement checklist covering gratuity and leave pay',
  },
  {
    badge: 'UNPAID LEAVE',
    badgeClass: 'bg-amber',
    title: 'Does Unpaid Leave Reduce UAE Gratuity?',
    description: 'Unpaid absence is deducted from continuous service for gratuity. See how to count days, avoid HR mistakes, and calculate the net service period.',
    href: '/blog/unpaid-leave-gratuity-uae',
    image: '/images/blog/unpaid-leave-gratuity-uae.svg',
    imageAlt: 'Unpaid leave impact on UAE gratuity calculation',
  },
  {
    badge: 'SAVINGS SCHEME',
    badgeClass: 'bg-blue',
    title: 'UAE Alternative End-of-Service Benefits Savings Scheme',
    description: 'Market research guide to the voluntary UAE savings scheme, how employer subscriptions work, and how it compares with traditional gratuity.',
    href: '/blog/uae-end-of-service-savings-scheme',
    image: '/images/blog/uae-end-of-service-savings-scheme.svg',
    imageAlt: 'UAE alternative end-of-service benefits savings scheme guide',
  },
  {
    badge: 'NOTICE PERIOD',
    badgeClass: 'bg-gray',
    title: 'Can Notice Period Deductions Reduce UAE Gratuity?',
    description: 'What employers can and cannot deduct when notice is not served, with practical final settlement examples for employees and HR teams.',
    href: '/blog/notice-period-deductions-gratuity-uae',
    image: '/images/blog/notice-period-deductions-gratuity-uae.svg',
    imageAlt: 'Notice period deductions and UAE gratuity final settlement',
  },
  {
    badge: 'FINAL DUES',
    badgeClass: 'bg-teal',
    title: 'Repatriation Ticket and Final Settlement in UAE',
    description: 'When employers must cover repatriation costs, how annual tickets differ, and what to check before signing a full-and-final settlement.',
    href: '/blog/uae-repatriation-ticket-final-settlement',
    image: '/images/blog/uae-repatriation-ticket-final-settlement.svg',
    imageAlt: 'UAE repatriation ticket and final settlement guide',
  },
  {
    badge: 'ELIGIBILITY',
    badgeClass: 'bg-gray',
    title: 'UAE Gratuity for Less Than 1 Year of Service 2026',
    description: 'Do you get gratuity if you leave before completing one year? What you are still owed, the exceptions, and why being close to the one-year mark matters.',
    href: '/blog/uae-gratuity-less-than-1-year',
    image: '/images/blog/uae-gratuity-less-than-1-year.svg',
    imageAlt: 'UAE gratuity eligibility for less than one year of service',
  },
  {
    badge: 'MOHRE COMPLAINTS',
    badgeClass: 'bg-gray',
    title: 'How to File a MOHRE Complaint for Unpaid Gratuity 2026',
    description: 'Employer not paying what you are owed? Step-by-step guide to filing a complaint with MOHRE — online, by phone, or in person.',
    href: '/blog/how-to-file-mohre-complaint',
    image: '/images/blog/how-to-file-mohre-complaint.svg',
    imageAlt: 'How to file a MOHRE complaint for unpaid gratuity',
  },
  {
    badge: 'FREE ZONES',
    badgeClass: 'bg-blue',
    title: 'DIFC DEWS Gratuity Explained 2026',
    description: 'Working in the Dubai International Financial Centre? DEWS replaces standard UAE gratuity for DIFC employees.',
    href: '/blog/difc-dews-gratuity-explained',
    image: '/images/blog/difc-dews-gratuity-explained.svg',
    imageAlt: 'DIFC DEWS gratuity and workplace savings explained',
  },
  {
    badge: 'FREE ZONES',
    badgeClass: 'bg-blue',
    title: 'ADGM Gratuity Rules Explained 2026',
    description: 'Working in Abu Dhabi Global Market? ADGM operates under its own employment regulations separate from UAE mainland law.',
    href: '/blog/adgm-gratuity-explained',
    image: '/images/blog/adgm-gratuity-explained.svg',
    imageAlt: 'ADGM gratuity rules explained for Abu Dhabi Global Market employees',
  },
  {
    badge: 'SALARY',
    badgeClass: 'bg-teal',
    title: 'Does UAE Gratuity Include Housing Allowance? 2026',
    description: 'UAE gratuity is calculated on basic salary only — not housing, transport, or other allowances.',
    href: '/blog/uae-gratuity-allowances-basic-salary',
    image: '/images/blog/uae-gratuity-allowances-basic-salary.svg',
    imageAlt: 'UAE gratuity basic salary versus allowances guide',
  },
  {
    badge: 'FLEXIBLE WORK',
    badgeClass: 'bg-gray',
    title: 'UAE Gratuity for Part-Time Workers 2026',
    description: 'Part-time employees are entitled to proportional gratuity under the 2021 UAE Labour Law.',
    href: '/blog/uae-gratuity-part-time-workers',
    image: '/images/blog/uae-gratuity-part-time-workers.svg',
    imageAlt: 'UAE gratuity guide for part-time workers',
  },
  {
    badge: 'TAX',
    badgeClass: 'bg-gray',
    title: 'Is UAE Gratuity Taxable? 2026 Guide for Expats',
    description: 'No UAE income tax — but what about your home country? Complete tax guide for expats.',
    href: '/blog/is-uae-gratuity-taxable',
    image: '/images/blog/is-uae-gratuity-taxable.svg',
    imageAlt: 'UAE gratuity tax guide for expats',
  },
  {
    badge: 'CALCULATION',
    badgeClass: 'bg-teal',
    title: 'UAE Gratuity 2-Year Cap Explained 2026',
    description: 'UAE gratuity cannot exceed two years of basic salary. Learn exactly when the cap kicks in.',
    href: '/blog/uae-gratuity-two-year-cap',
    image: '/images/blog/uae-gratuity-two-year-cap.svg',
    imageAlt: 'UAE gratuity two-year cap explained',
  },
]

export default function BlogPage() {
  return (
    <>
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">UAE Gratuity Check › Blog</div>
          <h1>UAE Gratuity Blog</h1>
          <p>Expert guides on UAE end-of-service gratuity, labour law updates, and EOSB calculations — updated for 2026.</p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article className="card blog-card" key={post.href}>
              <Link href={post.href} className="blog-card-image" aria-label={post.title}>
                <Image src={post.image} alt={post.imageAlt} title={post.title} width={1200} height={630} />
              </Link>
              <div className={`badge ${post.badgeClass}`}>{post.badge}</div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <Link href={post.href} className="read-link">
                Read article →
              </Link>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', textDecoration: 'none' }}>
            Use the free gratuity calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}
