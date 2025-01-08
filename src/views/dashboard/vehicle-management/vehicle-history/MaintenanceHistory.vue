<template>
    <div class="flex justify-between mb-5 flex-wrap gap-2">
        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle maintenance information</h2>
            <p class="text-sm">
                <span>Next maintenance scheduled: </span><span class="text-gray-500">25th December, 2024</span>
            </p>
        </div>
        <ButtonComponent text="Add maintenance record" />
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
    { title: 'Service performed' },
    { title: 'Service provider' },
    { title: 'Cost' },
    { title: 'Notes' },
]

const tableData = [
    {
        "date": "2024-11-15",
        "mileage": 15000,
        "servicePerformed": "Brake Pad Replacement",
        "serviceProvider": "AutoPro Garage",
        "cost": 200,
        "notes": "Front brake pads replaced, rotors checked and cleaned."
    },
    {
        "date": "2024-12-10",
        "mileage": 18000,
        "servicePerformed": "Battery Replacement",
        "serviceProvider": "Dealer Service Center",
        "cost": 150,
        "notes": "Replaced with a new AGM battery."
    },
    {
        "date": "2025-01-20",
        "mileage": 21000,
        "servicePerformed": "Air Filter Replacement",
        "serviceProvider": "QuickFix Auto",
        "cost": 50,
        "notes": "Cabin air filter replaced as part of routine maintenance."
    },
    {
        "date": "2025-02-15",
        "mileage": 23000,
        "servicePerformed": "Suspension Check",
        "serviceProvider": "AutoPro Garage",
        "cost": 120,
        "notes": "Minor adjustments to suspension system."
    },
    {
        "date": "2025-03-12",
        "mileage": 25000,
        "servicePerformed": "Wheel Alignment",
        "serviceProvider": "Speedy Align Center",
        "cost": 80,
        "notes": "Alignment corrected to avoid uneven tyre wear."
    }
]

</script>

<style lang="scss" scoped></style>