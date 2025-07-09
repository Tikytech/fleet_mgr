<template>
  <div class="space-y-4">

    <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Request a vehicle" width="500px">
      <RequestVehicleForm @close="showAdd = false" />
    </ModalComponent>

    <SearchAndButtonBar :filter="true" @add="showAdd = true" />

    <!-- <RequestTable /> -->


    <TableComponent :get-status="getRequestStatusColor" :table-data="tableData" :table-head="tableHead"
      :actions="actions" :badge="{ column: 'status' }" @add="showAdd = true" :loading="requestStore.loading"
      :exclude="['requestId']" :show-add-button="false" />
  </div>
</template>

<script setup>
import RequestVehicleForm from '@/components/forms/RequestVehicleForm.vue';
import TableComponent from '@/components/tables/TableComponent.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import { onMounted, ref, computed } from 'vue'
import { useRequestStore } from '@/stores/requests';
import dayjs from 'dayjs';
import '../../../types/table.js'; // Import JSDoc types for IntelliSense
import '../../../types/requests.js'; // Import request types for IntelliSense
import { getRequestStatusColor } from '@/utils/utils';

const showAdd = ref(false)
/**
 * @type {import('../../../types/requests.js').RequestStore}
 */
const requestStore = useRequestStore()

/**
 * @type {import('../../../types/table.js').TableActions}
 */
const actions = {
  view: {
    link: 'VehicleRequestDetails',
    param: 'requestId',
  }
}

const tableData = computed(() => {
  return requestStore.requests.map(item => {
    return {
      requestId: item?.id || "N/A",
      college: item?.staff?.college?.name || "N/A",
      department: item?.staff?.department?.name || "N/A",
      staff: item?.staff?.name || "N/A",
      type: item?.type.charAt(0).toUpperCase() + item?.type.slice(1) || "N/A",
      trip_date: dayjs(item?.trip_date).format("MMM DD, YYYY hh:mm A") || "N/A",
      passengers: item?.no_of_passengers || "N/A",
      purpose: item?.purpose || "N/A",
      status: item?.status || "N/A",
    }
  })
})

/**
 * @type {import('../../../types/table.js').TableHead[]}
 */
const tableHead = [
  { title: 'College' },
  { title: 'Department' },
  { title: 'By' },
  { title: 'Request type' },
  { title: 'Trip date' },
  { title: 'Passengers' },
  { title: 'Purpose' },
  { title: 'Status' },
]

/**
 * @type {import('../../../types/table.js').GetStatusFunction}
 */
// function getStatus(status) {
//   switch (status.toLowerCase()) {
//     case 'assigned':
//       return 'info';
//     case 'not assigned':
//       return 'warning';
//     case 'rejected':
//       return 'danger';
//     default:
//       return '';
//   }
// }

onMounted(async () => {
  await requestStore.getAllRequests()
})

// const tableData = [
//   {
//     requestId: '001',
//     college: 'College of Humanities',
//     department: 'Software Engineering',
//     staff: 'John Doe',
//     type: 'Personal',
//     createdAt: 'Sep 25, 2024',
//     passengers: 18,
//     purpose: 'Field Trip',

//   },
//   {
//     requestId: '002',
//     college: 'College of Basic and Applied Sciences',
//     department: 'Microbiology',
//     staff: 'Jane Smith',
//     type: 'Official',
//     createdAt: 'Sep 28, 2024',
//     passengers: 15,
//     purpose: 'Research Trip',

//   },
//   {
//     requestId: '003',
//     college: 'College of Basic and Applied Sciences',
//     department: 'Physical Education',
//     staff: 'Mike Johnson',
//     type: 'Personal',
//     createdAt: 'Sep 27, 2024',
//     passengers: 20,
//     purpose: 'Tournament',

//   },
//   {
//     requestId: '004',
//     college: 'College of Humanities',
//     department: 'Ancient History',
//     staff: 'Sarah Wilson',
//     type: 'Official',
//     createdAt: 'Sep 30, 2024',
//     passengers: 22,
//     purpose: 'Museum Visit',

//   }
// ]

</script>

<style lang="scss" scoped></style>