'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const industries = [
  { emoji: '🏗️', label: 'Construction', href: '/gratuity-calculator/construction' },
  { emoji: '🏨', label: 'Hospitality', href: '/gratuity-calculator/hospitality' },
  { emoji: '🏥', label: 'Healthcare', href: '/gratuity-calculator/healthcare' },
  { emoji: '🏦', label: 'Banking & Finance', href: '/gratuity-calculator/banking' },
  { emoji: '🏠', label: 'Domestic Workers', href: '/gratuity-calculator/domestic-workers' },
]

export default function Nav() {
  const path = usePathname()
  const isCalcActive = path === '/salary-calculator' || path.startsWith('/gratuity-calculator')

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
        <Link href="/" className={`nav-btn ${path === '/' ? 'active' : ''}`}>Calculator</Link>
        <Link href="/how-it-works" className={`nav-btn ${path === '/how-it-works' ? 'active' : ''}`}>How it works</Link>
        <Link href="/uae-labor-law" className={`nav-btn ${path === '/uae-labor-law' ? 'active' : ''}`}>UAE labor law</Link>

        {/* Calculators dropdown */}
        <div className="nav-dropdown">
          <Link
            href="/gratuity-calculator"
            className={`nav-btn nav-dropdown-trigger ${isCalcActive ? 'active' : ''}`}
          >
            Calculators
          </Link>
          <div className="nav-dropdown-menu">
            <Link href="/salary-calculator" className={`nav-dropdown-item ${path === '/salary-calculator' ? 'active' : ''}`}>
              <span>💰</span> Salary Breakdown
            </Link>
            <div className="nav-dropdown-divider" />
            {industries.map(ind => (
              <Link
                key={ind.href}
                href={ind.href}
                className={`nav-dropdown-item ${path === ind.href ? 'active' : ''}`}
              >
                <span>{ind.emoji}</span> {ind.label}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/guides" className={`nav-btn ${path === '/guides' || path.startsWith('/guides/') ? 'active' : ''}`}>Guides</Link>
        <Link href="/blog" className={`nav-btn ${path === '/blog' || path.startsWith('/blog/') ? 'active' : ''}`}>Blog</Link>
      </div>
    </nav>
  )
}
