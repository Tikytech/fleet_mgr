import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useUserStore = defineStore('user', () => {
  const users = ref([])
  const loading = ref(false)
  const isSuccessful = ref(false)

  async function getAllUser() {
    try {
      loading.value = true
      users.value = (await api.get('users')).data
      console.log(users.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  async function addUser(userData) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.post('users', userData)
      console.log(response)
      isSuccessful.value = true
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
    }
  }

  return { users, loading, getAllUser, addUser, isSuccessful }
})
