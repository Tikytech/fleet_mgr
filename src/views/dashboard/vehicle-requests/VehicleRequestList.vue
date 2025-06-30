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
    link: 'VehicleRequestDetails',
    param: 'requestId',
  }
}

// const tableData = computed(() => {
//   return requestStore.requests.map(item => {
//     return {
//       requestId: item?.id || "N/A",
//       college: item?.staff?.college?.name || "N/A",
//       staff: item?.staff?.name || "N/A",
//       createdAt: dayjs(item?.createdAt).format("MMM DD, YYYY") || "N/A",
//       passengers: item?.no_of_passengers || "N/A",
//       purpose: item?.purpose || "N/A",
//       status: item?.status || "N/A",
//     }
//   })
// })

const tableHead = [
  { title: ' ID' },
  { title: 'College' },
  { title: 'Department' },
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

const tableData = [
  {
    requestId: '001',
    college: 'College of Humanities',
    department: 'Software Engineering',
    staff: 'John Doe',
    createdAt: 'Sep 25, 2024',
    passengers: 18,
    purpose: 'Field Trip',
    status: 'Approved'
  },
  {
    requestId: '002',
    college: 'College of Basic and Applied Sciences',
    department: 'Microbiology',
    staff: 'Jane Smith',
    createdAt: 'Sep 28, 2024',
    passengers: 15,
    purpose: 'Research Trip',
    status: 'Approved'
  },
  {
    requestId: '003',
    college: 'College of Basic and Applied Sciences',
    department: 'Physical Education',
    staff: 'Mike Johnson',
    createdAt: 'Sep 27, 2024',
    passengers: 20,
    purpose: 'Tournament',
    status: 'Approved'
  },
  {
    requestId: '004',
    college: 'College of Humanities',
    department: 'Ancient History',
    staff: 'Sarah Wilson',
    createdAt: 'Sep 30, 2024',
    passengers: 22,
    purpose: 'Museum Visit',
    status: 'Approved'
  }
]

</script>

<style lang="scss" scoped></style>