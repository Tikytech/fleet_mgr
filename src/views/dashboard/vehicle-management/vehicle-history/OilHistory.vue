<template>
    <div class="flex justify-between mb-5">
        <div class="">
            <h2 class="text-base font-semibold mb-1">Vehicle oil change information</h2>
            <p class="text-sm">
                <span>Next oil change scheduled: </span><span class="text-gray-500">25th December, 2024</span>
            </p>
        </div>
        <ButtonComponent text="Add oil change record" />
    </div>

    <OilHistoryTable />
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import OilHistoryTable from '@/components/tables/vehicle-history/OilHistoryTable.vue';


</script>

<style lang="scss" scoped></style>