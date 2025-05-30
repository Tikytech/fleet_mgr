<template>
  <div class="space-y-4">
    <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Add Driver">
      <AddDriverForm @close="showAdd = false" />
    </ModalComponent>

    <SearchAndButtonBar button-text="Add Driver" :filter="true" @add="showAdd = true" />

    <!-- <DriverTable @add="showAddModal" /> -->

    <TableComponent :exclude="['id']" :table-data="driverTableData" :table-head="tableHead" @add="showAdd = true"
      :loading="driverStore.loading" :no-results="{ buttonText: 'Add Driver' }" />
  </div>
</template>

<script setup>
// import DriverTable from '@/components/tables/DriverTable.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import TableComponent from '@/components/tables/TableComponent.vue';
// import AddDriverForm from '@/components/forms/AddDriverForm.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import { useDriverStore } from '@/stores/driver'
import { computed, onMounted, ref, watch } from 'vue'
import AddDriverForm from '@/components/forms/AddDriverForm.vue';

const showAdd = ref(false)
const driverStore = useDriverStore()
const tableData = ref(driverStore.drivers)

watch(
  () => driverStore.drivers,
  () => {
    console.log('seen')
    tableData.value = driverStore.drivers
  }
)

const tableHead = [
  { title: 'Name' },
  { title: 'Driver Id' },
  { title: 'Email' },
  { title: 'Contact' },
]

const driverTableData = computed(() => {
  return tableData.value.map(item => {
    return {
      name: item?.name || "N/A",
      driverId: item?.driver_id || "N/A",
      email: item?.email || "N/A",
      contact: item?.contact || "N/A",
      id: item?.id
    }
  })
})

onMounted(async () => {
  await driverStore.getAllDriver()
  tableData.value = driverStore.drivers
})
</script>

<style lang="scss" scoped></style>
