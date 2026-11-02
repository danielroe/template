import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: { generator: 'oxc' },
  exports: { devExports: true },
  publint: true,
  attw: {
    profile: 'esm-only',
    level: 'error',
  },
})
