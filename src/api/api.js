import { useAuthStore } from '@/stores/authentication'
import axios from 'axios'

// const baseURL = 'https://fm.wavebeep.com/v1/'
const baseURL = 'https://fleet-mgr.wavebeep.com/v1/'

// api
export const api = axios.create({
  baseURL,
  // timeout: 50000,
  headers: {
    'Access-Control-Allow-Origin': baseURL
  }
})

//  api
// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const authStore = useAuthStore()
    const token = authStore.getToken('token')
    if (token) {
      config.headers.Authorization = token
    }
    console.log('Api request intercepted successfully')
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('Api response intercepted successfully')
    return response
  },
  async (error) => {
    // if the user is not authorized or forbidden, logout the user
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (typeof window !== 'undefined') {
        const authStore = useAuthStore()
        authStore.logout()
      }
    }
    console.log('Api response error')
    return Promise.reject(error)
  }
)
