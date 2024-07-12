<template>
  <div class="space-y-4">
    <ModalComponent :show-modal="showAdd" @close="showAdd = false">
      <AddVehicleForm @close="showAdd = false" />
    </ModalComponent>

    <SearchAndButtonBar button-text="Add Vehicle" @add="showAdd = true" />

    <div class="" v-if="vehicles?.length > 0">
      <template v-for="vehicle in vehicles" :key="vehicle?.id">
        <DisplayVehicleCard :vehicleData="vehicle" />
      </template>
    </div>

    <div class="bg-white rounded-md flex justify-center py-10" v-else-if="vehicleStore.loading">
      <div class="">
        <Icon icon="line-md:loading-loop" class="text-6xl text-cyan-800 mx-auto" />
        <p>Fetching data...</p>
      </div>
    </div>

    <div class="bg-white rounded-md p-4 flex justify-center py-10" v-else>
      <NoResults>
        <ButtonComponent
          text="Add Vehicle"
          icon="heroicons:plus"
          type="success"
          @click="showAdd = true"
        />
      </NoResults>
    </div>
  </div>
</template>

<script setup>
import ModalComponent from '@/components/ui/ModalComponent.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import AddVehicleForm from '@/components/forms/AddVehicleForm.vue'
import DisplayVehicleCard from '@/components/cards/DisplayVehicleCard.vue'
import NoResults from '@/components/ui/NoResults.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import { useVehicleStore } from '@/stores/vehicle'

const vehicleStore = useVehicleStore()
const showAdd = ref(false)
const vehicles = ref(vehicleStore.vehicles)

// function showAddModal() {
//   showAdd.value = true
// }

onMounted(async () => {
  await vehicleStore.getAllVehicles()
  vehicles.value = vehicleStore.vehicles
})
</script>

<style lang="scss" scoped></style>
