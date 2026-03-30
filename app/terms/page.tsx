import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — UAE Gratuity Check',
  description: 'Terms of Service for UAEGratuityCheck.com',
}

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
          <p>By accessing and using uaegratuitycheck.com ("the Site"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this Site.</p>
        </div>

        <div className="card">
          <h2>Disclaimer — Not Legal Advice</h2>
          <div className="warn-box">
            The gratuity calculations provided by this tool are estimates only and are intended for informational purposes. They do not constitute legal, financial, or professional advice. Always consult MOHRE or a qualified UAE employment lawyer for your specific situation.
          </div>
          <p>UAE Gratuity Check makes every effort to ensure the accuracy of calculations based on Federal Decree-Law No. 33 of 2021. However, we make no warranties or representations regarding the accuracy, completeness, or suitability of the information provided.</p>
        </div>

        <div className="card">
          <h2>Use of the Calculator</h2>
          <p>The gratuity calculator is provided free of charge for personal and informational use. You agree to use this tool only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul>
            <li>Use the Site in any way that violates applicable UAE or international laws</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Use automated tools to scrape or extract data from the Site</li>
            <li>Reproduce or distribute the Site content without permission</li>
          </ul>
        </div>

        <div className="card">
          <h2>Accuracy of Information</h2>
          <p>While we strive to keep all information up to date with the latest UAE labour law, we cannot guarantee that all content is current, complete, or error-free. UAE labour laws may change and our content may not immediately reflect such changes.</p>
          <p>The calculation results are based on the information you provide. Incorrect inputs will produce incorrect results. Always verify your final settlement amount with your employer&apos;s HR department or MOHRE.</p>
        </div>

        <div className="card">
          <h2>Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, UAE Gratuity Check shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this Site or reliance on any information provided herein.</p>
          <p>This includes but is not limited to any errors in gratuity calculations, loss of income, or disputes with employers arising from use of this tool.</p>
        </div>

        <div className="card">
          <h2>Intellectual Property</h2>
          <p>All content on this Site, including text, design, graphics, and code, is the property of UAE Gratuity Check and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
        </div>

        <div className="card">
          <h2>Third-Party Links</h2>
          <p>This Site may contain links to third-party websites including MOHRE and other government portals. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them.</p>
        </div>

        <div className="card">
          <h2>Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from the use of this Site shall be subject to the exclusive jurisdiction of the relevant courts.</p>
        </div>

        <div className="card">
          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated date. Your continued use of the Site after any changes constitutes your acceptance of the new terms.</p>
        </div>

        <div className="card">
          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p><strong>Website:</strong> uaegratuitycheck.com</p>
          <p><strong>Email:</strong> info@uaegratuitycheck.com</p>
        </div>

        <Footer />
      </main>
    </>
  )
}