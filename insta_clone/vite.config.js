import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Insta-Clone/',   // important for GitHub Pages
  plugins: [react()],
})