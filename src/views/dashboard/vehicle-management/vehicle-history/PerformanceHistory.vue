<template>
    <div class="flex justify-between mb-5 flex-wrap gap-2">
        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle performance information</h2>
            <p class="text-sm">
                <span>Next performance test scheduled: </span><span class="text-gray-500">25th December, 2024</span>
            </p>
        </div>
        <ButtonComponent text="Add performance test record" />
    </div>

    <TableComponent :table-data="tableData" :table-head="tableHead" :actions="actions" />
</template>

<script setup>
import TableComponent from '@/components/tables/TableComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';

const actions = {
    view: {
        link: '',
        param: '',
    }
}

const tableHead = [
    { title: 'Date' },
    { title: 'Mileage' },
    { title: 'Fuel efficiency' },
    { title: 'Engine health' },
    { title: 'Acceleration time' },
    { title: 'Top speed' },
    { title: 'Notes' },
]

const tableData = [
    {
        date: "2024-11-01",
        mileage: 14000,
        fuelEfficiency: "26 mpg",
        engineHealth: "Good",
        accelerationTime: "7.5 seconds",
        topSpeed: "110 mph",
        notes: "Engine running smoothly, no issues."
    },
    {
        date: "2024-12-15",
        mileage: 17000,
        fuelEfficiency: "25 mpg",
        engineHealth: "Fair",
        accelerationTime: "7.8 seconds",
        topSpeed: "105 mph",
        notes: "Minor delay in acceleration detected."
    },
    {
        date: "2025-02-01",
        mileage: 21000,
        fuelEfficiency: "27 mpg",
        engineHealth: "Excellent",
        accelerationTime: "7.3 seconds",
        topSpeed: "115 mph",
        notes: "Post-maintenance performance boost."
    },
    {
        date: "2025-04-01",
        mileage: 25000,
        fuelEfficiency: "28 mpg",
        engineHealth: "Good",
        accelerationTime: "7.4 seconds",
        topSpeed: "113 mph",
        notes: "Optimized after tyre replacement."
    },
    {
        date: "2025-06-01",
        mileage: 30000,
        fuelEfficiency: "27 mpg",
        engineHealth: "Good",
        accelerationTime: "7.6 seconds",
        topSpeed: "112 mph",
        notes: "Minor tuning recommended."
    }
];

</script>

<style lang="scss" scoped></style>