<template>
    <div>
        <p class="text-lg font-semibold mb-2">Assigned Vehicle(s) Details</p>

        <TableComponent :getStatus="getStatus" :table-data="tableData" :table-head="tableHead"
            :badge="{ column: 'tripStatus' }" />
    </div>
</template>

<script setup>
import TableComponent from '@/components/tables/TableComponent.vue'
import { computed } from 'vue'
// import dayjs from 'dayjs'

const { assignedVehicles } = defineProps({
    assignedVehicles: {
        type: Array,
        required: true
    },
})

const tableData = computed(() => {
    return assignedVehicles.map(vehicle => {
        return {
            vehicle: vehicle?.vehicle?.make + ' ' + vehicle?.vehicle?.model,
            regNo: vehicle?.vehicle?.reg_no,
            no_of_passengers: vehicle?.no_of_passengers,
            driverName: vehicle?.driver?.name,
            driverContact: vehicle?.driver?.contact,
            tripStatus: vehicle?.status,
        }
    })
})

const tableHead = [
    { title: 'Vehicle' },
    { title: 'Reg. No.' },
    { title: 'No of Passengers' },
    { title: 'Driver name' },
    { title: 'Driver contact' },
    { title: 'Trip Status' },
]


function getStatus(tripStatus) {
    switch (tripStatus.toLowerCase()) {
        case 'pending':
            return 'warning';
        case 'in transit':
            return 'success';
        case 'completed':
            return 'info';
        default:
            return '';
    }
}
</script>
