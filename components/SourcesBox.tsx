import { LAST_REVIEWED, LAST_REVIEWED_LABEL, LAST_REVIEWED_LABEL_AR, type Source } from '@/lib/sources'

/** Visible "last reviewed" line plus the official sources a page relies on. */
export default function SourcesBox({
  sources,
  lang = 'en',
  note,
}: {
  sources: Source[]
  lang?: 'en' | 'ar'
  note?: string
}) {
  const isAr = lang === 'ar'
  return (
    <aside className="card sources-box" aria-label={isAr ? 'المصادر' : 'Sources'}>
      <p className="sources-reviewed">
        <strong>{isAr ? 'آخر مراجعة: ' : 'Last reviewed: '}</strong>
        <time dateTime={LAST_REVIEWED}>{isAr ? LAST_REVIEWED_LABEL_AR : LAST_REVIEWED_LABEL}</time>
        {isAr ? ' · أُعدّ من النصوص الرسمية أدناه' : ' · Prepared from the official texts below'}
      </p>
      <h2 className="sources-title">{isAr ? 'المصادر الرسمية' : 'Official sources'}</h2>
      <ul className="sources-list">
        {sources.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              {isAr && s.labelAr ? s.labelAr : s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="sources-note">
        {note ??
          (isAr
            ? 'هذه الصفحة معلومات عامة وليست استشارة قانونية. للحالات الخاصة راجع وزارة الموارد البشرية والتوطين أو مستشاراً قانونياً.'
            : 'General information, not legal advice. For your specific case, check with MOHRE or a UAE-qualified lawyer.')}
      </p>
    </aside>
  )
}
