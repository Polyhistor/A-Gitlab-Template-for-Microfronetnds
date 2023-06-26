// Utils
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default ({ mode }) => {
  // loading environment variables
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // main config
  return defineConfig({
    plugins: [react(), eslint(), cssInjectedByJsPlugin()],
    build: {
      outDir: process.env.VITE_OUT_DIR || 'dist',
      rollupOptions: {
        output: {
          format: 'iife',
          entryFileNames: `${process.env.VITE_PACKAGE_NAME}.js` || 'microfrontend.js',
        },
        external: [],
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  });
};
