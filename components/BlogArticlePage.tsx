import Link from 'next/link'
import Footer from './Footer'
import BlogHeroImage from './BlogHeroImage'
import LastUpdated from './LastUpdated'
import SchemaMarkup from './SchemaMarkup'

interface Section {
  heading: string
  body: string[]
}

interface ArticleLink {
  href: string
  label: string
  description: string
}

interface Props {
  slug: string
  title: string
  description: string
  badge: string
  intro: string
  sections: Section[]
  faq: [string, string][]
  note?: string
  image?: {
    src: string
    alt: string
    caption: string
    title: string
  }
  internalLinks?: ArticleLink[]
  externalLinks?: ArticleLink[]
  datePublished?: string
  dateModified?: string
}

const endOfServiceOfficial = 'https://u.ae/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector'
const labourRightsOfficial = 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-rights'
const domesticWorkersOfficial = 'https://u.ae/information-and-services/jobs/employment-in-the-private-sector/domestic-helpers'
const domesticComplaintOfficial = 'https://www.mohre.gov.ae/en/services/register-a-labor-complaint-domestic-workers'
const indiaNonResidentFaq = 'https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/non%20resident%20-faq'

const commonInternalLinks: ArticleLink[] = [
  {
    href: '/',
    label: 'UAE gratuity calculator',
    description: 'Estimate your end-of-service gratuity using basic salary, joining date, final working day, and unpaid leave.',
  },
  {
    href: '/final-settlement-calculator-uae',
    label: 'UAE final settlement calculator',
    description: 'Check gratuity together with salary, leave encashment, notice pay, and deductions.',
  },
  {
    href: '/blog/how-to-file-mohre-complaint',
    label: 'How to file a MOHRE complaint for unpaid gratuity',
    description: 'Step-by-step guidance for employees when final settlement or gratuity is withheld.',
  },
]

const internalLinksBySlug: Record<string, ArticleLink[]> = {
  'uae-gratuity-visa-cancellation': [
    commonInternalLinks[0],
    commonInternalLinks[1],
    { href: '/uae-visa-cancellation-gratuity', label: 'Visa cancellation gratuity guide', description: 'Read the wider guide on visa cancellation, final settlement, and gratuity timing.' },
    commonInternalLinks[2],
  ],
  'uae-probation-period-gratuity-2026': [
    commonInternalLinks[0],
    { href: '/blog/uae-gratuity-less-than-1-year', label: 'Gratuity for less than one year of service', description: 'Understand what is still payable when you leave before the one-year gratuity threshold.' },
    commonInternalLinks[1],
  ],
  'how-to-read-uae-final-settlement-sheet': [
    commonInternalLinks[1],
    commonInternalLinks[0],
    { href: '/blog/notice-period-deductions-gratuity-uae', label: 'Notice period deductions and gratuity', description: 'See when notice deductions can affect the final amount paid to an employee.' },
    { href: '/blog/uae-final-settlement-checklist', label: 'UAE final settlement checklist', description: 'Use a practical checklist before signing any full-and-final settlement receipt.' },
  ],
  'uae-gratuity-tax-india-nri-guide': [
    commonInternalLinks[0],
    { href: '/guides/gratuity-calculator-indian-expats', label: 'UAE gratuity guide for Indian expats', description: 'A focused guide for Indian employees calculating UAE end-of-service benefits.' },
    { href: '/blog/is-uae-gratuity-taxable', label: 'Is UAE gratuity taxable for expats?', description: 'Compare the general UAE tax position with home-country tax questions.' },
  ],
  'gcc-gratuity-comparison-2026': [
    { href: '/gcc-gratuity-comparison', label: 'Full GCC gratuity comparison table', description: 'Compare UAE, Saudi Arabia, Kuwait, Oman, Qatar, and Bahrain rules side by side.' },
    commonInternalLinks[0],
    { href: '/blog/uae-labour-law-2026-gratuity-changes', label: 'UAE labour law gratuity changes', description: 'Review how the UAE formula changed under the current labour law framework.' },
  ],
  'uae-gratuity-payment-delay-rules': [
    commonInternalLinks[2],
    commonInternalLinks[1],
    { href: '/blog/how-to-dispute-gratuity-uae', label: 'How to dispute a gratuity calculation', description: 'Prepare the records and calculation needed when the employer’s number looks wrong.' },
    { href: '/blog/uae-final-settlement-checklist', label: 'UAE final settlement checklist', description: 'Check every line before accepting a delayed or revised settlement.' },
  ],
  'uae-gratuity-domestic-workers-2026': [
    { href: '/gratuity-calculator/domestic-workers', label: 'Domestic worker gratuity calculator', description: 'Use the dedicated domestic worker calculator and guidance page.' },
    { href: '/blog/gratuity-for-domestic-workers-uae', label: 'Detailed domestic worker gratuity guide', description: 'Read more about household staff, sponsors, final dues, and dispute documents.' },
    commonInternalLinks[2],
  ],
}

const externalLinksBySlug: Record<string, ArticleLink[]> = {
  'uae-gratuity-visa-cancellation': [
    { href: endOfServiceOfficial, label: 'UAE Government: end-of-service benefits', description: 'Official UAE Government overview of private-sector end-of-service benefit provisions.' },
    { href: labourRightsOfficial, label: 'UAE Government: labour rights', description: 'Official worker-rights information for UAE private-sector employees.' },
  ],
  'uae-probation-period-gratuity-2026': [
    { href: endOfServiceOfficial, label: 'UAE Government: end-of-service benefits', description: 'Official gratuity and savings-scheme guidance for private-sector employees.' },
    { href: labourRightsOfficial, label: 'UAE Government: labour rights', description: 'Official information on employee rights and dispute support in the UAE.' },
  ],
  'how-to-read-uae-final-settlement-sheet': [
    { href: endOfServiceOfficial, label: 'UAE Government: end-of-service benefits', description: 'Official source for gratuity provisions used when checking final settlement.' },
    { href: labourRightsOfficial, label: 'UAE Government: labour rights', description: 'Official worker-rights guidance for resolving private-sector employment issues.' },
  ],
  'uae-gratuity-tax-india-nri-guide': [
    { href: indiaNonResidentFaq, label: 'India Income Tax Department: non-resident FAQs', description: 'Official Indian tax portal guidance on non-resident status and related questions.' },
    { href: endOfServiceOfficial, label: 'UAE Government: end-of-service benefits', description: 'Official UAE source for how end-of-service benefits are described locally.' },
  ],
  'gcc-gratuity-comparison-2026': [
    { href: endOfServiceOfficial, label: 'UAE Government: end-of-service benefits', description: 'Official UAE reference point for comparing the UAE formula with other GCC systems.' },
    { href: labourRightsOfficial, label: 'UAE Government: labour rights', description: 'Official overview of UAE private-sector worker protections and support channels.' },
  ],
  'uae-gratuity-payment-delay-rules': [
    { href: endOfServiceOfficial, label: 'UAE Government: end-of-service benefits', description: 'Official source for private-sector end-of-service benefit provisions and savings scheme notes.' },
    { href: labourRightsOfficial, label: 'UAE Government: labour rights', description: 'Official worker-rights and labour dispute support information.' },
  ],
  'uae-gratuity-domestic-workers-2026': [
    { href: domesticWorkersOfficial, label: 'UAE Government: domestic workers', description: 'Official UAE Government overview of domestic worker rights, occupations, and services.' },
    { href: domesticComplaintOfficial, label: 'MOHRE: domestic worker labour complaint', description: 'Official MOHRE service page for registering domestic worker labour complaints.' },
  ],
  'end-of-service-benefits-arabic-terms-english': [
    { href: endOfServiceOfficial, label: 'UAE Government: end-of-service benefits', description: 'Official bilingual UAE Government source for end-of-service benefit terms and provisions.' },
    { href: labourRightsOfficial, label: 'UAE Government: labour rights', description: 'Official worker-rights information for UAE private-sector employees.' },
  ],
  'uae-leave-salary-calculation-guide': [
    { href: labourRightsOfficial, label: 'UAE Government: labour rights', description: 'Official information on annual leave entitlement and worker rights in the UAE.' },
    { href: endOfServiceOfficial, label: 'UAE Government: end-of-service benefits', description: 'Official UAE source covering leave and end-of-service provisions together.' },
  ],
}

export default function BlogArticlePage({ slug, title, description, badge, intro, sections, faq, note, image, internalLinks = [], externalLinks = [], datePublished, dateModified }: Props) {
  const url = `https://www.uaegratuitycheck.com/blog/${slug}`
  const imageUrl = image ? `https://www.uaegratuitycheck.com${image.src}` : 'https://www.uaegratuitycheck.com/og-image.png'
  const articleInternalLinks = internalLinks.length > 0 ? internalLinks : internalLinksBySlug[slug] ?? commonInternalLinks
  const articleExternalLinks = externalLinks.length > 0 ? externalLinks : externalLinksBySlug[slug] ?? []
  const pubDate = datePublished ?? '2026-05-15'
  const modDate = dateModified ?? datePublished ?? '2026-06-17'
  const displayDate = new Date(modDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.uaegratuitycheck.com/blog' },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
      {
        '@type': 'Article',
        headline: title,
        description,
        image: imageUrl,
        datePublished: pubDate,
        dateModified: modDate,
        author: {
          '@type': 'Person',
          name: 'Asfandyar Khan',
          url: 'https://www.uaegratuitycheck.com/about',
          jobTitle: 'Lead Editor',
          worksFor: { '@type': 'Organization', '@id': 'https://www.uaegratuitycheck.com/#org' },
        },
        publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', logo: { '@type': 'ImageObject', url: 'https://www.uaegratuitycheck.com/logo.png' } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        citation: articleExternalLinks.map((link) => link.href),
        isPartOf: { '@type': 'WebSite', '@id': 'https://www.uaegratuitycheck.com/#website' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
      },
    ],
  }

  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › {badge}</div>
          <h1>{title}</h1>
          <LastUpdated date={displayDate} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>{description}</p>
        </div>

        {image && (
          <BlogHeroImage src={image.src} alt={image.alt} title={image.title} caption={image.caption} />
        )}

        {sections.length > 2 && (
          <nav className="article-toc" aria-label="Table of contents">
            <div className="article-toc-title">In this article</div>
            <ol>
              {sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>{section.heading}</a>
                </li>
              ))}
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </nav>
        )}

        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <div className="badge bg-teal">{badge}</div>
          <p style={{ color: 'var(--green-dark)', fontSize: '18px', fontWeight: 700 }}>{intro}</p>
          <p><Link href="/">Calculate your gratuity now</Link></p>
        </div>

        {sections.map((section) => (
          <div className="card" key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        ))}

        {note && (
          <div className="card" style={{ borderLeft: '6px solid var(--red)', background: 'var(--red-light)' }}>
            <h2>Important note</h2>
            <p>{note}</p>
          </div>
        )}

        {(articleInternalLinks.length > 0 || articleExternalLinks.length > 0) && (
          <div className="card article-links-card">
            {articleInternalLinks.length > 0 && (
              <>
                <h2>Related UAE gratuity guides</h2>
                <div className="article-link-list">
                  {articleInternalLinks.map((link) => (
                    <Link className="article-link-item" href={link.href} key={link.href}>
                      <span>{link.label}</span>
                      <small>{link.description}</small>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {articleExternalLinks.length > 0 && (
              <>
                <h2>Official references</h2>
                <div className="article-link-list">
                  {articleExternalLinks.map((link) => (
                    <a className="article-link-item" href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                      <span>{link.label}</span>
                      <small>{link.description}</small>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="card" id="faq">
          <h2>FAQ</h2>
          {faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  )
}
