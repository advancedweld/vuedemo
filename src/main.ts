import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
/* 引入element ui */
app.use(ElementPlus)
app.use(router)

/* https://cn.vuejs.org/guide/essentials/application.html#app-configurations */
/* 全局错误处理 */
app.config.errorHandler = (err: unknown) => {
  console.error('@@@@@@@error', err)
}
/* 全局注册组件，使得组件再应用内任何地方都是可用 */
// app.component('TodoDeleteButton', TodoDeleteButton)
/* .mount方法会返回根组件实例 */

const root = app.mount('#app')
console.log('🚀 ~ file: main.ts:15 ~ root:', root)
