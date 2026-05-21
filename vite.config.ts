import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/flatter-frontend/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
})
