import { useAuthStore } from '@/stores/authentication'
import axios from 'axios'

const baseURL = 'https://fm.wavebeep.com/v1/'

export const api = axios.create({
  baseURL,
  timeout: 50000,
  headers: {
    'Access-Control-Allow-Origin': baseURL
  }

  //   baseURL: '/api',
  //   timeout: 50000,
  //   headers: {
  //     // 'Access-Control-Allow-Origin': 'http://localhost:5173',
  //     'Access-Control-Allow-Origin': baseURL
  //   }
})

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const authStore = useAuthStore()
    const token = authStore.getToken()
    // console.log(token)
    if (token) {
      config.headers.Authorization = token;
    }
    console.log("Api request intercepted");
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("Api response intercepted");
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        // localStorage.removeItem("accessToken");
        const authStore = useAuthStore()
        authStore.logout()
      }
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const originalRequest = error.config
    // if (error.response?.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true

    //   try {
    //     const response = await api.get('/v1/auth/refresh-token')
    //     useAuthStore.setState({accessToken: response.data.accessToken})
    //     return api(originalRequest)
    //   } catch (err){
    //     console.log(err)
    //     // logout()
    //   }
    // }
    console.log("Api response error");
    return Promise.reject(error);
  },
);
