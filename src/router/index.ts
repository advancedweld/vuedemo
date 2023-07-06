import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },

  {
    /* 数据集群 */
    path: '/data-cluster',
    name: 'dataCluster',
    component: () => import('@/views/data-cluster/index.vue')
  },

  {
    /* 领域化大模型 */
    path: '/large-model',
    name: 'largeModel',
    component: () => import('@/views/News.vue')
  },

  {
    /* 数智化应用 */
    path: '/application',
    name: 'application',
    component: () => import('@/views/News.vue')
  },

  {
    /* 解决方案 */
    path: '/solutions',
    name: 'solutions',
    component: () => import('@/views/News.vue')
  },

  {
    /* 新闻动态 */
    path: '/news',
    name: 'news',
    component: () => import('@/views/News.vue')
  },
  {
    /* 关于我们 */
    path: '/about',
    name: 'about',
    component: () => import('@/views/News.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
