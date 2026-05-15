export default function LastUpdated({ date }: { date: string }) {
  return (
    <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: '0.5rem 0 1rem' }}>
      <time dateTime={date}>Last updated: {date}</time>
    </p>
  )
}
