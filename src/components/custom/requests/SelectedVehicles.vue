<template>
    <div>
        <p class="text-[15px] font-semibold mb-2">Vehicles selected</p>

        <div class="space-y-4">
            <div v-for="vehicle in selectedVehicles" :key="vehicle?.id">
                <AssignDriverToSelectedVehicle :vehicle="vehicle" />
            </div>
        </div>
    </div>
</template>

<script setup>

import AssignDriverToSelectedVehicle from './AssignDriverToSelectedVehicle.vue';
const { selectedVehicles } = defineProps({
    selectedVehicles: {
        type: Array,
        required: true
    }
})



</script>

<style lang="scss" scoped></style>