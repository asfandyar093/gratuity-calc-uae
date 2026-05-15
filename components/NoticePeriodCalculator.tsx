'use client'

import { useMemo, useState } from 'react'

function addDays(dateValue: string, days: number) {
  if (!dateValue) return ''
  const date = new Date(`${dateValue}T00:00:00`)
  date.setDate(date.getDate() + days)
  return date.toLocaleDateString('en-AE', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function NoticePeriodCalculator() {
  const [contractType, setContractType] = useState('limited')
  const [years, setYears] = useState('3')
  const [noticeDate, setNoticeDate] = useState(new Date().toISOString().slice(0, 10))

  const result = useMemo(() => {
    const serviceYears = Math.max(0, Number(years) || 0)
    const days = serviceYears >= 10 ? 90 : serviceYears >= 5 ? 60 : 30
    return {
      days,
      lastWorkingDay: addDays(noticeDate, days),
      summary: `${days} days is the minimum notice period estimate for this service length.`,
    }
  }, [noticeDate, years])

  return (
    <div className="calc-card" id="notice-calculator">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>Calculate your UAE notice period</h2>
          <p>Estimate notice days and the earliest last working day from your notice date.</p>
        </div>
        <span className="calc-free-badge">FREE TOOL</span>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>Contract type</label>
            <select value={contractType} onChange={(event) => setContractType(event.target.value)}>
              <option value="limited">Limited contract</option>
              <option value="unlimited">Unlimited contract</option>
            </select>
          </div>
          <div className="field">
            <label>Completed years of service</label>
            <input type="number" min="0" step="0.5" value={years} onChange={(event) => setYears(event.target.value)} />
          </div>
          <div className="field">
            <label>Date notice is given</label>
            <input type="date" value={noticeDate} onChange={(event) => setNoticeDate(event.target.value)} />
          </div>
        </div>
        <div className="calc-right">
          <div className="result-wrap on">
            <div className="res-top">
              <div className="res-lbl">Estimated notice period</div>
              <div className="res-amt">{result.days} days</div>
              <div className="res-sub">{contractType === 'limited' ? 'Limited contract' : 'Unlimited contract'}</div>
            </div>
            <div className="bdown">
              <div className="br"><span className="bl">Service length</span><span className="bv">{years || 0} years</span></div>
              <div className="br"><span className="bl">Notice date</span><span className="bv">{noticeDate}</span></div>
              <div className="br"><span className="bl">Earliest last working day</span><span className="bv">{result.lastWorkingDay}</span></div>
            </div>
            <div className="res-note">Estimate only. Your contract may provide a longer notice period within UAE Labour Law limits.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
