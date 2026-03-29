import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">Gratuity<span>Calc</span> UAE</div>
      <div className="footer-desc">
        Free UAE end-of-service gratuity calculator · Updated 2026 · Based on Federal Decree-Law No. 33 of 2021
      </div>
      <div className="uae-divider" style={{ maxWidth: '400px', margin: '1.5rem auto' }}>
        <span /><span /><span /><span />
      </div>
      <div className="footer-links">
        <Link href="/">Calculator</Link>
        <Link href="/how-it-works">How it works</Link>
        <Link href="/uae-labor-law">UAE Labor Law</Link>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="footer-copy">
        &copy; 2026 GratuityCalc UAE — For informational purposes only. Not legal advice.
      </div>
    </footer>
  )
}
