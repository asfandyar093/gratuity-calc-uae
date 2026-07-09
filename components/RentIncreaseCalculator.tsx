'use client'

import { useState } from 'react'

function fmt(n: number) {
  return 'AED ' + Math.round(n).toLocaleString('en-AE')
}

interface Result {
  currentRent: number
  marketRent: number
  percentBelowMarket: number
  allowedPercent: number
  newMaxRent: number
  maxIncreaseAed: number
}

// Official Dubai Land Department (RERA) rental increase brackets
function allowedIncreasePercent(percentBelowMarket: number): number {
  if (percentBelowMarket <= 10) return 0
  if (percentBelowMarket <= 20) return 5
  if (percentBelowMarket <= 30) return 10
  if (percentBelowMarket <= 40) return 15
  return 20
}

function calculate(currentRentInput: number, marketRentInput: number): Result {
  const currentRent = Math.max(0, currentRentInput)
  const marketRent = Math.max(0, marketRentInput)

  const rawPercentBelow = marketRent > 0 ? ((marketRent - currentRent) / marketRent) * 100 : 0
  const percentBelowMarket = Math.max(0, rawPercentBelow)
  const allowedPercent = allowedIncreasePercent(percentBelowMarket)
  const newMaxRent = currentRent * (1 + allowedPercent / 100)
  const maxIncreaseAed = newMaxRent - currentRent

  return { currentRent, marketRent, percentBelowMarket, allowedPercent, newMaxRent, maxIncreaseAed }
}

export default function RentIncreaseCalculator() {
  const [currentRent, setCurrentRent] = useState('70000')
  const [marketRent, setMarketRent] = useState('85000')
  const [result, setResult] = useState<Result | null>(null)

  function handleCalculate() {
    setResult(calculate(parseFloat(currentRent) || 0, parseFloat(marketRent) || 0))
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>🏠 Dubai Rent Increase Calculator (RERA)</h2>
          <p>Check the legal maximum rent increase your landlord can apply this renewal</p>
        </div>
        <span className="calc-free-badge">✓ FREE TOOL</span>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>💰 Current annual rent (AED)</label>
            <input type="number" placeholder="e.g. 70,000" value={currentRent} onChange={e => setCurrentRent(e.target.value)} min="0" />
          </div>
          <div className="field">
            <label>📊 RERA average market rent for a comparable unit (AED)</label>
            <input type="number" placeholder="e.g. 85,000" value={marketRent} onChange={e => setMarketRent(e.target.value)} min="0" />
            <small style={{ color: 'var(--text-muted)', display: 'block', marginTop: '0.35rem', fontWeight: 500 }}>
              Look this up via the Dubai REST app or dubailand.gov.ae RERA Rental Index before using this calculator.
            </small>
          </div>
          <button className="btn-go" onClick={handleCalculate}>Calculate Legal Increase ▶</button>
        </div>

        <div className="calc-right">
          {result ? (
            <div className="result-wrap on">
              {result.allowedPercent === 0 ? (
                <div className="res-top">
                  <div className="res-lbl">🇦🇪 RERA Maximum Increase</div>
                  <div className="res-amt">0% increase allowed</div>
                  <div className="res-sub">Your rent is already at or near market rate — your landlord cannot legally increase it this renewal.</div>
                </div>
              ) : (
                <div className="res-top">
                  <div className="res-lbl">🇦🇪 RERA Maximum Increase</div>
                  <div className="res-amt">Up to {result.allowedPercent}% increase</div>
                  <div className="res-sub">Landlord can increase rent by up to {result.allowedPercent}% · New maximum legal rent: {fmt(result.newMaxRent)} / year</div>
                </div>
              )}
              <div className="bdown">
                <div className="br"><span className="bl">Current rent</span><span className="bv">{fmt(result.currentRent)}</span></div>
                <div className="br"><span className="bl">RERA market rent entered</span><span className="bv">{fmt(result.marketRent)}</span></div>
                <div className="br"><span className="bl">% below market rate</span><span className="bv">{result.percentBelowMarket.toFixed(1)}%</span></div>
                <div className="br"><span className="bl">Maximum legal new rent</span><span className="bv">{fmt(result.newMaxRent)}</span></div>
                <div className="br"><span className="bl">Maximum AED increase</span><span className="bv">{fmt(result.maxIncreaseAed)}</span></div>
              </div>
              <div className="res-note">⚠️ Based on Dubai Land Department (RERA) rental increase brackets. Landlords must also give at least 90 days&apos; written notice before the renewal date for any increase to apply. Always verify the exact RERA market rent for your specific building/area via the Dubai REST app or dubailand.gov.ae — this calculator applies the official percentage brackets to whatever market-rent figure you enter.</div>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🏠</div>
              <p>Enter your current rent and the<br />RERA market rent, then click Calculate<br />to see your legal maximum increase</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
