import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'terser', // Use terser for better minification
    sourcemap: false, // Disable sourcemaps for production
    rollupOptions: {
      output: {
        manualChunks: {
          'react': ['react'],
          'react-dom': ['react-dom'],
          'react-router': ['react-router-dom'],
          'redux': ['react-redux', '@reduxjs/toolkit'],
          'vendor': ['framer-motion'], // Vendor chunk for heavy libraries
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
});