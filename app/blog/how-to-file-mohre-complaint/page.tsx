import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How to File a MOHRE Complaint for Unpaid Gratuity UAE 2026 — Step-by-Step Guide',
  description:
    'Employer not paying your UAE gratuity? Step-by-step guide to filing a MOHRE complaint online or by phone. Includes what documents to prepare, what to expect, and typical timelines.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog/how-to-file-mohre-complaint',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.uaegratuitycheck.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'How to File a MOHRE Complaint', item: 'https://www.uaegratuitycheck.com/blog/how-to-file-mohre-complaint' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'How to File a MOHRE Complaint for Unpaid Gratuity UAE 2026',
      description: 'Step-by-step guide to filing a MOHRE labour complaint when your employer has not paid your UAE gratuity.',
      url: 'https://www.uaegratuitycheck.com/blog/how-to-file-mohre-complaint',
      datePublished: '2026-03-01',
      dateModified: '2026-03-01',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/how-to-file-mohre-complaint',
    },
    {
      '@type': 'HowTo',
      name: 'How to File a MOHRE Labour Complaint for Unpaid Gratuity',
      description: 'Step-by-step process to file a complaint with the UAE Ministry of Human Resources and Emiratisation (MOHRE) for unpaid end-of-service gratuity.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Calculate the correct amount owed', text: 'Use the UAE gratuity calculator to determine exactly what you are owed before filing, so you can state the correct amount in your complaint.' },
        { '@type': 'HowToStep', position: 2, name: 'Gather your documents', text: 'Collect your Emirates ID, passport, employment contract, offer letter, salary certificates, final settlement notice, and any written communication from your employer about the gratuity.' },
        { '@type': 'HowToStep', position: 3, name: 'File the complaint via MOHRE digital channels', text: 'Visit mohre.gov.ae, use the MOHRE app (iOS/Android), call 800 60, or visit a MOHRE service centre in person. Submit the complaint with all supporting documents.' },
        { '@type': 'HowToStep', position: 4, name: 'Attend the amicable settlement meeting', text: 'MOHRE will schedule a meeting between you and your employer within 2 weeks. Bring all documents. Many cases are resolved at this stage.' },
        { '@type': 'HowToStep', position: 5, name: 'Escalate to labour court if needed', text: 'If amicable settlement fails, MOHRE will refer the case to the UAE labour court. The court process is free of charge for employees and typically takes 1–3 months for a judgment.' },
      ],
    },
  ],
}

export default function MohreComplaintPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › How to File a MOHRE Complaint
          </div>
          <h1>How to File a MOHRE Complaint for Unpaid Gratuity 2026</h1>
          <p>Employer not paying what you are owed? This step-by-step guide shows you exactly how to file. · 8 min read · <time dateTime="2026-04-12">Last updated: April 2026</time></p>
        </div>

        {/* Quick answer */}
        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>Your rights if gratuity is not paid</h2>
          <p style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
            Under Article 54 of Federal Decree-Law No. 33 of 2021, your employer must pay gratuity within 14 days of your last working day. Failure to do so is a legal violation you can report to MOHRE.
          </p>
          <p>Consequences for the employer include administrative fines, trade licence suspension, and restrictions on hiring new employees. The process is free for employees and does not require a lawyer.</p>
        </div>

        {/* When to file */}
        <div className="card">
          <div className="badge bg-teal">WHEN TO FILE</div>
          <h2>When should you file a MOHRE complaint?</h2>
          <p>File a complaint if any of the following apply to you after leaving employment:</p>
          <ul>
            <li>Employer has not paid gratuity within 14 days of your last working day</li>
            <li>Employer paid less gratuity than you are legally entitled to</li>
            <li>Employer deducted amounts from gratuity that are not legally permitted</li>
            <li>Employer claims you have forfeited gratuity because you resigned (incorrect under 2022 law)</li>
            <li>Employer has not paid outstanding salary, leave, or notice pay alongside gratuity</li>
          </ul>
          <div className="warn-box">
            <strong>Time limit:</strong> Labour claims in the UAE must be filed within one year of the date of the alleged violation. Do not delay — file as soon as possible after the 14-day payment deadline passes.
          </div>
        </div>

        {/* Documents needed */}
        <div className="card">
          <div className="badge bg-teal">STEP 1 — PREPARE DOCUMENTS</div>
          <h2>Documents to gather before filing</h2>
          <p>Having complete documentation strengthens your case. Gather as many of the following as possible:</p>
          <div className="two-col">
            <div className="mini-card">
              <h3>Essential documents</h3>
              <ul>
                <li>Original passport and copy</li>
                <li>Emirates ID (front and back)</li>
                <li>Employment contract or offer letter</li>
                <li>Latest salary certificate or payslips (3 months minimum)</li>
                <li>Termination letter or acceptance of resignation</li>
                <li>Final settlement notice (if any)</li>
              </ul>
            </div>
            <div className="mini-card">
              <h3>Supporting evidence</h3>
              <ul>
                <li>WhatsApp/email communication with employer about gratuity</li>
                <li>Bank statements showing salary history</li>
                <li>Labour card or work permit copy</li>
                <li>Any previous MOHRE filings or warnings</li>
                <li>Gratuity calculation showing the shortfall</li>
              </ul>
            </div>
          </div>
          <div className="info-box" style={{ marginTop: '0.75rem' }}>
            Tip: Use our <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>free gratuity calculator</Link> to produce an accurate calculation you can attach to your complaint as evidence of the correct amount.
          </div>
        </div>

        {/* How to file */}
        <div className="card">
          <div className="badge bg-teal">STEP 2 — FILE THE COMPLAINT</div>
          <h2>How to file your MOHRE complaint — 4 channels</h2>

          <div className="steps-3" style={{ marginTop: '1rem' }}>
            <div className="step-card">
              <div className="step-n">CHANNEL 01</div>
              <h4>Online — mohre.gov.ae</h4>
              <p>The fastest method. Visit the MOHRE website, select &quot;Labour Complaints&quot;, log in with your UAE Pass, and submit the complaint form with document uploads. Available 24/7.</p>
            </div>
            <div className="step-card">
              <div className="step-n">CHANNEL 02</div>
              <h4>MOHRE App</h4>
              <p>Download the official MOHRE app on iOS or Android. File a complaint under &quot;Labour Services&quot;. You can track the status of your case from the app.</p>
            </div>
            <div className="step-card">
              <div className="step-n">CHANNEL 03</div>
              <h4>Phone — 800 60</h4>
              <p>Call MOHRE on 800 60 (toll-free within UAE). Available Saturday to Thursday, 7:30am to 3:30pm. An operator will log your complaint and advise on next steps.</p>
            </div>
          </div>
          <div className="step-card" style={{ marginTop: '1rem' }}>
            <div className="step-n">CHANNEL 04</div>
            <h4>In person — MOHRE Service Centre</h4>
            <p>Visit any MOHRE service centre in Dubai, Abu Dhabi, Sharjah, or other emirates with your original documents. Staff will assist you in submitting the complaint form. Best for complex cases or if you are unable to access digital services.</p>
          </div>
        </div>

        {/* What happens next */}
        <div className="card">
          <div className="badge bg-teal">WHAT HAPPENS NEXT</div>
          <h2>The MOHRE complaint process — timeline and stages</h2>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Stage</th><th>Typical timeline</th><th>What happens</th></tr>
              </thead>
              <tbody>
                <tr><td>Complaint registered</td><td>Immediate</td><td>You receive a case reference number via SMS/email</td></tr>
                <tr><td>Employer notified</td><td>1–3 working days</td><td>MOHRE contacts your employer and requests their response</td></tr>
                <tr className="hl"><td>Amicable settlement meeting</td><td>Within 2 weeks</td><td>MOHRE mediator meets both parties to negotiate a settlement</td></tr>
                <tr><td>Case referred to labour court</td><td>If no settlement</td><td>MOHRE refers the case — no court fees for employees</td></tr>
                <tr className="hl"><td>Labour court judgment</td><td>1–3 months</td><td>Court issues a binding judgment ordering payment</td></tr>
                <tr><td>Enforcement</td><td>Post-judgment</td><td>If employer still does not pay, court can seize assets</td></tr>
              </tbody>
            </table>
          </div>
          <div className="success-box" style={{ marginTop: '1rem' }}>
            The majority of gratuity cases are resolved at the amicable settlement stage without going to court. Employers face significant penalties for non-compliance, which incentivises quick settlement.
          </div>
          <p style={{ marginTop: '1rem' }}>Before you file, verify the correct amount using the <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>UAE gratuity calculator</Link> — a precise figure strengthens your complaint.</p>
        </div>

        {/* Employer penalties */}
        <div className="card">
          <div className="badge bg-red">EMPLOYER PENALTIES</div>
          <h2>What happens to employers who do not pay gratuity?</h2>
          <p>Under UAE law, employers who fail to pay gratuity on time face escalating consequences:</p>
          <ul>
            <li><strong>Administrative fines</strong> — Monetary penalties issued by MOHRE for each violation</li>
            <li><strong>Trade licence suspension</strong> — MOHRE can recommend suspension of the company&apos;s trade licence</li>
            <li><strong>Hiring freeze</strong> — Restriction on recruiting new employees until the violation is resolved</li>
            <li><strong>Work permit ban</strong> — Block on issuing new work permits for the company</li>
            <li><strong>Court-ordered payment</strong> — Interest may be added to the original amount owed</li>
            <li><strong>Criminal liability</strong> — In extreme cases, company officers may face criminal prosecution</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions</h2>

          <h3 style={{ marginTop: '1rem' }}>Do I need a lawyer to file a MOHRE complaint?</h3>
          <p>No. MOHRE complaints can be filed directly by employees without any legal representation. The process is designed to be accessible. If the case goes to the labour court, you can still represent yourself, though a lawyer may be helpful for complex cases.</p>

          <h3 style={{ marginTop: '1.25rem' }}>What if I have already left the UAE?</h3>
          <p>You can still file a MOHRE complaint from abroad using the online portal or MOHRE app. If court proceedings are needed, you may need to appoint a legal representative in the UAE. Many cases settle without requiring your physical presence.</p>

          <h3 style={{ marginTop: '1.25rem' }}>My employer is threatening to not give me an NOC if I complain. Is this legal?</h3>
          <p>Under the 2022 UAE Labour Law, employers cannot use visa or NOC status as leverage against employees exercising their legal rights. Withholding an NOC as retaliation for filing a labour complaint is illegal. You can report this as a separate violation to MOHRE.</p>

          <h3 style={{ marginTop: '1.25rem' }}>كيف أقدم شكوى ضد صاحب العمل بسبب عدم دفع مكافأة نهاية الخدمة؟</h3>
          <p>يمكن تقديم الشكوى عبر موقع وزارة الموارد البشرية والتوطين mohre.gov.ae أو تطبيق MOHRE أو الاتصال على الرقم المجاني 800 60 أو زيارة أي مركز خدمة تابع للوزارة. احرص على توفير نسخ من العقد وبطاقة الهوية وشهادات الراتب عند تقديم الشكوى.</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--green) 0%, #1a5c2a 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Know exactly what you are owed before you file</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>Use the free calculator to produce an accurate gratuity breakdown — then attach it to your MOHRE complaint as evidence.</p>
          <Link href="/" style={{ display: 'inline-block', background: '#fff', color: 'var(--green-dark)', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Calculate my gratuity →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}
