export const dashboardRoutes = [
  {
    path: '/admin',
    redirect: { name: 'Overview' },
    name: 'Layout',
    meta: { requiresAuth: true },
    component: () => import('../views/dashboard/LayoutView.vue'),
    children: [
      // Overview
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('../views/dashboard/OverviewView.vue'),
        meta: {
          pageTitle: 'Overview'
        }
      },
      // {
      //   path: 'driver-management',
      //   name: 'DriverManagement',
      //   component: () => import('../views/dashboard/DriverManagement.vue'),
      //   meta: {
      //     pageTitle: 'Driver Management',
      //     links: [{ name: 'dashboard', link: 'Overview' }, { name: 'driver' }]
      //   }
      // },
      // {
      //   path: 'colleges',
      //   name: 'Colleges',
      //   redirect: { name: 'CollegeList' },
      //   component: () => import('../views/dashboard/colleges/CollegesView.vue'),
      //   children: [
      //     {
      //       path: '',
      //       name: 'CollegeList',
      //       component: () => import('../views/dashboard/colleges/CollegeList.vue'),
      //       meta: {
      //         pageTitle: 'Colleges',
      //         links: [{ name: 'dashboard', link: 'Overview' }, { name: 'colleges' }]
      //       }
      //     },
      //     {
      //       path: 'college-:id',
      //       name: 'CollegeDetails',
      //       component: () => import('../views/dashboard/colleges/CollegeDetails.vue'),
      //       meta: {
      //         pageTitle: 'Colleges',
      //         links: [
      //           { name: 'dashboard', link: 'Overview' },
      //           { name: 'college', link: 'CollegeList' },
      //           { name: 'college details' }
      //         ]
      //       }
      //     }
      //   ]
      // },
      // Vehicle Management
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
                path: '',
                name: 'RequestHistory',
                component: () =>
                  import('../views/dashboard/vehicle-management/vehicle-history/RequestHistory.vue')
              },
              {
                path: 'maintenance',
                name: 'MaintenanceHistory',
                component: () =>
                  import(
                    '../views/dashboard/vehicle-management/vehicle-history/MaintenanceHistory.vue'
                  )
              },
              {
                path: 'accessories',
                name: 'AccessoriesHistory',
                component: () =>
                  import(
                    '../views/dashboard/vehicle-management/vehicle-history/AccessoriesHistory.vue'
                  )
              },
              {
                path: 'batteries',
                name: 'BatteriesHistory',
                component: () =>
                  import(
                    '../views/dashboard/vehicle-management/vehicle-history/BatteriesHistory.vue'
                  )
              },
              {
                path: 'tyres',
                name: 'TyresHistory',
                component: () =>
                  import('../views/dashboard/vehicle-management/vehicle-history/TyresHistory.vue')
              },
              {
                path: 'insurance',
                name: 'InsuranceHistory',
                component: () =>
                  import(
                    '../views/dashboard/vehicle-management/vehicle-history/InsuranceHistory.vue'
                  )
              }
            ]
          }
        ]
      },
      // Department head requests
      // {
      //   path: 'requests',
      //   name: 'Requests',
      //   redirect: { name: 'RequestList' },
      //   component: () => import('../views/dashboard/requests/RequestsView.vue'),
      //   children: [
      //     {
      //       path: '',
      //       name: 'RequestList',
      //       component: () => import('../views/dashboard/requests/RequestList.vue'),
      //       meta: {
      //         pageTitle: 'Requests',
      //         links: [{ name: 'dashboard', link: 'Overview' }, { name: 'requests' }]
      //       }
      //     },
      //     {
      //       path: 'request-:id',
      //       name: 'RequestDetails',
      //       component: () => import('../views/dashboard/requests/RequestDetails.vue'),
      //       meta: {
      //         pageTitle: 'Request Details',
      //         links: [
      //           { name: 'dashboard', link: 'Overview' },
      //           { name: 'request', link: 'RequestList' },
      //           { name: 'request details' }
      //         ]
      //       }
      //     }
      //   ]
      // },

      // Vehicle manager's requests
      {
        path: 'vehicle-requests',
        name: 'VehicleRequests',
        redirect: { name: 'VehicleRequestList' },
        component: () => import('../views/dashboard/vehicle-requests/VehicleRequestsView.vue'),
        children: [
          {
            path: '',
            name: 'VehicleRequestList',
            component: () => import('../views/dashboard/vehicle-requests/VehicleRequestList.vue'),
            meta: {
              pageTitle: 'Requests',
              links: [{ name: 'dashboard', link: 'Overview' }, { name: 'requests' }]
            }
          },
          {
            path: 'vehicle-request-:id',
            name: 'VehicleRequestDetails',
            component: () =>
              import('../views/dashboard/vehicle-requests/VehicleRequestDetails.vue'),
            meta: {
              pageTitle: 'Request Details',
              links: [
                { name: 'dashboard', link: 'Overview' },
                { name: 'request', link: 'VehicleRequestList' },
                { name: 'request details' }
              ]
            }
          }
        ]
      },

      // Supplier Management
      {
        path: 'supplier-management',
        name: 'SupplierManagement',
        component: () => import('../views/dashboard/SupplierManagement.vue'),
        meta: {
          pageTitle: 'Supplier Management',
          links: [{ name: 'dashboard', link: 'Overview' }, { name: 'suppliers' }]
        }
      },

      // Account Profile
      {
        path: 'profile',
        name: 'AccountProfile',
        component: () => import('../views/dashboard/AccountProfile.vue'),
        meta: {
          pageTitle: 'Account Profile',
          links: [{ name: 'dashboard', link: 'Overview' }, { name: 'account profile' }]
        }
      },

      // Users Management
      {
        path: 'users',
        name: 'Users',
        redirect: { name: 'Colleges' },
        component: () => import('../views/dashboard/users/UsersView.vue'),
        meta: {
          pageTitle: 'Users',
          links: [{ name: 'dashboard', link: 'Overview' }, { name: 'users' }]
        },
        children: [
          {
            path: 'staff',
            name: 'StaffManagement',
            component: () => import('../views/dashboard/users/StaffManagement.vue')
          },
          {
            path: 'colleges',
            name: 'Colleges',
            redirect: { name: 'CollegeList' },
            component: () => import('../views/dashboard/colleges/CollegesView.vue'),
            children: [
              {
                path: '',
                name: 'CollegeList',
                component: () => import('../views/dashboard/colleges/CollegeList.vue')
              }
            ]
          },
          {
            path: 'departments',
            name: 'Departments',
            component: () => import('../views/dashboard/users/DepartmentsList.vue')
          }
        ]
      },

      // College Details
      {
        path: 'users/colleges/college-:id',
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
  }
]
