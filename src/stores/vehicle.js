import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useVehicleStore = defineStore('vehicle', () => {
  const vehicles = ref([])
  const loading = ref(false)
  const isSuccessful = ref(false)

  async function getAllVehicles() {
    try {
      loading.value = true
      vehicles.value = (await api.get('vehicles')).data
      console.log(vehicles.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  async function addVehicle(vehicleData) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.post('vehicles', vehicleData)
      console.log(response)
      isSuccessful.value = true
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
    }
  }

  return { vehicles, loading, getAllVehicles, addVehicle, isSuccessful }
})
