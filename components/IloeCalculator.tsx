'use client'

import { useMemo, useState } from 'react'
import { iloeBlockers, iloeCompensation, iloePremium, type IloeExit } from '@/lib/iloe'

const aed = (n: number) => `AED ${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}`

export default function IloeCalculator() {
  const [salary, setSalary] = useState('9000')
  const [months, setMonths] = useState('14')
  const [exit, setExit] = useState<IloeExit>('terminated')
  const [days, setDays] = useState('10')
  const [upToDate, setUpToDate] = useState(true)
  const [absconding, setAbsconding] = useState(false)

  const r = useMemo(() => {
    const basic = Math.max(0, Number(salary) || 0)
    const premium = iloePremium(basic)
    const comp = iloeCompensation(basic)
    const blockers = iloeBlockers({
      monthsSubscribed: Math.max(0, Number(months) || 0),
      premiumsUpToDate: upToDate,
      exit,
      daysSinceEnd: Math.max(0, Number(days) || 0),
      absconding,
      inUae: true,
    })
    return { basic, premium, comp, blockers }
  }, [salary, months, exit, days, upToDate, absconding])

  return (
    <div className="calc-card" id="iloe-calculator">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>ILOE cost and payout calculator</h2>
          <p>Enter your basic salary to see your category, the premium and the most you could be paid.</p>
        </div>
        <span className="calc-free-badge">FREE TOOL</span>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label htmlFor="iloe-salary">Monthly basic salary (AED)</label>
            <input id="iloe-salary" type="number" min="0" value={salary} onChange={(e) => setSalary(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="iloe-months">Months you have been subscribed</label>
            <input id="iloe-months" type="number" min="0" value={months} onChange={(e) => setMonths(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="iloe-exit">How did the job end?</label>
            <select id="iloe-exit" value={exit} onChange={(e) => setExit(e.target.value as IloeExit)}>
              <option value="terminated">Terminated by the employer</option>
              <option value="resigned">I resigned</option>
              <option value="disciplinary">Dismissed for disciplinary reasons</option>
              <option value="contract_end">Fixed term contract ended</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="iloe-days">Days since the employment ended</label>
            <input id="iloe-days" type="number" min="0" value={days} onChange={(e) => setDays(e.target.value)} />
          </div>
          <div className="field">
            <label><input type="checkbox" checked={upToDate} onChange={(e) => setUpToDate(e.target.checked)} /> All premiums paid on schedule</label>
          </div>
          <div className="field">
            <label><input type="checkbox" checked={absconding} onChange={(e) => setAbsconding(e.target.checked)} /> There is an absconding complaint against me</label>
          </div>
        </div>
        <div className="calc-right">
          <div className="result-wrap on">
            <div className="res-top">
              <div className="res-lbl">Most you could receive</div>
              <div className="res-amt">{aed(r.comp.total)}</div>
              <div className="res-sub">{aed(r.comp.monthly)} a month for up to 3 months</div>
            </div>
            <div className="bdown">
              <div className="br"><span className="bl">Category</span><span className="bv">{r.premium.category === 1 ? 'Category 1 (AED 16,000 or below)' : 'Category 2 (above AED 16,000)'}</span></div>
              <div className="br"><span className="bl">Premium, at most</span><span className="bv">{aed(r.premium.monthly)} a month, {aed(r.premium.annual)} a year</span></div>
              <div className="br"><span className="bl">60% of your salary</span><span className="bv">{aed(r.comp.uncapped)}</span></div>
              <div className="br"><span className="bl">Monthly cap</span><span className="bv">{aed(r.comp.cap)}{r.comp.capped ? ' (applied)' : ''}</span></div>
            </div>
            <div className="info-box" style={{ marginTop: '1rem' }}>
              {r.blockers.length === 0
                ? 'On the published conditions this claim looks eligible. The insurer makes the final decision.'
                : (
                  <>
                    <strong>This claim may not be covered:</strong>
                    <ul>{r.blockers.map((b) => <li key={b}>{b}</li>)}</ul>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
