import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">UAE Gratuity Check › Privacy Policy</div>
          <h1>Privacy Policy</h1>
          <p>Last updated: March 30, 2026</p>
        </div>
        <div className="card">
          <h2>Overview</h2>
          <p>UAE Gratuity Check operates uaegratuitycheck.com. All calculations run entirely in your browser — no salary data is ever sent to our servers.</p>
        </div>
        <div className="card">
          <h2>Information We Do Not Collect</h2>
          <p>We do not collect, store, or process your salary, years of service, or any personally identifiable information entered into the calculator.</p>
        </div>
        <div className="card">
          <h2>Google Analytics</h2>
          <p>We use Google Analytics 4 to collect anonymous usage data such as pages visited and device type. This data does not identify individual users.</p>
        </div>
        <div className="card">
          <h2>Google AdSense</h2>
          <p>We may display ads served by Google AdSense. Google may use cookies to serve ads based on prior visits. You can opt out at google.com/settings/ads.</p>
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