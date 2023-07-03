import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { pinia } from './store'
// scrollto from vue3 please see https://github.com/rigor789/vue-scrollto/issues/380
import VueScrollTo from 'vue-scrollto'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// mavon-editor for vue3 please see
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '@/assets/style/common.css'
import '@/assets/font/iconfont'

const app = createApp(App)

app.directive('scroll-to', VueScrollTo)

app.use(pinia).use(ElementPlus).use(mavonEditor).use(store).use(router).mount('#app')
