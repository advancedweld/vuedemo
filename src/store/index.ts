import { createStore } from 'vuex'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPersistedState } from 'pinia-plugin-persistedstate'
export type MainStates = {
  BannerHeight: number
  headerShadowActive: boolean
  headerShow: boolean
  headerLogoShow: boolean
  navDarkActive: boolean
  articlePath: string
}
export default createStore<MainStates>({
  state: {
    BannerHeight: 0,
    headerShadowActive: false,
    headerShow: false,
    headerLogoShow: true,
    navDarkActive: false,
    articlePath: ''
  },
  mutations: {
    setBannerHeight(state, value) {
      state.BannerHeight = value.BannerHeight
    },
    setShadowActive(state, value) {
      state.headerShadowActive = value.headerShadowActive
    },
    setHeaderShow(state, value) {
      state.headerShow = value.headerShow
    },
    setHeaderLogo(state, value) {
      state.headerLogoShow = value.headerLogoShow
    },
    setNavDarkActive(state, value) {
      state.navDarkActive = value.navDarkActive
    },
    SET_ARTICLE_PATH: (state, value) => {
      state.articlePath = value.path
    }
  },
  actions: {
    setArticlePath({ commit }, path) {
      return new Promise((resolve) => commit('SET_ARTICLE_PATH', path))
    }
  },
  modules: {}
})

const pinia = createPinia()
/* 默认全局store数据持久化 */
pinia.use(
  createPersistedState({
    // 默认持久化到localStorage，也可以自定义持久化到sessionStorage
    storage: sessionStorage
  })
)
export { pinia }
