'use client'

import { useMemo, useState } from 'react'

function addDays(dateValue: string, days: number) {
  if (!dateValue) return ''
  const date = new Date(`${dateValue}T00:00:00`)
  date.setDate(date.getDate() + days)
  return date.toLocaleDateString('en-AE', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function NoticePeriodCalculator() {
  const [contractDays, setContractDays] = useState('30')
  const [noticeDate, setNoticeDate] = useState(new Date().toISOString().slice(0, 10))

  const result = useMemo(() => {
    // Article 43, Federal Decree-Law No. 33 of 2021: notice is set in the contract,
    // at least 30 days and no more than 90 days.
    const entered = Math.round(Number(contractDays) || 0)
    const days = Math.min(90, Math.max(30, entered))
    const adjusted = entered !== days
    return {
      days,
      adjusted,
      lastWorkingDay: addDays(noticeDate, days),
    }
  }, [noticeDate, contractDays])

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
            <label htmlFor="notice-days">Notice period in your contract (days)</label>
            <input id="notice-days" type="number" min="30" max="90" step="1" value={contractDays} onChange={(event) => setContractDays(event.target.value)} />
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
              <div className="res-sub">{result.adjusted ? 'Adjusted to the 30–90 day legal range (Article 43)' : 'Within the 30–90 day legal range (Article 43)'}</div>
            </div>
            <div className="bdown">
                            <div className="br"><span className="bl">Notice date</span><span className="bv">{noticeDate}</span></div>
              <div className="br"><span className="bl">Earliest last working day</span><span className="bv">{result.lastWorkingDay}</span></div>
            </div>
            <div className="res-note">Article 43 of Federal Decree-Law No. 33 of 2021: the notice period is agreed in the contract, at least 30 days and no more than 90 days. Probation has separate notice rules.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
