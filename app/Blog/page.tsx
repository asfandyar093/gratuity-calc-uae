import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Gratuity Blog — Guides & Labour Law Updates 2026',
  description: 'Expert guides on UAE end-of-service gratuity, labour law updates, and EOSB calculations. Updated for 2026.',
}

const posts = [
  {
    slug: 'uae-gratuity-resignation-vs-termination',
    title: 'UAE Gratuity — Resignation vs Termination 2026',
    desc: 'Does resigning affect how much gratuity you get? The 2022 law change that most employees don\'t know about.',
    time: '7 min read',
    badge: 'Must read',
  },
  {
    slug: 'uae-labour-law-2026-gratuity-changes',
    title: 'UAE Labour Law 2026 — Gratuity Changes You Must Know',
    desc: 'Federal Decree-Law No. 33 of 2021 explained. What changed, the new savings scheme, contract reforms, and your rights.',
    time: '9 min read',
    badge: 'Law update',
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

        <div style={{ display: 'grid', gap: '1rem' }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ cursor: 'pointer', border: '2px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <div className="badge bg-teal" style={{ marginBottom: '0.5rem' }}>{post.badge}</div>
                    <h2 style={{ fontSize: '20px', marginBottom: '0.5rem', color: 'var(--text)' }}>{post.title}</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>{post.desc}</p>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap' }}>{post.time}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', textDecoration: 'none' }}>
            Use the free gratuity calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}