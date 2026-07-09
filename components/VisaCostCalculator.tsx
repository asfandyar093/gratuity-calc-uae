'use client'

import { useState } from 'react'

type Jurisdiction = 'mainland' | 'freezone'
type Status = 'outside' | 'inside'
type Tenure = '1' | '2' | '3'

interface ItemRange {
  label: string
  low: number
  high: number
}

interface Result {
  jurisdiction: Jurisdiction
  status: Status
  tenure: Tenure
  dependants: number
  items: ItemRange[]
  employeeLow: number
  employeeHigh: number
  dependantLow: number
  dependantHigh: number
  totalLow: number
  totalHigh: number
}

function fmtAED(n: number) {
  return 'AED ' + Math.round(n).toLocaleString('en-AE')
}

function fmtRange(low: number, high: number) {
  return `${fmtAED(low)} – ${fmtAED(high)}`
}

function computeCosts(jurisdiction: Jurisdiction, status: Status, tenure: Tenure, dependants: number): Result {
  const tenureYears = Number(tenure)
  const isMainland = jurisdiction === 'mainland'
  const items: ItemRange[] = []

  if (status === 'outside') {
    items.push({ label: 'Entry permit', low: isMainland ? 350 : 300, high: isMainland ? 440 : 400 })
  } else {
    items.push({ label: 'Change-of-status fee (inside UAE)', low: 500, high: 650 })
  }

  const eidBoost = (tenureYears - 1) * (isMainland ? 70 : 60)
  items.push({
    label: `Emirates ID (${tenureYears}-year validity)`,
    low: (isMainland ? 200 : 150) + eidBoost,
    high: (isMainland ? 280 : 220) + eidBoost,
  })

  items.push({ label: 'Medical fitness test', low: isMainland ? 450 : 400, high: isMainland ? 580 : 500 })

  items.push({ label: 'Typing centre / e-form processing', low: isMainland ? 220 : 200, high: isMainland ? 300 : 280 })

  const stampBoost = (tenureYears - 1) * (isMainland ? 25 : 50)
  items.push({
    label: 'Visa stamping fee',
    low: (isMainland ? 750 : 600) + stampBoost,
    high: (isMainland ? 800 : 700) + stampBoost,
  })

  items.push({ label: 'PRO / immigration service fee', low: isMainland ? 1800 : 1000, high: isMainland ? 2300 : 1500 })

  items.push({ label: 'Health insurance (year 1, mandatory)', low: isMainland ? 850 : 650, high: isMainland ? 1150 : 900 })

  const employeeLow = items.reduce((sum, item) => sum + item.low, 0)
  const employeeHigh = items.reduce((sum, item) => sum + item.high, 0)

  const dependantLow = dependants * 2500
  const dependantHigh = dependants * 4500

  return {
    jurisdiction,
    status,
    tenure,
    dependants,
    items,
    employeeLow,
    employeeHigh,
    dependantLow,
    dependantHigh,
    totalLow: employeeLow + dependantLow,
    totalHigh: employeeHigh + dependantHigh,
  }
}

export default function VisaCostCalculator() {
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction>('freezone')
  const [status, setStatus] = useState<Status>('outside')
  const [tenure, setTenure] = useState<Tenure>('1')
  const [dependantsStr, setDependantsStr] = useState('0')
  const [employerCovers, setEmployerCovers] = useState<'yes' | 'no'>('yes')
  const [result, setResult] = useState<Result | null>(null)

  function calculate() {
    const dependants = Math.max(0, Math.floor(Number(dependantsStr) || 0))
    setResult(computeCosts(jurisdiction, status, tenure, dependants))
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>🛂 UAE Visa Cost Calculator</h2>
          <p>Estimate total employment visa cost — entry permit, Emirates ID, medical, PRO fees &amp; more</p>
        </div>
        <span className="calc-free-badge">✓ FREE TOOL</span>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>🏢 Jurisdiction</label>
            <select value={jurisdiction} onChange={e => setJurisdiction(e.target.value as Jurisdiction)}>
              <option value="freezone">Free Zone</option>
              <option value="mainland">Mainland</option>
            </select>
          </div>

          <div className="field">
            <label>📍 Visa application route</label>
            <select value={status} onChange={e => setStatus(e.target.value as Status)}>
              <option value="outside">Applying from outside UAE (entry permit)</option>
              <option value="inside">Inside-country status change</option>
            </select>
          </div>

          <div className="field">
            <label>🗓️ Visa tenure</label>
            <select value={tenure} onChange={e => setTenure(e.target.value as Tenure)}>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
            </select>
          </div>

          <div className="field">
            <label>👨‍👩‍👧 Dependants to sponsor</label>
            <input type="number" placeholder="e.g. 0" value={dependantsStr} onChange={e => setDependantsStr(e.target.value)} min="0" />
          </div>

          <div className="field">
            <label>💼 Does your employer typically cover the cost?</label>
            <div className="radio-wrap">
              <label><input type="radio" checked={employerCovers === 'yes'} onChange={() => setEmployerCovers('yes')} /> Yes, employer pays</label>
              <label><input type="radio" checked={employerCovers === 'no'} onChange={() => setEmployerCovers('no')} /> No, I pay myself</label>
            </div>
          </div>

          <button className="btn-go" onClick={calculate}>Calculate Visa Cost ▶</button>
        </div>

        <div className="calc-right">
          {result ? (
            <div className="result-wrap on">
              <div className="res-top">
                <div className="res-lbl">🇦🇪 Estimated Total Visa Cost</div>
                <div className="res-amt">{fmtRange(result.totalLow, result.totalHigh)}</div>
                <div className="res-sub">
                  {result.jurisdiction === 'mainland' ? 'Mainland' : 'Free Zone'} · {result.status === 'outside' ? 'Entry permit route' : 'Inside-country status change'} · {result.tenure} year tenure{result.dependants > 0 ? ` · ${result.dependants} dependant${result.dependants > 1 ? 's' : ''}` : ''}
                </div>
              </div>

              <div className="bdown">
                {result.items.map(item => (
                  <div className="br" key={item.label}>
                    <span className="bl">{item.label}</span>
                    <span className="bv">{fmtRange(item.low, item.high)}</span>
                  </div>
                ))}
                <div className="br" style={{ background: 'var(--gray-50)', fontWeight: 900 }}>
                  <span className="bl" style={{ fontWeight: 900, color: 'var(--text)' }}>Employee-only subtotal</span>
                  <span className="bv" style={{ fontSize: '16px' }}>{fmtRange(result.employeeLow, result.employeeHigh)}</span>
                </div>
                {result.dependants > 0 && (
                  <div className="br">
                    <span className="bl">Dependant sponsorship (x{result.dependants})</span>
                    <span className="bv">{fmtRange(result.dependantLow, result.dependantHigh)}</span>
                  </div>
                )}
                <div className="br" style={{ background: 'var(--gray-50)', fontWeight: 900 }}>
                  <span className="bl" style={{ fontWeight: 900, color: 'var(--text)' }}>Grand total</span>
                  <span className="bv" style={{ fontSize: '18px' }}>{fmtRange(result.totalLow, result.totalHigh)}</span>
                </div>
              </div>

              <div className="info-box">
                {employerCovers === 'yes'
                  ? 'Many UAE employers cover most or all of the employee\'s own visa cost as standard practice — but dependant sponsorship costs are usually paid by the employee unless your contract states otherwise. Confirm what is covered in writing before accepting an offer.'
                  : 'If you are covering these costs yourself, budget for the full range shown above. Some employers will reimburse visa costs on request even if it is not automatic — it is worth asking.'}
              </div>

              <div className="res-note">Estimates only — actual fees vary by free zone authority, typing centre, PRO/agent chosen, and whether your employer absorbs some costs. Always confirm exact fees with your employer&apos;s PRO or the relevant free zone / GDRFA authority before budgeting.</div>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🛂</div>
              <p>Select your jurisdiction, route,<br />tenure, and dependants to see<br />your estimated visa cost</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
