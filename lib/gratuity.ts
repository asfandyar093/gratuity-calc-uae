// UAE private-sector gratuity, Article 51 of Federal Decree-Law No. 33 of 2021:
// 21 days' basic wage per year for the first 5 years, 30 days per year after that,
// part years pro-rated once 1 year is completed. Daily wage = monthly basic ÷ 30
// (Article 67 deems a month to be 30 days). Article 51(6) caps the total at
// "two years' wage"; we apply 24 × monthly basic as a conservative cap.

export function gratuityDays(years: number): number {
  if (years < 1) return 0
  return years <= 5 ? 21 * years : 21 * 5 + 30 * (years - 5)
}

export function gratuityAmount(monthlyBasic: number, years: number) {
  const daily = monthlyBasic / 30
  const days = gratuityDays(years)
  const raw = daily * days
  const cap = monthlyBasic * 24
  return { daily, days, raw, cap, capped: raw > cap, amount: Math.min(raw, cap) }
}

export function formatAed(n: number, decimals = 0): string {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
