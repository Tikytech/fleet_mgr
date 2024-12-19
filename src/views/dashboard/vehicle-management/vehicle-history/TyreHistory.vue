<template>
    <div class="flex justify-between mb-5">
        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle tyre information</h2>
            <p class="text-sm">
                <span>Next tyre service scheduled: </span><span class="text-gray-500">25th December, 2024</span>
            </p>
        </div>
        <ButtonComponent text="Add tyre maintenance log" />
    </div>

    <TyreHistoryTable />
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import TyreHistoryTable from '@/components/tables/vehicle-history/TyreHistoryTable.vue';


</script>

<style lang="scss" scoped></style>