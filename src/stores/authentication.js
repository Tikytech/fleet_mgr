import { ref } from 'vue'
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
    const token = ref(null) //client token
    const adminToken = ref(null) //admin token
    const error = ref(null)
    const loading = ref(false)
    const router = useRouter()

    // client login
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

  // client login with otp
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

  async function adminLogin(credentials) {
    try {
      loading.value = true
      const response = await api.post('/admin/auth/login', credentials)
      console.log(response)
      adminToken.value = response.data.token
      localStorage.setItem('adminToken', adminToken.value)
      error.value = null
      return response.data.status
    } catch (err) {
      error.value = err.response.data.message
    } finally {
      loading.value = false
    }
  }

  async function getAdminUser() {
    try {
      loading.value = true
      const response = await api.get('/user')
      user.value = response.data
      console.log(user.value)
      localStorage.setItem('adminUser', JSON.stringify(user.value))
      loading.value = false
    } catch (err) {
      error.value = err.response.data.message
      loading.value = false
    }
  }

  // logout client functionality
  async function logout() {
    try {
    //   await api.post('/logout')
      token.value = null
      localStorage.removeItem('token')
      router.push({name: "Login"})
      error.value = null
    } catch (err) {
      error.value = err.response.data.message
    }
  }

  async function adminLogout() {
    try {
      user.value = null
      adminToken.value = null
      localStorage.removeItem('adminToken')
      localStorage.removeItem('adminUser')
      router.push({name: "AdminLogin"})
      error.value = null
    } catch (err) {
      error.value = err.response.data.message
    }}

  function getToken(tokenType) {
    return localStorage.getItem(tokenType)
  }

  return {
    user,
    token,
    error,
    login,
    logout,
    loading,
    getToken,
    loginWithOTP,
    adminLogin,
    adminToken,
    getAdminUser,
    adminLogout,
  }
})
