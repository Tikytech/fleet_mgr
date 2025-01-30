export const dashboardRoutes = [
  {
    path: '/admin',
    redirect: { name: 'Overview' },
    name: 'Layout',
    meta: {requiresAdminAuth: true},
    component: () => import('../views/dashboard/LayoutView.vue'),
    children: [
      {
        path: 'overview',
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
          pageTitle: 'Staff Management',
          links: [{ name: 'dashboard', link: 'Overview' }, { name: 'staff' }]
        }
      },
      {
        path: 'colleges',
        name: 'Colleges',
        redirect: {name: 'CollegeList'},
        component: () => import('../views/dashboard/colleges/CollegesView.vue'),
        children: [
          {
            path: '',
            name: 'CollegeList',
            component: () => import('../views/dashboard/colleges/CollegeList.vue'),
            meta: {
              pageTitle: 'Colleges',
              links: [{ name: 'dashboard', link: 'Overview' }, { name: 'colleges' }]
            }
          },
          {
            path: 'college-:id',
            name: 'CollegeDetails',
            component: () => import('../views/dashboard/colleges/CollegeDetails.vue'),
            meta: {
              pageTitle: 'Colleges',
              links: [
                { name: 'dashboard', link: 'Overview' },
                { name: 'college', link: 'CollegeList' },
                { name: 'college details' }
              ]
            }
          }
        ]
      },
      {
        path: 'vehicles',
        redirect: { name: 'VehiclesOverview' },
        name: 'VehicleManagement',
        component: () => import('../views/dashboard/vehicle-management/VehicleManagement.vue'),
        children: [
          {
            path: '',
            name: 'VehiclesOverview',
            component: () => import('../views/dashboard/vehicle-management/VehiclesOverview.vue'),
            meta: {
              pageTitle: 'Vehicle Management',
              links: [{ name: 'dashboard', link: 'Overview' }, { name: 'vehicles' }]
            }
          },
          {
            path: 'vehicle-:id',
            name: 'VehicleDetails',
            redirect: { name: 'RequestHistory' },
            component: () => import('../views/dashboard/vehicle-management/VehicleDetails.vue'),
            props: true,
            meta: {
              pageTitle: 'Vehicle Details',
              links: [
                { name: 'dashboard', link: 'Overview' },
                { name: 'vehicles', link: 'VehiclesOverview' },
                { name: 'vehicle details' }
              ]
            },
            children: [
              {
                path: '', name: 'RequestHistory', component: () => import('../views/dashboard/vehicle-management/vehicle-history/RequestHistory.vue')
              },
              {
                path: 'maintenance-history', name: 'MaintenanceHistory', component: () => import('../views/dashboard/vehicle-management/vehicle-history/MaintenanceHistory.vue')
              },
              {
                path: 'tyre-history', name: 'TyreHistory', component: () => import('../views/dashboard/vehicle-management/vehicle-history/TyreHistory.vue')
              },
              {
                path: 'oil-history', name: 'OilHistory', component: () => import('../views/dashboard/vehicle-management/vehicle-history/OilHistory.vue')
              },
              {
                path: 'performance-history', name: 'PerformanceHistory', component: () => import('../views/dashboard/vehicle-management/vehicle-history/PerformanceHistory.vue')
              },
            ]
          }
        ]
      },
      {
        path: 'requests',
        name: 'Requests',
        redirect: { name: 'RequestList' },
        component: () => import('../views/dashboard/requests/RequestsView.vue'),
        children: [
          {
            path: '',
            name: 'RequestList',
            component: () => import('../views/dashboard/requests/RequestList.vue'),
            meta: {
              pageTitle: 'Requests',
              links: [{ name: 'dashboard', link: 'Overview' }, { name: 'requests' }]
            }
          },
          {
            path: 'request-:id',
            name: 'RequestDetails',
            component: () => import('../views/dashboard/requests/RequestDetails.vue'),
            meta: {
              pageTitle: 'Request Details',
              links: [
                { name: 'dashboard', link: 'Overview' },
                { name: 'request', link: 'RequestList' },
                { name: 'request details' }
              ]
            }
          }
        ]
      },
      {
        path: 'supplier-management',
        name: 'SupplierManagement',
        component: () => import('../views/dashboard/SupplierManagement.vue'),
        meta: {
          pageTitle: 'Supplier Management',
          links: [{ name: 'dashboard', link: 'Overview' }, { name: 'suppliers' }]
        }
      },
      {
        path: 'account-settings',
        name: 'AccountSettings',
        redirect: { name: 'AccountProfile' },
        component: () => import('../views/dashboard/account-settings/AccountSettings.vue'),
        meta: {
          pageTitle: 'Account Settings',
          links: [{ name: 'dashboard', link: 'Overview' }, { name: 'account settings' }]
        },
        children: [
          {
            path: 'profile',
            name: 'AccountProfile',
            component: () => import('../views/dashboard/account-settings/AccountProfile.vue'),
          },
          {
            path: 'user-management',
            name: 'UserManagement',
            component: () => import('../views/dashboard/account-settings/UserManagement.vue'),
          }
        ]
      },
    ]
  }
]
