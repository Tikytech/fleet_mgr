<template>
  <div class="space-y-4">
    <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Add Vehicle" width="1000px">
      <AddVehicleForm @close="showAdd = false" v-if="showAdd" />
    </ModalComponent>

    <!-- statistics -->
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      <template v-for="stat in overviewData" :key="stat.title">
        <OverviewStatisticCard :stat="stat" />
      </template>
    </div>

    <SearchAndButtonBar button-text="Add Vehicle" @add="showAdd = true" :filter="true" :dropdown="[
      {
        name: 'Import CSV',
        emit: 'importCsv',
        icon: 'material-symbols:download-2-outline-rounded'
      },
      { name: 'Add Vehicle', emit: 'add', icon: 'heroicons:plus' }
    ]" />

    <p class="text-sm">Showing: {{ vehicles.length }} vehicles</p>

    <!-- <DisplayVehicleCard /> -->
    <div class="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4" v-if="vehicles?.length > 0">
      <template v-for="vehicle in vehicles" :key="vehicle?.id">
        <DisplayVehicleCard :vehicleData="vehicle" />
      </template>
    </div>

    <div class="bg-white rounded-md flex justify-center py-10"
      v-else-if="vehicleStore.loading && vehicleStore.vehicles < 1">
      <div class="">
        <Icon icon="line-md:loading-loop" class="text-6xl text-cyan-800 mx-auto" />
        <p>Fetching data...</p>
      </div>
    </div>

    <div class="bg-white rounded-md p-4 flex justify-center py-10" v-else>
      <NoResults>
        <ButtonComponent text="Add Vehicle" icon="heroicons:plus" type="success" @click="showAdd = true" />
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
import OverviewStatisticCard from '@/components/cards/OverviewStatisticCard.vue'
import { Icon } from '@iconify/vue'
import { onMounted, ref, watch, computed } from 'vue'
import { useVehicleStore } from '@/stores/vehicle'

const vehicleStore = useVehicleStore()
const showAdd = ref(false)
const vehicles = ref(vehicleStore.vehicles)

const overviewData = computed(() => {
  return [
    {
      title: 'Total Vehicles',
      // link: { name: 'VehicleManagement' },
      // linkName: 'View Vehicle Details',
      statistic: vehicles.value.length,
      icon: 'heroicons:truck'
    },
    {
      title: 'Available Vehicles',
      // link: { name: 'StaffManagement' },
      // linkName: 'View All Staff',
      statistic: vehicles.value.filter(vehicle => vehicle.availability === 'Available').length,
      icon: 'material-symbols-light:electric-car-outline-rounded'
    },
    {
      title: 'In Use',
      // link: { name: 'SupplierManagement' },
      // linkName: 'View Supplier Details',
      statistic: vehicles.value.filter(vehicle => vehicle.availability === 'Unavailable').length,
      icon: 'mdi:car-emergency'
    },
    {
      title: 'In maintenance',
      // link: { name: 'Colleges' },
      // linkName: 'View Colleges',
      statistic: vehicles.value.filter(vehicle => vehicle.availability === 'In Maintenance').length,
      icon: 'material-symbols-light:car-crash-outline'
    }
  ]
})
// function showAddModal() {
//   showAdd.value = true
// }

watch(
  () => vehicleStore.vehicles,
  () => {
    vehicles.value = vehicleStore.vehicles
  }
)

onMounted(async () => {
  await vehicleStore.getAllVehicles()
  vehicles.value = vehicleStore.vehicles
})
</script>

<style lang="scss" scoped></style>
