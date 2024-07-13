import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/api/api'

export const useSupplierStore = defineStore('supplier', () => {
  const suppliers = ref([])
  const loading = ref(false)
  const isSuccessful = ref(false)

  async function getAllSuppliers() {
    try {
      loading.value = true
      suppliers.value = (await api.get('suppliers')).data
      console.log(suppliers.value)
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  async function addSupplier(supplierData) {
    try {
      isSuccessful.value = false
      loading.value = true
      const response = await api.post('suppliers', supplierData)
      console.log(response)
      isSuccessful.value = true
    } catch (error) {
      console.log(error)
      loading.value = false
      isSuccessful.value = false
    }
  }

  return { suppliers, loading, getAllSuppliers, addSupplier, isSuccessful }
})
