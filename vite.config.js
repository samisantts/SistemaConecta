import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base path so the production build works when someone opens
  // dist/index.html straight from disk (file://) instead of a real server.
  base: './',
})
