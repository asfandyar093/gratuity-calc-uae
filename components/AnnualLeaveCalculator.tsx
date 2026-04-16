'use client'
import { useState } from 'react'
import Link from 'next/link'

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface Result {
  entitledDays: number
  takenDays: number
  remainingDays: number
  cashValue: number
  dailyWage: number
  note: string
  lessThanYear: boolean
  months: number
}

export default function AnnualLeaveCalculator() {
  const [mode, setMode] = useState<'manual' | 'dates'>('manual')
  const [years, setYears] = useState('')
  const [months, setMonths] = useState('0')
  const [startDate, setStartDate] = useState('')
  const [calcDate, setCalcDate] = useState('')
  const [takenDays, setTakenDays] = useState('0')
  const [salary, setSalary] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState('')

  function getTotalMonths(): number {
    if (mode === 'manual') {
      return (parseFloat(years) || 0) * 12 + (parseFloat(months) || 0)
    }
    if (!startDate || !calcDate) return 0
    const start = new Date(startDate)
    const end = new Date(calcDate)
    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30.44)
    return diff <= 0 ? 0 : diff
  }

  function calculate() {
    const totalMonths = getTotalMonths()
    const sal = parseFloat(salary)
    const taken = parseInt(takenDays) || 0

    if (totalMonths <= 0) {
      setError('Please enter your length of service.')
      setResult(null); return
    }
    if (!sal || sal <= 0) {
      setError('Please enter your basic monthly salary to calculate the cash value.')
      setResult(null); return
    }
    setError('')

    const daily = sal / 30
    let entitled = 0
    let note = ''

    if (totalMonths < 6) {
      entitled = 0
      note = 'Less than 6 months — no annual leave entitlement yet under UAE Labour Law.'
    } else if (totalMonths < 12) {
      // 2 days per completed month worked (for less than 1 year)
      entitled = Math.floor(totalMonths) * 2
      note = `${Math.floor(totalMonths)} completed months × 2 days = ${entitled} days (prorated, under 1 year of service)`
    } else {
      // 30 days per year after first full year
      const fullYears = Math.floor(totalMonths / 12)
      const remainingMonths = totalMonths % 12
      entitled = fullYears * 30 + Math.floor(remainingMonths) * (30 / 12)
      entitled = Math.round(entitled * 10) / 10
      note = `${fullYears} full year${fullYears > 1 ? 's' : ''} × 30 days${remainingMonths >= 1 ? ` + ${Math.floor(remainingMonths)} months prorated` : ''}`
    }

    const remaining = Math.max(0, entitled - taken)
    const cashValue = remaining * daily

    setResult({
      entitledDays: entitled,
      takenDays: taken,
      remainingDays: remaining,
      cashValue,
      dailyWage: daily,
      note,
      lessThanYear: totalMonths < 12,
      months: totalMonths,
    })
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>🏖️ MOHRE Annual Leave Calculator UAE</h2>
          <p>حاسبة الإجازة السنوية · Federal Decree-Law No. 33/2021 · MOHRE approved</p>
        </div>
        <span className="calc-free-badge">✓ FREE TOOL</span>
      </div>

      <div className="calc-body">
        <div className="calc-left">

          <div className="field">
            <label>💰 Monthly Basic Salary (AED) — الراتب الأساسي</label>
            <input
              type="number"
              placeholder="e.g. 8,000"
              value={salary}
              onChange={e => setSalary(e.target.value)}
              min="0"
            />
          </div>

          <div className="field">
            <label>📅 Length of Service — مدة الخدمة</label>
            <div className="tab-row">
              <button className={`tab-btn ${mode === 'manual' ? 'active' : ''}`} onClick={() => setMode('manual')}>Enter manually</button>
              <button className={`tab-btn ${mode === 'dates' ? 'active' : ''}`} onClick={() => setMode('dates')}>Use dates</button>
            </div>
            {mode === 'manual' ? (
              <div className="date-inputs">
                <div>
                  <div className="date-label">Years</div>
                  <input type="number" placeholder="e.g. 3" value={years} onChange={e => setYears(e.target.value)} min="0" />
                </div>
                <div>
                  <div className="date-label">Additional months</div>
                  <input type="number" placeholder="0–11" value={months} onChange={e => setMonths(e.target.value)} min="0" max="11" />
                </div>
              </div>
            ) : (
              <div className="date-inputs">
                <div><div className="date-label">Joining date</div><input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} /></div>
                <div><div className="date-label">Calculate as of</div><input type="date" value={calcDate} onChange={e => setCalcDate(e.target.value)} /></div>
              </div>
            )}
          </div>

          <div className="field">
            <label>✈️ Leave Days Already Taken — الإجازة المأخوذة</label>
            <input
              type="number"
              placeholder="Days taken this year (default 0)"
              value={takenDays}
              onChange={e => setTakenDays(e.target.value)}
              min="0"
            />
          </div>

          <button className="btn-go" onClick={calculate}>
            Calculate Annual Leave — احسب الإجازة ▶
          </button>
          {error && <div className="err on">{error}</div>}
        </div>

        <div className="calc-right">
          {result ? (
            <div className="result-wrap on">
              <div className="res-top">
                <div className="res-lbl">🏖️ Unused Annual Leave — Cash Value</div>
                <div className="res-amt">{fmt(result.cashValue)}</div>
                <div className="res-sub">{result.note}</div>
              </div>
              <div className="bdown">
                <div className="br"><span className="bl">Monthly basic salary</span><span className="bv">{fmt(parseFloat(salary))}</span></div>
                <div className="br"><span className="bl">Daily wage (÷ 30)</span><span className="bv">{fmt(result.dailyWage)}</span></div>
                <div className="br"><span className="bl">Total entitled leave</span><span className="bv">{result.entitledDays} days</span></div>
                <div className="br"><span className="bl">Leave already taken</span><span className="bv">{result.takenDays} days</span></div>
                <div className="br" style={{ background: result.remainingDays > 0 ? 'var(--green-light)' : undefined }}>
                  <span className="bl" style={{ fontWeight: 900, color: 'var(--text)' }}>Unused leave balance</span>
                  <span className="bv" style={{ color: 'var(--green-dark)', fontSize: '18px' }}>{result.remainingDays} days</span>
                </div>
                <div className="br">
                  <span className="bl">Cash value of unused leave</span>
                  <span className="bv" style={{ color: 'var(--green-dark)' }}>{fmt(result.cashValue)}</span>
                </div>
              </div>
              {result.lessThanYear && (
                <div className="warn-box" style={{ marginTop: '0' }}>
                  ⚠️ Less than 1 year of service: leave accrues at 2 days per completed month under MOHRE rules.
                </div>
              )}
              <div className="res-note">
                Unused annual leave must be paid out on termination, resignation, or contract expiry under Article 29, Federal Decree-Law No. 33 of 2021.
              </div>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--gray-100)', border: '2px solid var(--gray-200)', borderRadius: '12px', padding: '12px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', color: 'var(--text)', marginTop: '0.25rem' }}>
                🧮 Also calculate your End-of-Service Gratuity
              </Link>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🏖️</div>
              <p>Enter your salary, service<br />length and leave taken to<br />see your leave balance</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
