import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'
import { clientApi } from '@/api/api'
import { useToastStore } from './toast'

export const useRequestStore = defineStore('request', () => {
  const requests = ref([])
  const loading = ref(false)
  const isSuccessful = ref(false)
  const toast = useToastStore()

  // Get data
  async function getAllRequests() {
    try {
      loading.value = true
      requests.value = (await api.get('requests')).data
      console.log(requests.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  async function getAllClientRequests() {
    try {
      loading.value = true
      requests.value = (await clientApi.get('my-requests')).data
      console.log(requests.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  // Post data
  async function requestVehicle(requestData) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.post('requests', requestData)
      console.log(response)
      isSuccessful.value = true
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
    }
  }

  async function clientRequestVehicle(requestData) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await clientApi.post('requests', requestData)
      console.log(response)
      isSuccessful.value = true
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
      toast.addToastMessage('danger', 'Request Failed', error.response?.data?.message)
    }
  }

  // get single data
  async function getRequestById(id) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.get(`requests/${id}`)
      isSuccessful.value = true
      loading.value = false
      return response.data
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
    }
  }

  async function getClientRequestById(id) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await clientApi.get(`requests/${id}`)
      isSuccessful.value = true
      loading.value = false
      return response.data
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
    }
  }

  // edit requests
  // Post data
  async function updateVehicleRequest(requestData, id) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.post(`requests/${id}`, requestData)
      console.log(response)
      isSuccessful.value = true
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
    }
  }

  return {
    requests,
    loading,
    getAllRequests,
    requestVehicle,
    isSuccessful,
    getAllClientRequests,
    clientRequestVehicle,
    getRequestById,
    getClientRequestById,
    updateVehicleRequest
  }
})
