import { createRouter, createWebHistory } from 'vue-router'
import { View, Layout } from '@/constants/ui-enums'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: View.DASHBOARD,
      meta: { layout: Layout.MENU },
      component: () => import(`../views/${View.DASHBOARD}.vue`),
    },
    {
      path: '/measurements',
      name: View.MEASUREMENT_TABLES,
      meta: { layout: Layout.MENU },
      component: () => import(`../views/${View.MEASUREMENT_TABLES}.vue`),
    },
    {
      path: '/exercises',
      name: View.EXERCISE_TABLES,
      meta: { layout: Layout.MENU },
      component: () => import(`../views/${View.EXERCISE_TABLES}.vue`),
    },
    {
      path: '/workouts',
      name: View.WORKOUT_TABLES,
      meta: { layout: Layout.MENU },
      component: () => import(`../views/${View.WORKOUT_TABLES}.vue`),
    },
    {
      path: '/logs',
      name: View.LOGS,
      meta: { layout: Layout.MENU },
      component: () => import(`../views/${View.LOGS}.vue`),
    },
    {
      path: '/settings',
      name: View.SETTINGS,
      meta: { layout: Layout.MENU },
      component: () => import(`../views/${View.SETTINGS}.vue`),
    },
    {
      path: '/about',
      name: View.ABOUT,
      meta: { layout: Layout.MENU },
      component: () => import(`../views/${View.ABOUT}.vue`),
    },
    {
      path: '/:pathMatch(.*)*', // 404 Not Found
      name: View.NOT_FOUND,
      meta: { layout: Layout.MENU },
      component: () => import(`../views/${View.NOT_FOUND}.vue`),
    },
  ],
})

export default router
