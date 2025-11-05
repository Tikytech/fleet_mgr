<template>
    <div class="flex justify-between mb-5 flex-wrap gap-2">
        <!-- Add tyre form -->
        <ModalComponent v-if="showAdd" :show-modal="showAdd" @close="showAdd = false" title="Add Tyre Record"
            width="700px">
            <AddTyresHistoryForm @close="showAdd = false" />
        </ModalComponent>

        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle tyre information</h2>
            <p class="text-sm">
                Track tyre installations, replacements, rotations, and maintenance records for the vehicle.
            </p>
        </div>
        <ButtonComponent @click="showAdd = true" text="Add Tyre Record" />
    </div>

    <TableComponent :table-data="tableData" :table-head="tableHead" :actions="actions" />
</template>

<script setup>
import TableComponent from '@/components/tables/TableComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import AddTyresHistoryForm from '@/components/forms/vehicle-history/AddTyresHistoryForm.vue';
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
        date: "2025-02-28",
        serviceProvided: "Tyre Replacement",
        serviceProvider: "Dealer Service Center",
        cost: 480,
        notes: "Replaced all four tyres (205/55R16). Tread depth below legal limit. Brand: Michelin."
    },
    {
        date: "15th October, 2024",
        serviceProvided: "Tyre Rotation",
        serviceProvider: "AutoPro Garage",
        cost: 40,
        notes: "Rotated all tyres. Front tyres moved to rear, rear tyres moved to front. Tread depth checked."
    },
    {
        date: "3rd June, 2024",
        serviceProvided: "Tyre Replacement",
        serviceProvider: "QuickFix Auto",
        cost: 320,
        notes: "Replaced front left and front right tyres (205/55R16). Brand: Bridgestone. Tread depth: 3mm."
    },
    {
        date: "December 10, 2023",
        serviceProvided: "Tyre Repair",
        serviceProvider: "AutoPro Garage",
        cost: 25,
        notes: "Repaired puncture on rear right tyre. Patch applied successfully."
    },
    {
        date: "August 20, 2023",
        serviceProvided: "Tyre Replacement",
        serviceProvider: "Dealer Service Center",
        cost: 450,
        notes: "Replaced all four tyres (205/55R16). Brand: Goodyear. Warranty: 60,000 km."
    }
];
</script>

<style lang="scss" scoped></style>
