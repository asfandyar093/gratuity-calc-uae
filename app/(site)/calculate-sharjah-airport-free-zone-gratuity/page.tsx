import type { Metadata } from 'next'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'
import { baseOpenGraph } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

const data: FreeZonePageData = {
  sources: [SOURCES.uaeFreeZones, SOURCES.labourLaw, SOURCES.uaeEosb],
  warning: 'The u.ae portal says each free zone authority has its own employment rules, and that contracts must follow the Labour Law. No SAIF Zone gratuity rule was found in published official sources, so treat the result as a benchmark under the federal formula and check your contract and the SAIF Zone Authority.',
  name: 'Sharjah Airport International Free Zone',
  shortName: 'Sharjah Airport Free Zone',
  href: '/calculate-sharjah-airport-free-zone-gratuity',
  badge: 'SAIF Zone · Sharjah Airport Free Zone · Updated 2026',
  title: 'Sharjah Airport Free Zone Gratuity Calculator 2026',
  description: 'Calculate gratuity for Sharjah Airport Free Zone employees using the standard UAE private-sector 21/30 formula.',
  defaultSalary: '8000',
  defaultYears: '3',
  theme: 'linear-gradient(145deg, #991b1b 0%, #ce1126 48%, #15803d 100%)',
  formulaNote: 'This calculator applies the federal private sector formula (Article 51 of Federal Decree-Law No. 33 of 2021) to your basic salary: 21 days a year for the first 5 years and 30 days a year after that. Free zone employment contracts must follow the Labour Law, but your zone authority may have its own rules, so confirm with your employer.',
  rules: [
    'Enter monthly basic salary only. Allowances are excluded.',
    'One full year of continuous service is required before gratuity is due under the federal formula.',
    'Years 1 to 5 accrue at 21 days of basic salary per year.',
    'Service after year 5 accrues at 30 days of basic salary per additional year.',
    'The total cannot exceed two years\' wage (Article 51(6)).',
    'Dues are payable within 14 days of the contract ending (Article 53).',
  ],
  examples: [
    { role: 'Trading company admin', salary: 5500, years: 2 },
    { role: 'Logistics supervisor', salary: 9000, years: 5 },
    { role: 'Export manager', salary: 16000, years: 8 },
    { role: 'Operations head', salary: 26000, years: 10 },
  ],
}

export const metadata: Metadata = {
  title: 'SAIF Zone Gratuity Calculator 2026 | Sharjah Airport',
  description: data.description,
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-sharjah-airport-free-zone-gratuity' },
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/calculate-sharjah-airport-free-zone-gratuity' },
}

export default function Page() {
  return <FreeZoneCalculatorPage data={data} />
}
