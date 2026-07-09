'use client'

import { useMemo, useState } from 'react'

const MAX_MONTHS = 600 // 50 years — hard cap so the loop always terminates

const RATE_PRESETS = [
  { id: '4', label: 'UAE savings account (~4% p.a.)', rate: 4 },
  { id: '4.5', label: 'UAE fixed deposit (~4.5% p.a.)', rate: 4.5 },
  { id: '6', label: 'High-yield salary-linked savings (~6% p.a.)', rate: 6 },
  { id: '8', label: 'Global index fund, historical avg (~8% p.a.)', rate: 8 },
  { id: 'custom', label: 'Custom rate', rate: 0 },
]

function fmtFull(n: number) {
  return 'AED ' + Math.round(n).toLocaleString('en-AE')
}

function durationLabel(months: number) {
  if (months <= 0) return 'You have already reached your goal!'
  const years = Math.floor(months / 12)
  const rem = months % 12
  if (years === 0) return `${rem} month${rem === 1 ? '' : 's'}`
  if (rem === 0) return `${years} year${years === 1 ? '' : 's'}`
  return `${years} year${years === 1 ? '' : 's'} ${rem} month${rem === 1 ? '' : 's'}`
}

interface Projection {
  reached: boolean
  months: number
  balances: number[] // balance at end of each month, index 0 = starting amount
}

function projectGoal(goal: number, starting: number, monthly: number, annualRatePct: number): Projection {
  const monthlyRate = annualRatePct / 100 / 12
  const balances: number[] = [starting]

  if (starting >= goal) {
    return { reached: true, months: 0, balances }
  }

  let balance = starting
  let months = 0
  while (balance < goal && months < MAX_MONTHS) {
    balance = balance * (1 + monthlyRate) + monthly
    months++
    balances.push(balance)
  }

  return { reached: balance >= goal, months, balances }
}

export default function SavingsGoalCalculator() {
  const [goalStr, setGoalStr] = useState('100000')
  const [startingStr, setStartingStr] = useState('0')
  const [monthlyStr, setMonthlyStr] = useState('2000')
  const [rateChoice, setRateChoice] = useState('4')
  const [customRateStr, setCustomRateStr] = useState('5')

  const goal = Math.max(0, parseFloat(goalStr) || 0)
  const starting = Math.max(0, parseFloat(startingStr) || 0)
  const monthly = Math.max(0, parseFloat(monthlyStr) || 0)
  const rate = rateChoice === 'custom'
    ? Math.min(Math.max(parseFloat(customRateStr) || 0, 0), 50)
    : RATE_PRESETS.find(p => p.id === rateChoice)?.rate ?? 4

  const projection = useMemo(() => {
    if (goal <= 0) return null
    return projectGoal(goal, starting, monthly, rate)
  }, [goal, starting, monthly, rate])

  const hasResult = goal > 0 && projection !== null

  const totalContributed = projection ? monthly * projection.months : 0
  const totalGrowth = projection ? Math.max(0, goal - starting - totalContributed) : 0

  const targetDateLabel = useMemo(() => {
    if (!projection || !projection.reached) return null
    const now = new Date()
    const target = new Date(now.getFullYear(), now.getMonth() + projection.months, 1)
    return target.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }, [projection])

  // Year-by-year table: first 10 years or until goal reached, whichever is shorter
  const yearRows = useMemo(() => {
    if (!projection || !projection.reached) return []
    const rows: { year: number; balance: number; final: boolean }[] = []
    for (let y = 1; y <= 10; y++) {
      const monthIdx = Math.min(y * 12, projection.months)
      rows.push({ year: y, balance: projection.balances[monthIdx], final: monthIdx === projection.months })
      if (monthIdx >= projection.months) break
    }
    return rows
  }, [projection])

  return (
    <div>
      <div className="calc-card">
        <div className="calc-header">
          <div className="calc-header-left">
            <h2>🎯 UAE Savings Goal Calculator</h2>
            <p>Compound monthly growth · Any goal — down payment, car, emergency fund</p>
          </div>
          <span className="calc-free-badge">✓ FREE TOOL</span>
        </div>

        <div className="calc-body">
          {/* LEFT — inputs */}
          <div className="calc-left">
            <div className="field">
              <label>🎯 Savings Goal (AED)</label>
              <input
                type="number"
                placeholder="e.g. 100,000"
                value={goalStr}
                onChange={e => setGoalStr(e.target.value)}
                min="0"
              />
            </div>

            <div className="field">
              <label>💰 Current Savings / Starting Amount (AED)</label>
              <input
                type="number"
                placeholder="e.g. 0"
                value={startingStr}
                onChange={e => setStartingStr(e.target.value)}
                min="0"
              />
            </div>

            <div className="field">
              <label>📅 Monthly Contribution (AED)</label>
              <input
                type="number"
                placeholder="e.g. 2,000"
                value={monthlyStr}
                onChange={e => setMonthlyStr(e.target.value)}
                min="0"
              />
            </div>

            <div className="field">
              <label>📈 Expected Annual Return</label>
              <select value={rateChoice} onChange={e => setRateChoice(e.target.value)}>
                {RATE_PRESETS.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.id === 'custom' ? p.label : p.label}
                  </option>
                ))}
              </select>
            </div>

            {rateChoice === 'custom' && (
              <div className="field">
                <label>⚙️ Custom Annual Return (%)</label>
                <input
                  type="number"
                  placeholder="e.g. 5"
                  value={customRateStr}
                  onChange={e => setCustomRateStr(e.target.value)}
                  min="0"
                  max="50"
                  step="0.1"
                />
              </div>
            )}

            <button className="btn-go" onClick={() => { /* result recalculates automatically */ }}>Calculate Timeline ▶</button>
          </div>

          {/* RIGHT — summary */}
          <div className="calc-right">
            {hasResult && projection ? (
              projection.reached ? (
                <div className="result-wrap on">
                  <div className="res-top">
                    <div className="res-lbl">🇦🇪 Time to Reach Your Goal</div>
                    <div className="res-amt">{durationLabel(projection.months)}</div>
                    <div className="res-sub">{targetDateLabel ? `around ${targetDateLabel}` : 'You have already reached your goal!'}</div>
                  </div>
                  <div className="bdown">
                    <div className="br"><span className="bl">Starting amount</span><span className="bv">{fmtFull(starting)}</span></div>
                    <div className="br"><span className="bl">Total contributed</span><span className="bv">{fmtFull(totalContributed)}</span></div>
                    <div className="br"><span className="bl">Total growth / interest earned</span><span className="bv" style={{ color: 'var(--green-dark)' }}>+ {fmtFull(totalGrowth)}</span></div>
                  </div>
                  <div className="res-note">Projections assume a constant monthly contribution and steady annual return — real returns fluctuate. This is an estimate for planning purposes, not a guarantee or financial advice.</div>
                </div>
              ) : (
                <div className="result-wrap on">
                  <div className="res-top" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)' }}>
                    <div className="res-lbl">⚠️ Goal Not Reachable</div>
                    <div className="res-amt" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>Not reachable in 50 years</div>
                    <div className="res-sub">Goal not reachable in a reasonable timeframe — increase your monthly contribution or return rate.</div>
                  </div>
                  <div className="res-note">Projections assume a constant monthly contribution and steady annual return — real returns fluctuate. This is an estimate for planning purposes, not a guarantee or financial advice.</div>
                </div>
              )
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🎯</div>
                <p>Enter your savings goal<br />to see how long it will take<br />to reach it</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── YEAR-BY-YEAR TABLE ───────────────────────────────────────── */}
      {hasResult && projection && projection.reached && yearRows.length > 0 && (
        <div className="accrual-card">
          <div className="accrual-title">📊 Year-by-year savings projection</div>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Balance at Year-End</th>
                </tr>
              </thead>
              <tbody>
                {yearRows.map(row => (
                  <tr key={row.year} className={row.final ? 'hl' : ''}>
                    <td>Year {row.year}{row.final && !Number.isInteger(projection.months / 12) ? ' (goal reached)' : ''}</td>
                    <td style={{ fontWeight: 700, color: 'var(--green-dark)' }}>{fmtFull(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
