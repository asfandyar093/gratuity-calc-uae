import type { Metadata } from 'next'
import Link from 'next/link'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'
import { baseOpenGraph } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

const data: FreeZonePageData = {
  sources: [SOURCES.adgmFaq, SOURCES.adgmGuidance],
  faqs: [
    { q: 'How is ADGM gratuity calculated?', a: 'Under section 61 of the ADGM Employment Regulations 2024, you get 21 days of basic wage per year for the first five years and 30 days per year after that, once you have one year of continuous service. The daily rate is the annual basic wage divided by 365.' },
    { q: 'Is there a two-year cap on ADGM gratuity?', a: 'Section 61 does not contain the two-year cap from the federal Labour Law. This calculator applies no cap for ADGM.' },
    { q: 'When must an ADGM employer pay gratuity?', a: 'Within 21 calendar days after employment ends, according to the ADGM EAO guidance.' },
    { q: 'What if my basic salary is less than half my package?', a: 'ADGM treats basic wage as at least 50% of total wages for gratuity. Enter your total monthly wage in the calculator and it applies the 50% floor automatically.' },
  ],
  name: 'Abu Dhabi Global Market',
  shortName: 'ADGM',
  href: '/calculate-adgm-gratuity',
  badge: 'ADGM · Abu Dhabi Global Market · Updated 2026',
  title: 'ADGM Gratuity Calculator 2026',
  description: 'Calculate ADGM gratuity under the ADGM Employment Regulations 2024: 21 days per year for the first five years, 30 days after, using annual basic wage ÷ 365.',
  defaultSalary: '22000',
  defaultYears: '4',
  theme: 'linear-gradient(145deg, #7c2d12 0%, #b45309 48%, #0f766e 100%)',
  method: 'adgm',
  answer: 'ADGM gratuity = 21 days of basic wage per year for the first 5 years + 30 days per year after that, once you complete one year of continuous service. ADGM divides the annual basic wage by 365 to get the daily rate, treats basic wage as at least 50% of total wages, and requires payment within 21 calendar days of employment ending.',
  formulaNote: 'ADGM entities follow the ADGM Employment Regulations 2024, not the federal Labour Law. Section 61 sets the gratuity, and the ADGM Employment Affairs Office (EAO) FAQs show how to calculate it. This calculator applies the ADGM method: annual basic wage ÷ 365 for the daily rate, a minimum basic wage of 50% of total wages, and no two-year cap.',
  warning: 'ADGM is not a MOHRE case. Disputes go through ADGM processes (the ADGM Courts), not the MOHRE complaint route used for mainland employers.',
  rules: [
    'You need at least one year of continuous service with the employer.',
    '21 days of basic wage for each of the first five years, then 30 days for each year after that.',
    'Daily rate = annual basic wage ÷ 365 (ADGM EAO FAQs). Example: AED 100,000 annual basic for 3 years = AED 17,260.',
    'Basic wage is treated as at least 50% of total wages, even if the contract states a lower figure.',
    'Part years are paid pro rata after the first year, and gratuity is due whatever the reason employment ends.',
    'Section 61 does not apply the federal two-year cap.',
    'Gratuity and other final payments are due within 21 calendar days after employment ends.',
  ],
  examples: [
    { role: 'Investment associate', salary: 24000, years: 3 },
    { role: 'Risk manager', salary: 36000, years: 6 },
    { role: 'Corporate services officer', salary: 16000, years: 4 },
    { role: 'Senior executive', salary: 60000, years: 9 },
  ],
}

export const metadata: Metadata = {
  title: 'ADGM Gratuity Calculator 2026: End of Service in ADGM',
  description: 'ADGM gratuity calculator 2026: 21/30 days per year, annual basic ÷ 365, 50% basic floor, no two-year cap, paid within 21 days (ADGM Regulations 2024).',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-adgm-gratuity' },
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/calculate-adgm-gratuity' },
}

export default function Page() {
  return (
    <FreeZoneCalculatorPage data={data}>
      <div className="sec">
        <div className="card">
          <div className="badge bg-teal">WORKED EXAMPLES</div>
          <h2>ADGM gratuity worked examples, step by step</h2>
          <p>The first example is the one the ADGM Employment Affairs Office (EAO) publishes in its FAQs on the 2024 Regulations. The others use the same method with different numbers.</p>
          <div className="example-box">
            <div className="ex-title">EXAMPLE 1: THE EAO EXAMPLE, 3 YEARS</div>
            <div className="ex-line">Annual basic wage at termination: AED 100,000</div>
            <div className="ex-line">Daily rate: AED 100,000 ÷ 365 = AED 273.97</div>
            <div className="ex-line">21 days: AED 273.97 × 21 = AED 5,753 for one year</div>
            <div className="ex-line">3 years: AED 5,753 × 3</div>
            <div className="ex-total">Gratuity: AED 17,260</div>
          </div>
          <div className="example-box">
            <div className="ex-title">EXAMPLE 2: 7 YEARS, AED 10,000 A MONTH BASIC</div>
            <div className="ex-line">Annual basic wage: AED 10,000 × 12 = AED 120,000</div>
            <div className="ex-line">Daily rate: AED 120,000 ÷ 365 = AED 328.77</div>
            <div className="ex-line">Years 1 to 5: 21 days × 5 = 105 days</div>
            <div className="ex-line">Years 6 and 7: 30 days × 2 = 60 days</div>
            <div className="ex-line">Total days: 165, so AED 328.77 × 165</div>
            <div className="ex-total">Gratuity: AED 54,247 (no cap applied)</div>
          </div>
          <div className="example-box">
            <div className="ex-title">EXAMPLE 3: THE 50% BASIC FLOOR, 4 YEARS</div>
            <div className="ex-line">Contract basic: AED 2,000 a month. Total wage: AED 5,000 a month (AED 60,000 a year)</div>
            <div className="ex-line">Basic is below 50% of annual wages, so the EAO says to use AED 30,000 a year</div>
            <div className="ex-line">Daily rate: AED 30,000 ÷ 365 = AED 82.19</div>
            <div className="ex-line">4 years × 21 days = 84 days, so AED 82.19 × 84</div>
            <div className="ex-total">Gratuity: AED 6,904</div>
          </div>
          <p>The same Example 2 salary under the federal formula (monthly basic ÷ 30) gives AED 55,000 for 7 years, so the two methods land close together. The gap comes from dividing by 365 instead of 30, and from the ADGM rule that has no two year cap. Enter your own figures in the calculator above, with total monthly wage so that the 50% floor is applied.</p>
        </div>

        <div className="card">
          <div className="badge bg-blue">ADGM VS MAINLAND</div>
          <h2>How ADGM differs from the mainland rules</h2>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Point</th><th>ADGM (Regulations 2024, section 61)</th><th>Mainland (Decree-Law 33 of 2021)</th></tr></thead>
              <tbody>
                <tr><td>Daily rate</td><td>Annual basic wage ÷ 365</td><td>Monthly basic wage ÷ 30</td></tr>
                <tr><td>Basic wage floor</td><td>At least 50% of annual wages</td><td>Basic wage as stated in the contract</td></tr>
                <tr><td>Two year cap</td><td>Not in section 61</td><td>Article 51(6)</td></tr>
                <tr><td>Eligibility</td><td>One year of continuous service, paid whatever the reason for termination, including termination for cause</td><td>One year of continuous service for foreign workers (Article 51(1))</td></tr>
                <tr><td>Payment deadline</td><td>21 calendar days after the last day</td><td>14 days after the contract ends (Article 53)</td></tr>
                <tr><td>UAE and GCC nationals</td><td>Not eligible if enrolled in the federal pension scheme, unless the pension authority approved opting out in writing</td><td>Covered by the pensions law</td></tr>
              </tbody>
            </table>
          </div>
          <p>An employer may offer a pension or savings scheme in writing as an alternative to gratuity. If you choose it, you are not entitled to gratuity unless you agreed otherwise with the employer. Disputes go through ADGM bodies, not MOHRE. For the full list of zones and worker types, see the <Link href="/gratuity-calculator">gratuity calculators hub</Link>. DIFC works differently again: read <Link href="/blog/difc-dews-gratuity-explained">what is DEWS</Link>.</p>
        </div>
      </div>
    </FreeZoneCalculatorPage>
  )
}
