<template>
    <div class="flex justify-between mb-5 flex-wrap gap-2">
        <!-- Add insurance form -->
        <ModalComponent v-if="showAdd" :show-modal="showAdd" @close="showAdd = false" title="Add Insurance Record"
            width="700px">
            <AddInsuranceHistoryForm @close="showAdd = false" />
        </ModalComponent>

        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle insurance information</h2>
            <p class="text-sm">
                <span>Current insurance status: </span><span class="text-green-500">Active</span>
            </p>
        </div>
        <ButtonComponent @click="showAdd = true" text="Add insurance record" />
    </div>

    <TableComponent :table-data="tableData" :table-head="tableHead" :actions="actions" />
</template>

<script setup>
import TableComponent from '@/components/tables/TableComponent.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import AddInsuranceHistoryForm from '@/components/forms/vehicle-history/AddInsuranceHistoryForm.vue';
import { ref } from 'vue';

const showAdd = ref(false);

const actions = {
    view: {
        link: 'InsuranceHistory',
        param: '',
    }
}

const tableHead = [
    { title: 'Policy Number' },
    { title: 'Insurance Company' },
    { title: 'Start Date' },
    { title: 'End Date' },
    { title: 'Premium Amount(₵)' },
    { title: 'Coverage Type' },
    { title: 'Status' },
]

const tableData = [
    {
        policyNumber: "POL-2024-001",
        insuranceCompany: "Ghana Insurance Co.",
        startDate: "1st January, 2024",
        endDate: "31st December, 2024",
        premiumAmount: 2500,
        coverageType: "Comprehensive",
        status: "Active"
    },
    {
        policyNumber: "POL-2023-001",
        insuranceCompany: "Ghana Insurance Co.",
        startDate: "1st January, 2023",
        endDate: "31st December, 2023",
        premiumAmount: 2300,
        coverageType: "Comprehensive",
        status: "Expired"
    },
    {
        policyNumber: "POL-2022-001",
        insuranceCompany: "Metropolitan Insurance",
        startDate: "1st January, 2022",
        endDate: "31st December, 2022",
        premiumAmount: 2100,
        coverageType: "Third Party",
        status: "Expired"
    }
]
</script>

<style lang="scss" scoped></style>