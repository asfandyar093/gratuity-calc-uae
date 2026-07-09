// Indicative AED exchange rates. Same static-rate-with-disclaimer approach used
// across the nationality guide pages (see ExpatCurrencyCalculator usage) — this
// site has no live FX API, so rates are hardcoded and dated.
export const RATES_AS_OF = 'July 2026'

export interface CurrencyDef {
  code: string
  name: string
  symbol: string
  /** 1 AED = `perAed` units of this currency */
  perAed: number
  flag: string
}

export const CURRENCIES: CurrencyDef[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', perAed: 0.2723, flag: '🇺🇸' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', perAed: 23.2, flag: '🇮🇳' },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', perAed: 77.5, flag: '🇵🇰' },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱', perAed: 15.8, flag: '🇵🇭' },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', perAed: 33.56, flag: '🇧🇩' },
  { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs', perAed: 91.4, flag: '🇱🇰' },
  { code: 'NPR', name: 'Nepali Rupee', symbol: '₨', perAed: 41.46, flag: '🇳🇵' },
  { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', perAed: 13.36, flag: '🇪🇬' },
  { code: 'GBP', name: 'British Pound', symbol: '£', perAed: 0.2035, flag: '🇬🇧' },
  { code: 'EUR', name: 'Euro', symbol: '€', perAed: 0.2385, flag: '🇪🇺' },
]

export function convertFromAed(amountAed: number, code: string): number {
  const c = CURRENCIES.find((x) => x.code === code)
  if (!c) return 0
  return amountAed * c.perAed
}

export function convertToAed(amount: number, code: string): number {
  const c = CURRENCIES.find((x) => x.code === code)
  if (!c) return 0
  return amount / c.perAed
}
