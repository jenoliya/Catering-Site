import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base: './'` makes the build work on any static host or sub-folder
// (GitHub Pages, Netlify, an S3 bucket, plain file hosting...).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
