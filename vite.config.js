import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { functionsScanner, copyFile, traitJsAsJsx } from "wpsjs/vite_plugins"

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx", ".ts": "tsx" },
      plugins: [traitJsAsJsx()],
    },
  },
  plugins: [
    copyFile({
      src: 'manifest.xml',
      dest: 'manifest.xml',
    }),
    functionsScanner({
      inputJsPath: 'src/js/functions.js',
      outputJsonPath: 'functions.json',
      namespace: 'HelloEt',
    }),
    react()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0'
  }
})

