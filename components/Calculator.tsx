'use client'
import { useState } from 'react'
import Link from 'next/link'
import PdfDownloadButton from './PdfDownloadButton'
import { gratuityAmount } from '@/lib/gratuity'

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface Result {
  gratuity: number; sub: string; salary: number; netYears: number
  daily: number; days: number; unpaid: number; capped: boolean; capAmount: number; dueDate: string | null
}
interface BarData { yr: number; g: number; isCurrent: boolean }

const COPY = {
  en: {
    title: 'Calculate your UAE end-of-service gratuity',
    subtitle: 'Article 51 formula · basic salary, service period, unpaid leave and the two-year cap',
    free: 'FREE TOOL',
    salary: 'Monthly basic salary (AED)',
    duration: 'Service period',
    manual: 'Enter years',
    dates: 'Use dates',
    yearsPh: 'Years of service (e.g. 3.5)',
    joining: 'Joining date',
    last: 'Last working day',
    reasonNote: 'Resigned, terminated or contract ended? Under the current law the same Article 51 formula applies once you have 1 year of service.',
    adv: 'Advanced options — unpaid leave days',
    unpaid: 'Unpaid leave days',
    go: 'Calculate gratuity',
    err: 'Please enter your monthly basic salary and years of service.',
    resLbl: 'Estimated end-of-service gratuity',
    lessThan1: 'Less than 1 year — no entitlement',
    rowSalary: 'Monthly basic salary', rowYears: 'Net service period', rowDaily: 'Daily wage (basic ÷ 30)',
    rowDays: 'Total entitled days', rowUnpaid: 'Unpaid leave deducted', rowCap: 'Two-year cap applied?',
    rowDue: 'Payment due by (Art. 53: 14 days)', none: 'None', no: 'No', yes: 'Yes —', years: 'years', daysW: 'days',
    note: 'Estimate based on Article 51 of Federal Decree-Law No. 33 of 2021. Your contract, pre-2022 service or a special regime (DIFC, ADGM, domestic workers) can change the figure.',
    invest: 'Invest this gratuity — see projected returns',
    settlement: 'Calculate your full final settlement',
    empty: ['Enter your details', 'and click Calculate to see', 'your gratuity estimate'],
    chartTitle: 'Gratuity accrual over years of service',
    chartEmpty: 'Calculate your gratuity above to see the year-by-year accrual chart',
    chartLegend: 'Gratuity by year (AED) · highlighted bar = your service period',
    yr: 'yr',
    sub5: (y: string) => `21 days × ${y} years`,
    subMore: '21 days (years 1–5) + 30 days (after year 5)',
  },
  ar: {
    title: 'احسب مكافأة نهاية الخدمة في الإمارات',
    subtitle: 'معادلة المادة 51 · الراتب الأساسي ومدة الخدمة والإجازة بدون راتب والحد الأقصى',
    free: 'أداة مجانية',
    salary: 'الراتب الأساسي الشهري (درهم)',
    duration: 'مدة الخدمة',
    manual: 'إدخال عدد السنوات',
    dates: 'استخدام التواريخ',
    yearsPh: 'عدد سنوات الخدمة (مثال 3.5)',
    joining: 'تاريخ بدء العمل',
    last: 'آخر يوم عمل',
    reasonNote: 'استقالة أو إنهاء خدمة أو انتهاء العقد؟ وفق القانون الحالي تُطبق معادلة المادة 51 نفسها بعد إكمال سنة خدمة.',
    adv: 'خيارات متقدمة — أيام الإجازة بدون راتب',
    unpaid: 'أيام الإجازة بدون راتب',
    go: 'احسب المكافأة',
    err: 'يرجى إدخال الراتب الأساسي الشهري ومدة الخدمة.',
    resLbl: 'التقدير لمكافأة نهاية الخدمة',
    lessThan1: 'أقل من سنة — لا استحقاق',
    rowSalary: 'الراتب الأساسي الشهري', rowYears: 'صافي مدة الخدمة', rowDaily: 'الأجر اليومي (الأساسي ÷ 30)',
    rowDays: 'إجمالي الأيام المستحقة', rowUnpaid: 'الإجازة بدون راتب المخصومة', rowCap: 'هل طُبق الحد الأقصى؟',
    rowDue: 'موعد الدفع (المادة 53: 14 يوماً)', none: 'لا يوجد', no: 'لا', yes: 'نعم —', years: 'سنة', daysW: 'يوم',
    note: 'تقدير وفق المادة 51 من المرسوم بقانون اتحادي رقم 33 لسنة 2021. قد يختلف المبلغ حسب العقد أو الخدمة قبل 2022 أو الأنظمة الخاصة (DIFC وADGM والعمالة المساعدة).',
    invest: 'استثمر المكافأة — شاهد العائد المتوقع',
    settlement: 'احسب التسوية النهائية كاملة',
    empty: ['أدخل بياناتك', 'ثم اضغط احسب المكافأة', 'لعرض التقدير'],
    chartTitle: 'تراكم المكافأة حسب سنوات الخدمة',
    chartEmpty: 'احسب المكافأة لعرض مخطط التراكم سنة بسنة',
    chartLegend: 'المكافأة حسب السنة (درهم) · العمود المميز = مدة خدمتك',
    yr: 'س',
    sub5: (y: string) => `21 يوماً × ${y} سنة`,
    subMore: '21 يوماً (السنوات 1–5) + 30 يوماً (بعد السنة الخامسة)',
  },
}

export default function Calculator({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const c = COPY[lang]
  const [inputMode, setInputMode] = useState<'manual' | 'dates'>('manual')
  const [salary, setSalary] = useState('')
  const [years, setYears] = useState('')
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
    // Article 67: a calendar year is deemed 365 days.
    return ms <= 0 ? 0 : ms / (1000 * 60 * 60 * 24 * 365)
  }

  function buildBars(sal: number, netYrs: number): BarData[] {
    if (!sal || netYrs < 1) return []
    const showYrs = Math.min(Math.max(Math.ceil(netYrs), 5), 25)
    return Array.from({ length: showYrs }, (_, i) => {
      const y = i + 1
      return { yr: y, g: gratuityAmount(sal, y).amount, isCurrent: y === Math.ceil(netYrs) }
    })
  }

  function calculate() {
    const sal = parseFloat(salary), yrs = getYears()
    if (!sal || sal <= 0 || yrs <= 0) { setError(c.err); setResult(null); setBars([]); return }
    setError('')
    const unpaid = parseInt(unpaidDays) || 0
    const netYrs = Math.max(0, yrs - unpaid / 365)
    const g = gratuityAmount(sal, netYrs)
    const sub = netYrs < 1 ? c.lessThan1 : netYrs <= 5 ? c.sub5(netYrs.toFixed(1)) : c.subMore
    // Article 53: dues are payable within 14 days of the end of the contract.
    let dueDate: string | null = null
    if (inputMode === 'dates' && endDate) {
      const due = new Date(endDate); due.setDate(due.getDate() + 14)
      dueDate = due.toLocaleDateString(lang === 'ar' ? 'ar-AE' : 'en-AE', { day: 'numeric', month: 'short', year: 'numeric' })
    }
    setResult({ gratuity: g.amount, sub, salary: sal, netYears: netYrs, daily: g.daily, days: g.days, unpaid, capped: g.capped, capAmount: g.cap, dueDate })
    setBars(buildBars(sal, netYrs))
  }

  const maxG = bars.length > 0 ? Math.max(...bars.map(b => b.g)) : 1
  const dueText = result?.dueDate ?? (lang === 'ar' ? 'خلال 14 يوماً من انتهاء العقد' : 'Within 14 days of the contract ending')

  return (
    <>
      <div className="calc-card" id="calculator">
        <div className="calc-header">
          <div className="calc-header-left">
            <h2>{c.title}</h2>
            <p>{c.subtitle}</p>
          </div>
          <span className="calc-free-badge">{c.free}</span>
        </div>

        <div className="calc-body">
          <div className="calc-left">
            <div className="field">
              <label htmlFor="calc-salary">{c.salary}</label>
              <input id="calc-salary" type="number" inputMode="decimal" placeholder="e.g. 10,000" value={salary} onChange={e => setSalary(e.target.value)} min="0" />
            </div>

            <div className="field">
              <label>{c.duration}</label>
              <div className="tab-row">
                <button type="button" className={`tab-btn ${inputMode === 'manual' ? 'active' : ''}`} onClick={() => setInputMode('manual')}>{c.manual}</button>
                <button type="button" className={`tab-btn ${inputMode === 'dates' ? 'active' : ''}`} onClick={() => setInputMode('dates')}>{c.dates}</button>
              </div>
              {inputMode === 'manual' ? (
                <input type="number" inputMode="decimal" aria-label={c.yearsPh} placeholder={c.yearsPh} value={years} onChange={e => setYears(e.target.value)} min="0" step="0.5" />
              ) : (
                <div className="date-inputs">
                  <div><div className="date-label">{c.joining}</div><input type="date" aria-label={c.joining} value={startDate} onChange={e => setStartDate(e.target.value)} /></div>
                  <div><div className="date-label">{c.last}</div><input type="date" aria-label={c.last} value={endDate} onChange={e => setEndDate(e.target.value)} /></div>
                </div>
              )}
            </div>

            <p className="info-box" style={{ fontSize: '14px', margin: '0 0 1rem' }}>{c.reasonNote}</p>

            <button type="button" className="adv-toggle" onClick={() => setShowAdv(!showAdv)}>
              <span>{showAdv ? '▲' : '▼'} {c.adv}</span>
            </button>
            {showAdv && (
              <div style={{ paddingTop: '0.5rem' }}>
                <div className="field">
                  <label htmlFor="calc-unpaid">{c.unpaid}</label>
                  <input id="calc-unpaid" type="number" placeholder="e.g. 30" value={unpaidDays} onChange={e => setUnpaidDays(e.target.value)} min="0" />
                </div>
              </div>
            )}

            <button type="button" className="btn-go" onClick={calculate}>{c.go} ▶</button>
            {error && <div className="err on">{error}</div>}
          </div>

          <div className="calc-right">
            {result ? (
              <div className="result-wrap on">
                <div className="res-top">
                  <div className="res-lbl">🇦🇪 {c.resLbl}</div>
                  <div className="res-amt">{fmt(result.gratuity)}</div>
                  <div className="res-sub">{result.sub}</div>
                </div>
                <div className="bdown">
                  <div className="br"><span className="bl">{c.rowSalary}</span><span className="bv">{fmt(result.salary)}</span></div>
                  <div className="br"><span className="bl">{c.rowYears}</span><span className="bv">{result.netYears.toFixed(2)} {c.years}</span></div>
                  <div className="br"><span className="bl">{c.rowDaily}</span><span className="bv">{fmt(result.daily)}</span></div>
                  <div className="br"><span className="bl">{c.rowDays}</span><span className="bv">{Math.round(result.days)} {c.daysW}</span></div>
                  <div className="br"><span className="bl">{c.rowUnpaid}</span><span className="bv">{result.unpaid > 0 ? `${result.unpaid} ${c.daysW}` : c.none}</span></div>
                  <div className="br"><span className="bl">{c.rowCap}</span><span className="bv">{result.capped ? `${c.yes} ${fmt(result.capAmount)}` : c.no}</span></div>
                  <div className="br"><span className="bl">⏰ {c.rowDue}</span><span className="bv" style={{ color: 'var(--uae-red)' }}>{dueText}</span></div>
                </div>
                <div className="res-note">⚠️ {c.note}</div>
                <PdfDownloadButton
                  title="UAE End-of-Service Gratuity Estimate"
                  amount={fmt(result.gratuity)}
                  subtitle={result.sub}
                  filename="uae-gratuity-calculation.pdf"
                  lines={[
                    { label: 'Monthly basic salary', value: fmt(result.salary) },
                    { label: 'Net service period', value: `${result.netYears.toFixed(2)} years` },
                    { label: 'Daily wage', value: fmt(result.daily) },
                    { label: 'Total entitled days', value: `${Math.round(result.days)} days` },
                    { label: 'Unpaid leave deducted', value: result.unpaid > 0 ? `${result.unpaid} days` : 'None' },
                    { label: 'Two-year cap applied', value: result.capped ? `Yes - ${fmt(result.capAmount)}` : 'No' },
                    { label: 'Payment due (Art. 53)', value: result.dueDate ?? 'Within 14 days of the contract ending' },
                  ]}
                />
                <Link
                  href={`/gratuity-investment-calculator?amount=${Math.round(result.gratuity)}`}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', color: '#fff', borderRadius: '12px', padding: '13px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', marginTop: '0.5rem' }}
                >
                  📈 {c.invest}
                </Link>
                <Link
                  href={lang === 'ar' ? '/ar/final-settlement-calculator-uae' : '/final-settlement-calculator-uae'}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--gray-100)', border: '2px solid var(--gray-200)', color: 'var(--text)', borderRadius: '12px', padding: '12px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', marginTop: '0.25rem' }}
                >
                  🧾 {c.settlement}
                </Link>
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">🇦🇪</div>
                <p>{c.empty[0]}<br />{c.empty[1]}<br />{c.empty[2]}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="accrual-card">
        <div className="accrual-title">📊 {c.chartTitle}</div>
        {bars.length === 0 ? (
          <div className="chart-placeholder">{c.chartEmpty}</div>
        ) : (
          <>
            <div style={{ marginBottom: '0.5rem', fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700 }}>
              {c.chartLegend}
            </div>
            <div className="chart-bars">
              {bars.map(b => {
                const h = Math.max(Math.round((b.g / maxG) * 120), 2)
                return (
                  <div className="bar-wrap" key={b.yr}>
                    <div className={`bar ${b.isCurrent ? 'current' : ''}`} style={{ height: `${h}px` }} title={`${b.yr}: ${fmt(b.g)}`} />
                    <div className="bar-yr">{b.yr}{c.yr}</div>
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
