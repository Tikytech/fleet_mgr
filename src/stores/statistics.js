import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCollegeStore } from './college'
import { useSupplierStore } from './supplier'
import { useVehicleStore } from './vehicle'
import { useDriverStore } from './driver'
// import { api } from '@/api/api'

export const useStatisticStore = defineStore('statistic', () => {
  const loading = ref(false)
  const totalDrivers = ref(null)
  const totalVehicles = ref(null)
  const totalSuppliers = ref(null)
  const totalColleges = ref(null)

  const fetchData = async () => {
    loading.value = true
    await Promise.all([
      useCollegeStore().getAllColleges(),
      useDriverStore().getAllDriver(),
      useSupplierStore().getAllSuppliers(),
      useVehicleStore().getAllVehicles()
    ])
    loading.value = false
    totalColleges.value = useCollegeStore().colleges.length
    totalSuppliers.value = useSupplierStore().suppliers.length
    totalVehicles.value = useVehicleStore().vehicles.length
    totalDrivers.value = useDriverStore().drivers.length
    console.log(totalColleges.value, totalSuppliers.value, totalDrivers.value, totalVehicles.value)
  }

  return { fetchData, totalColleges, totalDrivers, totalSuppliers, totalVehicles, loading }
})
