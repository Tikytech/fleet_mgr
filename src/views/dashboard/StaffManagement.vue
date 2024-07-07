<template>
  <div>
    <ModalComponent :show-modal="showAdd" @close="showAdd = false">
      <AddStaffForm @close="showAdd = false" />
    </ModalComponent>

    <TableComponent @add="showAddModal" />
  </div>
</template>

<script setup>
import TableComponent from '@/components/ui/TableComponent.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import AddStaffForm from '@/components/forms/AddStaffForm.vue'
import { ref } from 'vue'

const showAdd = ref(false)

function showAddModal() {
  showAdd.value = true
}
</script>

<style lang="scss" scoped></style>
