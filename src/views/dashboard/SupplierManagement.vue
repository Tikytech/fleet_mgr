<template>
  <div class="space-y-4">
    <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Add supplier">
      <AddSupplierForm @close="showAdd = false" />
    </ModalComponent>

    <SearchAndButtonBar button-text="Add Supplier" :filter="true" @add="showAdd = true" />

    <!-- <SupplierTable @add="showAddModal" /> -->

    <TableComponent :table-data="tableData" :table-head="tableHead" :loading="supplierStore.loading" :exclude="['id']"
      :no-results="{ buttonText: 'Add supplier' }" @add="showAdd = true" />
  </div>
</template>

<script setup>
// import SupplierTable from '@/components/tables/SupplierTable.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import AddSupplierForm from '@/components/forms/AddSupplierForm.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import { onMounted, ref, watch, computed } from 'vue'

const showAdd = ref(false)

import { useSupplierStore } from '@/stores/supplier'
import TableComponent from '@/components/tables/TableComponent.vue'

const supplierStore = useSupplierStore()
const suppliers = ref(supplierStore.suppliers)

watch(
  () => supplierStore.suppliers,
  () => {
    console.log('seen')
    suppliers.value = supplierStore.suppliers
  }
)

const tableData = computed(() => {
  return suppliers.value.map(item => {
    return {
      name: item?.name || "N/A",
      contact_person: item?.contact_person || "N/A",
      contact_phone: item?.contact_phone || "N/A",
      address: item?.address || "N/A",
      id: item?.id
    }
  })
})

const tableHead = [
  { title: 'Name' },
  { title: 'Contact Person' },
  { title: "Contact's Phone" },
  { title: 'Address' },
]

onMounted(async () => {
  await supplierStore.getAllSuppliers()
  suppliers.value = supplierStore.suppliers
})
</script>

<style lang="scss" scoped></style>
