import { expect, it, describe } from 'vitest'
import { welcome } from '../src'

describe('package-name', () => {
  it('works', () => {
    expect(welcome()).toMatchInlineSnapshot('"hello world"')
  })
})
