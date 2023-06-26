import { defineStore } from 'pinia'

export const useUserProfileStore = defineStore('userProfile', {
  state: () => {
    return {
      isLogin: false,
      profile: {
        id: 0,
        username: '',
        nickname: '',
        avatar: '',
        email: '',
        phone: ''
      }
    }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    login() {
      return Promise.resolve().then(() => {
        this.isLogin = true
      })
    },

    // loginout
    loginOut() {
      return Promise.resolve().then(() => {
        this.isLogin = false
      })
    }
  },

  persist: true
})
