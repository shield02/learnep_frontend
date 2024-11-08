import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "src/_metronic/assets/sass/style.scss";`,
  //     },
  //   },
  // },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  },
})
