import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ This is important for GitHub Pages root
  plugins: [react()],
})
