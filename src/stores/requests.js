import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'
import { clientApi } from '@/api/api'
import { useToastStore } from './toast'
import '../types/requests.js' // Import JSDoc types for IntelliSense

/**
 * @type {import('../types/requests.js').RequestStore}
 */
export const useRequestStore = defineStore('request', () => {
  const requests = ref([])
  const loading = ref(false)
  const updating = ref(false)
  const isSuccessful = ref(false)
  const toast = useToastStore()
  const staffRequests = ref([])

  // Vehicle Admin Functions
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
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to fetch requests'
      toast.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  /**
   * Get single request by ID
   * @type {import('../types/requests.js').GetRequestByIdFunction}
   */
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
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to fetch request details'
      toast.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  /**
   * Update vehicle request
   * @type {import('../types/requests.js').UpdateVehicleRequestFunction}
   */
  async function updateVehicleRequest(requestData, id) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.post(`requests/${id}`, requestData)
      console.log(response)
      isSuccessful.value = true
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to update request'
      toast.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  /**
   * Edit request... for editing, approving, rejecting, canceling
   * @type {import('../types/requests.js').EditRequestFunction}
   */
  async function editRequestByAdmin(requestData, id) {
    try {
      isSuccessful.value = false
      updating.value = true
      const response = await api.put(`requests/${id}`, requestData)
      console.log(response)
      isSuccessful.value = true
      updating.value = false
    } catch (error) {
      console.log(error)
      updating.value = false
      isSuccessful.value = false
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to edit request'
      toast.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  // Client/Staff Functions
  // Get all personal requests
  async function getAllClientRequests() {
    try {
      loading.value = true
      requests.value = (await clientApi.get('my-requests')).data
      console.log(requests.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to fetch your requests'
      toast.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  //get all staff requests
  async function getAllStaffRequests() {
    try {
      loading.value = true
      staffRequests.value = (await clientApi.get('requests')).data
      console.log(staffRequests.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to fetch staff requests'
      toast.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  /**
   * Create client vehicle request
   * @type {import('../types/requests.js').CreateRequestFunction}
   */
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

  /**
   * Get client request by ID
   * @type {import('../types/requests.js').GetRequestByIdFunction}
   */
  async function getClientRequestById(id, showLoading = true) {
    try {
      isSuccessful.value = false
      loading.value = showLoading
      const response = await clientApi.get(`requests/${id}`)
      isSuccessful.value = true
      loading.value = false
      return response.data
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to fetch request details'
      toast.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  /**
   * Edit request... for editing, approving, rejecting, canceling
   * @type {import('../types/requests.js').EditRequestFunction}
   */
  async function editClientRequest(requestData, id) {
    try {
      isSuccessful.value = false
      updating.value = true
      const response = await clientApi.put(`requests/${id}`, requestData)
      console.log(response)
      isSuccessful.value = true
      updating.value = false
    } catch (error) {
      console.log(error)
      updating.value = false
      isSuccessful.value = false
      const errorMessage =
        error.response?.data?.message || error.message || 'Failed to edit request'
      toast.addToastMessage('danger', 'Error', errorMessage)
    }
  }

  return {
    requests,
    loading,
    getAllRequests,
    // requestVehicle,
    isSuccessful,
    getAllClientRequests,
    clientRequestVehicle,
    getRequestById,
    getClientRequestById,
    updateVehicleRequest,
    getAllStaffRequests,
    staffRequests,
    editClientRequest,
    editRequestByAdmin,
    updating
  }
})
