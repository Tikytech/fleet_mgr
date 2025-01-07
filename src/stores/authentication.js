import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'
import { useRouter } from 'vue-router'


export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const token = ref(null)
    const error = ref(null)
    const loading = ref(false)
    const router = useRouter()

  async function login(credentials) {
    try {
      loading.value = true
      const response = await api.post('/auth/login', credentials)
      console.log(response)
      localStorage.setItem('OTPmail', credentials.email)
      error.value = null
      return { status: response.data.status, message: response.data.message }
    } catch (err) {
      error.value = err.response.data.message
      console.log(error.value)
      return { status: false, message: error.value }
    } finally {
      loading.value = false
    }
  }

  async function loginWithOTP(otp) {
    try {
      const email = localStorage.getItem('OTPmail')
      loading.value = true
      const response = await api.post('/auth/login', { email, otp })
      console.log(response)
      if (response.data.status) {
        user.value = response.data.user
        token.value = response.data.token
        localStorage.setItem('token', token.value)
        localStorage.removeItem('OTPmail')
      }
      error.value = null
      return { status: response.data.status, message: response.data.message }
    } catch (err) {
      error.value = err.response.data.message
      console.log(error.value)
      return { status: false, message: error.value }
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    try {
    //   await api.post('/logout')
      user.value = null
      token.value = null
      localStorage.removeItem('token')
      router.push({name: "Login"})
      error.value = null
    } catch (err) {
      error.value = err.response.data.message
    }
  }

  function getToken() {
    return localStorage.getItem('token')
  }

  return {
    user,
    token,
    error,
    login,
    logout,
    loading,
    getToken,
    loginWithOTP
  }
})
