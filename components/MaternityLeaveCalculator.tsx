'use client'

import { useMemo, useState } from 'react'

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function MaternityLeaveCalculator() {
  const [wage, setWage] = useState('7000')
  const [extraDays, setExtraDays] = useState('0')

  const result = useMemo(() => {
    const w = parseFloat(wage) || 0
    const extra = Math.max(0, Math.min(45, parseInt(extraDays) || 0))
    const fullDayRate = w / 30
    const halfDayRate = w / 60

    const fullPay = fullDayRate * 45
    const halfPay = halfDayRate * 15
    const totalPay = fullPay + halfPay
    const totalPaidDays = 60
    const totalLeaveDays = totalPaidDays + extra

    return { fullPay, halfPay, totalPay, totalPaidDays, totalLeaveDays, extra }
  }, [wage, extraDays])

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>🤱 UAE Maternity Leave Calculator</h2>
          <p>Article 30 · Federal Decree-Law No. 33/2021 · 60 days paid, regardless of service length</p>
        </div>
        <span className="calc-free-badge">✓ FREE TOOL</span>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>💰 Monthly Wage (AED) — full salary, not basic only</label>
            <input type="number" placeholder="e.g. 7,000" value={wage} onChange={e => setWage(e.target.value)} min="0" />
          </div>
          <div className="field">
            <label>🏥 Extra unpaid leave for pregnancy/birth-related illness (0–45 days, needs medical certificate)</label>
            <input type="number" placeholder="e.g. 0" value={extraDays} onChange={e => setExtraDays(e.target.value)} min="0" max="45" />
          </div>
          <button className="btn-go" onClick={() => { /* memo recalculates automatically */ }}>Calculate Maternity Pay ▶</button>
        </div>

        <div className="calc-right">
          <div className="result-wrap on">
            <div className="res-top">
              <div className="res-lbl">🇦🇪 Estimated Maternity Pay</div>
              <div className="res-amt">{fmt(result.totalPay)}</div>
              <div className="res-sub">45 days full pay + 15 days half pay = 60 days total</div>
            </div>
            <div className="bdown">
              <div className="br"><span className="bl">First 45 days (full pay)</span><span className="bv">{fmt(result.fullPay)}</span></div>
              <div className="br"><span className="bl">Next 15 days (half pay)</span><span className="bv">{fmt(result.halfPay)}</span></div>
              <div className="br"><span className="bl">Total paid leave days</span><span className="bv">{result.totalPaidDays} days</span></div>
              <div className="br"><span className="bl">Extra unpaid leave requested</span><span className="bv">{result.extra > 0 ? `${result.extra} days` : 'None'}</span></div>
              <div className="br"><span className="bl">Total leave duration</span><span className="bv">{result.totalLeaveDays} days</span></div>
            </div>
            <div className="res-note">⚠️ Estimate only. After returning to work, mothers are also entitled to two paid half-hour nursing breaks per day for 6 months. Consult MOHRE or HR for your exact entitlement.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
