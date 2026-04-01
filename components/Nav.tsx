'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const path = usePathname()

  return (
    <nav className="nav">
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image
          src="/logo.png"
          alt="UAE Gratuity Check"
          width={200}
          height={52}
          style={{ objectFit: 'contain', height: '50px', width: 'auto', borderRadius: '8px' }}
          priority
        />
      </Link>
      <div className="nav-links">
        <Link href="/" className={`nav-btn ${path === '/' ? 'active' : ''}`}>
          Calculator
        </Link>
        <Link href="/how-it-works" className={`nav-btn ${path === '/how-it-works' ? 'active' : ''}`}>
          How it works
        </Link>
        <Link href="/uae-labor-law" className={`nav-btn ${path === '/uae-labor-law' ? 'active' : ''}`}>
          UAE labor law
        </Link>
        <Link href="/blog" className={`nav-btn ${path === '/blog' || path.startsWith('/blog/') ? 'active' : ''}`}>
          Blog
        </Link>
      </div>
    </nav>
  )
}