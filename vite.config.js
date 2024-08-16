import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
      "@apis": "/src/apis",
      "@layouts": "/src/layouts",
      "@lib": "/src/lib",
    }
  },
})
