import type { Metadata } from 'next'
import Link from 'next/link'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'
import { baseOpenGraph } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

const data: FreeZonePageData = {
  sources: [SOURCES.jafzaRules, SOURCES.uaeFreeZones, SOURCES.labourLaw, SOURCES.uaeEosb],
  answer: 'The Jebel Ali Free Zone Rules (ninth edition, 2023) give an employee with more than one year of service gratuity in line with the UAE labour law, calculated on basic salary: 21 days per year for the first 5 years and 30 days per year after that. The Rules do not set a separate payment deadline, so ask Jafza or your employer which date applies to you; the federal law says 14 days.',
  faqs: [
    { q: 'Does JAFZA follow the UAE Labour Law for gratuity?', a: 'For gratuity, yes. Rule 11.8.11 of the Jafza Rules says an employee whose service exceeds one year is entitled to gratuity in line with the UAE labour law, or more if the employment agreement says so, and rule 11.8.12 says it is calculated on basic salary. The federal formula is 21 days per year for years 1 to 5 and 30 days after that.' },
    { q: 'Is JAFZA gratuity paid if I resign?', a: 'Under the current law, gratuity is earned after one year of continuous service whether you resign or are terminated. Resignation no longer reduces the amount.' },
    { q: 'How fast must a JAFZA employer pay?', a: 'Rule 11.9.3 requires a signed statement of final dues on termination, and rule 11.9.4 requires proof that you were paid or cash lodged with Jafza. The Rules do not name a number of days. Rule 11.2.10 sends anything they do not cover to the federal law, where Article 53 says 14 days, but confirm with Jafza.' },
  ],
  name: 'Jebel Ali Free Zone',
  shortName: 'JAFZA',
  href: '/calculate-jafza-gratuity',
  badge: 'JAFZA · Jebel Ali Free Zone · Updated 2026',
  title: 'JAFZA Gratuity Calculator 2026',
  description: 'Calculate end of service gratuity for employees of JAFZA companies using the formula in the Jafza Free Zone Rules and the UAE labour law.',
  defaultSalary: '9000',
  defaultYears: '4',
  theme: 'linear-gradient(145deg, #0f766e 0%, #0ea5a3 48%, #22c55e 100%)',
  formulaNote: 'Jafza sponsors employees of the companies in the zone and publishes its own Free Zone Rules. The Rules require employment agreements to offer at least the minimum conditions of the UAE labour law and say gratuity follows that law. Use the standard 21/30 formula unless your written contract gives you a better benefit.',
  rules: [
    'Use the basic salary in the employment contract, not total salary with allowances.',
    'Rule 11.8.13 says gratuity is forfeited if you resign before completing one year of service.',
    'For years 1 to 5, gratuity is 21 days of basic salary per year.',
    'After year 5, gratuity is 30 days of basic salary per additional year.',
    'The total cannot exceed two years\' wage (Article 51(6)); this calculator caps at 24 months of basic salary.',
    'Your employer must give you a signed final dues statement on termination (rule 11.9.3).',
  ],
  examples: [
    { role: 'Logistics coordinator', salary: 7000, years: 3 },
    { role: 'Warehouse manager', salary: 14000, years: 7 },
    { role: 'Operations director', salary: 28000, years: 10 },
    { role: 'Admin executive', salary: 5000, years: 2 },
  ],
}

export const metadata: Metadata = {
  title: 'JAFZA Gratuity Calculator 2026: Jebel Ali Free Zone',
  description: data.description,
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-jafza-gratuity' },
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/calculate-jafza-gratuity' },
}

export default function Page() {
  return (
    <FreeZoneCalculatorPage data={data}>
      <div className="sec">
        <div className="card">
          <div className="badge bg-teal">WHICH LAW APPLIES</div>
          <h2>Which rules apply to a JAFZA employee</h2>
          <p>The u.ae portal says employees in free zones are generally not governed directly by the UAE Labour Law, that each free zone authority has its own employment rules, and that the terms of an employment contract must follow the Labour Law. In Jebel Ali that works through the Jafza Free Zone Rules. They require every employee to sign an employment agreement offering at least the minimum conditions of the UAE labour law (rule 11.5.5), and they say that anything the Rules do not cover is subject to Federal Decree-Law No. 33 of 2021 (rule 11.2.10).</p>
          <p>Jafza also acts as the sponsor for employees who hold a Jafza residence visa, and it stays involved in termination: it receives your final dues statement, can cancel your residence permit and tries to settle labour disputes before they go to court. So a JAFZA case is different from a mainland MOHRE case even though the gratuity formula is the same.</p>
        </div>

        <div className="card">
          <div className="badge bg-blue">WORKED EXAMPLE</div>
          <h2>JAFZA gratuity example: a warehouse supervisor</h2>
          <div className="example-box">
            <div className="ex-title">6 YEARS AT AED 9,000 BASIC</div>
            <div className="ex-line">Daily wage: AED 9,000 ÷ 30 = AED 300</div>
            <div className="ex-line">Years 1 to 5: 21 days × 5 = 105 days</div>
            <div className="ex-line">Year 6: 30 days</div>
            <div className="ex-line">Total: 135 days × AED 300</div>
            <div className="ex-total">Gratuity: AED 40,500</div>
          </div>
          <p>Housing, transport and other allowances are not part of the calculation. Use basic salary only, as rule 11.8.12 says. Allowances matter for other items on the settlement, such as notice pay. See <Link href="/how-to-calculate-gratuity-uae">how to calculate gratuity in the UAE</Link> for the full method and the cap.</p>
        </div>

        <div className="card">
          <div className="badge bg-amber">HOW JAFZA DIFFERS</div>
          <h2>How JAFZA differs from the mainland</h2>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Point</th><th>JAFZA (Free Zone Rules 2023)</th><th>Mainland (Decree-Law 33 of 2021)</th></tr></thead>
              <tbody>
                <tr><td>Sponsor</td><td>Jafza sponsors employees on a Jafza visa</td><td>The employer, through MOHRE work permits</td></tr>
                <tr><td>Gratuity</td><td>After more than one year of service, on basic salary, in line with the UAE labour law (rules 11.8.11 and 11.8.12)</td><td>One year of continuous service (Article 51)</td></tr>
                <tr><td>Resigning before one year</td><td>Gratuity is forfeited (rule 11.8.13)</td><td>No gratuity before one year</td></tr>
                <tr><td>Notice</td><td>At least one month in the agreement, full pay during notice (rule 11.8.3)</td><td>30 to 90 days (Article 43)</td></tr>
                <tr><td>Probation notice</td><td>Employer 14 days, employee 30 days or 14 days if leaving the UAE (rule 11.8.1)</td><td>Employer 14 days; employee 14 days if leaving the UAE, or one month if moving to another UAE employer (Article 9)</td></tr>
                <tr><td>Flight home</td><td>Air fare to the nearest international airport at expiry or employer termination, but not after dismissal under Article 44 or a resignation outside Article 45 (rule 11.8.15)</td><td>Article 13(12)</td></tr>
                <tr><td>Final dues</td><td>Signed statement of final dues, copy to Jafza (rule 11.9.3)</td><td>Payment within 14 days (Article 53)</td></tr>
                <tr><td>Transfer to another JAFZA company</td><td>Service is not continuous unless Jafza approves in writing (rule 11.8.10)</td><td>Depends on the contract</td></tr>
                <tr><td>Disputes</td><td>Jafza tries to settle first, then Dubai Courts if a party asks (rule 11.10)</td><td>MOHRE, then the labour courts</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="badge bg-teal">BEFORE YOU SIGN</div>
          <h2>Checklist for a JAFZA final settlement</h2>
          <ul>
            <li>Read the final dues statement line by line. Rule 11.9.3 says it must show enough detail to see how each amount was calculated, and it is signed by you and by the company.</li>
            <li>Check your gratuity against the example above, using basic salary and your full service period.</li>
            <li>Ask whether the air fare applies to your type of exit, using rule 11.8.15.</li>
            <li>Ask for a service certificate. Rule 11.8.17 says it is free of charge and shows your service period, job title and final pay.</li>
            <li>Note that the company must cancel your residence permit, access pass and employment card within 30 days of your last day (rule 11.9.6).</li>
            <li>If something is missing, raise it with the company in writing first, then with Jafza, which handles labour disputes in the first instance.</li>
          </ul>
          <p>Compare other zones on the <Link href="/gratuity-calculator">gratuity calculators hub</Link> or run the full settlement in the <Link href="/final-settlement-calculator-uae">final settlement calculator</Link>.</p>
        </div>
      </div>
    </FreeZoneCalculatorPage>
  )
}
