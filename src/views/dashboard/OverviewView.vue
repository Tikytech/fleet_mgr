<template>
  <div class="space-y-3 md:space-y-5">
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      <template v-for="stat in overviewData" :key="stat.title">
        <OverviewStatisticCard :stat="stat" :loading="statisticStore.loading" />
      </template>
    </div>

    <div class="md:grid md:grid-cols-5 gap-3 md:gap-5">
      <div class="md:col-span-3 mb-3 md:mb-0">
        <VehicleStatusTable />
      </div>
      <div class="md:col-span-2">
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
    linkName: 'View all vehicles',
    statistic: statisticStore.totalVehicles || 0,
    icon: 'heroicons:truck'
  },
  {
    title: 'Total Requests',
    link: { name: 'VehicleRequestList' },
    linkName: 'View all requests',
    statistic: statisticStore.totalRequests || 0,
    icon: 'heroicons:arrows-right-left-solid'
  },
  {
    title: 'Total Suppliers',
    link: { name: 'SupplierManagement' },
    linkName: 'View all suppliers',
    statistic: statisticStore.totalSuppliers || 0,
    icon: 'heroicons:newspaper'
  },
  {
    title: 'Total Colleges',
    link: { name: 'Colleges' },
    linkName: 'View all colleges',
    statistic: statisticStore.totalColleges || 0,
    icon: 'heroicons:building-library'
  }
])

onMounted(async () => {
  await statisticStore.fetchData()
  overviewData.value = overviewData.value.map((item) => {
    if (item.title === 'Total Requests') {
      return {
        ...item,
        statistic: statisticStore.totalRequests
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
