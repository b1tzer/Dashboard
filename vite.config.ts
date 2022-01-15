import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJSX from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-md'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_APP_BUILD_MODE === 'crx' ? './' : '/Dashboard/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/variables.scss";'
      }
    }
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    VueJSX(),
    Markdown()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus'],
          'milkdown-preset-gfm': ['@milkdown/preset-gfm'],
          'milkdown-plugin-tooltip': ['@milkdown/plugin-tooltip'],
          'milkdown-plugin-slash': ['@milkdown/plugin-slash'],
          'milkdown-plugin-prism': ['@milkdown/plugin-prism']
        }
      }
    },
    outDir: process.env.VITE_APP_BUILD_MODE === 'crx' ? 'crx' : 'dist'
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://kongfandong.cn',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
