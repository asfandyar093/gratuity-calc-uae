import Link from 'next/link'

/**
 * Author, review date and legal-review note. Only states facts we can stand behind:
 * the author is the site's editor, content is based on official sources, and the
 * pages have not been reviewed by a lawyer.
 */
export default function AuthorBox({ reviewed, label }: { reviewed?: string; label?: string }) {
  return (
    <aside className="author-box" aria-label="About the author">
      <div className="author-box-mark" aria-hidden="true">AK</div>
      <div>
        <p>
          <strong>Written by <Link href="/about">Asfandyar Khan</Link></strong>, editor of UAE Gratuity Check. Legal and regulatory statements are based on official UAE legislation and government sources.
        </p>
        <p>
          {reviewed && label ? (
            <>Content last checked against those sources: <time dateTime={reviewed}>{label}</time>. </>
          ) : (
            <>The date at the top of the page is when this guide was last updated. </>
          )}
          See our <Link href="/editorial-policy">editorial policy</Link> and how to <Link href="/editorial-policy#corrections">report a correction</Link>.
        </p>
        <p className="legal-note">
          Legal review: this page has not been reviewed by a lawyer. It is general information based on official sources, not legal advice. For your own case, ask MOHRE or a UAE-qualified lawyer.
        </p>
      </div>
    </aside>
  )
}
