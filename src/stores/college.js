import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'
import { useToastStore } from './toast'

export const useCollegeStore = defineStore('college', () => {
  const colleges = ref([])
  const loading = ref(false)
  const isSuccessful = ref(false)
  const toastStore = useToastStore()

  function findCollege(id) {
    const col = colleges.value.find((college) => college.id == id)
    // console.log(col)
    return col
  }

  async function getAllColleges() {
    try {
      loading.value = true
      colleges.value = (await api.get('colleges')).data
      console.log(colleges.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  async function addCollege(collegeData) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.post('colleges', collegeData)
      console.log(response)
      isSuccessful.value = true
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false

      // Show error toast with server message
      const errorMessage = error.response?.data?.message || error.message || 'Failed to add college'
      toastStore.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  async function editCollege(collegeData, id) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.put(`colleges/${id}`, collegeData)
      console.log(response)
      isSuccessful.value = true
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false

      // Show error toast with server message
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to edit college'
      toastStore.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  return { colleges, loading, getAllColleges, addCollege, isSuccessful, findCollege, editCollege }
})
