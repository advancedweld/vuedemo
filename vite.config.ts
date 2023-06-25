import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueJsx from '@vitejs/plugin-vue-jsx'
console.log(' @@@@meta ', import.meta)
// console.log(' @@@@process ', process.env)
/*
 *import.meta.url: 当前文件目录 file:///D:/github/vuedemo/vite.config.ts
 *fileURLToPath(new URL('./src', import.meta.url)) 拼接当前文件目录为绝对路径
 */
// https://vitejs.dev/config/

//  vite css配置https://juejin.cn/post/7175366648659411000

// https://cn.vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const config = {
    plugins: [
      vue(),
      vueJsx(),
      {
        name: 'custom-html',
        // enforce: 'pre',
        transformIndexHtml(html: string) {
          // 动态替换 HTML 中的脚本引用
          // console.log('@@@@@@html ', html)
          if (mode === 'development') {
            const _html = html.replace(
              '<script type="module" src="/src/main-prod.ts"></script>',
              '<script type="module" src="/src/main-dev.ts"></script>'
            )
            return _html
          } else {
            return html
          }
        }
      }
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: `@import "${fileURLToPath(
            new URL('./src/assets/style/variable.less', import.meta.url)
          )}";`,
          globalVars: {
            blue: '#1CC0FF'
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@com': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
      }
    },
    build: {
      rollupOptions: {
        input: {
          dev: 'src/main-dev.ts',
          prod: 'src/main-prod.ts'
        }
      }
      // assetsDir: 'assets'
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => {
            const url = path.replace(/^\/api/, '')
            console.log('@@@@@重写路径', path, url)
            return url
          }
        }
      }
    }
  }
  return config
})
