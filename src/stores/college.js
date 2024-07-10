import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useCollegeStore = defineStore('college', () => {
  const colleges = ref([])
  const loading = ref(false)
  const isSuccessful = ref(false)

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
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
    }
  }

  return { colleges, loading, getAllColleges, addCollege, isSuccessful }
})
