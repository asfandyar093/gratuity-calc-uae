'use client'

import { useMemo, useState } from 'react'

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function SickLeaveCalculator() {
  const [probationDone, setProbationDone] = useState('yes')
  const [wage, setWage] = useState('7000')
  const [usedDays, setUsedDays] = useState('0')
  const [newDays, setNewDays] = useState('5')

  const result = useMemo(() => {
    const w = parseFloat(wage) || 0
    const used = Math.max(0, parseInt(usedDays) || 0)
    const requested = Math.max(0, parseInt(newDays) || 0)

    if (probationDone === 'no') {
      return { fullDays: 0, halfDays: 0, unpaidDays: requested, pay: 0, remaining: 90 - Math.min(90, used + requested), duringProbation: true }
    }

    const fullDayRate = w / 30
    const halfDayRate = w / 60

    let fullDays = 0, halfDays = 0, unpaidDays = 0
    for (let i = 0; i < requested; i++) {
      const dayIndex = used + i // 0-based day count within the 90-day sick leave year
      if (dayIndex < 15) fullDays++
      else if (dayIndex < 45) halfDays++
      else if (dayIndex < 90) unpaidDays++
      else unpaidDays++ // beyond 90 days, unpaid / employer discretion
    }

    const pay = fullDays * fullDayRate + halfDays * halfDayRate
    const remaining = Math.max(0, 90 - Math.min(90, used + requested))

    return { fullDays, halfDays, unpaidDays, pay, remaining, duringProbation: false }
  }, [probationDone, wage, usedDays, newDays])

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>🩺 UAE Sick Leave Calculator</h2>
          <p>Article 31 · Federal Decree-Law No. 33/2021 · 90 days per service year</p>
        </div>
        <span className="calc-free-badge">✓ FREE TOOL</span>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>✅ Have you completed probation?</label>
            <div className="radio-wrap">
              <label><input type="radio" checked={probationDone === 'yes'} onChange={() => setProbationDone('yes')} /> Yes</label>
              <label><input type="radio" checked={probationDone === 'no'} onChange={() => setProbationDone('no')} /> No, still on probation</label>
            </div>
          </div>
          <div className="field">
            <label>💰 Monthly Wage (AED) — full salary, not basic only</label>
            <input type="number" placeholder="e.g. 7,000" value={wage} onChange={e => setWage(e.target.value)} min="0" />
          </div>
          <div className="field">
            <label>📅 Sick days already used this service year</label>
            <input type="number" placeholder="e.g. 0" value={usedDays} onChange={e => setUsedDays(e.target.value)} min="0" max="90" />
          </div>
          <div className="field">
            <label>🤒 Sick days you are taking now</label>
            <input type="number" placeholder="e.g. 5" value={newDays} onChange={e => setNewDays(e.target.value)} min="0" />
          </div>
          <button className="btn-go" onClick={() => { /* memo recalculates automatically */ }}>Calculate Sick Pay ▶</button>
        </div>

        <div className="calc-right">
          <div className="result-wrap on">
            {result.duringProbation ? (
              <div className="res-top">
                <div className="res-lbl">⚠️ Sick Pay During Probation</div>
                <div className="res-amt">{fmt(0)}</div>
                <div className="res-sub">No paid sick leave entitlement during probation under Article 31</div>
              </div>
            ) : (
              <div className="res-top">
                <div className="res-lbl">🇦🇪 Estimated Sick Pay for This Leave</div>
                <div className="res-amt">{fmt(result.pay)}</div>
                <div className="res-sub">{result.fullDays} full-pay day(s) + {result.halfDays} half-pay day(s) + {result.unpaidDays} unpaid day(s)</div>
              </div>
            )}
            <div className="bdown">
              <div className="br"><span className="bl">Full-pay days (first 15/yr)</span><span className="bv">{result.fullDays}</span></div>
              <div className="br"><span className="bl">Half-pay days (next 30/yr)</span><span className="bv">{result.halfDays}</span></div>
              <div className="br"><span className="bl">Unpaid days (remaining 45/yr)</span><span className="bv">{result.unpaidDays}</span></div>
              <div className="br"><span className="bl">Sick days remaining this year</span><span className="bv">{result.remaining} of 90</span></div>
            </div>
            <div className="res-note">⚠️ Estimate only. Sick leave resets each service year and does not carry over. Consult MOHRE or HR for your exact entitlement.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
