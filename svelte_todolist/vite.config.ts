import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const outDir = 'svelte_dist';
export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '' : `/any_test/${outDir}`,
  plugins: [svelte(), tailwindcss()],
  build: {
    outDir
  }
}))
