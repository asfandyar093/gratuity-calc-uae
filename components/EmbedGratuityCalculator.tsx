'use client'

import { useState } from 'react'
import { gratuityAmount, formatAed } from '@/lib/gratuity'

const SITE = 'https://www.uaegratuitycheck.com/'

function num(v: string): number {
  const n = parseFloat(v)
  return Number.isFinite(n) && n > 0 ? n : 0
}

export default function EmbedGratuityCalculator() {
  const [basic, setBasic] = useState('')
  const [years, setYears] = useState('')
  const [months, setMonths] = useState('')

  const salary = num(basic)
  const totalYears = Math.min(num(years), 60) + Math.min(num(months), 11) / 12
  const ready = salary > 0 && (years !== '' || months !== '')
  const eligible = totalYears >= 1
  const r = ready && eligible ? gratuityAmount(salary, totalYears) : null

  return (
    <main className="emb">
      <h1>UAE gratuity calculator</h1>
      <p className="sub">End of service gratuity for private sector employees under Article 51 of Federal Decree-Law No. 33 of 2021.</p>

      <label htmlFor="emb-basic">Monthly basic salary (AED)</label>
      <input id="emb-basic" inputMode="decimal" type="number" min="0" placeholder="For example 8000" value={basic} onChange={e => setBasic(e.target.value)} />
      <p className="hint">Basic salary only. Housing, transport and other allowances are not included.</p>

      <div className="row">
        <div>
          <label htmlFor="emb-years">Years of service</label>
          <input id="emb-years" inputMode="numeric" type="number" min="0" max="60" placeholder="0" value={years} onChange={e => setYears(e.target.value)} />
        </div>
        <div>
          <label htmlFor="emb-months">Extra months</label>
          <input id="emb-months" inputMode="numeric" type="number" min="0" max="11" placeholder="0" value={months} onChange={e => setMonths(e.target.value)} />
        </div>
      </div>

      <div aria-live="polite">
        {r && (
          <div className="out">
            <div className="lbl">Estimated gratuity</div>
            <div className="big">{formatAed(r.amount)}</div>
            <ul>
              <li><span>Daily wage (basic ÷ 30)</span><strong>{formatAed(r.daily, 2)}</strong></li>
              <li><span>Gratuity days</span><strong>{r.days.toFixed(1)}</strong></li>
              {r.capped && <li><span>Two year cap applied</span><strong>{formatAed(r.cap)}</strong></li>}
            </ul>
          </div>
        )}
        {ready && !eligible && (
          <p className="msg">Gratuity is due after at least one year of continuous service, so there is no gratuity to calculate yet.</p>
        )}
      </div>

      <p className="note">This is an estimate for the standard mainland case. It does not cover unpaid leave, free zones or the DIFC savings plan. Check your contract and use an official source for a final figure.</p>

      <p className="brand">
        <span>
          Powered by <a href={SITE + '?utm_source=embed&utm_medium=widget'} target="_blank" rel="noopener">UAE Gratuity Check</a>
        </span>
        <a href={SITE + 'how-to-calculate-gratuity-uae'} target="_blank" rel="noopener">See how it is calculated</a>
      </p>
    </main>
  )
}
