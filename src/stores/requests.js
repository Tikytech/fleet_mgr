import { ref } from "vue";
import { defineStore } from "pinia";
import { api } from "@/api/api";

export const useRequestStore = defineStore('request', () => {
    const requests = ref([])
    const loading = ref(false)
    const isSuccessful = ref(false)

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

      return { requests, loading, getAllRequests, requestVehicle, isSuccessful}
})