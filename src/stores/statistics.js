import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCollegeStore } from './college'
import { useSupplierStore } from './supplier'
import { useVehicleStore } from './vehicle'
import { useRequestStore } from './requests'
// import { api } from '@/api/api'

export const useStatisticStore = defineStore('statistic', () => {
  const loading = ref(false)
  const totalRequests = ref(null)
  const totalVehicles = ref(null)
  const totalSuppliers = ref(null)
  const totalColleges = ref(null)

  const fetchData = async () => {
    loading.value = true
    await Promise.all([
      useCollegeStore().getAllColleges(),
      useRequestStore().getAllRequests(),
      useSupplierStore().getAllSuppliers(),
      useVehicleStore().getAllVehicles()
    ])
    loading.value = false
    totalColleges.value = useCollegeStore().colleges.length
    totalSuppliers.value = useSupplierStore().suppliers.length
    totalVehicles.value = useVehicleStore().vehicles.length
    totalRequests.value = useRequestStore().staffRequests.length
    console.log(totalColleges.value, totalSuppliers.value, totalRequests.value, totalVehicles.value)
  }

  return { fetchData, totalColleges, totalRequests, totalSuppliers, totalVehicles, loading }
})
