<template>
  <div class="rounded-sm bg-white shadow-md">
    <!-- table -->
    <div class="" v-if="tableData?.length > 0">
      <!-- table -->
      <table class="w-full text-sm">
        <!-- thead -->
        <tr class="text-sm font-semibold px-4 py-2 bg-slate-100 border-b">
          <!-- <th class="pl-4 w-2 text-left">
            <input type="checkbox" name="" id="" class="accent-blue-900" />
          </th> -->
          <template v-for="head in tableHead" :key="head?.head">
            <th class="text-left px-4 py-4">{{ head?.title }}</th>
          </template>
        </tr>

        <!-- table data -->
        <template v-for="data in tableData" :key="data?.id">
          <tr class="border-b">
            <!-- <td class="pl-4 w-2 text-left">
              <input type="checkbox" name="" id="" class="accent-blue-900" />
            </td> -->
            <td class="text-left px-4 py-4 capitalize">{{ data?.requestId }}</td>
            <td class="text-left px-4 py-4">{{ data?.college }}</td>
            <td class="text-left px-4 py-4 capitalize">{{ data?.tripDate }}</td>
            <td class="text-left px-4 py-4">{{ data?.returnDate }}</td>
            <td class="text-left px-4 py-4">{{ data?.passengers }}</td>
            <td class="text-left px-4 py-4">
              <BadgeComponent class="w-fit text-xs font-semibold" :type="getStatus(data?.status)">
                {{ data?.status }}
              </BadgeComponent>
            </td>
            <td class="text-left px-4 py-4">
              <div class="flex gap-2">
                <router-link :to="{ name: 'RequestDetails', params: { id: data?.requestId } }">
                  <Icon icon="heroicons:eye" class="gray-text text-xl cursor-pointer" />
                </router-link>
                <!-- <Icon icon="heroicons:trash" class="text-red-500 text-xl cursor-pointer" /> -->
              </div>
            </td>
          </tr>
        </template>
      </table>

      <!-- Pagination -->
      <div class="flex justify-end p-4 text-sm">
        <div class="flex items-center gap-2">
          <p class="gray-text">Previous</p>
          <div class="px-3 py-1.5 bg-cyan-500 rounded-md text-white">1</div>
          <p class="text-cyan-500">Next</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center py-10" v-else-if="supplierStore.loading">
      <div class="">
        <Icon icon="line-md:loading-loop" class="text-6xl text-cyan-800 mx-auto" />
        <p>Fetching data...</p>
      </div>
    </div>

    <div class="flex justify-center py-10" v-else>
      <NoResults>
        <ButtonComponent text="Add Supplier" icon="heroicons:plus" type="success" @click="$emit('add')" />
      </NoResults>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import NoResults from '@/components/ui/NoResults.vue'
import { Icon } from '@iconify/vue'
import BadgeComponent from '../ui/BadgeComponent.vue';
//   import { useSupplierStore } from '@/stores/supplier'
//   import { onMounted, ref, watch } from 'vue'

//   const supplierStore = useSupplierStore()
//   const tableData = ref(supplierStore.suppliers)

//   watch(
//     () => supplierStore.suppliers,
//     () => {
//       console.log('seen')
//       tableData.value = supplierStore.suppliers
//     }
//   )

function getStatus(status) {
  switch (status.toLowerCase()) {
    case 'approved':
      return 'success';
    case 'pending':
      return 'warning';
    case 'rejected':
      return 'danger';
    default:
      return '';
  }
}

const tableHead = [
  { title: 'Request ID' },
  { title: 'College' },
  { title: 'Trip Date' },
  { title: 'Return Date' },
  { title: 'Passengers' },
  { title: 'Status' },
  { title: 'Action' }
]

const tableData = [
  {
    requestId: '001',
    college: 'Computer Science',
    tripDate: '2024-09-25',
    returnDate: '2024-09-25',
    passengers: 18,

    status: 'Approved'
  },
  {
    requestId: '002',
    college: 'Biology Department',
    tripDate: '2024-09-28',
    returnDate: '2024-09-28',
    passengers: 15,

    status: 'Pending'
  },
  {
    requestId: '003',
    college: 'Sports Department',
    tripDate: '2024-09-27',
    returnDate: '2024-09-27',
    passengers: 20,

    status: 'Rejected'
  },
  {
    requestId: '004',
    college: 'History Department',
    tripDate: '2024-09-30',
    returnDate: '2024-09-30',
    passengers: 22,
    status: 'Approved'
  }
]

//   onMounted(async () => {
//     await supplierStore.getAllSuppliers()
//     tableData.value = supplierStore.suppliers
//   })
</script>

<style lang="scss" scoped></style>
