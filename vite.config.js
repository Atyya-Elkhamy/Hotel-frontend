import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    allowedHosts: ["hotels.rootmatrix.cloud"],  // 👈 IMPORTANT FIX
  },

  preview: {
    host: true,
    allowedHosts: ["hotels.rootmatrix.cloud"],  // 👈 IMPORTANT FIX
  },
})
