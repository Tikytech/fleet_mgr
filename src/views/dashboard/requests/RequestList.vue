<template>
  <div class="space-y-4">

    <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Request a vehicle" width="500px">
      <RequestVehicleForm @close="showAdd = false" />
    </ModalComponent>

    <SearchAndButtonBar :filter="true" @add="showAdd = true" />

    <!-- <RequestTable /> -->


    <TableComponent :get-status="getStatus" :table-data="tableData" :table-head="tableHead" :actions="actions"
      :badge="{ column: 'status' }" @add="showAdd = true" :loading="requestStore.loading" />
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

const showAdd = ref(false)
const requestStore = useRequestStore()

const actions = {
  view: {
    link: 'RequestDetails',
    param: 'requestId',
  }
}

const tableData = computed(() => {
  return requestStore.requests.map(item => {
    return {
      requestId: item?.id || "N/A",
      college: item?.staff?.college?.name || "N/A",
      staff: item?.staff?.name || "N/A",
      createdAt: dayjs(item?.createdAt).format("MMM DD, YYYY") || "N/A",
      passengers: item?.no_of_passengers || "N/A",
      purpose: item?.purpose || "N/A",
      status: item?.status || "N/A",
    }
  })
})

const tableHead = [
  { title: ' ID' },
  { title: 'College' },
  { title: 'Staff' },
  { title: 'Requested At' },
  { title: 'Passengers' },
  { title: 'Purpose' },
  { title: 'Status' },
]

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

onMounted(async () => {
  await requestStore.getAllRequests()
})

// const tableData = [
//   {
//     requestId: '001',
//     college: 'Computer Science',
//     tripDate: '2024-09-25',
//     returnDate: '2024-09-25',
//     passengers: 18,
//     status: 'Approved'
//   },
//   {
//     requestId: '002',
//     college: 'Biology Department',
//     tripDate: '2024-09-28',
//     returnDate: '2024-09-28',
//     passengers: 15,

//     status: 'Pending'
//   },
//   {
//     requestId: '003',
//     college: 'Sports Department',
//     tripDate: '2024-09-27',
//     returnDate: '2024-09-27',
//     passengers: 20,

//     status: 'Rejected'
//   },
//   {
//     requestId: '004',
//     college: 'History Department',
//     tripDate: '2024-09-30',
//     returnDate: '2024-09-30',
//     passengers: 22,
//     status: 'Approved'
//   }
// ]

</script>

<style lang="scss" scoped></style>
