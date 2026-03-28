import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh for better DX
      fastRefresh: true,
    }), 
    tailwindcss()
  ],
  build: {
    // Optimize build output
    target: 'esnext',
    minify: 'esbuild', // Use esbuild for faster builds
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'icons': ['lucide-react'],
          
          // Page chunks
          'home': [
            './src/Pages/Home.jsx',
            './src/Components/Home/Hero.jsx',
          ],
          'collections': [
            './src/Pages/Collections.jsx',
            './src/Components/Collections/CollectionsHero.jsx',
          ],
          'gallery': [
            './src/Pages/Gallery.jsx',
            './src/Components/Gallery/GalleryHero.jsx',
          ],
          'heritage': [
            './src/Pages/Heritage.jsx',
            './src/Components/Heritage/HeritageHero.jsx',
          ],
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize asset inlining
    assetsInlineLimit: 4096,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
  // Server configuration for development
  server: {
    port: 3000,
    strictPort: false,
    open: true,
  },
})
