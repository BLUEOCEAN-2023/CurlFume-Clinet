import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000/CurlFume-Clinet/curlfume-clinet/public/api/fetch_TypeData.php', // PHP 서버의 URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/public/api/'),
      },
    },
  },
});
