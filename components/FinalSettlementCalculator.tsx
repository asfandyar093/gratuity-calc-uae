'use client'
import { useState } from 'react'
import Link from 'next/link'

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}


const COPY = {
  en: {
    title: '🧾 UAE Final Settlement Calculator',
    subtitle: 'Gratuity + unpaid salary + leave encashment + notice pay + additions and deductions',
    free: '✓ FREE TOOL',
    basic: 'Monthly Basic Salary (AED)', basicPh: 'e.g. 10,000',
    gross: 'Monthly Gross Salary / Total Package (AED)', grossPh: 'Used for unpaid salary and notice pay',
    period: 'Service Period', useDates: 'Use dates', useYears: 'Enter years',
    joining: 'Joining date', lastDay: 'Last working day', yearsPh: 'Years of service (e.g. 3.5)',
    unpaidLeave: 'Unpaid Leave Days', unpaidSalary: 'Unpaid Salary Days', unpaidSalaryPh: 'e.g. 12',
    unusedLeave: 'Unused Annual Leave Days', unusedLeavePh: 'e.g. 18',
    leaveBasis: 'Leave Pay Basis', basicOpt: 'Basic salary', grossOpt: 'Gross salary',
    notice: 'Notice Period Pay / Deduction', noticeNone: 'No notice adjustment', noticeEmployer: 'Employer owes notice pay to employee', noticeEmployee: 'Employee owes notice deduction',
    noticeDays: 'Notice Days', noticeDaysPh: 'e.g. 30',
    ticket: 'Air Ticket / Repatriation / Allowance (AED)', other: 'Other Additions (AED)', otherPh: 'Commissions, reimbursements',
    deductions: 'Loans / Advances / Other Deductions (AED)',
    go: 'Calculate Final Settlement ▶',
    errBasic: 'Please enter your monthly basic salary.',
    errPeriod: 'Please enter your service period or joining and last working dates.',
    resLbl: 'Estimated UAE Final Settlement', resSub: 'Total payable before bank or employer-specific adjustments',
    rGratuity: 'End-of-service gratuity', rUnpaid: 'Unpaid salary', rLeave: 'Unused leave encashment', rNotice: 'Notice adjustment',
    rAdd: 'Ticket / reimbursements / additions', rDed: 'Loans / advances / deductions', rNet: 'Net service period', years: 'years',
    rDue: 'Payment due by (Art. 53: 14 days)',
    noteUnder1: 'Less than 1 year of net service: statutory gratuity is AED 0.',
    note15: (y: string) => `Gratuity: 21 days × ${y} years (Article 51).`,
    note5plus: 'Gratuity: 21 days for years 1–5, then 30 days for each additional year (Article 51).',
    capped: (v: string) => `The two-year cap was applied at ${v}.`,
    daily: (v: string) => `Daily basic wage: ${v}.`,
    checklist: 'Read the final settlement checklist →', checklistHref: '/blog/uae-final-settlement-checklist',
    empty: ['Enter your salary, service', 'period and final dues to see', 'your settlement estimate'],
    locale: 'en-AE',
  },
  ar: {
    title: '🧾 حاسبة التسوية النهائية في الإمارات',
    subtitle: 'المكافأة + الراتب غير المدفوع + بدل الإجازات + بدل الإنذار + الإضافات والخصومات',
    free: '✓ أداة مجانية',
    basic: 'الراتب الأساسي الشهري (درهم)', basicPh: 'مثال: 10000',
    gross: 'إجمالي الراتب الشهري (درهم)', grossPh: 'يُستخدم للراتب غير المدفوع وبدل الإنذار',
    period: 'مدة الخدمة', useDates: 'استخدام التواريخ', useYears: 'إدخال السنوات',
    joining: 'تاريخ الالتحاق', lastDay: 'آخر يوم عمل', yearsPh: 'سنوات الخدمة (مثال: 3.5)',
    unpaidLeave: 'أيام الإجازة غير مدفوعة الأجر', unpaidSalary: 'أيام الراتب غير المدفوع', unpaidSalaryPh: 'مثال: 12',
    unusedLeave: 'أيام الإجازة السنوية غير المستخدمة', unusedLeavePh: 'مثال: 18',
    leaveBasis: 'أساس احتساب بدل الإجازة', basicOpt: 'الراتب الأساسي', grossOpt: 'إجمالي الراتب',
    notice: 'بدل فترة الإنذار أو خصمها', noticeNone: 'بدون تعديل للإنذار', noticeEmployer: 'صاحب العمل مدين ببدل الإنذار للعامل', noticeEmployee: 'العامل مدين بخصم فترة الإنذار',
    noticeDays: 'أيام الإنذار', noticeDaysPh: 'مثال: 30',
    ticket: 'تذكرة السفر / العودة / البدل (درهم)', other: 'إضافات أخرى (درهم)', otherPh: 'عمولات، مبالغ مستردة',
    deductions: 'القروض / السلف / خصومات أخرى (درهم)',
    go: 'احسب التسوية النهائية ◀',
    errBasic: 'يرجى إدخال الراتب الأساسي الشهري.',
    errPeriod: 'يرجى إدخال مدة الخدمة أو تاريخ الالتحاق وآخر يوم عمل.',
    resLbl: 'التسوية النهائية التقديرية', resSub: 'الإجمالي المستحق قبل أي تعديلات خاصة بصاحب العمل',
    rGratuity: 'مكافأة نهاية الخدمة', rUnpaid: 'الراتب غير المدفوع', rLeave: 'بدل الإجازات غير المستخدمة', rNotice: 'تعديل الإنذار',
    rAdd: 'التذكرة / المبالغ المستردة / الإضافات', rDed: 'القروض / السلف / الخصومات', rNet: 'صافي مدة الخدمة', years: 'سنة',
    rDue: 'موعد السداد (المادة 53: 14 يوماً)',
    noteUnder1: 'صافي الخدمة أقل من سنة: لا تستحق مكافأة نهاية الخدمة.',
    note15: (y: string) => `المكافأة: 21 يوماً × ${y} سنة (المادة 51).`,
    note5plus: 'المكافأة: 21 يوماً عن كل سنة من السنوات الخمس الأولى، ثم 30 يوماً عن كل سنة إضافية (المادة 51).',
    capped: (v: string) => `تم تطبيق الحد الأقصى (أجر سنتين) عند ${v}.`,
    daily: (v: string) => `الأجر الأساسي اليومي: ${v}.`,
    checklist: 'احسب مكافأة نهاية الخدمة وحدها ←', checklistHref: '/ar',
    empty: ['أدخل راتبك ومدة خدمتك', 'ومستحقاتك النهائية', 'لعرض تقدير التسوية'],
    locale: 'ar-AE',
  },
} as const

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

export default function FinalSettlementCalculator({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const t = COPY[lang]
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
    return base.toLocaleDateString(t.locale, { day: 'numeric', month: 'short', year: 'numeric' })
  }

  function calculate() {
    const basic = numberValue(basicSalary)
    const gross = numberValue(grossSalary) || basic
    const grossDaily = gross / 30
    const serviceYears = getYears()
    const unpaidLeave = parseInt(unpaidLeaveDays) || 0

    if (!basic || basic <= 0) {
      setError(t.errBasic)
      setResult(null)
      return
    }

    if (serviceYears <= 0) {
      setError(t.errPeriod)
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
      note = t.noteUnder1
    } else if (netYears <= 5) {
      gratuityDays = 21 * netYears
      gratuity = dailyBasic * gratuityDays
      note = t.note15(netYears.toFixed(2))
    } else {
      gratuityDays = 21 * 5 + 30 * (netYears - 5)
      gratuity = dailyBasic * gratuityDays
      note = t.note5plus
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
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <span className="calc-free-badge">{t.free}</span>
      </div>

      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>{t.basic}</label>
            <input type="number" placeholder={t.basicPh} value={basicSalary} onChange={e => setBasicSalary(e.target.value)} min="0" />
          </div>

          <div className="field">
            <label>{t.gross}</label>
            <input type="number" placeholder={t.grossPh} value={grossSalary} onChange={e => setGrossSalary(e.target.value)} min="0" />
          </div>

          <div className="field">
            <label>{t.period}</label>
            <div className="tab-row">
              <button className={`tab-btn ${inputMode === 'dates' ? 'active' : ''}`} onClick={() => setInputMode('dates')}>{t.useDates}</button>
              <button className={`tab-btn ${inputMode === 'manual' ? 'active' : ''}`} onClick={() => setInputMode('manual')}>{t.useYears}</button>
            </div>
            {inputMode === 'dates' ? (
              <div className="date-inputs">
                <div><div className="date-label">{t.joining}</div><input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} /></div>
                <div><div className="date-label">{t.lastDay}</div><input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} /></div>
              </div>
            ) : (
              <input type="number" placeholder={t.yearsPh} value={years} onChange={e => setYears(e.target.value)} min="0" step="0.1" />
            )}
          </div>

          <div className="date-inputs">
            <div className="field">
              <label>{t.unpaidLeave}</label>
              <input type="number" placeholder="0" value={unpaidLeaveDays} onChange={e => setUnpaidLeaveDays(e.target.value)} min="0" />
            </div>
            <div className="field">
              <label>{t.unpaidSalary}</label>
              <input type="number" placeholder={t.unpaidSalaryPh} value={unpaidSalaryDays} onChange={e => setUnpaidSalaryDays(e.target.value)} min="0" step="0.5" />
            </div>
          </div>

          <div className="date-inputs">
            <div className="field">
              <label>{t.unusedLeave}</label>
              <input type="number" placeholder={t.unusedLeavePh} value={unusedLeaveDays} onChange={e => setUnusedLeaveDays(e.target.value)} min="0" step="0.5" />
            </div>
            <div className="field">
              <label>{t.leaveBasis}</label>
              <select value={leaveBase} onChange={e => setLeaveBase(e.target.value as 'basic' | 'gross')}>
                <option value="basic">{t.basicOpt}</option>
                <option value="gross">{t.grossOpt}</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label>{t.notice}</label>
            <select value={noticeType} onChange={e => setNoticeType(e.target.value as 'none' | 'employee' | 'employer')}>
              <option value="none">{t.noticeNone}</option>
              <option value="employer">{t.noticeEmployer}</option>
              <option value="employee">{t.noticeEmployee}</option>
            </select>
          </div>

          {noticeType !== 'none' && (
            <div className="field">
              <label>{t.noticeDays}</label>
              <input type="number" placeholder={t.noticeDaysPh} value={noticeDays} onChange={e => setNoticeDays(e.target.value)} min="0" step="0.5" />
            </div>
          )}

          <div className="date-inputs">
            <div className="field">
              <label>{t.ticket}</label>
              <input type="number" placeholder="0" value={ticketAllowance} onChange={e => setTicketAllowance(e.target.value)} min="0" />
            </div>
            <div className="field">
              <label>{t.other}</label>
              <input type="number" placeholder={t.otherPh} value={otherAdditions} onChange={e => setOtherAdditions(e.target.value)} min="0" />
            </div>
          </div>

          <div className="field">
            <label>{t.deductions}</label>
            <input type="number" placeholder="0" value={otherDeductions} onChange={e => setOtherDeductions(e.target.value)} min="0" />
          </div>

          <button className="btn-go" onClick={calculate}>{t.go}</button>
          {error && <div className="err on">{error}</div>}
        </div>

        <div className="calc-right">
          {result ? (
            <div className="result-wrap on">
              <div className="res-top">
                <div className="res-lbl">{t.resLbl}</div>
                <div className="res-amt">{fmt(result.total)}</div>
                <div className="res-sub">{t.resSub}</div>
              </div>

              <div className="bdown">
                <div className="br"><span className="bl">{t.rGratuity}</span><span className="bv">{fmt(result.gratuity)}</span></div>
                <div className="br"><span className="bl">{t.rUnpaid}</span><span className="bv">{fmt(result.unpaidSalary)}</span></div>
                <div className="br"><span className="bl">{t.rLeave}</span><span className="bv">{fmt(result.leaveEncashment)}</span></div>
                <div className="br"><span className="bl">{t.rNotice}</span><span className="bv" style={{ color: result.noticeAmount < 0 ? 'var(--red)' : 'var(--green-dark)' }}>{fmt(result.noticeAmount)}</span></div>
                <div className="br"><span className="bl">{t.rAdd}</span><span className="bv">{fmt(result.additions)}</span></div>
                <div className="br"><span className="bl">{t.rDed}</span><span className="bv" style={{ color: result.deductions > 0 ? 'var(--red)' : undefined }}>{result.deductions > 0 ? `-${fmt(result.deductions)}` : fmt(0)}</span></div>
                <div className="br"><span className="bl">{t.rNet}</span><span className="bv">{result.netYears.toFixed(2)} {t.years}</span></div>
                <div className="br"><span className="bl">{t.rDue}</span><span className="bv">{result.dueDate}</span></div>
              </div>

              <div className="res-note">
                {result.note} {result.capped ? t.capped(fmt(result.capAmount)) : t.daily(fmt(result.dailyBasic))}
              </div>

              <Link href={t.checklistHref} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--gray-100)', border: '2px solid var(--gray-200)', borderRadius: '12px', padding: '12px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', color: 'var(--text)', marginTop: '0.25rem' }}>
                {t.checklist}
              </Link>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🧾</div>
              <p>{t.empty[0]}<br />{t.empty[1]}<br />{t.empty[2]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
