<template>
  <div>
    <ModalComponent :show-modal="showAdd" @close="showAdd = false">
      <AddVehicleForm @close="showAdd = false" />
    </ModalComponent>

    <SearchAndButtonBar button-text="Add Vehicle" @add="showAdd = true" />
  </div>
</template>

<script setup>
import ModalComponent from '@/components/ui/ModalComponent.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import AddVehicleForm from '@/components/forms/AddVehicleForm.vue'

import { ref } from 'vue'

const showAdd = ref(false)

// function showAddModal() {
//   showAdd.value = true
// }
</script>

<style lang="scss" scoped></style>
