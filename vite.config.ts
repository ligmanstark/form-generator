import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    port: 3000,
    host: true,
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element === 'lit-layout',
        },
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@pages':fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@app':fileURLToPath(new URL('./src/app', import.meta.url)),
      '@entities':fileURLToPath(new URL('./src/entities', import.meta.url)),
      '@features':fileURLToPath(new URL('./src/features', import.meta.url)),
      '@shared':fileURLToPath(new URL('./src/shared', import.meta.url)),
      '@widgets':fileURLToPath(new URL('./src/widgets', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@app/styles/_variables.scss" as *;
        `
      }
    }
  }
})
