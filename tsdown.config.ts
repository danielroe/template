import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: { oxc: true },
  exports: { devExports: true },
  publint: true,
  attw: {
    profile: 'esm-only',
    level: 'error',
  },
})
