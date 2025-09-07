import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'
import { useToastStore } from './toast'

export const useDepartmentStore = defineStore('department', () => {
  const departments = ref([])
  const loading = ref(false)
  const updating = ref(false)
  const isSuccessful = ref(false)
  const toastStore = useToastStore()

  function findDepartment(id) {
    const dept = departments.value.find((department) => department.id == id)
    return dept
  }

  async function getAllDepartments() {
    try {
      loading.value = true
      departments.value = (await api.get('departments')).data
      console.log(departments.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  async function createDepartment(departmentData) {
    try {
      isSuccessful.value = false
      updating.value = true
      const response = await api.post('departments', departmentData)
      console.log(response)
      isSuccessful.value = true
      updating.value = false
    } catch (error) {
      console.log(error)
      updating.value = false
      isSuccessful.value = false

      // Show error toast with server message
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to create department'
      toastStore.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  async function editDepartment(departmentData, departmentId) {
    try {
      isSuccessful.value = false
      updating.value = true
      const response = await api.put(`departments/${departmentId}`, departmentData)
      console.log(response)
      isSuccessful.value = true
      updating.value = false
    } catch (error) {
      console.log(error)
      updating.value = false
      isSuccessful.value = false

      // Show error toast with server message
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to edit department'
      toastStore.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  return {
    departments,
    loading,
    updating,
    getAllDepartments,
    createDepartment,
    editDepartment,
    isSuccessful,
    findDepartment
  }
})
