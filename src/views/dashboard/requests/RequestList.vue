<template>
  <div class="space-y-4">

    <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Request a vehicle" width="500px">
      <RequestVehicleForm @close="showAdd = false" />
    </ModalComponent>

    <SearchAndButtonBar button-text="Request a vehicle" :filter="true" @add="showAdd = true" />

    <RequestTable />
  </div>
</template>

<script setup>
import RequestVehicleForm from '@/components/forms/RequestVehicleForm.vue';
import RequestTable from '@/components/tables/RequestTable.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue';
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import { ref } from 'vue'

const showAdd = ref(false)

</script>

<style lang="scss" scoped></style>
