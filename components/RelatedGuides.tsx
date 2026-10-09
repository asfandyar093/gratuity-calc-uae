import Link from 'next/link'
import { relatedFor } from '@/lib/related'

/** "Related guides" block: contextual internal links to the next pages in the same topic cluster. */
export default function RelatedGuides({ path }: { path: string }) {
  const links = relatedFor(path)
  if (links.length === 0) return null
  return (
    <aside className="card related-guides" aria-label="Related guides">
      <h2 className="sources-title">Related guides and calculators</h2>
      <ul className="related-list">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
            <span> — {l.blurb}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
