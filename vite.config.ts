import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'Smitter',
      formats: ['es', 'umd', 'iife']
    },
  }
})