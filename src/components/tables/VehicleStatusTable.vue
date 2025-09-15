<template>
  <div class="rounded bg-white shadow">
    <div class="p-4 flex justify-between border-b">
      <h3 class="text-gray-700 font-medium">Vehicle Status</h3>
      <Icon icon="heroicons:ellipsis-vertical" class="text-xl gray-text" />
    </div>

    <div class="tabl w-full overflow-x-auto">
      <!-- table -->
      <table class="w-full text-sm min-w-[700px]">
        <!-- thead -->
        <tr class="text-sm font-semibold gray-text px-4 py-2 bg-slate-100 border-b">
          <template v-for="head in tableHead" :key="head?.head">
            <th class="text-left px-4 py-4">{{ head?.title }}</th>
          </template>
        </tr>

        <!-- table data -->
        <template v-for="data in tableData" :key="data?.id">
          <tr class="hover:cursor-pointer hover:bg-slate-50">
            <td class="text-left px-4 py-4 capitalize">{{ data?.vehicle }}</td>
            <!-- <td class="text-left px-4 py-4 font-medium">
              <div class="flex items-center gap-2">
                <img :src="data?.driver.avatar" class="rounded-full size-8" alt="" />
                <span>{{ data?.driver.name }}</span>
              </div>
            </td> -->
            <td class="text-left px-4 py-4">{{ data?.regNo }}</td>
            <td class="text-left px-4 py-4 capitalize">{{ data?.college }}</td>
            <td class="text-left px-4 py-4">
              <div class="text-[10px] bg-green-400/30 text-green-700 w-fit p-0.5 px-2 font-semibold rounded"
                v-if="data?.status === 'Active'">
                {{ data?.status }}
              </div>
              <div class="text-[10px] bg-red-400/30 text-red-700 w-fit p-0.5 px-2 font-semibold rounded"
                v-else-if="data?.status === 'Inactive'">
                {{ data?.status }}
              </div>
              <div class="text-[10px] bg-blue-400/30 text-blue-700 w-fit p-0.5 px-2 font-semibold rounded"
                v-else-if="data?.status === 'Available'">
                {{ data?.status }}
              </div>
              <div class="text-[10px] bg-yellow-400/30 text-yellow-700 w-fit p-0.5 px-2 font-semibold rounded"
                v-else-if="data?.status === 'In Maintenance'">
                In Maint.
              </div>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { useVehicleStore } from '@/stores/vehicle'
const vehicleStore = useVehicleStore()

const tableHead = [
  { title: 'Vehicle' },
  { title: 'Reg. No.' },
  // { title: 'Date Assigned' },
  { title: 'College' },
  { title: 'Status' }
]

const tableData = computed(() => {
  return vehicleStore.vehicles.map(item => {
    return {
      vehicle: item?.make + ' ' + item?.model,
      regNo: item?.reg_no,
      college: item?.college?.name || 'N/A',
      status: item?.status.charAt(0).toUpperCase() + item?.status.slice(1) || 'Active',
    }
  })
})

// const tableDataa = [
//   {
//     vehicle: 'Ford F-150',
//     date_assigned: '2024-07-01',
//     type: 'Truck',
//     status: 'Free',
//     driver: { name: 'John Doe', avatar: '/images/users/avatar-1.jpg' }
//   },
//   {
//     vehicle: 'Mercedes-Benz Sprinter',
//     date_assigned: '2024-07-05',
//     type: 'Van',
//     status: 'In Maintenance',
//     driver: { name: 'Jane Smith', avatar: '/images/users/avatar-2.jpg' }
//   },
//   {
//     vehicle: 'Toyota Camry',
//     date_assigned: '2024-07-03',
//     type: 'Car',
//     status: 'Active',
//     driver: { name: 'Michael Johnson', avatar: '/images/users/avatar-3.jpg' }
//   },
//   {
//     vehicle: 'Chevrolet Silverado',
//     date_assigned: '2024-06-29',
//     type: 'Truck',
//     status: 'Inactive',
//     driver: { name: 'Emily Davis', avatar: '/images/users/avatar-4.jpg' }
//   },
//   {
//     vehicle: 'Ford Transit',
//     date_assigned: '2024-07-02',
//     type: 'Van',
//     status: 'Active',
//     driver: { name: 'Daniel Martinez', avatar: '/images/users/avatar-5.jpg' }
//   }
// ]
</script>

<style lang="scss" scoped></style>
