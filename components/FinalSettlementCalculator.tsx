'use client'
import { useState } from 'react'
import Link from 'next/link'

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface Result {
  gratuity: number
  unpaidSalary: number
  leaveEncashment: number
  noticeAmount: number
  additions: number
  deductions: number
  total: number
  netYears: number
  dailyBasic: number
  gratuityDays: number
  capped: boolean
  capAmount: number
  dueDate: string
  note: string
}

export default function FinalSettlementCalculator() {
  const [inputMode, setInputMode] = useState<'manual' | 'dates'>('dates')
  const [basicSalary, setBasicSalary] = useState('')
  const [grossSalary, setGrossSalary] = useState('')
  const [years, setYears] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [unpaidLeaveDays, setUnpaidLeaveDays] = useState('0')
  const [unpaidSalaryDays, setUnpaidSalaryDays] = useState('0')
  const [unusedLeaveDays, setUnusedLeaveDays] = useState('0')
  const [leaveBase, setLeaveBase] = useState<'basic' | 'gross'>('basic')
  const [noticeType, setNoticeType] = useState<'none' | 'employee' | 'employer'>('none')
  const [noticeDays, setNoticeDays] = useState('0')
  const [ticketAllowance, setTicketAllowance] = useState('0')
  const [otherAdditions, setOtherAdditions] = useState('0')
  const [otherDeductions, setOtherDeductions] = useState('0')
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState('')

  function numberValue(value: string) {
    return parseFloat(value) || 0
  }

  function getYears(): number {
    if (inputMode === 'manual') return numberValue(years)
    if (!startDate || !endDate) return 0
    const ms = new Date(endDate).getTime() - new Date(startDate).getTime()
    return ms <= 0 ? 0 : ms / (1000 * 60 * 60 * 24 * 365.25)
  }

  function paymentDueDate() {
    const base = inputMode === 'dates' && endDate ? new Date(endDate) : new Date()
    base.setDate(base.getDate() + 14)
    return base.toLocaleDateString('en-AE', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  function calculate() {
    const basic = numberValue(basicSalary)
    const gross = numberValue(grossSalary) || basic
    const grossDaily = gross / 30
    const serviceYears = getYears()
    const unpaidLeave = parseInt(unpaidLeaveDays) || 0

    if (!basic || basic <= 0) {
      setError('Please enter your monthly basic salary.')
      setResult(null)
      return
    }

    if (serviceYears <= 0) {
      setError('Please enter your service period or joining and last working dates.')
      setResult(null)
      return
    }

    setError('')

    const netYears = Math.max(0, serviceYears - unpaidLeave / 365)
    const dailyBasic = basic / 30
    let gratuityDays = 0
    let gratuity = 0
    let note = ''

    if (netYears < 1) {
      note = 'Less than 1 year of net service - statutory gratuity is AED 0.'
    } else if (netYears <= 5) {
      gratuityDays = 21 * netYears
      gratuity = dailyBasic * gratuityDays
      note = `Gratuity: 21 days x ${netYears.toFixed(2)} years.`
    } else {
      gratuityDays = 21 * 5 + 30 * (netYears - 5)
      gratuity = dailyBasic * gratuityDays
      note = 'Gratuity: 21 days for years 1-5, then 30 days for each additional year.'
    }

    const capAmount = basic * 24
    const capped = gratuity > capAmount
    if (capped) gratuity = capAmount

    const salaryDays = Math.max(0, parseFloat(unpaidSalaryDays) || 0)
    const leaveDays = Math.max(0, parseFloat(unusedLeaveDays) || 0)
    const unpaidSalary = grossDaily * salaryDays
    const leaveDaily = (leaveBase === 'gross' ? gross : basic) / 30
    const leaveEncashment = leaveDaily * leaveDays

    const noticeValue = grossDaily * Math.max(0, parseFloat(noticeDays) || 0)
    const noticeAmount = noticeType === 'employer' ? noticeValue : noticeType === 'employee' ? -noticeValue : 0

    const additions = Math.max(0, numberValue(ticketAllowance)) + Math.max(0, numberValue(otherAdditions))
    const deductions = Math.max(0, numberValue(otherDeductions))
    const total = gratuity + unpaidSalary + leaveEncashment + noticeAmount + additions - deductions

    setResult({
      gratuity,
      unpaidSalary,
      leaveEncashment,
      noticeAmount,
      additions,
      deductions,
      total,
      netYears,
      dailyBasic,
      gratuityDays,
      capped,
      capAmount,
      dueDate: paymentDueDate(),
      note,
    })
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>🧾 UAE Final Settlement Calculator</h2>
          <p>Gratuity + unpaid salary + leave encashment + notice pay + additions and deductions</p>
        </div>
        <span className="calc-free-badge">✓ FREE TOOL</span>
      </div>

      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>Monthly Basic Salary (AED)</label>
            <input type="number" placeholder="e.g. 10,000" value={basicSalary} onChange={e => setBasicSalary(e.target.value)} min="0" />
          </div>

          <div className="field">
            <label>Monthly Gross Salary / Total Package (AED)</label>
            <input type="number" placeholder="Used for unpaid salary and notice pay" value={grossSalary} onChange={e => setGrossSalary(e.target.value)} min="0" />
          </div>

          <div className="field">
            <label>Service Period</label>
            <div className="tab-row">
              <button className={`tab-btn ${inputMode === 'dates' ? 'active' : ''}`} onClick={() => setInputMode('dates')}>Use dates</button>
              <button className={`tab-btn ${inputMode === 'manual' ? 'active' : ''}`} onClick={() => setInputMode('manual')}>Enter years</button>
            </div>
            {inputMode === 'dates' ? (
              <div className="date-inputs">
                <div><div className="date-label">Joining date</div><input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} /></div>
                <div><div className="date-label">Last working day</div><input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} /></div>
              </div>
            ) : (
              <input type="number" placeholder="Years of service (e.g. 3.5)" value={years} onChange={e => setYears(e.target.value)} min="0" step="0.1" />
            )}
          </div>

          <div className="date-inputs">
            <div className="field">
              <label>Unpaid Leave Days</label>
              <input type="number" placeholder="0" value={unpaidLeaveDays} onChange={e => setUnpaidLeaveDays(e.target.value)} min="0" />
            </div>
            <div className="field">
              <label>Unpaid Salary Days</label>
              <input type="number" placeholder="e.g. 12" value={unpaidSalaryDays} onChange={e => setUnpaidSalaryDays(e.target.value)} min="0" step="0.5" />
            </div>
          </div>

          <div className="date-inputs">
            <div className="field">
              <label>Unused Annual Leave Days</label>
              <input type="number" placeholder="e.g. 18" value={unusedLeaveDays} onChange={e => setUnusedLeaveDays(e.target.value)} min="0" step="0.5" />
            </div>
            <div className="field">
              <label>Leave Pay Basis</label>
              <select value={leaveBase} onChange={e => setLeaveBase(e.target.value as 'basic' | 'gross')}>
                <option value="basic">Basic salary</option>
                <option value="gross">Gross salary</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label>Notice Period Pay / Deduction</label>
            <select value={noticeType} onChange={e => setNoticeType(e.target.value as 'none' | 'employee' | 'employer')}>
              <option value="none">No notice adjustment</option>
              <option value="employer">Employer owes notice pay to employee</option>
              <option value="employee">Employee owes notice deduction</option>
            </select>
          </div>

          {noticeType !== 'none' && (
            <div className="field">
              <label>Notice Days</label>
              <input type="number" placeholder="e.g. 30" value={noticeDays} onChange={e => setNoticeDays(e.target.value)} min="0" step="0.5" />
            </div>
          )}

          <div className="date-inputs">
            <div className="field">
              <label>Air Ticket / Repatriation / Allowance (AED)</label>
              <input type="number" placeholder="0" value={ticketAllowance} onChange={e => setTicketAllowance(e.target.value)} min="0" />
            </div>
            <div className="field">
              <label>Other Additions (AED)</label>
              <input type="number" placeholder="Commissions, reimbursements" value={otherAdditions} onChange={e => setOtherAdditions(e.target.value)} min="0" />
            </div>
          </div>

          <div className="field">
            <label>Loans / Advances / Other Deductions (AED)</label>
            <input type="number" placeholder="0" value={otherDeductions} onChange={e => setOtherDeductions(e.target.value)} min="0" />
          </div>

          <button className="btn-go" onClick={calculate}>Calculate Final Settlement ▶</button>
          {error && <div className="err on">{error}</div>}
        </div>

        <div className="calc-right">
          {result ? (
            <div className="result-wrap on">
              <div className="res-top">
                <div className="res-lbl">Estimated UAE Final Settlement</div>
                <div className="res-amt">{fmt(result.total)}</div>
                <div className="res-sub">Total payable before bank, tax, or employer-specific adjustments</div>
              </div>

              <div className="bdown">
                <div className="br"><span className="bl">End-of-service gratuity</span><span className="bv">{fmt(result.gratuity)}</span></div>
                <div className="br"><span className="bl">Unpaid salary</span><span className="bv">{fmt(result.unpaidSalary)}</span></div>
                <div className="br"><span className="bl">Unused leave encashment</span><span className="bv">{fmt(result.leaveEncashment)}</span></div>
                <div className="br"><span className="bl">Notice adjustment</span><span className="bv" style={{ color: result.noticeAmount < 0 ? 'var(--red)' : 'var(--green-dark)' }}>{fmt(result.noticeAmount)}</span></div>
                <div className="br"><span className="bl">Ticket / reimbursements / additions</span><span className="bv">{fmt(result.additions)}</span></div>
                <div className="br"><span className="bl">Loans / advances / deductions</span><span className="bv" style={{ color: result.deductions > 0 ? 'var(--red)' : undefined }}>{result.deductions > 0 ? `-${fmt(result.deductions)}` : fmt(0)}</span></div>
                <div className="br"><span className="bl">Net service period</span><span className="bv">{result.netYears.toFixed(2)} years</span></div>
                <div className="br"><span className="bl">Payment due by</span><span className="bv">{result.dueDate}</span></div>
              </div>

              <div className="res-note">
                {result.note} {result.capped ? `The two-year cap was applied at ${fmt(result.capAmount)}.` : `Daily basic wage: ${fmt(result.dailyBasic)}.`}
              </div>

              <Link href="/blog/uae-final-settlement-checklist" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--gray-100)', border: '2px solid var(--gray-200)', borderRadius: '12px', padding: '12px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', color: 'var(--text)', marginTop: '0.25rem' }}>
                Read the final settlement checklist →
              </Link>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🧾</div>
              <p>Enter your salary, service<br />period and final dues to see<br />your settlement estimate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
