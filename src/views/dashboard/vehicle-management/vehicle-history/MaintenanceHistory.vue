<template>
    <div class="flex justify-between mb-5 flex-wrap gap-2">

        <!-- Add maintenance form -->
        <ModalComponent v-if="showAdd" :show-modal="showAdd" @close="showAdd = false" title="Add Maintenance Record"
            width="700px">
            <AddMaintenanceHistoryForm @close="showAdd = false" />
        </ModalComponent>

        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle maintenance information</h2>
            <p class="text-sm">
                <!-- <span>Next maintenance scheduled: </span><span class="text-gray-500">25th December, 2024</span> -->
                Add maintenance records to keep track of all services performed on the vehicle.
            </p>
        </div>
        <ButtonComponent @click="showAdd = true" text="Add maintenance record" />
    </div>

    <TableComponent :table-data="tableData" :table-head="tableHead" :actions="actions" />
</template>

<script setup>
import AddMaintenanceHistoryForm from '@/components/forms/vehicle-history/AddMaintenanceHistoryForm.vue';
import TableComponent from '@/components/tables/TableComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';

import { ref } from 'vue';
const showAdd = ref(false);

const actions = {
    view: {
        link: 'MaintenanceHistory',
        param: '',
    }
}

const tableHead = [
    { title: 'Date' },
    { title: 'Service provider' },
    { title: 'Service performed' },
    { title: 'Total Cost(₵)' },
    { title: 'Notes' },
]

const tableData = [
    {
        "date": "3rd June, 2024",
        "servicePerformed": "Brake Pad Replacement",
        "serviceProvider": "AutoPro Garage",
        "cost": 200,
        "notes": "Front brake pads replaced, rotors checked and cleaned."
    },
    {
        "date": "4th January, 2024",
        "servicePerformed": "Battery Replacement",
        "serviceProvider": "Dealer Service Center",
        "cost": 150,
        "notes": "Replaced with a new AGM battery."
    },
    {
        "date": "December 10, 2023",
        "servicePerformed": "Air Filter Replacement",
        "serviceProvider": "QuickFix Auto",
        "cost": 50,
        "notes": "Cabin air filter replaced as part of routine maintenance."
    },
    {
        "date": "April 15, 2023",
        "servicePerformed": "Suspension Check",
        "serviceProvider": "AutoPro Garage",
        "cost": 120,
        "notes": "Minor adjustments to suspension system."
    },
    {
        "date": "March 5, 2022",
        "servicePerformed": "Wheel Alignment",
        "serviceProvider": "Speedy Align Center",
        "cost": 80,
        "notes": "Alignment corrected to avoid uneven tyre wear."
    }
]

</script>

<style lang="scss" scoped></style>