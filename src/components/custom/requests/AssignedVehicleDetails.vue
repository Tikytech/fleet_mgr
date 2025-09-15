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
import dayjs from 'dayjs'

const { assignedVehicles, returnDate, tripDate } = defineProps({
    assignedVehicles: {
        type: Array,
        required: true
    },
    returnDate: {
        type: String,
        required: true
    },
    tripDate: {
        type: String,
        required: true
    }
})

const tableData = computed(() => {
    return assignedVehicles.map(vehicle => {
        return {
            vehicle: vehicle?.vehicle?.make + ' ' + vehicle?.vehicle?.model,
            regNo: vehicle?.vehicle?.reg_no,
            no_of_passengers: vehicle?.no_of_passengers,
            driverName: vehicle?.driver?.name,
            driverContact: vehicle?.driver?.contact,
            tripStatus: getTripStatus(tripDate, returnDate),
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

function getTripStatus(tripDate, returnDate) {
    const now = dayjs()
    const start = dayjs(tripDate)
    const end = dayjs(returnDate)

    if (now.isBefore(start)) {
        return "not started"
    } else if (now.isAfter(end)) {
        return "ended"
    } else {
        return "on trip"
    }
}

function getStatus(tripStatus) {
    switch (tripStatus.toLowerCase()) {
        case 'not started':
            return 'warning';
        case 'on trip':
            return 'success';
        case 'ended':
            return 'info';
        default:
            return '';
    }
}
</script>
