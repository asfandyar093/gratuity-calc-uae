'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const path = usePathname()

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        Gratuity<span>Calc</span> UAE
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
      </div>
    </nav>
  )
}
