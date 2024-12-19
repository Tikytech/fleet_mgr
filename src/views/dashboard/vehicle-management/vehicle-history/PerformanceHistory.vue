<template>
    <div class="flex justify-between mb-5">
        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle performance information</h2>
            <p class="text-sm">
                <span>Next performance test scheduled: </span><span class="text-gray-500">25th December, 2024</span>
            </p>
        </div>
        <ButtonComponent text="Add performance test record" />
    </div>

    <PerformanceHistoryTable />
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import PerformanceHistoryTable from '@/components/tables/vehicle-history/PerformanceHistoryTable.vue';


</script>

<style lang="scss" scoped></style>