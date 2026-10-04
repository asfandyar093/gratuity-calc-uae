import type { Metadata } from 'next'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'
import { baseOpenGraph } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

const data: FreeZonePageData = {
  sources: [SOURCES.labourLaw, SOURCES.uaeEosb],
  answer: 'JAFZA companies follow the UAE Labour Law (Federal Decree-Law No. 33 of 2021) for gratuity: 21 days of basic salary per year for the first 5 years, 30 days per year after that, capped at two years\' wage and payable within 14 days of the contract ending.',
  faqs: [
    { q: 'Does JAFZA follow the UAE Labour Law for gratuity?', a: 'Yes. JAFZA employers apply the federal end-of-service formula in Article 51 of Federal Decree-Law No. 33 of 2021: 21 days of basic salary per year for years 1 to 5 and 30 days per year after that.' },
    { q: 'Is JAFZA gratuity paid if I resign?', a: 'Under the current law, gratuity is earned after one year of continuous service whether you resign or are terminated. Resignation no longer reduces the amount.' },
    { q: 'How fast must a JAFZA employer pay?', a: 'Article 53 requires all dues, including gratuity, to be paid within 14 days of the contract ending.' },
  ],
  name: 'Jebel Ali Free Zone',
  shortName: 'JAFZA',
  href: '/calculate-jafza-gratuity',
  badge: 'JAFZA · Jebel Ali Free Zone · Updated 2026',
  title: 'JAFZA Gratuity Calculator 2026',
  description: 'Calculate end-of-service gratuity for employees of JAFZA companies using the standard UAE private-sector formula and a downloadable PDF result.',
  defaultSalary: '9000',
  defaultYears: '4',
  theme: 'linear-gradient(145deg, #0f766e 0%, #0ea5a3 48%, #22c55e 100%)',
  formulaNote: 'JAFZA-registered companies generally follow UAE labour law for end-of-service benefits. Use the standard 21/30 gratuity formula unless your written contract or a valid savings scheme gives you a better benefit.',
  rules: [
    'Use the basic salary in the employment contract, not total salary with allowances.',
    'Employees with less than one year of continuous service usually do not receive gratuity.',
    'For years 1 to 5, gratuity is 21 days of basic salary per year.',
    'After year 5, gratuity is 30 days of basic salary per additional year.',
    'The total cannot exceed two years\' wage (Article 51(6)); this calculator caps at 24 months of basic salary.',
    'Your employer must pay within 14 days of the contract ending (Article 53).',
  ],
  examples: [
    { role: 'Logistics coordinator', salary: 7000, years: 3 },
    { role: 'Warehouse manager', salary: 14000, years: 7 },
    { role: 'Operations director', salary: 28000, years: 10 },
    { role: 'Admin executive', salary: 5000, years: 2 },
  ],
}

export const metadata: Metadata = {
  title: 'JAFZA Gratuity Calculator 2026 | Jebel Ali Free Zone',
  description: data.description,
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-jafza-gratuity' },
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/calculate-jafza-gratuity' },
}

export default function Page() {
  return <FreeZoneCalculatorPage data={data} />
}
