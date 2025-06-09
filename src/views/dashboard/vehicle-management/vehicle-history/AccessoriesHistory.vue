<template>
    <div class="flex justify-between mb-5 flex-wrap gap-2">
        <!-- Add accessories form -->
        <ModalComponent v-if="showAdd" :show-modal="showAdd" @close="showAdd = false" title="Add Accessories Record"
            width="700px">
            <AddAccessoriesHistoryForm @close="showAdd = false" />
        </ModalComponent>

        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle tyre and battery information</h2>
            <p class="text-sm">
                <span>Next tyre service scheduled: </span><span class="text-gray-500">25th December, 2024</span>
            </p>
        </div>
        <ButtonComponent @click="showAdd = true" text="Add Record" />
    </div>

    <TableComponent :table-data="tableData" :table-head="tableHead" :actions="actions" />
</template>

<script setup>
import TableComponent from '@/components/tables/TableComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import AddAccessoriesHistoryForm from '@/components/forms/vehicle-history/AddAccessoriesHistoryForm.vue';
import { ref } from 'vue';

const showAdd = ref(false);

const actions = {
    view: {
        link: '',
        param: '',
    }
}

const tableHead = [
    { title: 'Date' },
    { title: 'Service provided' },
    { title: 'Service provider' },
    { title: 'Total Cost(₵)' },
    { title: 'Notes' },
]

const tableData = [
    {
        date: "3rd June, 2024",
        serviceProvided: "Brake Pad Replacement",
        serviceProvider: "AutoPro Garage",
        cost: 200,
        notes: "Front brake pads replaced, rotors checked and cleaned."
    },
    {
        date: "4th January, 2024",
        serviceProvided: "Battery Replacement",
        serviceProvider: "Dealer Service Center",
        cost: 150,
        notes: "Replaced with a new AGM battery."
    },
    {
        date: "December 10, 2023",
        serviceProvided: "Air Filter Replacement",
        serviceProvider: "QuickFix Auto",
        cost: 50,
        notes: "Cabin air filter replaced as part of routine maintenance."
    },
    {
        date: "2025-01-15",
        serviceProvided: "Oil Change",
        serviceProvider: "AutoPro Garage",
        cost: 100,
        notes: "Oil changed and filter replaced."
    },
    {
        date: "2025-02-28",
        serviceProvided: "Tire Rotation",
        serviceProvider: "Dealer Service Center",
        cost: 110,
        notes: "Tread depth below legal limit."
    }
];
</script>

<style lang="scss" scoped></style>