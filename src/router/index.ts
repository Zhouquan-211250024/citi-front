import { createRouter, createWebHistory } from 'vue-router'


import AboutView from "@/views/AboutView.vue";

import MainView from "@/views/MainView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/search',
      component: MainView,
      children: [
        {
          path: '/search',
          component: () => import('@/views/SearchView.vue')
        },
        {
          path: '/fuzzy',
          component: () => import('@/views/FuzzySearchView.vue')
        },
        {
          path: '/precise',
          component: () => import('@/views/PreciseSearchView.vue')
        },
        {
          path: '/report',
          component: () => import('@/views/ReportView.vue')
        },

      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    }
  ]
})

export default router
