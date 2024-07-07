export const dashboardRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/dashboard/LayoutView.vue'),
    children: [
      {
        path: '',
        name: 'Overview',
        component: () => import('../views/dashboard/OverviewView.vue'),
        meta: {
          pageTitle: 'Overview'
        }
      },
      {
        path: 'staff-management',
        name: 'StaffManagement',
        component: () => import('../views/dashboard/StaffManagement.vue'),
        meta: {
          pageTitle: 'Staff Management'
        }
      },
      {
        path: 'colleges',
        name: 'Colleges',
        component: () => import('../views/dashboard/CollegesView.vue'),
        meta: {
          pageTitle: 'Colleges'
        }
      },
      {
        path: 'vehicle-management',
        name: 'VehicleManagement',
        component: () => import('../views/dashboard/VehicleManagement.vue'),
        meta: {
          pageTitle: 'Vehicle Management'
        }
      },
      {
        path: 'supplier-management',
        name: 'SupplierManagement',
        component: () => import('../views/dashboard/SupplierManagement.vue'),
        meta: {
          pageTitle: 'Supplier Management'
        }
      }
    ]
  }
]
