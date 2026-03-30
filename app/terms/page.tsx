import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <>
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">UAE Gratuity Check › Terms of Service</div>
          <h1>Terms of Service</h1>
          <p>Last updated: March 30, 2026</p>
        </div>
        <div className="card">
          <h2>Acceptance of Terms</h2>
          <p>By using uaegratuitycheck.com you agree to these Terms of Service.</p>
        </div>
        <div className="card">
          <h2>Disclaimer</h2>
          <p>Calculations are estimates only and do not constitute legal or financial advice. Always consult MOHRE or a qualified UAE employment lawyer for your specific situation.</p>
        </div>
        <div className="card">
          <h2>Accuracy</h2>
          <p>We strive to keep all information current with UAE labour law but cannot guarantee all content is error-free. Verify your final settlement with your HR department or MOHRE.</p>
        </div>
        <div className="card">
          <h2>Limitation of Liability</h2>
          <p>UAE Gratuity Check shall not be liable for any damages arising from your use of this site or reliance on any information provided herein.</p>
        </div>
        <div className="card">
          <h2>Contact</h2>
          <p>Email: info@uaegratuitycheck.com</p>
        </div>
        <Footer />
      </main>
    </>
  )
}