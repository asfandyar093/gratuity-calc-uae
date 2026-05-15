'use client'

import { useMemo, useState } from 'react'

function money(amount: number) {
  return `AED ${amount.toLocaleString('en-AE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export default function OvertimeCalculator() {
  const [salaryMode, setSalaryMode] = useState<'monthly' | 'hourly'>('monthly')
  const [salary, setSalary] = useState('10000')
  const [hours, setHours] = useState('4')
  const [dayType, setDayType] = useState('weekday')

  const result = useMemo(() => {
    const base = Math.max(0, Number(salary) || 0)
    const overtimeHours = Math.max(0, Number(hours) || 0)
    const hourlyRate = salaryMode === 'hourly' ? base : base / 30 / 8
    const multiplier = dayType === 'weekday' ? 1.25 : 1.5
    const amount = hourlyRate * multiplier * overtimeHours
    return { hourlyRate, multiplier, amount, overtimeHours }
  }, [dayType, hours, salary, salaryMode])

  return (
    <div className="calc-card" id="overtime-calculator">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>Calculate UAE overtime pay</h2>
          <p>Use monthly basic salary or an hourly basic rate to estimate overtime owed.</p>
        </div>
        <span className="calc-free-badge">FREE TOOL</span>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>Salary input type</label>
            <div className="tab-row">
              <button className={`tab-btn ${salaryMode === 'monthly' ? 'active' : ''}`} onClick={() => setSalaryMode('monthly')}>Monthly basic</button>
              <button className={`tab-btn ${salaryMode === 'hourly' ? 'active' : ''}`} onClick={() => setSalaryMode('hourly')}>Hourly rate</button>
            </div>
          </div>
          <div className="field">
            <label>{salaryMode === 'monthly' ? 'Monthly basic salary (AED)' : 'Hourly basic rate (AED)'}</label>
            <input type="number" min="0" value={salary} onChange={(event) => setSalary(event.target.value)} />
          </div>
          <div className="field">
            <label>Overtime hours worked</label>
            <input type="number" min="0" step="0.5" value={hours} onChange={(event) => setHours(event.target.value)} />
          </div>
          <div className="field">
            <label>Day or time type</label>
            <select value={dayType} onChange={(event) => setDayType(event.target.value)}>
              <option value="weekday">Regular overtime: 125%</option>
              <option value="night">Night overtime / rest day premium: 150%</option>
              <option value="holiday">Friday, weekly rest day, or public holiday: 150%</option>
            </select>
          </div>
        </div>
        <div className="calc-right">
          <div className="result-wrap on">
            <div className="res-top">
              <div className="res-lbl">Estimated overtime pay</div>
              <div className="res-amt">{money(result.amount)}</div>
              <div className="res-sub">{result.multiplier * 100}% of basic hourly wage</div>
            </div>
            <div className="bdown">
              <div className="br"><span className="bl">Basic hourly wage</span><span className="bv">{money(result.hourlyRate)}</span></div>
              <div className="br"><span className="bl">Overtime hours</span><span className="bv">{result.overtimeHours}</span></div>
              <div className="br"><span className="bl">Multiplier</span><span className="bv">{result.multiplier}x</span></div>
            </div>
            <div className="res-note">MOHRE guidance uses at least 25% extra for regular overtime and at least 50% extra for night, rest-day, or holiday work.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
