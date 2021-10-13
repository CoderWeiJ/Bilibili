import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home/Home.vue")
  },
  {
    path: '/video/:id',
    name: 'Video',
    component: () => import('@/views/Video/Video.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
