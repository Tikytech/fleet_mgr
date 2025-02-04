<template>
    <div>
        <div>
            <TopNavigation :client="true" />
        </div>

        <main class="maximum-width">
            <div class="space-y-4">

                <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Request a vehicle" width="500px">
                    <RequestVehicleForm @close="showAdd = false" />
                </ModalComponent>

                <SearchAndButtonBar button-text="Request a vehicle" :filter="true" @add="showAdd = true" />

                <!-- <StaffRequestTable @add="showAdd = true" /> -->
                <TableComponent :table-data="tableData" :table-head="tableHead" @add="showAdd = true"
                    :loading="requestStore.loading" :badge="{ column: 'status' }" :get-status="getStatus" />
            </div>
        </main>
    </div>
</template>

<script setup>
import TopNavigation from '@/components/layout/topnav/TopNavigation.vue';
import RequestVehicleForm from '@/components/forms/RequestVehicleForm.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
// import StaffRequestTable from '@/components/tables/staff-request/StaffRequestTable.vue';
import { onMounted, ref, computed } from 'vue'
import { useRequestStore } from '@/stores/requests';
import TableComponent from '@/components/tables/TableComponent.vue';
import dayjs from 'dayjs';

const showAdd = ref(false)
const requestStore = useRequestStore()

const tableData = computed(() => {
    return requestStore.requests.map(item => {
        return {
            requestId: item?.id || "N/A",
            college: item?.college || "N/A",
            tripDate: dayjs(item?.trip_date).format("MMM DD, YYYY") || "N/A",
            return_date: dayjs(item?.return_date).format("MMM DD, YYYY") || "N/A",
            passengers: item?.no_of_passengers || "N/A",
            status: item?.status || "N/A",
        }
    })
})

const tableHead = [
    { title: 'Request ID' },
    { title: 'College' },
    { title: 'Trip Date' },
    { title: 'Return Date' },
    { title: 'Passengers' },
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

</script>

<style lang="scss" scoped></style>