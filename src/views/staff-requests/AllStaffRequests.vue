<template>
    <div>
        <main class="">
            <div class="space-y-4">

                <!-- <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Request a vehicle" width="500px">
                    <RequestVehicleForm @close="showAdd = false" :is-client="true" />
                </ModalComponent> -->

                <p class="text-lg font-semibold">All staff requests</p>

                <SearchAndButtonBar :filter="true" />

                <!-- <StaffRequestTable @add="showAdd = true" /> -->
                <TableComponent :table-data="tableData" :table-head="tableHead" @add="showAdd = true"
                    :loading="requestStore.loading" :badge="{ column: 'status' }" :get-status="getRequestStatusColor"
                    :actions="actions" :exclude="['requestId']" />
            </div>
        </main>
    </div>
</template>

<script setup>
// import RequestVehicleForm from '@/components/forms/RequestVehicleForm.vue';
// import ModalComponent from '@/components/ui/ModalComponent.vue';
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
// import StaffRequestTable from '@/components/tables/staff-request/StaffRequestTable.vue';
import { onMounted, ref, computed } from 'vue'
import { useRequestStore } from '@/stores/requests';
import TableComponent from '@/components/tables/TableComponent.vue';
import dayjs from 'dayjs';
import { getRequestStatusColor } from '@/utils/utils';

const showAdd = ref(false)
const requestStore = useRequestStore()

const tableData = computed(() => {
    return requestStore.staffRequests.map(item => {
        return {
            requestId: item?.id || "N/A",
            purpose: item?.purpose || "N/A",
            type: item?.type.charAt(0).toUpperCase() + item?.type.slice(1) || "N/A",
            trip_date: dayjs(item?.trip_date).format('MMM DD, YYYY [-] hh:mma') || "N/A",
            return_date: dayjs(item?.return_date).format('MMM DD, YYYY [-] hh:mma') || "N/A",
            passengers: item?.no_of_passengers || "N/A",
            status: item?.status || "N/A",
        }
    })
})

const tableHead = [
    // { title: 'Request ID' },
    { title: 'Purpose' },
    { title: 'Trip Type' },
    { title: 'Trip Date' },
    { title: 'Return Date' },
    { title: 'Passengers' },
    { title: 'Status' },
]

const actions = {
    view: {
        link: 'StaffRequestDetails',
        param: 'requestId',
    }
}

// function getStatus(status) {
//     switch (status) {
//         case 'Pending':
//             return 'warning';
//         case 'Approved Pending Vehicle':
//             return 'info';
//         case 'Approved Vehicle Assigned':
//             return 'success';
//         case 'Rejected':
//             return 'danger';
//         case 'Canceled':
//             return 'neutral';
//         case 'Completed':
//             return 'success';
//         default:
//             return 'neutral';
//     }
// }

onMounted(async () => {
    await requestStore.getAllStaffRequests()
})

</script>

<style lang="scss" scoped></style>