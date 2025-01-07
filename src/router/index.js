import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { dashboardRoutes } from './dashboard'
import { useAuthStore } from '@/stores/authentication'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/otp',
      name: 'OTP',
      component: () => import('../views/auth/OTPView.vue')
    },
    {
      path: '/requests',
      alias: '/',
      meta: {
        requiresClientAuth: true
      },
      name: 'StaffRequests',
      component: () => import('../views/staff-requests/StaffRequests.vue')
    },
    ...dashboardRoutes
  ]
})


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const token = authStore.getToken();
  if (to.meta.requiresClientAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router
