'use client'
import { useState } from 'react'
import Link from 'next/link'

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface Result {
  gratuity: number; sub: string; salary: number; netYears: number
  daily: number; days: number; unpaid: number; capped: boolean; capAmount: number; dueDate: string
}
interface BarData { yr: number; g: number; isCurrent: boolean }

export default function Calculator() {
  const [inputMode, setInputMode] = useState<'manual' | 'dates'>('manual')
  const [salary, setSalary] = useState('')
  const [years, setYears] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [contract, setContract] = useState('unlimited')
  const [reason, setReason] = useState('termination')
  const [unpaidDays, setUnpaidDays] = useState('0')
  const [showAdv, setShowAdv] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState('')
  const [bars, setBars] = useState<BarData[]>([])

  function getYears(): number {
    if (inputMode === 'manual') return parseFloat(years) || 0
    if (!startDate || !endDate) return 0
    const ms = new Date(endDate).getTime() - new Date(startDate).getTime()
    return ms <= 0 ? 0 : ms / (1000 * 60 * 60 * 24 * 365.25)
  }

  function buildBars(sal: number, netYrs: number): BarData[] {
    if (!sal || netYrs < 1) return []
    const daily = sal / 30, cap = sal * 24
    const showYrs = Math.min(Math.max(Math.ceil(netYrs), 5), 25)
    return Array.from({ length: showYrs }, (_, i) => {
      const y = i + 1
      const d = y <= 5 ? 21 * y : 21 * 5 + 30 * (y - 5)
      return { yr: y, g: Math.min(daily * d, cap), isCurrent: y === Math.ceil(netYrs) }
    })
  }

  function calculate() {
    const sal = parseFloat(salary), yrs = getYears()
    if (!sal || sal <= 0 || yrs <= 0) { setError('Please enter your monthly basic salary and years of service.'); setResult(null); setBars([]); return }
    setError('')
    const unpaid = parseInt(unpaidDays) || 0
    const netYrs = Math.max(0, yrs - unpaid / 365)
    const daily = sal / 30
    let days = 0, gratuity = 0, sub = ''
    if (netYrs < 1) { gratuity = 0; days = 0; sub = 'Less than 1 year — no entitlement' }
    else if (netYrs <= 5) { days = 21 * netYrs; gratuity = daily * days; sub = `21 days × ${netYrs.toFixed(1)} years` }
    else { days = 21 * 5 + 30 * (netYrs - 5); gratuity = daily * days; sub = '21 days (yr 1–5) + 30 days (yr 5+)' }
    const capAmount = sal * 24, capped = gratuity > capAmount
    if (capped) gratuity = capAmount
    const due = new Date(); due.setDate(due.getDate() + 14)
    const dueDate = due.toLocaleDateString('en-AE', { day: 'numeric', month: 'short', year: 'numeric' })
    setResult({ gratuity, sub, salary: sal, netYears: netYrs, daily, days, unpaid, capped, capAmount, dueDate })
    setBars(buildBars(sal, netYrs))
  }

  const maxG = bars.length > 0 ? Math.max(...bars.map(b => b.g)) : 1

  return (
    <>
      <div className="calc-card" id="calculator">
        <div className="calc-header">
          <div className="calc-header-left">
            <h2>
              <span className="lang-en">Calculate your UAE end-of-service gratuity</span>
              <span className="lang-ar">احسب مكافأة نهاية الخدمة في الإمارات</span>
            </h2>
            <p>
              <span className="lang-en">Uses basic salary, service period, unpaid leave, and the UAE gratuity cap</span>
              <span className="lang-ar">يعتمد على الراتب الأساسي ومدة الخدمة والإجازة بدون راتب والحد الأقصى للمكافأة</span>
            </p>
          </div>
          <span className="calc-free-badge"><span className="lang-en">FREE TOOL</span><span className="lang-ar">أداة مجانية</span></span>
        </div>

        <div className="calc-body">
          <div className="calc-left">
            <div className="field">
              <label><span className="lang-en">Monthly Basic Salary (AED) — الراتب الأساسي</span><span className="lang-ar">الراتب الأساسي الشهري بالدرهم</span></label>
              <input type="number" placeholder="e.g. 10,000" value={salary} onChange={e => setSalary(e.target.value)} min="0" />
            </div>

            <div className="field">
              <label><span className="lang-en">Service Duration — مدة الخدمة</span><span className="lang-ar">مدة الخدمة</span></label>
              <div className="tab-row">
                <button className={`tab-btn ${inputMode === 'manual' ? 'active' : ''}`} onClick={() => setInputMode('manual')}><span className="lang-en">Enter manually</span><span className="lang-ar">إدخال يدوي</span></button>
                <button className={`tab-btn ${inputMode === 'dates' ? 'active' : ''}`} onClick={() => setInputMode('dates')}><span className="lang-en">Use dates</span><span className="lang-ar">استخدم التواريخ</span></button>
              </div>
              {inputMode === 'manual' ? (
                <input type="number" placeholder="Years of service (e.g. 3.5)" value={years} onChange={e => setYears(e.target.value)} min="0" step="0.5" />
              ) : (
                <div className="date-inputs">
                  <div><div className="date-label">Joining date</div><input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} /></div>
                  <div><div className="date-label">Last working day</div><input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} /></div>
                </div>
              )}
            </div>

            <div className="field">
              <label><span className="lang-en">Contract Type — نوع العقد</span><span className="lang-ar">نوع العقد</span></label>
              <div className="radio-wrap">
                <label><input type="radio" value="unlimited" checked={contract === 'unlimited'} onChange={e => setContract(e.target.value)} /> Unlimited</label>
                <label><input type="radio" value="limited" checked={contract === 'limited'} onChange={e => setContract(e.target.value)} /> Limited</label>
              </div>
            </div>

            <div className="field">
              <label><span className="lang-en">Reason for Leaving — سبب ترك الخدمة</span><span className="lang-ar">سبب ترك الخدمة</span></label>
              <select value={reason} onChange={e => setReason(e.target.value)}>
                <option value="termination">Termination by employer</option>
                <option value="expiry">Contract expiry / completion</option>
                <option value="resignation">Resignation by employee</option>
              </select>
            </div>

            <button className="adv-toggle" onClick={() => setShowAdv(!showAdv)}>
              <span>{showAdv ? '▲' : '▼'} <span className="lang-en">Advanced options — unpaid leave days</span><span className="lang-ar">خيارات متقدمة — أيام بدون راتب</span></span>
            </button>
            {showAdv && (
              <div style={{ paddingTop: '0.5rem' }}>
                <div className="field">
                  <label>Unpaid Leave Days — أيام بدون راتب</label>
                  <input type="number" placeholder="e.g. 30" value={unpaidDays} onChange={e => setUnpaidDays(e.target.value)} min="0" />
                </div>
              </div>
            )}

            <button className="btn-go" onClick={calculate}><span className="lang-en">Calculate Gratuity</span><span className="lang-ar">احسب المكافأة</span> ▶</button>
            {error && <div className="err on">{error}</div>}
          </div>

          <div className="calc-right">
            {result ? (
              <div className="result-wrap on">
                <div className="res-top">
                  <div className="res-lbl">🇦🇪 Estimated End-of-Service Gratuity</div>
                  <div className="res-amt">{fmt(result.gratuity)}</div>
                  <div className="res-sub">{result.sub}</div>
                </div>
                <div className="bdown">
                  <div className="br"><span className="bl">Monthly basic salary</span><span className="bv">{fmt(result.salary)}</span></div>
                  <div className="br"><span className="bl">Net service period</span><span className="bv">{result.netYears.toFixed(2)} years</span></div>
                  <div className="br"><span className="bl">Daily wage (÷ 30)</span><span className="bv">{fmt(result.daily)}</span></div>
                  <div className="br"><span className="bl">Total entitled days</span><span className="bv">{Math.round(result.days)} days</span></div>
                  <div className="br"><span className="bl">Unpaid leave deducted</span><span className="bv">{result.unpaid > 0 ? `${result.unpaid} days` : 'None'}</span></div>
                  <div className="br"><span className="bl">2-year cap applied?</span><span className="bv">{result.capped ? `Yes — ${fmt(result.capAmount)}` : 'No'}</span></div>
                  <div className="br"><span className="bl">⏰ Payment due by</span><span className="bv" style={{ color: 'var(--uae-red)' }}>{result.dueDate}</span></div>
                </div>
                <div className="res-note">⚠️ Estimate based on Article 51, UAE Labour Law. Consult MOHRE or a legal advisor for your final settlement figure.</div>
                <Link
                  href={`/gratuity-investment-calculator?amount=${Math.round(result.gratuity)}`}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', color: '#fff', borderRadius: '12px', padding: '13px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', marginTop: '0.5rem' }}
                >
                  📈 Invest this gratuity — see projected returns
                </Link>
                <Link
                  href="/final-settlement-calculator-uae"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--gray-100)', border: '2px solid var(--gray-200)', color: 'var(--text)', borderRadius: '12px', padding: '12px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', marginTop: '0.25rem' }}
                >
                  🧾 Calculate full final settlement
                </Link>
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🇦🇪</div>
                <p>
                  <span className="lang-en">Enter your details on the left<br />and click Calculate to see<br />your gratuity estimate</span>
                  <span className="lang-ar">أدخل التفاصيل في النموذج<br />ثم اضغط احسب المكافأة<br />لعرض التقدير</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="accrual-card">
        <div className="accrual-title">📊 Gratuity accrual over years of service</div>
        {bars.length === 0 ? (
          <div className="chart-placeholder">Calculate your gratuity above to see the year-by-year accrual projection chart</div>
        ) : (
          <>
            <div style={{ marginBottom: '0.5rem', fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700 }}>
              Gratuity accrual by year (AED) · 🟢 Highlighted bar = your service period
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
