<template>
  <div class="space-y-4">
    <ModalComponent :show-modal="showAdd" @close="showAdd = false">
      <AddSupplierForm @close="showAdd = false" />
    </ModalComponent>

    <SearchAndButtonBar button-text="Add Supplier" :filter="true" @add="showAdd = true" />

    <SupplierTable @add="showAddModal" />
  </div>
</template>

<script setup>
import SupplierTable from '@/components/tables/SupplierTable.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import AddSupplierForm from '@/components/forms/AddSupplierForm.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import { ref } from 'vue'

const showAdd = ref(false)

function showAddModal() {
  showAdd.value = true
}
</script>

<style lang="scss" scoped></style>
