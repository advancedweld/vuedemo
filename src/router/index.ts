import { createRouter, createWebHistory } from 'vue-router'
/* 
  https://www.jianshu.com/p/3fe481fb4223
  TypeScript Vue Plugin (Volar)插件，解决
   Cannot find module './App.vue' or its corresponding type declarations.ts(2307) 报错
*/

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('../views/design/DesignNew.vue')
    }
  ]
})

export default router
