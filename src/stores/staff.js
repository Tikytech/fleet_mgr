import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useStaffStore = defineStore('staff', () => {
  const staff = ref([])
  const loading = ref(false)
  const isSuccessful = ref(false)

  async function getAllStaff() {
    try {
      loading.value = true
      staff.value = (await api.get('staff')).data
      console.log(staff.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  async function addStaff(staffData) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.post('staff', staffData)
      console.log(response)
      isSuccessful.value = true
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
    }
  }

  return { staff, loading, getAllStaff, addStaff, isSuccessful }
})
