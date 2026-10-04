'use client'
import { useState } from 'react'
import Link from 'next/link'
import PdfDownloadButton from './PdfDownloadButton'
import { calcByMethod, METHOD_INFO, type GratuityMethod } from '@/lib/gratuityMethods'

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface Props {
  defaultSalary?: string
  defaultYears?: string
  sectorLabel: string
  sectorEmoji?: string
  /** Calculation regime. Defaults to the federal Labour Law (Art. 51). */
  method?: GratuityMethod
}

interface Result {
  gratuity: number
  sub: string
  salary: number
  basicUsed: number
  netYears: number
  daily: number
  days: number
  unpaid: number
  capped: boolean
  capAmount: number
  dueDate: string | null
}

interface BarData { yr: number; g: number; isCurrent: boolean }

export default function IndustryCalculator({
  defaultSalary = '',
  defaultYears = '',
  sectorLabel,
  sectorEmoji = '🧮',
  method = 'federal',
}: Props) {
  const info = METHOD_INFO[method]
  const [inputMode, setInputMode] = useState<'manual' | 'dates'>('manual')
  const [salary, setSalary] = useState(defaultSalary)
  const [totalWage, setTotalWage] = useState('')
  const [years, setYears] = useState(defaultYears)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [unpaidDays, setUnpaidDays] = useState('0')
  const [showAdv, setShowAdv] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState('')
  const [bars, setBars] = useState<BarData[]>([])

  function getYears(): number {
    if (inputMode === 'manual') return parseFloat(years) || 0
    if (!startDate || !endDate) return 0
    const ms = new Date(endDate).getTime() - new Date(startDate).getTime()
    return ms <= 0 ? 0 : ms / (1000 * 60 * 60 * 24 * 365)
  }

  function calculate() {
    const sal = parseFloat(salary), yrs = getYears()
    if (!sal || sal <= 0 || yrs <= 0) {
      setError('Please enter your monthly basic salary and years of service.')
      setResult(null); setBars([]); return
    }
    setError('')
    const unpaid = parseInt(unpaidDays) || 0
    const netYrs = Math.max(0, yrs - unpaid / 365)
    const tw = parseFloat(totalWage) || undefined
    const g = calcByMethod(method, sal, netYrs, tw)
    const sub = netYrs < 1
      ? 'Less than 1 year — no entitlement'
      : netYrs <= 5 ? `21 days × ${netYrs.toFixed(1)} years` : '21 days (years 1–5) + 30 days (after year 5)'
    let dueDate: string | null = null
    if (inputMode === 'dates' && endDate) {
      const due = new Date(endDate); due.setDate(due.getDate() + info.deadlineDays)
      dueDate = due.toLocaleDateString('en-AE', { day: 'numeric', month: 'short', year: 'numeric' })
    }
    setResult({ gratuity: g.amount, sub, salary: sal, basicUsed: g.basicUsed, netYears: netYrs, daily: g.daily, days: g.days, unpaid, capped: g.capped, capAmount: g.cap, dueDate })
    const showYrs = netYrs < 1 ? 0 : Math.min(Math.max(Math.ceil(netYrs), 5), 25)
    setBars(Array.from({ length: showYrs }, (_, i) => ({ yr: i + 1, g: calcByMethod(method, sal, i + 1, tw).amount, isCurrent: i + 1 === Math.ceil(netYrs) })))
  }

  const maxG = bars.length > 0 ? Math.max(...bars.map(b => b.g)) : 1
  const dueText = result?.dueDate ?? `Within ${info.deadlineDays} days of the contract ending`
  const capText = method === 'adgm'
    ? 'No two-year cap in ADGM s.61'
    : result?.capped ? `Yes — ${fmt(result.capAmount)}` : 'No'

  return (
    <>
      <div className="calc-card" id="calculator">
        <div className="calc-header">
          <div className="calc-header-left">
            <h2>{sectorEmoji} {sectorLabel}</h2>
            <p>{info.legalNote}</p>
          </div>
          <span className="calc-free-badge">✓ FREE TOOL</span>
        </div>

        <div className="calc-body">
          <div className="calc-left">
            <div className="field">
              <label htmlFor="ic-salary">💰 Monthly basic salary (AED)</label>
              <input id="ic-salary" type="number" inputMode="decimal" placeholder="e.g. 5,000" value={salary} onChange={e => setSalary(e.target.value)} min="0" />
            </div>

            {method === 'adgm' && (
              <div className="field">
                <label htmlFor="ic-total">Total monthly wage incl. allowances (optional)</label>
                <input id="ic-total" type="number" inputMode="decimal" placeholder="Used for the 50% basic-wage floor" value={totalWage} onChange={e => setTotalWage(e.target.value)} min="0" />
              </div>
            )}

            <div className="field">
              <label>📅 Service period</label>
              <div className="tab-row">
                <button type="button" className={`tab-btn ${inputMode === 'manual' ? 'active' : ''}`} onClick={() => setInputMode('manual')}>Enter years</button>
                <button type="button" className={`tab-btn ${inputMode === 'dates' ? 'active' : ''}`} onClick={() => setInputMode('dates')}>Use dates</button>
              </div>
              {inputMode === 'manual' ? (
                <input type="number" inputMode="decimal" aria-label="Years of service" placeholder="Years of service (e.g. 3.5)" value={years} onChange={e => setYears(e.target.value)} min="0" step="0.5" />
              ) : (
                <div className="date-inputs">
                  <div><div className="date-label">Joining date</div><input type="date" aria-label="Joining date" value={startDate} onChange={e => setStartDate(e.target.value)} /></div>
                  <div><div className="date-label">Last working day</div><input type="date" aria-label="Last working day" value={endDate} onChange={e => setEndDate(e.target.value)} /></div>
                </div>
              )}
            </div>

            <p className="info-box" style={{ fontSize: '14px', margin: '0 0 1rem' }}>
              {method === 'adgm'
                ? 'ADGM: gratuity is due on termination for any reason once you complete 1 year of continuous service (s.61(1)).'
                : 'Resigned, terminated or contract ended? The same formula applies once you complete 1 year of continuous service.'}
            </p>

            <button type="button" className="adv-toggle" onClick={() => setShowAdv(!showAdv)}>
              <span>{showAdv ? '▲' : '▼'} Advanced options — unpaid leave days</span>
            </button>
            {showAdv && (
              <div style={{ paddingTop: '0.5rem' }}>
                <div className="field">
                  <label htmlFor="ic-unpaid">Unpaid leave days</label>
                  <input id="ic-unpaid" type="number" placeholder="e.g. 30" value={unpaidDays} onChange={e => setUnpaidDays(e.target.value)} min="0" />
                </div>
              </div>
            )}

            <button type="button" className="btn-go" onClick={calculate}>Calculate gratuity ▶</button>
            {error && <div className="err on">{error}</div>}
          </div>

          <div className="calc-right">
            {result ? (
              <div className="result-wrap on">
                <div className="res-top">
                  <div className="res-lbl">🇦🇪 Estimated end-of-service gratuity</div>
                  <div className="res-amt">{fmt(result.gratuity)}</div>
                  <div className="res-sub">{result.sub}</div>
                </div>
                <div className="bdown">
                  <div className="br"><span className="bl">Monthly basic salary</span><span className="bv">{fmt(result.salary)}</span></div>
                  {result.basicUsed !== result.salary && (
                    <div className="br"><span className="bl">Basic used (50% floor)</span><span className="bv">{fmt(result.basicUsed)}</span></div>
                  )}
                  <div className="br"><span className="bl">Net service period</span><span className="bv">{result.netYears.toFixed(2)} years</span></div>
                  <div className="br"><span className="bl">{info.dailyLabel}</span><span className="bv">{fmt(result.daily)}</span></div>
                  <div className="br"><span className="bl">Total entitled days</span><span className="bv">{Math.round(result.days)} days</span></div>
                  <div className="br"><span className="bl">Unpaid leave deducted</span><span className="bv">{result.unpaid > 0 ? `${result.unpaid} days` : 'None'}</span></div>
                  <div className="br"><span className="bl">{info.capLabel}</span><span className="bv">{capText}</span></div>
                  <div className="br"><span className="bl">⏰ {info.deadlineLabel}</span><span className="bv" style={{ color: 'var(--uae-red, #CE1126)' }}>{dueText}</span></div>
                </div>
                <div className="res-note">⚠️ Estimate only. Your contract or a court may treat items such as commission differently.</div>
                <PdfDownloadButton
                  title={sectorLabel}
                  amount={fmt(result.gratuity)}
                  subtitle={result.sub}
                  filename={`${sectorLabel.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.pdf`}
                  lines={[
                    { label: 'Monthly basic salary', value: fmt(result.salary) },
                    { label: 'Net service period', value: `${result.netYears.toFixed(2)} years` },
                    { label: 'Daily wage', value: fmt(result.daily) },
                    { label: 'Total entitled days', value: `${Math.round(result.days)} days` },
                    { label: 'Unpaid leave deducted', value: result.unpaid > 0 ? `${result.unpaid} days` : 'None' },
                    { label: 'Cap', value: capText },
                    { label: 'Payment due', value: dueText },
                  ]}
                />
                <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--gray-100)', border: '2px solid var(--gray-200)', borderRadius: '12px', padding: '12px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', color: 'var(--text)', marginTop: '0.25rem' }}>
                  🔄 Main UAE gratuity calculator
                </Link>
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🇦🇪</div>
                <p>Pre-filled with a typical salary.<br />Adjust and click Calculate.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="accrual-card">
        <div className="accrual-title">📊 Gratuity accrual over years of service</div>
        {bars.length === 0 ? (
          <div className="chart-placeholder">Calculate your gratuity above to see the year-by-year accrual chart</div>
        ) : (
          <>
            <div style={{ marginBottom: '0.5rem', fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700 }}>
              Gratuity by year (AED) · highlighted bar = your service period
            </div>
            <div className="chart-bars">
              {bars.map(b => {
                const h = Math.max(Math.round((b.g / maxG) * 120), 2)
                return (
                  <div className="bar-wrap" key={b.yr}>
                    <div className={`bar ${b.isCurrent ? 'current' : ''}`} style={{ height: `${h}px` }} title={`Year ${b.yr}: ${fmt(b.g)}`} />
                    <div className="bar-yr">{b.yr}yr</div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </>
  )
}
