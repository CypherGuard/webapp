import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [nodePolyfills(), mkcert(), react()],
  server: {
    watch: {
      usePolling: true,
    },
    port: 3000,
    host: true,
  },
})
