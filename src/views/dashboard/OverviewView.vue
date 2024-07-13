<template>
  <div class="space-y-5">
    <div class="grid grid-cols-4 gap-5">
      <template v-for="stat in overviewData" :key="stat.title">
        <OverviewStatisticCard :stat="stat" :loading="statisticStore.loading" />
      </template>
    </div>

    <div class="grid grid-cols-5 gap-5">
      <div class="col-span-3">
        <VehicleStatusTable />
      </div>
      <div class="col-span-2">
        <VehicleRequestTable />
      </div>
    </div>
  </div>
</template>

<script setup>
import OverviewStatisticCard from '@/components/cards/OverviewStatisticCard.vue'
import VehicleStatusTable from '@/components/tables/VehicleStatusTable.vue'
import VehicleRequestTable from '@/components/tables/VehicleRequestTable.vue'
import { useStatisticStore } from '@/stores/statistics'
import { ref, onMounted } from 'vue'
const statisticStore = useStatisticStore()
const overviewData = ref([
  {
    title: 'Total Vehicles',
    link: { name: 'VehicleManagement' },
    linkName: 'View Vehicle Details',
    statistic: statisticStore.totalVehicles,
    icon: 'heroicons:truck'
  },
  {
    title: 'Total Staff',
    link: { name: 'StaffManagement' },
    linkName: 'View All Staff',
    statistic: statisticStore.totalStaff,
    icon: 'heroicons:user-group'
  },
  {
    title: 'Total Suppliers',
    link: { name: 'SupplierManagement' },
    linkName: 'View Supplier Details',
    statistic: statisticStore.totalSuppliers,
    icon: 'heroicons:newspaper'
  },
  {
    title: 'Total Colleges',
    link: { name: 'Colleges' },
    linkName: 'View Colleges',
    statistic: statisticStore.totalColleges,
    icon: 'heroicons:building-library'
  }
])

onMounted(async () => {
  await statisticStore.fetchData()
  overviewData.value = overviewData.value.map((item) => {
    if (item.title === 'Total Staff') {
      return {
        ...item,
        statistic: statisticStore.totalStaff
      }
    } else if (item.title === 'Total Vehicles') {
      return {
        ...item,
        statistic: statisticStore.totalVehicles
      }
    } else if (item.title === 'Total Colleges') {
      return {
        ...item,
        statistic: statisticStore.totalColleges
      }
    } else if (item.title === 'Total Suppliers') {
      return {
        ...item,
        statistic: statisticStore.totalSuppliers
      }
    }
    return item
  })
})
</script>

<style lang="scss" scoped></style>
