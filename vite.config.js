import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    minify: 'esbuild', // Use esbuild for faster builds in development
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'state-vendor': ['react-redux', '@reduxjs/toolkit'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
        }
      }
    }
  },
  esbuild: {
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
  },
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    port: 4173,
  },
})

