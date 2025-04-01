import { useAuthStore } from '@/stores/authentication'
import axios from 'axios'

const baseURL = 'https://fm.wavebeep.com/v1/'

// admin api
export const api = axios.create({
  baseURL,
  timeout: 50000,
  headers: {
    'Access-Control-Allow-Origin': baseURL
  }
})

// client api
export const clientApi = axios.create({
  baseURL,
  timeout: 50000,
  headers: {
    'Access-Control-Allow-Origin': baseURL
  }
})

// Add an admin request interceptor
api.interceptors.request.use(
  async (config) => {
    const authStore = useAuthStore()
    const token = authStore.getToken('adminToken')
    if (token) {
      config.headers.Authorization = token
    }
    console.log('Api request intercepted for admin')
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add an admin response interceptor
api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('Api response intercepted for admin')
    return response
  },
  async (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        const authStore = useAuthStore()
        authStore.adminLogout()
      }
    }
    console.log('Api response error for admin')
    return Promise.reject(error)
  }
)

// CLIENT API
// Add a client request interceptor
clientApi.interceptors.request.use(
  async (config) => {
    const authStore = useAuthStore()
    const token = authStore.getToken('clientToken')
    if (token) {
      config.headers.Authorization = token
    }
    console.log('Api request intercepted for client')
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a client response interceptor
clientApi.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('Client Api response intercepted for client')
    return response
  },
  async (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (typeof window !== 'undefined') {
        const authStore = useAuthStore()
        authStore.clientLogout()
      }
    }
    console.log('Client Api response error')
    return Promise.reject(error)
  }
)
