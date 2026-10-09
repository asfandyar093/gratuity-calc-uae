'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, type MouseEvent } from 'react'
import LanguageToggle from './LanguageToggle'
import { arHref } from '@/lib/i18nRoutes'

type NavItem = { emoji: string; en: string; ar: string; href: string }

const calculators: NavItem[] = [
  { emoji: '🧾', en: 'Final Settlement', ar: 'التسوية النهائية', href: '/final-settlement-calculator-uae' },
  { emoji: '📊', en: 'Gratuity by Years Table', ar: 'جدول المكافأة حسب السنوات', href: '/gratuity-by-years-of-service' },
  { emoji: '💰', en: 'Salary Breakdown', ar: 'تفصيل الراتب', href: '/salary-calculator' },
  { emoji: '🏖️', en: 'Annual Leave (MOHRE)', ar: 'الإجازة السنوية (MOHRE)', href: '/mohre-annual-leave-calculator' },
  { emoji: '📈', en: 'Investment Projection', ar: 'توقعات الاستثمار', href: '/gratuity-investment-calculator' },
  { emoji: '⏱️', en: 'Notice Period', ar: 'فترة الإشعار', href: '/notice-period-calculator-uae' },
  { emoji: '⚡', en: 'Overtime Pay', ar: 'أجر العمل الإضافي', href: '/overtime-calculator-uae' },
  { emoji: '🩺', en: 'Sick Leave', ar: 'الإجازة المرضية', href: '/sick-leave-calculator-uae' },
  { emoji: '🤱', en: 'Maternity Leave', ar: 'إجازة الأمومة', href: '/maternity-leave-calculator-uae' },
]

const industries: NavItem[] = [
  { emoji: '🏢', en: 'JAFZA', ar: 'JAFZA', href: '/calculate-jafza-gratuity' },
  { emoji: '🏙️', en: 'DIFC', ar: 'DIFC', href: '/calculate-difc-gratuity' },
  { emoji: '🏛️', en: 'ADGM', ar: 'ADGM', href: '/calculate-adgm-gratuity' },
  { emoji: '💎', en: 'DMCC', ar: 'DMCC', href: '/calculate-dmcc-gratuity' },
  { emoji: '✈️', en: 'SAIF Zone', ar: 'SAIF Zone', href: '/calculate-sharjah-airport-free-zone-gratuity' },
  { emoji: '🏗️', en: 'Construction', ar: 'البناء والتشييد', href: '/gratuity-calculator/construction' },
  { emoji: '🏨', en: 'Hospitality', ar: 'الضيافة', href: '/gratuity-calculator/hospitality' },
  { emoji: '🏥', en: 'Healthcare', ar: 'الرعاية الصحية', href: '/gratuity-calculator/healthcare' },
  { emoji: '🎓', en: 'Education', ar: 'التعليم', href: '/gratuity-calculator/education' },
  { emoji: '🏦', en: 'Banking & Finance', ar: 'البنوك والتمويل', href: '/gratuity-calculator/banking' },
  { emoji: '🏠', en: 'Domestic Workers', ar: 'العمالة المنزلية', href: '/gratuity-calculator/domestic-workers' },
]

const moneyTools: NavItem[] = [
  { emoji: '🏙️', en: 'Cost of Living', ar: 'تكلفة المعيشة', href: '/cost-of-living-calculator-uae' },
  { emoji: '💱', en: 'Currency Converter', ar: 'محول العملات', href: '/currency-converter-uae' },
  { emoji: '🧾', en: 'Income Tax', ar: 'ضريبة الدخل', href: '/uae-income-tax-calculator' },
  { emoji: '🛂', en: 'Visa Cost', ar: 'تكلفة التأشيرة', href: '/uae-visa-cost-calculator' },
  { emoji: '🎯', en: 'Savings Goal', ar: 'هدف الادخار', href: '/savings-goal-calculator-uae' },
  { emoji: '🏠', en: 'Dubai Rent Increase (RERA)', ar: 'زيادة الإيجار في دبي (RERA)', href: '/dubai-rent-increase-calculator-rera' },
]

export default function Nav({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const path = usePathname() || '/'
  const isAr = lang === 'ar'
  // One language per page: Arabic pages get Arabic labels only, English pages English only.
  const t = (en: string, ar: string) => (isAr ? ar : en)
  // On Arabic pages, link to the Arabic version of a page when one exists.
  const href = (p: string) => (isAr ? arHref(p) : p)
  // The menu is "open for" the path it was opened on, so any navigation
  // (link tap, back/forward) closes it without an extra effect.
  const [openFor, setOpenFor] = useState<string | null>(null)
  const menuOpen = openFor === path
  const burgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const isCalcActive =
    calculators.some(c => c.href === path) ||
    path.startsWith('/gratuity-calculator') ||
    path.startsWith('/calculate-')
  const isMoneyActive = path === '/tools' || moneyTools.some(t => t.href === path)
  const mainLinks = [
    { href: href('/'), en: 'Calculator', ar: 'الحاسبة', active: path === '/' || path === '/ar' },
    { href: href('/how-it-works'), en: 'How it works', ar: 'طريقة الحساب', active: path === '/how-it-works' || path === '/ar/how-it-works' },
    { href: '/uae-labor-law', en: 'UAE labor law', ar: 'قانون العمل', active: path === '/uae-labor-law' },
  ]
  const moreLinks = [
    { href: '/guides', en: 'Guides', ar: 'الأدلة', active: path === '/guides' || path.startsWith('/guides/') },
    { href: '/blog', en: 'Blog', ar: 'المدونة', active: path === '/blog' || path.startsWith('/blog/') },
    { href: '/about', en: 'About', ar: 'من نحن', active: path === '/about' },
    { href: '/contact', en: 'Contact', ar: 'اتصل بنا', active: path === '/contact' },
  ]

  // While the mobile menu is open: lock page scroll, make the page behind it
  // inert, close on Escape or when the screen grows to the desktop layout.
  useEffect(() => {
    if (!menuOpen) return
    const root = document.documentElement
    const main = document.getElementById('main-content')
    root.classList.add('menu-open')
    main?.setAttribute('inert', '')
    menuRef.current?.querySelector<HTMLElement>('a')?.focus({ preventScroll: true })

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenFor(null)
        burgerRef.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1201px)')
    const onResize = () => { if (desktop.matches) setOpenFor(null) }
    document.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    return () => {
      root.classList.remove('menu-open')
      main?.removeAttribute('inert')
      document.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
    }
  }, [menuOpen])

  function onMenuClick(e: MouseEvent<HTMLDivElement>) {
    // Close on any link tap, including a tap on the current page's link.
    if ((e.target as Element).closest('a')) setOpenFor(null)
  }

  const item = (it: NavItem) => (
    <Link
      key={it.href}
      href={href(it.href)}
      className={`nav-dropdown-item ${path === href(it.href) ? 'active' : ''}`}
    >
      <span aria-hidden="true">{it.emoji}</span> {t(it.en, it.ar)}
    </Link>
  )

  return (
    <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label={isAr ? 'القائمة الرئيسية' : 'Main'}>
      <Link href={href('/')} className="nav-home" aria-label={isAr ? 'الصفحة الرئيسية' : 'UAE Gratuity Check home'}>
        {/* logo-nav.png is the logo cropped to its content (376×163); the old 500×500 file was mostly
            transparent padding, which made the wordmark tiny. No `sizes` prop: it made Next preload
            a 3840px-wide candidate for a ~100px image. */}
        <Image
          src="/logo-nav.png"
          alt="UAE Gratuity Check"
          width={137}
          height={59}
          priority
        />
      </Link>

      {/* Desktop navigation (> 1200px) */}
      <div className="nav-links">
        {mainLinks.map(l => (
          <Link key={l.en} href={l.href} className={`nav-btn ${l.active ? 'active' : ''}`}>{t(l.en, l.ar)}</Link>
        ))}

        <div className="nav-dropdown">
          <Link href="/gratuity-calculator" className={`nav-btn nav-dropdown-trigger ${isCalcActive ? 'active' : ''}`}>
            {t('Calculators', 'الحاسبات')}
          </Link>
          <div className="nav-dropdown-menu">
            {calculators.map(item)}
            <div className="nav-dropdown-divider" />
            {industries.map(item)}
          </div>
        </div>

        <div className="nav-dropdown">
          <Link href="/tools" className={`nav-btn nav-dropdown-trigger ${isMoneyActive ? 'active' : ''}`}>
            {t('Money Tools', 'أدوات مالية')}
          </Link>
          <div className="nav-dropdown-menu">
            {item({ emoji: '🗂️', en: 'View all tools', ar: 'عرض كل الأدوات', href: '/tools' })}
            <div className="nav-dropdown-divider" />
            {moneyTools.map(item)}
          </div>
        </div>

        {moreLinks.map(l => (
          <Link key={l.en} href={l.href} className={`nav-btn ${l.active ? 'active' : ''}`}>{t(l.en, l.ar)}</Link>
        ))}
        <LanguageToggle lang={lang} />
      </div>

      {/* Mobile / tablet top bar (<= 1200px): language toggle + menu button */}
      <div className="nav-mobile-actions">
        <LanguageToggle lang={lang} />
        <button
          ref={burgerRef}
          type="button"
          className="nav-burger"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={isAr ? (menuOpen ? 'إغلاق القائمة' : 'فتح القائمة') : (menuOpen ? 'Close menu' : 'Open menu')}
          onClick={() => setOpenFor(menuOpen ? null : path)}
        >
          <span className="nav-burger-bars" aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="mnav"
        hidden={!menuOpen}
        onClick={onMenuClick}
      >
        <div className="mnav-inner">
          <ul className="mnav-main">
            {[...mainLinks, ...moreLinks].map(l => (
              <li key={l.en}>
                <Link href={l.href} className={`mnav-link ${l.active ? 'active' : ''}`} aria-current={l.active ? 'page' : undefined}>
                  {t(l.en, l.ar)}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mnav-hd">{t('Calculators', 'الحاسبات')}</p>
          <div className="mnav-grid">
            {item({ emoji: '🧮', en: 'All gratuity calculators', ar: 'كل حاسبات المكافأة', href: '/gratuity-calculator' })}
            {calculators.map(item)}
          </div>

          <p className="mnav-hd">{t('Free zones & industries', 'المناطق الحرة والقطاعات')}</p>
          <div className="mnav-grid">{industries.map(item)}</div>

          <p className="mnav-hd">{t('Money tools', 'أدوات مالية')}</p>
          <div className="mnav-grid">
            {item({ emoji: '🗂️', en: 'View all tools', ar: 'عرض كل الأدوات', href: '/tools' })}
            {moneyTools.map(item)}
          </div>
        </div>
      </div>
    </nav>
  )
}
