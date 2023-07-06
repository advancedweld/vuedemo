import { fileURLToPath, URL } from 'url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueJsx from '@vitejs/plugin-vue-jsx'
/*
 *import.meta.url: 当前文件目录 file:///D:/github/vuedemo/vite.config.ts
 *fileURLToPath(new URL('./src', import.meta.url)) 拼接当前文件目录为绝对路径
 */

//  vite css配置https://juejin.cn/post/7175366648659411000

// https://cn.vitejs.dev/config/
// const IS_PROD = import.meta.env.VITE_ENV === 'production'
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  const IS_PROD = env.VITE_ENV === 'production'
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
      /* 暂时不需要自定义构建选项，否则构建产物中没有Index.html文件 */
      // rollupOptions: {
      //   input: {
      //     dev: 'src/main-dev.ts',
      //     prod: 'src/main-prod.ts'
      //   }
      // }
      // assetsDir: 'assets'
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3008',
          // target: !IS_PROD ? 'https://company.zerotower.cn' : 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path: any) => {
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
