<template>
    <div class="flex justify-between mb-5 flex-wrap gap-2">
        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle oil change information</h2>
            <p class="text-sm">
                <span>Next oil change scheduled: </span><span class="text-gray-500">25th December, 2024</span>
            </p>
        </div>
        <ButtonComponent text="Add oil change record" />
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
    { title: 'Oil type' },
    { title: 'Service perfomed' },
    { title: 'Service station' },
    { title: 'Cost' },
    { title: 'Notes' },
]

const tableData = [
    {
        date: "2024-09-01",
        mileage: 10000,
        oilType: "Synthetic 5W-30",
        servicePerformed: "Oil and Filter Change",
        serviceStation: "QuickLube Center",
        cost: 60,
        notes: "Oil filter replaced as part of the service."
    },
    {
        date: "2024-12-01",
        mileage: 15000,
        oilType: "Synthetic 5W-30",
        servicePerformed: "Oil and Filter Change",
        serviceStation: "AutoPro Garage",
        cost: 70,
        notes: "Routine service performed."
    },
    {
        date: "2025-03-01",
        mileage: 20000,
        oilType: "Synthetic 5W-30",
        servicePerformed: "Oil Change and Top-Up",
        serviceStation: "Dealer Service Center",
        cost: 80,
        notes: "Inspection included in the service."
    },
    {
        date: "2025-06-01",
        mileage: 25000,
        oilType: "Synthetic 10W-40",
        servicePerformed: "High-Mileage Oil Change",
        serviceStation: "QuickLube Center",
        cost: 90,
        notes: "Switched to high-mileage oil."
    },
    {
        date: "2025-09-01",
        mileage: 30000,
        oilType: "Synthetic 5W-30",
        servicePerformed: "Full-Service Oil Change",
        serviceStation: "AutoPro Garage",
        cost: 100,
        notes: "Included engine cleaning service."
    }
];

</script>

<style lang="scss" scoped></style>