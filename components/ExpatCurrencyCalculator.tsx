'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Props {
  nationality: string
  currency: string
  currencyCode: string
  currencySymbol: string
  exchangeRate: number
  rateAsOf: string
  defaultSalary: string
  defaultYears: string
}

function fmtAED(value: number) {
  return 'AED ' + value.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function ExpatCurrencyCalculator({
  nationality,
  currency,
  currencyCode,
  currencySymbol,
  exchangeRate,
  rateAsOf,
  defaultSalary,
  defaultYears,
}: Props) {
  const [salary, setSalary] = useState(defaultSalary)
  const [years, setYears] = useState(defaultYears)
  const [result, setResult] = useState<{ gratuity: number; converted: number; days: number } | null>(null)

  function calculate() {
    const sal = parseFloat(salary)
    const yrs = parseFloat(years)
    if (!sal || sal <= 0 || !yrs || yrs <= 0) {
      setResult(null)
      return
    }
    const daily = sal / 30
    const days = yrs <= 5 ? 21 * yrs : 21 * 5 + 30 * (yrs - 5)
    const capAmount = sal * 24
    const gratuity = Math.min(daily * days, capAmount)
    setResult({ gratuity, converted: gratuity * exchangeRate, days: Math.round(days) })
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>🇦🇪 → {currencyCode} Gratuity Converter for {nationality} Workers</h2>
          <p>Estimate your UAE gratuity in AED, then see it converted to {currency}</p>
        </div>
        <span className="calc-free-badge">✓ FREE TOOL</span>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>💰 Monthly Basic Salary (AED)</label>
            <input type="number" placeholder="e.g. 8,000" value={salary} onChange={e => setSalary(e.target.value)} min="0" />
          </div>
          <div className="field">
            <label>📅 Years of Service</label>
            <input type="number" placeholder="e.g. 4" value={years} onChange={e => setYears(e.target.value)} min="0" step="0.5" />
          </div>
          <button className="btn-go" onClick={calculate}>Convert to {currencyCode} ▶</button>
        </div>
        <div className="calc-right">
          {result ? (
            <div className="result-wrap on">
              <div className="res-top">
                <div className="res-lbl">Estimated Gratuity in AED</div>
                <div className="res-amt">{fmtAED(result.gratuity)}</div>
                <div className="res-sub">{result.days} entitled days of basic salary</div>
              </div>
              <div className="bdown">
                <div className="br"><span className="bl">Estimated value in {currencyCode}</span><span className="bv">{currencySymbol}{result.converted.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span></div>
                <div className="br"><span className="bl">Indicative rate used</span><span className="bv">1 AED = {exchangeRate} {currencyCode}</span></div>
              </div>
              <div className="res-note">⚠️ Rate is indicative only (checked {rateAsOf}) and moves daily. Confirm the live rate with your bank or exchange house before transferring money.</div>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--gray-100)', border: '2px solid var(--gray-200)', borderRadius: '12px', padding: '12px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', color: 'var(--text)', marginTop: '0.25rem' }}>
                🔄 Use the full UAE Gratuity Calculator
              </Link>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">💱</div>
              <p>Enter your basic salary and years of service<br />to see your gratuity in AED and {currencyCode}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
