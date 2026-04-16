'use client'
import { useState } from 'react'
import Link from 'next/link'

function fmt(n: number) {
  return 'AED ' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
function pct(part: number, total: number) {
  if (!total) return '0.0%'
  return (part / total * 100).toFixed(1) + '%'
}

interface Result {
  gross: number
  basic: number
  housing: number
  transport: number
  other: number
  total: number
  basicPct: number
  housingPct: number
  transportPct: number
  otherPct: number
}

export default function SalaryCalculator() {
  const [gross, setGross] = useState('')
  const [basicPctStr, setBasicPctStr] = useState('60')
  const [housingStr, setHousingStr] = useState('')
  const [transportStr, setTransportStr] = useState('')
  const [otherStr, setOtherStr] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState('')

  const grossVal = parseFloat(gross) || 0
  const basicPct = Math.min(Math.max(parseFloat(basicPctStr) || 60, 1), 100)
  const liveBasic = grossVal ? grossVal * basicPct / 100 : 0

  function calculate() {
    const g = parseFloat(gross)
    if (!g || g <= 0) {
      setError('Please enter your gross monthly salary.')
      setResult(null)
      return
    }
    const bp = Math.min(Math.max(parseFloat(basicPctStr) || 60, 1), 100)
    const basic = g * bp / 100
    const remaining = g - basic

    const housingVal = housingStr !== '' ? parseFloat(housingStr) || 0 : null
    const transportVal = transportStr !== '' ? parseFloat(transportStr) || 0 : null
    const otherVal = parseFloat(otherStr) || 0

    let housing: number
    let transport: number
    let other: number

    if (housingVal !== null && transportVal !== null) {
      // both manually entered
      housing = housingVal
      transport = transportVal
      other = otherVal + Math.max(0, remaining - housing - transport)
    } else if (housingVal !== null) {
      housing = housingVal
      transport = transportVal !== null ? transportVal : Math.max(0, remaining - housing - otherVal)
      other = otherVal
    } else if (transportVal !== null) {
      transport = transportVal
      housing = Math.max(0, remaining - transport - otherVal)
      other = otherVal
    } else {
      // auto-distribute remaining using typical UAE proportions: housing ~65%, transport ~20%, other ~15%
      housing = Math.round(remaining * 0.65 * 100) / 100
      transport = Math.round(remaining * 0.20 * 100) / 100
      other = Math.round((remaining - housing - transport + otherVal) * 100) / 100
    }

    const total = basic + housing + transport + other

    setError('')
    setResult({
      gross: g,
      basic,
      housing,
      transport,
      other,
      total,
      basicPct: bp,
      housingPct: total ? housing / total * 100 : 0,
      transportPct: total ? transport / total * 100 : 0,
      otherPct: total ? other / total * 100 : 0,
    })
  }

  return (
    <div>
      <div className="calc-card">
        <div className="calc-header">
          <div className="calc-header-left">
            <h2>💰 UAE Salary Breakdown Calculator</h2>
            <p>حاسبة مكونات الراتب · Understand your basic salary, allowances &amp; gratuity-eligible amount</p>
          </div>
          <span className="calc-free-badge">✓ FREE TOOL</span>
        </div>

        <div className="calc-body">
          {/* LEFT — INPUTS */}
          <div className="calc-left">

            <div className="field">
              <label>💰 Gross Monthly Salary (AED) — إجمالي الراتب الشهري</label>
              <input
                type="number"
                placeholder="e.g. 15,000"
                value={gross}
                onChange={e => setGross(e.target.value)}
                min="0"
              />
            </div>

            {liveBasic > 0 && (
              <div className="info-box" style={{ marginTop: '-0.75rem', marginBottom: '1rem', fontSize: '15px' }}>
                Basic salary preview: <strong>{fmt(liveBasic)}</strong> ({basicPct}% of gross)
              </div>
            )}

            <div className="field">
              <label>📊 Basic Salary Percentage — نسبة الراتب الأساسي</label>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="1"
                  value={basicPctStr}
                  onChange={e => setBasicPctStr(e.target.value)}
                  style={{ flex: 1, accentColor: 'var(--red)', height: '6px', cursor: 'pointer' }}
                />
                <div style={{ position: 'relative', width: '90px', flexShrink: 0 }}>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={basicPctStr}
                    onChange={e => setBasicPctStr(e.target.value)}
                    style={{ width: '100%', height: '54px', padding: '0 32px 0 14px', fontSize: '17px', borderRadius: '12px', border: '2px solid var(--border)', fontWeight: 700, fontFamily: 'inherit', background: 'var(--white)', color: 'var(--text)' }}
                  />
                  <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '15px', fontWeight: 800, color: 'var(--text-muted)', pointerEvents: 'none' }}>%</span>
                </div>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '6px', fontWeight: 600 }}>
                Typical UAE range: 40–65% of gross. Default 60%. Your employment contract specifies the exact amount.
              </div>
            </div>

            <div style={{ background: 'var(--gray-50)', border: '2px solid var(--gray-200)', borderRadius: '14px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 900, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Allowances (optional — leave blank for auto-split)
              </div>
              <div className="field" style={{ marginBottom: '1rem' }}>
                <label>🏠 Housing Allowance (AED) — بدل السكن</label>
                <input
                  type="number"
                  placeholder="Auto-calculated if blank"
                  value={housingStr}
                  onChange={e => setHousingStr(e.target.value)}
                  min="0"
                />
              </div>
              <div className="field" style={{ marginBottom: '1rem' }}>
                <label>🚗 Transport Allowance (AED) — بدل النقل</label>
                <input
                  type="number"
                  placeholder="Auto-calculated if blank"
                  value={transportStr}
                  onChange={e => setTransportStr(e.target.value)}
                  min="0"
                />
              </div>
              <div className="field" style={{ marginBottom: 0 }}>
                <label>➕ Other Allowances (AED) — بدلات أخرى</label>
                <input
                  type="number"
                  placeholder="Phone, food, etc. (optional)"
                  value={otherStr}
                  onChange={e => setOtherStr(e.target.value)}
                  min="0"
                />
              </div>
            </div>

            <button className="btn-go" onClick={calculate}>
              Calculate Salary Breakdown — احسب مكونات الراتب ▶
            </button>
            {error && <div className="err on">{error}</div>}
          </div>

          {/* RIGHT — RESULTS */}
          <div className="calc-right">
            {result ? (
              <div className="result-wrap on">
                {/* Gratuity-eligible highlight */}
                <div className="res-top">
                  <div className="res-lbl">🇦🇪 Gratuity-Eligible Amount (Basic Salary)</div>
                  <div className="res-amt">{fmt(result.basic)}</div>
                  <div className="res-sub">{result.basicPct.toFixed(1)}% of total package · Used for EOSB calculation</div>
                </div>

                {/* Package breakdown */}
                <div className="bdown">
                  <div className="br">
                    <span className="bl">✓ Basic salary (gratuity basis)</span>
                    <span className="bv" style={{ color: 'var(--green-dark)' }}>{fmt(result.basic)}</span>
                  </div>
                  <div className="br">
                    <span className="bl">🏠 Housing allowance</span>
                    <span className="bv">{fmt(result.housing)}</span>
                  </div>
                  <div className="br">
                    <span className="bl">🚗 Transport allowance</span>
                    <span className="bv">{fmt(result.transport)}</span>
                  </div>
                  <div className="br">
                    <span className="bl">➕ Other allowances</span>
                    <span className="bv">{fmt(result.other)}</span>
                  </div>
                  <div className="br" style={{ background: 'var(--gray-50)', fontWeight: 900 }}>
                    <span className="bl" style={{ fontWeight: 900, color: 'var(--text)' }}>Total monthly package</span>
                    <span className="bv" style={{ fontSize: '18px' }}>{fmt(result.total)}</span>
                  </div>
                </div>

                {/* Percentage bar */}
                <div style={{ background: 'var(--white)', borderRadius: '14px', border: '2px solid var(--gray-200)', padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontSize: '12px', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Package composition</div>
                  <div style={{ borderRadius: '8px', overflow: 'hidden', height: '20px', display: 'flex', marginBottom: '0.75rem' }}>
                    <div style={{ width: pct(result.basic, result.total), background: 'var(--green)', transition: 'width 0.4s' }} title={`Basic: ${pct(result.basic, result.total)}`} />
                    <div style={{ width: pct(result.housing, result.total), background: '#3b82f6', transition: 'width 0.4s' }} title={`Housing: ${pct(result.housing, result.total)}`} />
                    <div style={{ width: pct(result.transport, result.total), background: '#f59e0b', transition: 'width 0.4s' }} title={`Transport: ${pct(result.transport, result.total)}`} />
                    <div style={{ flex: 1, background: 'var(--gray-200)', transition: 'width 0.4s' }} title={`Other: ${pct(result.other, result.total)}`} />
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '13px', fontWeight: 700 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--green)', display: 'inline-block' }} />Basic {pct(result.basic, result.total)}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#3b82f6', display: 'inline-block' }} />Housing {pct(result.housing, result.total)}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#f59e0b', display: 'inline-block' }} />Transport {pct(result.transport, result.total)}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--gray-200)', display: 'inline-block' }} />Other {pct(result.other, result.total)}</span>
                  </div>
                </div>

                <div className="res-note">⚠️ Gratuity under UAE law is calculated on basic salary only — housing, transport, and other allowances are excluded. Verify your basic salary in your employment contract.</div>

                {/* CTA */}
                <Link href="/" className="btn-go" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', gap: '8px', marginTop: '0.25rem' }}>
                  🧮 Calculate your Gratuity with this Basic Salary
                </Link>
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">💰</div>
                <p>Enter your gross salary and<br />basic % to see your full<br />salary breakdown</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA — always visible */}
      {!result && (
        <div style={{ background: 'var(--white)', borderRadius: '18px', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', textAlign: 'center', border: '2px solid var(--green-light)' }}>
          <div style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '1rem' }}>
            Already know your basic salary? Calculate your end-of-service gratuity directly.
          </div>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%)', color: '#fff', padding: '14px 28px', borderRadius: '12px', fontWeight: 900, fontSize: '16px', textDecoration: 'none', boxShadow: '0 6px 20px rgba(0,154,68,0.3)' }}>
            🧮 Go to UAE Gratuity Calculator
          </Link>
        </div>
      )}
    </div>
  )
}
