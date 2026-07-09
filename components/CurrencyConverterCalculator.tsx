'use client'

import { useState } from 'react'
import { CURRENCIES, RATES_AS_OF, convertFromAed, convertToAed } from '@/lib/exchangeRates'

interface Option {
  code: string
  name: string
  symbol: string
  flag: string
}

const AED_OPTION: Option = { code: 'AED', name: 'UAE Dirham', symbol: 'AED', flag: '🇦🇪' }

const ALL_OPTIONS: Option[] = [
  AED_OPTION,
  ...CURRENCIES.map((c) => ({ code: c.code, name: c.name, symbol: c.symbol, flag: c.flag })),
]

function findOption(code: string): Option {
  return ALL_OPTIONS.find((o) => o.code === code) ?? AED_OPTION
}

// Converts an amount from one supported currency to another, always routing
// through AED since that is the only base lib/exchangeRates.ts knows about.
function convert(amount: number, fromCode: string, toCode: string): number {
  if (fromCode === toCode) return amount
  const amountInAed = fromCode === 'AED' ? amount : convertToAed(amount, fromCode)
  if (toCode === 'AED') return amountInAed
  return convertFromAed(amountInAed, toCode)
}

// Rate of 1 unit of `fromCode` expressed in `toCode`.
function rateBetween(fromCode: string, toCode: string): number {
  return convert(1, fromCode, toCode)
}

function fmtAmount(value: number) {
  return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function fmtRate(value: number) {
  return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })
}

export default function CurrencyConverterCalculator() {
  const [amount, setAmount] = useState('1000')
  const [fromCode, setFromCode] = useState('AED')
  const [toCode, setToCode] = useState('INR')
  const [result, setResult] = useState<{ converted: number; rate: number; from: Option; to: Option; amount: number } | null>(null)

  function calculate() {
    const amt = parseFloat(amount)
    if (!amt || amt <= 0) {
      setResult(null)
      return
    }
    const from = findOption(fromCode)
    const to = findOption(toCode)
    const converted = convert(amt, from.code, to.code)
    const rate = rateBetween(from.code, to.code)
    setResult({ converted, rate, from, to, amount: amt })
  }

  function swap() {
    setFromCode(toCode)
    setToCode(fromCode)
    setResult(null)
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <div className="calc-header-left">
          <h2>💱 UAE Currency Converter</h2>
          <p>Convert AED salary, savings, or remittances to 10 currencies — indicative rates as of {RATES_AS_OF}</p>
        </div>
        <span className="calc-free-badge">✓ FREE TOOL</span>
      </div>
      <div className="calc-body">
        <div className="calc-left">
          <div className="field">
            <label>💰 Amount</label>
            <input type="number" placeholder="e.g. 1,000" value={amount} onChange={(e) => setAmount(e.target.value)} min="0" />
          </div>
          <div className="field">
            <label>🔻 From</label>
            <select value={fromCode} onChange={(e) => setFromCode(e.target.value)}>
              {ALL_OPTIONS.map((o) => (
                <option key={o.code} value={o.code}>{o.flag} {o.code} — {o.name}</option>
              ))}
            </select>
          </div>
          <button type="button" className="btn-go" onClick={swap} style={{ background: 'var(--gray-100)', color: 'var(--text)', border: '2px solid var(--gray-200)' }}>⇄ Swap currencies</button>
          <div className="field">
            <label>🔺 To</label>
            <select value={toCode} onChange={(e) => setToCode(e.target.value)}>
              {ALL_OPTIONS.map((o) => (
                <option key={o.code} value={o.code}>{o.flag} {o.code} — {o.name}</option>
              ))}
            </select>
          </div>
          <button className="btn-go" onClick={calculate}>Convert ▶</button>
        </div>

        <div className="calc-right">
          {result ? (
            <div className="result-wrap on">
              <div className="res-top">
                <div className="res-lbl">{result.from.flag} {fmtAmount(result.amount)} {result.from.code} =</div>
                <div className="res-amt">{result.to.symbol} {fmtAmount(result.converted)}</div>
                <div className="res-sub">{result.to.flag} {result.to.code} — {result.to.name}</div>
              </div>
              <div className="bdown">
                <div className="br"><span className="bl">Exact rate used</span><span className="bv">1 {result.from.code} = {fmtRate(result.rate)} {result.to.code}</span></div>
                <div className="br"><span className="bl">Rates as of</span><span className="bv">{RATES_AS_OF}</span></div>
              </div>
              <div className="res-note">⚠️ Rates are indicative only and move daily — always confirm the live rate with your bank or exchange house before transferring money.</div>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">💱</div>
              <p>Enter an amount and choose your two currencies<br />to see the converted value.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
