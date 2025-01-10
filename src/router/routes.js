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
      component: MineView
    },
    {
      path: '/surface',
      name: 'Surface',
      component: SurfaceView
    },
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView
    }
  ],
})

export default router
