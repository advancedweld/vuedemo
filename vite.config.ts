import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueJsx from '@vitejs/plugin-vue-jsx'
console.log(' @@@@meta ', import.meta.url)
/*
 *import.meta.url: 当前文件目录 file:///D:/github/vuedemo/vite.config.ts
 *fileURLToPath(new URL('./src', import.meta.url)) 拼接当前文件目录为绝对路径
 */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@com': fileURLToPath(new URL('./src/components', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${fileURLToPath(
          new URL('./src/assets/style/variable.less', import.meta.url)
        )}";`
      }
    }
  },
  build: {
    rollupOptions: {
      input: 'src/main-dev.ts'
    }
  }
})
