import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/rss': {
        target: 'https://blogdedavid.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/rss/, '/rss/blogdedavid.rss'),
      },
    },
  },
})
