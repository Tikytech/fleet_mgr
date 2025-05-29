<template>
    <div>
        <div class="bg-slate-200 p-3 px-4 text-sm flex flex-wrap justify-between gap-2 items-center rounded-lg">
            <div class="">
                <p class=""><span>Name:</span> <span>{{ vehicle?.vehicle }}</span></p>
                <p class=""><span>Capacity:</span> <span>{{ vehicle?.capacity }}</span></p>
                <p class=""><span>Reg. No.:</span> <span>{{ vehicle?.regNo }}</span></p>
                <p class=""><span>Driver:</span> <span>{{ vehicle?.driver ? vehicle.driver.driver : 'Unassigned'
                }}</span>
                </p>
            </div>

            <div class="">
                <ButtonComponent type="info" text="Assign Driver" @click="showAssignDriver = true" />
            </div>


        </div>

        <!-- Assign Driver Modal -->
        <ModalComponent :show-modal="showAssignDriver" @close="showAssignDriver = false" width="800px" :overlay="false"
            title="Select a driver">
            <div class="p-4">
                <DriverAssignTable :selected-driver="selectedDriver" @select="setSelectedDriver"
                    :selected-drivers="selectedDrivers" />

                <div class="mt-5 flex justify-end">
                    <ButtonComponent text="Done" @click="showAssignDriver = false" />
                </div>
            </div>
        </ModalComponent>
    </div>
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import DriverAssignTable from '@/components/tables/vehicle-assignment/DriverAssignTable.vue';
import { ref } from 'vue';

const { vehicle, selectedDrivers } = defineProps({
    vehicle: {
        type: Object,
        required: true
    },
    selectedDrivers: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['driverSelected'])

const selectedDriver = ref(vehicle?.driver || {})
const showAssignDriver = ref(false)

const setSelectedDriver = (data) => {
    selectedDriver.value = data

    // Emit the selected driver and vehicle to the parent component
    emit('driverSelected', { ...vehicle, driver: data })
    console.log('Selected Driver:', { ...vehicle, driver: data })
}
</script>

<style lang="scss" scoped></style>