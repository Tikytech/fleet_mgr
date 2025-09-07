import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'
import { useRouter } from 'vue-router'

//
function getUserFromLocalStorage() {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref(getUserFromLocalStorage())
  const token = ref(null)
  const error = ref(null)
  const loading = ref(false)
  const router = useRouter()

  //get user role
  const userRole = computed(() => {
    return user.value?.role
  })

  //  login
  async function login(email) {
    try {
      loading.value = true
      const response = await api.post('/auth/login', { email })
      console.log(response)
      localStorage.setItem('OTPmail', email)
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

  //  login with otp
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

  // logout user functionality
  async function logout() {
    try {
      token.value = null
      user.value = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.push({ name: 'Login' })
      error.value = null
    } catch (err) {
      error.value = err.response.data.message
    }
  }

  // getting client user
  async function getUser() {
    try {
      loading.value = true
      const response = await api.get('/user')
      user.value = response.data
      console.log(user.value)
      localStorage.setItem('user', JSON.stringify(user.value))
      loading.value = false
    } catch (err) {
      error.value = err.response.data.message
      loading.value = false
    }
  }

  // getting token
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
    loginWithOTP,
    getUser,
    getToken,
    userRole
  }
})
