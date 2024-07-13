<template>
  <div class="space-y-4">
    <ModalComponent :show-modal="showAdd" @close="showAdd = false">
      <AddStaffForm @close="showAdd = false" />
    </ModalComponent>

    <SearchAndButtonBar button-text="Add Staff" :filter="true" @add="showAdd = true" />

    <StaffTable @add="showAddModal" />
  </div>
</template>

<script setup>
import StaffTable from '@/components/tables/StaffTable.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import AddStaffForm from '@/components/forms/AddStaffForm.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import { ref } from 'vue'

const showAdd = ref(false)

function showAddModal() {
  showAdd.value = true
}
</script>

<style lang="scss" scoped></style>
