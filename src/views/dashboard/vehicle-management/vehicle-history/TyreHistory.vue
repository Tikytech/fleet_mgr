<template>
    <div class="flex justify-between mb-5 flex-wrap gap-2">
        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle tyre information</h2>
            <p class="text-sm">
                <span>Next tyre service scheduled: </span><span class="text-gray-500">25th December, 2024</span>
            </p>
        </div>
        <ButtonComponent text="Add tyre maintenance log" />
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
    { title: 'Tyre brand' },
    { title: 'Tyre position' },
    { title: 'Tyre condition' },
    { title: 'Cost' },
    { title: 'Notes' },
]

const tableData = [
    {
        date: "2024-10-05",
        mileage: 12000,
        tyreBrand: "Michelin",
        tyrePosition: "Front Left",
        tyreCondition: "Replaced",
        cost: 120,
        notes: "Punctured beyond repair."
    },
    {
        date: "2024-11-18",
        mileage: 16000,
        tyreBrand: "Goodyear",
        tyrePosition: "Rear Right",
        tyreCondition: "Rotated",
        cost: 20,
        notes: "Rotated rear tyres for even wear."
    },
    {
        date: "2024-12-22",
        mileage: 19000,
        tyreBrand: "Michelin",
        tyrePosition: "Front Right",
        tyreCondition: "Replaced",
        cost: 120,
        notes: "Worn out, replaced with new."
    },
    {
        date: "2025-01-15",
        mileage: 21000,
        tyreBrand: "Pirelli",
        tyrePosition: "Rear Left",
        tyreCondition: "Repaired",
        cost: 50,
        notes: "Patch applied to minor puncture."
    },
    {
        date: "2025-02-28",
        mileage: 23000,
        tyreBrand: "Continental",
        tyrePosition: "Rear Right",
        tyreCondition: "Replaced",
        cost: 110,
        notes: "Tread depth below legal limit."
    }
];
</script>

<style lang="scss" scoped></style>