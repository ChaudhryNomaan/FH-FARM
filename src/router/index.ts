import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // ADD THIS SECTION HERE:
  scrollBehavior(to, from, savedPosition) {
    // If the browser has a saved position (like clicking 'back'), use it
    if (savedPosition) {
      return savedPosition
    } else {
      // Otherwise, always scroll to the very top of the page
      return { top: 0, behavior: 'smooth' } 
    }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/heritage',
      name: 'heritage',
      component: () => import('../views/HeritageView.vue')
    },
    {
      path: '/cattle',
      name: 'cattle',
      component: () => import('../views/CattleView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    }
  ]
})

export default router