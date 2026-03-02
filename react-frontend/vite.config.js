import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5000,
    // NEW: proxy any /api/... request to localhost:8000 during local dev
    // this is only needed locally since frontend (5000) and backend (8000) are on different ports
    // on Render this proxy is not used — Express serves both on the same port directly
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  }
})
