<template>
    <div>
        <main class="maximum-width py-6">
            <div class="space-y-4">

                <div class="">
                    <h2 class="font-bold text-xl">{{ clientUser?.college?.name }}</h2>
                    <p class="text-gray-500 text-sm"><span class="">Staff:</span> <span class="">{{ clientUser?.name
                            }}</span>
                    </p>
                    <p class="text-gray-500 text-sm"><span class="">Email:</span> <span class="">{{ clientUser?.email
                            }}</span>
                    </p>
                    <p class="text-gray-500 text-sm"><span class="">Contact:</span> <span class="">{{
                        clientUser?.contact
                            }}</span>
                    </p>
                </div>

                <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Request a vehicle" width="500px">
                    <RequestVehicleForm @close="showAdd = false" :is-client="true" />
                </ModalComponent>

                <SearchAndButtonBar button-text="Request a vehicle" :filter="true" @add="showAdd = true" />

                <!-- <StaffRequestTable @add="showAdd = true" /> -->
                <TableComponent :table-data="tableData" :table-head="tableHead" @add="showAdd = true"
                    :loading="requestStore.loading" :badge="{ column: 'status' }" :get-status="getStatus"
                    :actions="actions" />
            </div>
        </main>
    </div>
</template>

<script setup>
import RequestVehicleForm from '@/components/forms/RequestVehicleForm.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
// import StaffRequestTable from '@/components/tables/staff-request/StaffRequestTable.vue';
import { onMounted, ref, computed } from 'vue'
import { useRequestStore } from '@/stores/requests';
import { useAuthStore } from '@/stores/authentication';
import TableComponent from '@/components/tables/TableComponent.vue';
import dayjs from 'dayjs';

const showAdd = ref(false)
const requestStore = useRequestStore()
const { clientUser } = useAuthStore()

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

const actions = {
    view: {
        link: 'StaffRequestDetails',
        param: 'requestId',
    }
}

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
    await requestStore.getAllClientRequests()
})

</script>

<style lang="scss" scoped></style>