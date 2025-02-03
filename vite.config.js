import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5173,
    strictPort: true, // {{port band bolsa xato beradi}} // 
  },
  server: {
    port: 5173, // development server porti ham //
  }
})