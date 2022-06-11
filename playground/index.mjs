import assert from 'node:assert'
import * as pkg from 'package-name'

console.log(pkg.welcome())

assert.strictEqual(pkg.welcome(), 'hello world')
