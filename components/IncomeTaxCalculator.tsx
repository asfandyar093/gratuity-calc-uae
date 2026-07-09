'use client'
import { useState } from 'react'

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function fmtLocal(n: number, symbol: string) {
  return symbol + ' ' + Math.round(n).toLocaleString('en-US')
}

type CountryKey = 'none' | 'india' | 'uk' | 'philippines' | 'pakistan'

interface Bracket {
  upTo: number // cumulative upper bound of this bracket in local currency (Infinity for top bracket)
  rate: number // marginal rate applied to income within this bracket, e.g. 0.05 = 5%
}

interface CountryConfig {
  label: string
  currency: string
  aedToLocal: number // multiply an AED amount by this to get the local-currency amount
  brackets: Bracket[]
}

const countries: Record<Exclude<CountryKey, 'none'>, CountryConfig> = {
  india: {
    label: 'India',
    currency: '₹',
    aedToLocal: 23.2,
    brackets: [
      { upTo: 300000, rate: 0 },
      { upTo: 600000, rate: 0.05 },
      { upTo: 900000, rate: 0.10 },
      { upTo: 1200000, rate: 0.15 },
      { upTo: 1500000, rate: 0.20 },
      { upTo: Infinity, rate: 0.30 },
    ],
  },
  uk: {
    label: 'United Kingdom',
    currency: '£',
    aedToLocal: 0.2035,
    brackets: [
      { upTo: 12570, rate: 0 },
      { upTo: 50270, rate: 0.20 },
      { upTo: 125140, rate: 0.40 },
      { upTo: Infinity, rate: 0.45 },
    ],
  },
  philippines: {
    label: 'Philippines',
    currency: '₱',
    aedToLocal: 15.8,
    brackets: [
      { upTo: 250000, rate: 0 },
      { upTo: 400000, rate: 0.15 },
      { upTo: 800000, rate: 0.20 },
      { upTo: 2000000, rate: 0.25 },
      { upTo: Infinity, rate: 0.30 },
    ],
  },
  pakistan: {
    label: 'Pakistan',
    currency: 'Rs',
    aedToLocal: 77.5,
    brackets: [
      { upTo: 600000, rate: 0 },
      { upTo: 1200000, rate: 0.05 },
      { upTo: 2200000, rate: 0.15 },
      { upTo: 3200000, rate: 0.25 },
      { upTo: Infinity, rate: 0.30 },
    ],
  },
}

/** Marginal-bracket tax on an annual local-currency income given a set of cumulative brackets. */
function marginalBracketTax(annualLocalIncome: number, brackets: Bracket[]): number {
  let tax = 0
  let lowerBound = 0
  for (const bracket of brackets) {
    if (annualLocalIncome <= lowerBound) break
    const taxableInThisBracket = Math.min(annualLocalIncome, bracket.upTo) - lowerBound
    if (taxableInThisBracket > 0) tax += taxableInThisBracket * bracket.rate
    lowerBound = bracket.upTo
  }
  return tax
}

interface Result {
  aedAnnual: number
  aedMonthly: number
  country: CountryKey
  countryLabel?: string
  currencySymbol?: string
  localAnnualIncome?: number
  localTax?: number
  aedTaxEquivalent?: number
  aedKeptAbroad?: number
}

export default function IncomeTaxCalculator() {
  const [amount, setAmount] = useState('15000')
  const [period, setPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [country, setCountry] = useState<CountryKey>('india')
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState('')

  function calculate() {
    const a = parseFloat(amount)
    if (!a || a <= 0) {
      setError('Please enter your salary amount.')
      setResult(null)
      return
    }
    setError('')

    const aedAnnual = period === 'monthly' ? a * 12 : a
    const aedMonthly = aedAnnual / 12

    if (country === 'none') {
      setResult({ aedAnnual, aedMonthly, country })
      return
    }

    const cfg = countries[country]
    const localAnnualIncome = aedAnnual * cfg.aedToLocal
    const localTax = marginalBracketTax(localAnnualIncome, cfg.brackets)
    const aedTaxEquivalent = localTax / cfg.aedToLocal
    const aedKeptAbroad = aedAnnual - aedTaxEquivalent

    setResult({
      aedAnnual,
      aedMonthly,
      country,
      countryLabel: cfg.label,
      currencySymbol: cfg.currency,
      localAnnualIncome,
      localTax,
      aedTaxEquivalent,
      aedKeptAbroad,
    })
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>🇦🇪 UAE Income Tax Calculator</h2>
          <p>See your full take-home pay — the UAE charges 0% personal income tax on salaries</p>
        </div>
        <span className="calc-free-badge">✓ FREE TOOL</span>
      </div>

      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>💰 Gross Salary (AED)</label>
            <input
              type="number"
              placeholder="e.g. 15,000"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              min="0"
            />
          </div>

          <div className="field">
            <label>📅 Salary Period</label>
            <select value={period} onChange={e => setPeriod(e.target.value as 'monthly' | 'annual')}>
              <option value="monthly">Monthly</option>
              <option value="annual">Annual</option>
            </select>
          </div>

          <div className="field">
            <label>🌍 Compare to</label>
            <select value={country} onChange={e => setCountry(e.target.value as CountryKey)}>
              <option value="none">None (just show UAE)</option>
              <option value="india">India</option>
              <option value="uk">United Kingdom</option>
              <option value="philippines">Philippines</option>
              <option value="pakistan">Pakistan</option>
            </select>
          </div>

          <button className="btn-go" onClick={calculate}>Calculate Take-Home Pay ▶</button>
          {error && <div className="err on">{error}</div>}
        </div>

        <div className="calc-right">
          {result ? (
            <div className="result-wrap on">
              <div className="res-top">
                <div className="res-lbl">🇦🇪 Your full take-home pay — UAE has 0% personal income tax</div>
                <div className="res-amt">{fmt(result.aedAnnual)} / year</div>
                <div className="res-sub">{fmt(result.aedMonthly)} / month · nothing withheld for income tax</div>
              </div>

              <div className="bdown">
                <div className="br">
                  <span className="bl">✓ Your UAE take-home (0% tax)</span>
                  <span className="bv" style={{ color: 'var(--green-dark)' }}>{fmt(result.aedAnnual)}</span>
                </div>

                {result.country !== 'none' && (
                  <>
                    <div className="br">
                      <span className="bl">Illustrative {result.countryLabel} income tax at this salary</span>
                      <span className="bv">{fmt(result.aedTaxEquivalent ?? 0)}</span>
                    </div>
                    <div className="br">
                      <span className="bl">What you&apos;d keep in {result.countryLabel}</span>
                      <span className="bv">{fmt(result.aedKeptAbroad ?? 0)}</span>
                    </div>
                    <div className="br" style={{ background: 'var(--green-light)', fontWeight: 900 }}>
                      <span className="bl" style={{ fontWeight: 900, color: 'var(--green-dark)' }}>💵 Extra you keep by working in the UAE</span>
                      <span className="bv" style={{ fontSize: '18px', color: 'var(--green-dark)' }}>{fmt(result.aedTaxEquivalent ?? 0)}</span>
                    </div>
                  </>
                )}
              </div>

              {result.country !== 'none' && result.currencySymbol !== undefined && (
                <div className="res-note" style={{ borderLeftColor: 'var(--gray-400)' }}>
                  📊 Equivalent annual income used for the {result.countryLabel} estimate: {fmtLocal(result.localAnnualIncome ?? 0, result.currencySymbol)} → illustrative tax of {fmtLocal(result.localTax ?? 0, result.currencySymbol)}.
                </div>
              )}

              <div className="res-note">⚠️ Illustrative estimate only using simplified 2026 public tax brackets — ignores personal allowances, deductions, social security, and local surcharges. Not tax advice; consult a qualified tax advisor for your exact home-country liability, including any NRI/non-resident rules that may apply.</div>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🇦🇪</div>
              <p>Enter your gross salary to see<br />your full UAE take-home pay<br />and an illustrative home-country comparison</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
