<template>
    <div class="flex justify-between mb-5 flex-wrap gap-2">
        <!-- Add battery form -->
        <ModalComponent v-if="showAdd" :show-modal="showAdd" @close="showAdd = false" title="Add Battery Record"
            width="700px">
            <AddBatteryHistoryForm @close="showAdd = false" />
        </ModalComponent>

        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle battery information</h2>
            <p class="text-sm">
                Track battery installations, replacements, and maintenance records for the vehicle.
            </p>
        </div>
        <ButtonComponent @click="showAdd = true" text="Add Battery Record" />
    </div>

    <TableComponent :table-data="tableData" :table-head="tableHead" :actions="actions" />
</template>

<script setup>
import TableComponent from '@/components/tables/TableComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import AddBatteryHistoryForm from '@/components/forms/vehicle-history/AddBatteryHistoryForm.vue';
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
        date: "4th January, 2024",
        serviceProvided: "Battery Replacement",
        serviceProvider: "Dealer Service Center",
        cost: 350,
        notes: "Replaced with a new AGM battery (12V, 70Ah). Warranty: 24 months."
    },
    {
        date: "15th March, 2023",
        serviceProvided: "Battery Installation",
        serviceProvider: "AutoPro Garage",
        cost: 280,
        notes: "New lead-acid battery installed (12V, 65Ah). Regular maintenance check performed."
    },
    {
        date: "December 10, 2022",
        serviceProvided: "Battery Testing & Charging",
        serviceProvider: "QuickFix Auto",
        cost: 50,
        notes: "Battery voltage tested and charged. Battery condition good, no replacement needed."
    },
    {
        date: "August 20, 2022",
        serviceProvided: "Battery Replacement",
        serviceProvider: "Dealer Service Center",
        cost: 320,
        notes: "AGM battery replaced (12V, 75Ah). Old battery showing signs of degradation."
    },
    {
        date: "June 5, 2021",
        serviceProvided: "Battery Installation",
        serviceProvider: "AutoPro Garage",
        cost: 295,
        notes: "New battery installed (12V, 70Ah). Initial installation and system check completed."
    }
];
</script>

<style lang="scss" scoped></style>