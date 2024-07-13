import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCollegeStore } from './college'
import { useSupplierStore } from './supplier'
import { useVehicleStore } from './vehicle'
import { useStaffStore } from './staff'
// import { api } from '@/api/api'

export const useStatisticStore = defineStore('statistic', () => {
  const loading = ref(false)
  const totalStaff = ref(null)
  const totalVehicles = ref(null)
  const totalSuppliers = ref(null)
  const totalColleges = ref(null)

  const fetchData = async () => {
    loading.value = true
    await Promise.all([
      useCollegeStore().getAllColleges(),
      useStaffStore().getAllStaff(),
      useSupplierStore().getAllSuppliers(),
      useVehicleStore().getAllVehicles()
    ])
    loading.value = false
    totalColleges.value = useCollegeStore().colleges.length
    totalSuppliers.value = useSupplierStore().suppliers.length
    totalVehicles.value = useVehicleStore().vehicles.length
    totalStaff.value = useStaffStore().staff.length
    console.log(totalColleges.value, totalSuppliers.value, totalStaff.value, totalVehicles.value)
  }

  return { fetchData, totalColleges, totalStaff, totalSuppliers, totalVehicles, loading }
})
