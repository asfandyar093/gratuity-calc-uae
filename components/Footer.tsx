import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">UAE Gratuity <span>Check</span></div>
      <div className="footer-desc">
        <span className="lang-en">Free UAE end-of-service gratuity calculator · Updated 2026 · Based on Federal Decree-Law No. 33 of 2021</span>
        <span className="lang-ar">حاسبة مجانية لمكافأة نهاية الخدمة في الإمارات · تحديث 2026 · وفق المرسوم بقانون اتحادي رقم 33 لسنة 2021</span>
      </div>
      <div className="uae-divider" style={{ maxWidth: '400px', margin: '1.5rem auto' }}>
        <span /><span /><span /><span />
      </div>
      <div className="footer-links">
        <Link href="/"><span className="lang-en">Calculator</span><span className="lang-ar">الحاسبة</span></Link>
        <Link href="/how-it-works"><span className="lang-en">How it works</span><span className="lang-ar">طريقة العمل</span></Link>
        <Link href="/uae-labor-law"><span className="lang-en">UAE Labor Law</span><span className="lang-ar">قانون العمل</span></Link>
        <Link href="/about"><span className="lang-en">About</span><span className="lang-ar">من نحن</span></Link>
        <Link href="/privacy-policy"><span className="lang-en">Privacy Policy</span><span className="lang-ar">الخصوصية</span></Link>
        <Link href="/terms"><span className="lang-en">Terms of Service</span><span className="lang-ar">الشروط</span></Link>
      </div>
      <div className="footer-copy">
        <span className="lang-en">&copy; 2026 UAE Gratuity Check — For informational purposes only. Not legal advice.</span>
        <span className="lang-ar">&copy; 2026 UAE Gratuity Check — معلومات عامة وليست استشارة قانونية.</span>
      </div>
    </footer>
  )
}
