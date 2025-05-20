import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
// https://vite.dev/config/
const outDir = 'vue_dist'
export default defineConfig(({ mode }) => ({
  base: mode == 'development' ? '' : `/any_test/${outDir}`,
  plugins: [
    vueDevTools(),
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),
  ],
  build: {
    emptyOutDir: true,
    outDir
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
}))
