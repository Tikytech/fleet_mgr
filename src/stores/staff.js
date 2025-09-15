import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useStaffStore = defineStore('staff', () => {
  const staff = ref([])
  const clientStaff = ref([])
  const loading = ref(false)
  const isSuccessful = ref(false)
  const roles = ref([])
  const loadingRoles = ref(false)

  //getters
  const drivers = computed(() => {
    return staff.value.filter((staff) => staff.role?.level == 0)
  })

  //admin staff functions
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

  //client staff functions
  async function getAllClientStaffInDepartment() {
    try {
      loading.value = true
      clientStaff.value = (await api.get(`staff`)).data
      console.log(clientStaff.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  // get all roles
  async function getAllRoles() {
    try {
      loadingRoles.value = true
      roles.value = (await api.get(`roles`)).data
      // console.log(roles.value)
      loadingRoles.value = false
    } catch (error) {
      console.log(error)
      loadingRoles.value = false
    }
  }

  return {
    drivers,
    roles,
    loadingRoles,
    getAllRoles,
    staff,
    clientStaff,
    loading,
    getAllStaff,
    addStaff,
    isSuccessful,
    getAllClientStaffInDepartment
  }
})
