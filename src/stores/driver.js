import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useDriverStore = defineStore('driver', () => {
  const drivers = ref([])
  const loading = ref(false)
  const isSuccessful = ref(false)

  async function getAllDriver() {
    try {
      loading.value = true
      drivers.value = (await api.get('drivers')).data
      console.log(drivers.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  async function addDriver(driverData) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.post('drivers', driverData)
      console.log(response)
      isSuccessful.value = true
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
    }
  }

  return { drivers, loading, getAllDriver, addDriver, isSuccessful }
})
