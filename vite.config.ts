
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      '892cbd94-2295-4a49-97c7-b7124bcef3e0.lovableproject.com',
      'preview--meweb-digital-bloom.lovable.app'
    ],
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
});

