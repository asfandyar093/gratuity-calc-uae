import Link from 'next/link'
import { relatedCalculators } from '@/lib/related'

/** "Related calculators" module for tool pages: five other calculators, each with a short reason to click. */
export default function RelatedCalculators({ path }: { path: string }) {
  const links = relatedCalculators(path)
  return (
    <aside className="card related-guides" aria-label="Related calculators">
      <h2 className="sources-title">Related calculators</h2>
      <ul className="related-list">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
            <span>: {l.blurb}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
