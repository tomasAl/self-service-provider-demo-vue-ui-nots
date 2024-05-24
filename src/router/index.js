import { createRouter, createWebHistory } from 'vue-router'
import ServicePage from '../components/ServicePage.vue'

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/'),
  routes: [
    {
      path: '/demo-paslaugos/vue-nots',
      name: 'service',
      component: ServicePage
    }
  ]
})

export default router
