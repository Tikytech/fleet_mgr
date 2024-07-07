<template>
  <div>
    <ModalComponent :show-modal="showAdd" @close-modal="showAdd = false">
      <AddStaffForm />
    </ModalComponent>

    <TableComponent :tableData="tableData" add="Add Staff" @add="showAddModal" />
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
  console.log('shit')
}

const tableData = {
  tableHead: [
    { title: 'Name' },
    { title: 'Staff Id' },
    { title: 'College' },
    { title: 'Driver' },
    { title: 'Action' }
  ],
  data: [
    { value: 'Kris Wale' },
    { value: '314q3r314' },
    { value: 'Basic and Applied Sciences' },
    { value: 'No' }
  ]
}
</script>

<style lang="scss" scoped></style>
