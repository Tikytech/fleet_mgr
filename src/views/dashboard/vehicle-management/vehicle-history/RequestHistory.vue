<template>
    <div>
        <h2 class="text-sm font-semibold mb-4">Latest request from various colleges</h2>

        <!-- <VehicleHistoryTable /> -->
        <TableComponent :table-data="tableData" :table-head="tableHead" :actions="actions" />
    </div>
</template>

<script setup>
import TableComponent from '@/components/tables/TableComponent.vue';
// import VehicleHistoryTable from '@/components/tables/vehicle-history/VehicleHistoryTable.vue';

const actions = {
    view: {
        link: '',
        param: '',
    }
}

const tableHead = [
    { title: 'Trip ID' },
    { title: 'Date' },
    { title: 'Driver' },
    { title: 'College' },
    { title: 'Purpose' },
    { title: 'Passengers' },
]

const tableData = [
    {
        tripId: '001',
        date: '2024-09-20',
        driver: 'John Doe',
        college: 'Computer Science College',
        purpose: 'Pickup students for morning class',
        passengers: 18
    },
    {
        tripId: '002',
        date: '2024-09-21',
        driver: 'Jane Smith',
        college: 'Biology College',
        purpose: 'Drop off students after afternoon lab session',
        passengers: 15
    },
    {
        tripId: '003',
        date: '2024-09-22',
        driver: 'Mark Johnson',
        college: 'Sports College',
        purpose: 'Special trip for inter-college sports event',
        passengers: 20
    },
    {
        tripId: '004',
        date: '2024-09-23',
        driver: 'John Doe',
        college: 'History College',
        purpose: 'Field trip to historical museum',
        passengers: 22
    }
]

</script>

<style lang="scss" scoped></style>