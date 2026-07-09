'use client'

import { useState } from 'react'

function fmt(n: number) {
  return 'AED ' + Math.round(n).toLocaleString('en-AE')
}

type Emirate = 'dubai' | 'abudhabi' | 'sharjah' | 'other'
type Household = 'single' | 'couple' | 'family'
type Lifestyle = 'budget' | 'comfortable' | 'luxury'

interface Breakdown {
  rent: number
  utilities: number
  groceries: number
  transport: number
  health: number
  school: number
  mobile: number
  misc: number
}

interface Result extends Breakdown {
  total: number
}

// Dubai baseline — comfortable lifestyle, couple with no kids (AED / month)
const BASE: Breakdown = {
  rent: 6500,
  utilities: 900,
  groceries: 1800,
  transport: 1200,
  health: 500,
  school: 0,
  mobile: 350,
  misc: 1200,
}

const EMIRATE_MULT: Record<Emirate, number> = {
  dubai: 1,
  abudhabi: 0.93,
  sharjah: 0.75,
  other: 0.65,
}

const LIFESTYLE_MULT: Record<Lifestyle, number> = {
  budget: 0.7,
  comfortable: 1,
  luxury: 1.6,
}

const EMIRATE_LABEL: Record<Emirate, string> = {
  dubai: 'Dubai',
  abudhabi: 'Abu Dhabi',
  sharjah: 'Sharjah',
  other: 'Other Emirates',
}

function householdBreakdown(household: Household): Breakdown {
  if (household === 'single') {
    // Smaller unit, less groceries/transport — roughly 0.6x of the couple baseline
    return {
      rent: BASE.rent * 0.6,
      utilities: BASE.utilities * 0.6,
      groceries: BASE.groceries * 0.6,
      transport: BASE.transport * 0.6,
      health: BASE.health * 0.6,
      school: 0,
      mobile: BASE.mobile * 0.6,
      misc: BASE.misc * 0.6,
    }
  }
  if (household === 'family') {
    // Couple baseline + bigger unit + school fees + more groceries
    return {
      rent: BASE.rent + 3000,
      utilities: BASE.utilities,
      groceries: BASE.groceries * 1.4,
      transport: BASE.transport,
      health: BASE.health,
      school: 1800,
      mobile: BASE.mobile,
      misc: BASE.misc,
    }
  }
  return { ...BASE, school: 0 }
}

function calculate(emirate: Emirate, household: Household, lifestyle: Lifestyle): Result {
  const base = householdBreakdown(household)
  const lm = LIFESTYLE_MULT[lifestyle]
  const em = EMIRATE_MULT[emirate]
  const scaled: Breakdown = {
    rent: base.rent * lm * em,
    utilities: base.utilities * lm * em,
    groceries: base.groceries * lm * em,
    transport: base.transport * lm * em,
    health: base.health * lm * em,
    school: base.school * lm * em,
    mobile: base.mobile * lm * em,
    misc: base.misc * lm * em,
  }
  const total = Object.values(scaled).reduce((sum, v) => sum + v, 0)
  return { ...scaled, total }
}

export default function CostOfLivingCalculator() {
  const [emirate, setEmirate] = useState<Emirate>('dubai')
  const [household, setHousehold] = useState<Household>('couple')
  const [lifestyle, setLifestyle] = useState<Lifestyle>('comfortable')
  const [result, setResult] = useState<Result | null>(null)

  function handleCalculate() {
    setResult(calculate(emirate, household, lifestyle))
  }

  const isFamily = household === 'family'

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>🏙️ UAE Cost of Living Calculator</h2>
          <p>Estimate your monthly AED budget by emirate, household, and lifestyle tier</p>
        </div>
        <span className="calc-free-badge">✓ FREE TOOL</span>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>📍 Emirate</label>
            <select value={emirate} onChange={(e) => setEmirate(e.target.value as Emirate)}>
              <option value="dubai">Dubai</option>
              <option value="abudhabi">Abu Dhabi</option>
              <option value="sharjah">Sharjah</option>
              <option value="other">Other Emirates</option>
            </select>
          </div>
          <div className="field">
            <label>👪 Household type</label>
            <select value={household} onChange={(e) => setHousehold(e.target.value as Household)}>
              <option value="single">Single professional</option>
              <option value="couple">Couple, no kids</option>
              <option value="family">Family with 1-2 kids</option>
            </select>
          </div>
          <div className="field">
            <label>💎 Lifestyle tier</label>
            <select value={lifestyle} onChange={(e) => setLifestyle(e.target.value as Lifestyle)}>
              <option value="budget">Budget</option>
              <option value="comfortable">Comfortable</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
          <button className="btn-go" onClick={handleCalculate}>Calculate Budget ▶</button>
        </div>

        <div className="calc-right">
          {result ? (
            <div className="result-wrap on">
              <div className="res-top">
                <div className="res-lbl">🇦🇪 Estimated Monthly Cost of Living</div>
                <div className="res-amt">{fmt(result.total)}</div>
                <div className="res-sub">{EMIRATE_LABEL[emirate]} · {household === 'single' ? 'Single professional' : household === 'couple' ? 'Couple, no kids' : 'Family with 1-2 kids'} · {lifestyle.charAt(0).toUpperCase() + lifestyle.slice(1)}</div>
              </div>
              <div className="bdown">
                <div className="br"><span className="bl">🏠 Rent</span><span className="bv">{fmt(result.rent)}</span></div>
                <div className="br"><span className="bl">💡 Utilities (DEWA, water, cooling)</span><span className="bv">{fmt(result.utilities)}</span></div>
                <div className="br"><span className="bl">🛒 Groceries</span><span className="bv">{fmt(result.groceries)}</span></div>
                <div className="br"><span className="bl">🚗 Transport</span><span className="bv">{fmt(result.transport)}</span></div>
                <div className="br"><span className="bl">🩺 Health insurance</span><span className="bv">{fmt(result.health)}</span></div>
                <div className="br" style={!isFamily ? { opacity: 0.5 } : undefined}>
                  <span className="bl">🎒 School fees</span>
                  <span className="bv">{isFamily ? fmt(result.school) : 'AED 0 (N/A)'}</span>
                </div>
                <div className="br"><span className="bl">📱 Mobile / internet</span><span className="bv">{fmt(result.mobile)}</span></div>
                <div className="br"><span className="bl">🎉 Misc / leisure</span><span className="bv">{fmt(result.misc)}</span></div>
              </div>
              <div className="res-note">⚠️ Estimates only — actual costs vary significantly by neighbourhood, building, and lifestyle. Rent especially can range ±40%.</div>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🧮</div>
              <p>Select your emirate, household<br />and lifestyle, then click Calculate<br />to see your monthly budget</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
