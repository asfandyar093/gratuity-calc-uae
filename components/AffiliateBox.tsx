import Link from 'next/link'
import { CATEGORY_COPY, getActivePartners, type AffiliateCategory } from '@/config/affiliates'

// Renders nothing unless at least one partner in the category is enabled
// with a valid https tracking link (see config/affiliates.ts).
// Place it below the answer, never inside a calculator result.
export default function AffiliateBox({ category }: { category: AffiliateCategory }) {
  const partners = getActivePartners(category)
  if (partners.length === 0) return null
  const copy = CATEGORY_COPY[category]
  return (
    <aside className="sec" aria-label={copy.heading} data-affiliate-box={category}>
      <div className="card">
        <div className="badge bg-blue">{copy.badge}</div>
        <span style={{ marginInlineStart: '0.5rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          Affiliate link
        </span>
        <h2>{copy.heading}</h2>
        <p>{copy.intro}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0' }}>
          {partners.map((p) => (
            <li key={p.id} style={{ padding: '0.75rem 0', borderTop: '1px solid var(--border, #e5e7eb)' }}>
              <strong>{p.name}</strong>
              <span style={{ marginInlineStart: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>(affiliate link)</span>
              <p style={{ margin: '0.25rem 0 0.5rem' }}>{p.blurb}</p>
              <a href={p.url.trim()} target="_blank" rel="sponsored noopener" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>
                {p.ctaLabel} ›
              </a>
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
          Disclosure: we may earn a commission if you sign up through these links, at no extra cost to you. It does not change our calculators or our reading of the law.{' '}
          <Link href="/affiliate-disclosure" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>How we handle affiliate links</Link>.
        </p>
      </div>
    </aside>
  )
}
