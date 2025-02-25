import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5173,
    strictPort: true,
  },
  server: {
    port: 5173,
  }
})