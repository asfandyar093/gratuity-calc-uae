'use client'
import { useState } from 'react'

// DEWS minimum employer contributions (DIFC DEWS Employer Executive Guide):
// 5.83% of monthly basic salary for up to 5 years' service, 8.33% beyond 5 years.
// Investment returns and fees are not modelled.
function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function DewsCalculator() {
  const [basic, setBasic] = useState('25000')
  const [years, setYears] = useState('3')
  const [res, setRes] = useState<{ monthlyNow: number; total: number; months: number } | null>(null)
  const [err, setErr] = useState('')

  function calc() {
    const b = parseFloat(basic), y = parseFloat(years)
    if (!b || b <= 0 || !y || y <= 0) { setErr('Enter your monthly basic salary and years in DEWS.'); setRes(null); return }
    setErr('')
    const months = Math.round(y * 12)
    let total = 0
    for (let m = 1; m <= months; m++) total += b * (m <= 60 ? 0.0583 : 0.0833)
    setRes({ monthlyNow: b * (months > 60 ? 0.0833 : 0.0583), total, months })
  }

  return (
    <div className="calc-card" id="dews-calculator">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>📈 DEWS contribution calculator</h2>
          <p>Minimum employer contributions: 5.83% of basic (up to 5 years), 8.33% (after 5 years)</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label htmlFor="dews-basic">Monthly basic salary (AED)</label>
            <input id="dews-basic" type="number" inputMode="decimal" min="0" value={basic} onChange={e => setBasic(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="dews-years">Years of service covered by DEWS</label>
            <input id="dews-years" type="number" inputMode="decimal" min="0" step="0.5" value={years} onChange={e => setYears(e.target.value)} />
          </div>
          <button type="button" className="btn-go" onClick={calc}>Calculate DEWS ▶</button>
          {err && <div className="err on">{err}</div>}
        </div>
        <div className="calc-right">
          {res ? (
            <div className="result-wrap on">
              <div className="res-top">
                <div className="res-lbl">Employer contributions paid in (before returns)</div>
                <div className="res-amt">{fmt(res.total)}</div>
                <div className="res-sub">{res.months} monthly contributions</div>
              </div>
              <div className="bdown">
                <div className="br"><span className="bl">Current monthly contribution</span><span className="bv">{fmt(res.monthlyNow)}</span></div>
                <div className="br"><span className="bl">Rate now</span><span className="bv">{res.months > 60 ? '8.33%' : '5.83%'}</span></div>
              </div>
              <div className="res-note">⚠️ Your DEWS balance also reflects investment returns, fees and any voluntary contributions. Check your DEWS statement for the actual value. Service before DEWS started (February 2020) may carry a separate accrued gratuity.</div>
            </div>
          ) : (
            <div className="empty-state"><div className="empty-icon">📈</div><p>Enter your basic salary and years in DEWS.</p></div>
          )}
        </div>
      </div>
    </div>
  )
}
