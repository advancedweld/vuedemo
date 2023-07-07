import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
/* 默认全局store数据持久化 */
pinia.use(
  createPersistedState({
    // 默认持久化到localStorage，也可以自定义持久化到sessionStorage
    storage: sessionStorage
  })
)
export { pinia }
