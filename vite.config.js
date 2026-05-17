import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['servbuddy.in'],
    port: 5173,
  },
})