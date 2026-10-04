'use client'
import { useState } from 'react'
import { MOHRE_DOMESTIC_DUES_URL } from '@/lib/sources'

// Domestic workers are governed by Federal Decree-Law No. 9 of 2022. Its Article 22
// leaves the gratuity calculation to a future Cabinet decision, and none has been
// issued (checked 4 Oct 2026). So this tool does NOT apply a statutory rate: the
// user chooses the days-per-year rate from their contract. 14 days is offered as
// a reference because it was the rate in the repealed Federal Law No. 10 of 2017.

const COPY = {
  en: {
    title: 'Domestic worker end-of-service estimator',
    subtitle: 'Uses the rate in your contract · not a statutory formula',
    wage: 'Monthly basic wage (AED)',
    years: 'Years of service',
    yearsPh: 'e.g. 3.5',
    rate: 'Days of basic wage per year of service',
    rates: {
      '14': '14 days — rate in the repealed 2017 law (reference only)',
      '21': '21 days — if your contract mirrors private-sector terms',
      '30': '30 days — one month per year (if agreed)',
      custom: 'Other rate from my contract',
    } as Record<string, string>,
    customPh: 'Days per year',
    unpaid: 'Unpaid absence days (optional)',
    go: 'Estimate',
    err: 'Enter the monthly basic wage and years of service.',
    resLbl: 'Estimated end-of-service amount',
    daily: 'Daily wage (basic ÷ 30)',
    netYears: 'Service counted',
    days: 'Days',
    basis: 'Basis',
    basisVal: (d: number) => `${d} days per year — the rate you selected, not a legal rate`,
    note: 'Estimate only. There is currently no statutory gratuity formula for domestic workers in the UAE. For an official figure use MOHRE’s Domestic Workers Dues Calculator or call 600590000.',
    mohre: 'Open MOHRE Domestic Workers Dues Calculator ↗',
    yrs: 'years',
  },
  ar: {
    title: 'تقدير مستحقات نهاية الخدمة للعمالة المساعدة',
    subtitle: 'يعتمد على النسبة المذكورة في عقدك · ليست معادلة قانونية',
    wage: 'الأجر الأساسي الشهري (درهم)',
    years: 'سنوات الخدمة',
    yearsPh: 'مثال 3.5',
    rate: 'عدد أيام الأجر الأساسي عن كل سنة خدمة',
    rates: {
      '14': '14 يوماً — النسبة في قانون 2017 الملغى (للاسترشاد فقط)',
      '21': '21 يوماً — إذا كان العقد يطابق شروط القطاع الخاص',
      '30': '30 يوماً — شهر عن كل سنة (إذا تم الاتفاق)',
      custom: 'نسبة أخرى من العقد',
    } as Record<string, string>,
    customPh: 'عدد الأيام في السنة',
    unpaid: 'أيام الغياب بدون أجر (اختياري)',
    go: 'احسب التقدير',
    err: 'أدخل الأجر الأساسي الشهري وسنوات الخدمة.',
    resLbl: 'التقدير لمستحقات نهاية الخدمة',
    daily: 'الأجر اليومي (الأساسي ÷ 30)',
    netYears: 'مدة الخدمة المحتسبة',
    days: 'الأيام',
    basis: 'الأساس',
    basisVal: (d: number) => `${d} يوماً عن كل سنة — النسبة التي اخترتها وليست نسبة قانونية`,
    note: 'هذا تقدير فقط. لا توجد حالياً معادلة قانونية لمكافأة نهاية الخدمة للعمالة المساعدة في الإمارات. للحصول على رقم رسمي استخدم خدمة احتساب المستحقات للعمالة المساعدة من وزارة الموارد البشرية والتوطين أو اتصل على 600590000.',
    mohre: 'خدمة احتساب المستحقات من الوزارة ↗',
    yrs: 'سنة',
  },
}

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function DomesticEstimator({ lang = 'en', defaultWage = '1500', defaultYears = '3' }: { lang?: 'en' | 'ar'; defaultWage?: string; defaultYears?: string }) {
  const c = COPY[lang]
  const [wage, setWage] = useState(defaultWage)
  const [years, setYears] = useState(defaultYears)
  const [rate, setRate] = useState('14')
  const [customRate, setCustomRate] = useState('')
  const [unpaid, setUnpaid] = useState('0')
  const [error, setError] = useState('')
  const [result, setResult] = useState<{ amount: number; daily: number; netYears: number; days: number; rateDays: number } | null>(null)

  function calculate() {
    const w = parseFloat(wage), y = parseFloat(years)
    const rateDays = rate === 'custom' ? parseFloat(customRate) : parseFloat(rate)
    if (!w || w <= 0 || !y || y <= 0 || !rateDays || rateDays <= 0) { setError(c.err); setResult(null); return }
    setError('')
    const netYears = Math.max(0, y - (parseInt(unpaid) || 0) / 365)
    const daily = w / 30
    const days = rateDays * netYears
    setResult({ amount: daily * days, daily, netYears, days, rateDays })
  }

  return (
    <div className="calc-card" id="calculator">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>🏠 {c.title}</h2>
          <p>{c.subtitle}</p>
        </div>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label htmlFor="dw-wage">{c.wage}</label>
            <input id="dw-wage" type="number" inputMode="decimal" min="0" value={wage} onChange={e => setWage(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="dw-years">{c.years}</label>
            <input id="dw-years" type="number" inputMode="decimal" min="0" step="0.5" placeholder={c.yearsPh} value={years} onChange={e => setYears(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="dw-rate">{c.rate}</label>
            <select id="dw-rate" value={rate} onChange={e => setRate(e.target.value)}>
              {Object.entries(c.rates).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
            {rate === 'custom' && (
              <input type="number" min="0" aria-label={c.customPh} placeholder={c.customPh} value={customRate} onChange={e => setCustomRate(e.target.value)} style={{ marginTop: '0.5rem' }} />
            )}
          </div>
          <div className="field">
            <label htmlFor="dw-unpaid">{c.unpaid}</label>
            <input id="dw-unpaid" type="number" min="0" value={unpaid} onChange={e => setUnpaid(e.target.value)} />
          </div>
          <button type="button" className="btn-go" onClick={calculate}>{c.go} ▶</button>
          {error && <div className="err on">{error}</div>}
        </div>
        <div className="calc-right">
          {result ? (
            <div className="result-wrap on">
              <div className="res-top">
                <div className="res-lbl">{c.resLbl}</div>
                <div className="res-amt">{fmt(result.amount)}</div>
              </div>
              <div className="bdown">
                <div className="br"><span className="bl">{c.daily}</span><span className="bv">{fmt(result.daily)}</span></div>
                <div className="br"><span className="bl">{c.netYears}</span><span className="bv">{result.netYears.toFixed(2)} {c.yrs}</span></div>
                <div className="br"><span className="bl">{c.days}</span><span className="bv">{result.days.toFixed(1)}</span></div>
                <div className="br"><span className="bl">{c.basis}</span><span className="bv">{c.basisVal(result.rateDays)}</span></div>
              </div>
              <div className="res-note">⚠️ {c.note}</div>
              <a href={MOHRE_DOMESTIC_DUES_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', background: 'var(--gray-100)', border: '2px solid var(--gray-200)', borderRadius: '12px', padding: '12px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', color: 'var(--text)', marginTop: '0.5rem' }}>
                {c.mohre}
              </a>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🏠</div>
              <p>{c.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
