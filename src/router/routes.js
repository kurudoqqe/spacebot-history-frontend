import MineView from "@/views/MineView.vue";
import ShopView from "@/views/ShopView.vue";
import SurfaceView from '../views/SurfaceView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Mine',
      component: MineView,
      meta: {transition: 'fade'}
    },
    {
      path: '/surface',
      name: 'Surface',
      component: SurfaceView,
      meta: {transition: 'fade'}
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView,
      meta: {transition: 'fade'}
    }
  ],
})

export default router
