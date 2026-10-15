// Run with: npm run test:iloe
const assert = require('node:assert/strict')
const { iloeCategory, iloePremium, iloeCompensation, iloeBlockers } = require('../.tmp-test/iloe.js')

assert.equal(iloeCategory(5000), 1)
assert.equal(iloeCategory(16000), 1)
assert.equal(iloeCategory(16001), 2)
assert.deepEqual(iloePremium(8000), { category: 1, monthly: 5, annual: 60 })
assert.deepEqual(iloePremium(25000), { category: 2, monthly: 10, annual: 120 })

const a = iloeCompensation(10000)
assert.equal(a.monthly, 6000)
assert.equal(a.total, 18000)
assert.equal(a.capped, false)

const b = iloeCompensation(16000)
assert.equal(b.monthly, 9600)
assert.equal(b.capped, false)

const c = iloeCompensation(40000)
assert.equal(c.cap, 20000)
assert.equal(c.monthly, 20000)
assert.equal(c.capped, true)
assert.equal(c.total, 60000)

const ok = { monthsSubscribed: 14, premiumsUpToDate: true, exit: 'terminated', daysSinceEnd: 10, absconding: false, inUae: true }
assert.deepEqual(iloeBlockers(ok), [])
assert.equal(iloeBlockers({ ...ok, monthsSubscribed: 11 }).length, 1)
assert.equal(iloeBlockers({ ...ok, exit: 'resigned', daysSinceEnd: 45 }).length, 2)
console.log('ILOE tests passed')
