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
    // staff request and dtails
    {
      path: '/',
      alias: '/requests',
      meta: {
        requiresClientAuth: true
      },
      name: 'StaffRequestsLayout',
      component: () => import('../views/staff-requests/StaffRequestsLayout.vue'),
      children: [
        {
          path: '',
          name: 'StaffRequests',
          component: () => import('../views/staff-requests/StaffRequests.vue'),
          redirect: { name: 'StaffRequestList' },
          children: [
            {
              path: '',
              name: 'StaffRequestList',
              component: () => import('../views/staff-requests/StaffRequestList.vue')
            },
            {
              path: 'all-requests',
              name: 'AllStaffRequests',
              component: () => import('../views/staff-requests/AllStaffRequests.vue')
            },
            {
              path: 'staff',
              name: 'AllStaffList',
              component: () => import('../views/staff-requests/AllStaffList.vue')
            },
            {
              path: 'departments',
              name: 'DepartmentsList',
              component: () => import('../views/staff-requests/DepartmentsList.vue')
            }
          ]
        },
        {
          path: 'requests/request-:id',
          name: 'StaffRequestDetails',
          component: () => import('../views/staff-requests/StaffRequestDetails.vue')
        }
      ]
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: () => import('../views/auth/AdminLogin.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
    ...dashboardRoutes
  ]
})

// authenticate routes
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const clientToken = authStore.getToken('clientToken')
  const adminToken = authStore.getToken('adminToken')
  if (to.meta.requiresClientAuth && !clientToken) {
    console.log('clieeeeenttttt')
    next('/login')
    // next()
  } else if (to.meta.requiresAdminAuth && !adminToken) {
    console.log('admiiiiiiiinnnn')
    next('/admin/login')
  } else {
    next()
  }
})

export default router
