import type { Metadata } from 'next'
import Link from 'next/link'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'
import { baseOpenGraph } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

const data: FreeZonePageData = {
  name: 'DMCC (Dubai Multi Commodities Centre)',
  shortName: 'DMCC',
  href: '/calculate-dmcc-gratuity',
  badge: 'DMCC · JLT · Uptown Dubai · Updated 2026',
  title: 'DMCC Gratuity Calculator 2026',
  description: 'Calculate DMCC end-of-service gratuity (EOSB) the way the DMCC guide does: monthly basic × 12 ÷ 365 for the daily rate, 21 or 30 days per year, capped at two years\u2019 pay.',
  defaultSalary: '10000',
  defaultYears: '4.25',
  theme: 'linear-gradient(145deg, #1e3a8a 0%, #2563eb 48%, #0891b2 100%)',
  method: 'dmcc',
  answer: 'DMCC companies follow the UAE Labour Law for end-of-service benefits. DMCC\u2019s official EOSB guide works out the daily wage as monthly basic salary × 12 ÷ 365, then pays 21 days per year for the first 5 years and 30 days per year after that, with a total cap of two years\u2019 pay. Example from the guide: AED 10,000 basic for 4 years 3 months comes to about AED 29,342 (the guide shows AED 29,342.72 because it rounds the daily wage to AED 328.77).',
  formulaNote: 'DMCC published an End of Service Benefit (EOSB) Calculation guide (version 3, December 2022) that applies Federal Decree-Law No. 33 of 2021. The main difference from many online calculators is the daily rate: DMCC uses basic × 12 ÷ 365 rather than basic ÷ 30, which gives a slightly lower figure.',
  rules: [
    'You qualify after one year of continuous service, whether you resign or your employer ends the contract.',
    'Daily basic wage = monthly basic salary × 12 ÷ 365 (DMCC EOSB guide).',
    '21 days of basic wage per year for the first five years, 30 days per year after that, with part years pro rata.',
    'The total cannot exceed two years\u2019 pay.',
    'For part-time employees, the guide pro-rates gratuity by hours worked.',
    'Dues must be paid within 14 days of the contract ending (Article 53 of the Labour Law).',
  ],
  examples: [
    { role: 'DMCC guide example: 4 years 3 months', salary: 10000, years: 4.25 },
    { role: 'DMCC guide example: 7 years', salary: 10000, years: 7 },
    { role: 'Trading analyst', salary: 15000, years: 3 },
    { role: 'Operations manager', salary: 25000, years: 10 },
  ],
  sources: [SOURCES.dmccEosb, SOURCES.labourLaw, SOURCES.uaeEosb],
  faqs: [
    { q: 'How does DMCC calculate gratuity?', a: 'DMCC\u2019s EOSB guide uses monthly basic × 12 ÷ 365 as the daily wage, multiplied by 21 days per year for the first five years and 30 days per year after that, capped at two years\u2019 pay.' },
    { q: 'Do I get DMCC gratuity if I resign?', a: 'Yes. The DMCC guide says EOSB applies whether the employee resigns or the employer terminates, once one year of continuous service is complete.' },
    { q: 'Why is the DMCC figure lower than other calculators?', a: 'Many calculators divide monthly basic by 30. DMCC divides annual basic by 365, so the daily rate is about 1.4% lower. Use the method in your employer\u2019s policy if it is different.' },
    { q: 'When must a DMCC employer pay gratuity?', a: 'Within 14 days of the contract ending, under Article 53 of Federal Decree-Law No. 33 of 2021.' },
  ],
}

export const metadata: Metadata = {
  title: 'DMCC Gratuity Calculator 2026 | End of Service (EOSB)',
  description: 'Free DMCC gratuity calculator 2026 using the DMCC EOSB guide method (basic × 12 ÷ 365, 21/30 days per year, two-year cap). Worked examples and sources.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-dmcc-gratuity' },
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/calculate-dmcc-gratuity' },
}

export default function Page() {
  return (
    <FreeZoneCalculatorPage data={data}>
      <div className="sec">
        <div className="card">
          <h2>DMCC vs mainland gratuity</h2>
          <p>
            The entitlement (21/30 days, one-year minimum, two-year cap) is the same as on the mainland because DMCC follows the federal law. Only the daily-rate convention is different. Compare both on the <Link href="/">UAE gratuity calculator</Link>, check every year in the <Link href="/gratuity-by-years-of-service">gratuity by years of service table</Link>, and add leave salary and notice pay with the <Link href="/final-settlement-calculator-uae">final settlement calculator</Link>.
          </p>
        </div>
      </div>
    </FreeZoneCalculatorPage>
  )
}
