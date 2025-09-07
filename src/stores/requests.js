import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'
import { useToastStore } from './toast'
import '../types/requests.js' // Import JSDoc types for IntelliSense

/**
 * @type {import('../types/requests.js').RequestStore}
 */
export const useRequestStore = defineStore('request', () => {
  const requests = ref([])
  const staffRequests = ref([])
  const approvedRequests = ref([])
  const loading = ref(false)
  const updating = ref(false)
  const isSuccessful = ref(false)
  const toast = useToastStore()

  // Vehicle Admin Functions
  // Get data
  async function getAllRequests() {
    try {
      loading.value = true
      const { personalRequests, otherRequests } = (await api.get('requests')).data
      requests.value = personalRequests
      staffRequests.value = otherRequests
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

  //for the admin, fetch all approved request
  async function getAllApprovedRequests() {
    try {
      loading.value = true
      approvedRequests.value = (await api.get('requests')).data
      console.log(approvedRequests.value)
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
   * Edit request... for editing, approving, rejecting, canceling
   * @type {import('../types/requests.js').EditRequestFunction}
   */
  async function updateVehicleRequest(requestData, id) {
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

  /**
   * Create client vehicle request
   * @type {import('../types/requests.js').CreateRequestFunction}
   */
  async function clientRequestVehicle(requestData) {
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
      toast.addToastMessage('danger', 'Request Failed', error.response?.data?.message)
    }
  }

  return {
    requests,
    loading,
    getAllRequests,
    getAllApprovedRequests,
    // requestVehicle,
    isSuccessful,
    clientRequestVehicle,
    getRequestById,
    staffRequests,
    updateVehicleRequest,
    updating
  }
})
