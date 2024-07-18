import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc'
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import mkcert from 'vite-plugin-mkcert'

export default ({ mode }: {mode: string}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  
  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT
  let plugins = [nodePolyfills(), react()];
  let https_plugin = [nodePolyfills(), react(), mkcert()];
  
  return defineConfig({
    plugins: process.env.VITE_HTTPS === 'true' ? https_plugin : plugins,
    server: {
      watch: {
        usePolling: true,
      },
      port: parseInt(process.env.VITE_PORT || '3000'),
      host: true,
    },
  })
}