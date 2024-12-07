import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fixReactVirtualized from 'esbuild-plugin-react-virtualized';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized]
    }
  },
  resolve: {
    alias: {
      '@shared': '/src/shared/',
      '@features': '/src/features/',
      '@app': '/src/app/',
      '@widgets': '/src/widgets/',
      '@entities': '/src/entities/'
    }
  }
});
