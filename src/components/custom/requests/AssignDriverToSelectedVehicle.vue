<template>
    <div>
        <div
            class="bg-slate-200 p-4 pr-10 px-4 text-sm flex flex-wrap justify-between gap-2 items-center rounded-lg relative">

            <!-- Remove vehicle -->
            <Icon icon="heroicons:x-circle" title="Remove vehicle"
                class="text-red-500 text-xl cursor-pointer absolute top-2 right-2" @click="removeVehicle" />


            <div class="">
                <p class=""><span>Name:</span> <span>{{ vehicle?.vehicle }}</span></p>
                <p class=""><span>Capacity:</span> <span>{{ vehicle?.capacity }}</span></p>
                <p class=""><span>Reg. No.:</span> <span>{{ vehicle?.regNo }}</span></p>
                <p class=""><span>Driver:</span> <span>{{ vehicle?.driver ? vehicle.driver.driver : 'Unassigned'
                        }}</span>
                </p>

            </div>

            <div class="flex gap-2 items-center ">
                <!-- Enter number of passengers per vehicle -->
                <div class="">
                    <input type="number" class="input" placeholder="No of passengers" v-model="noOfPassengers" />
                    <p class="text-red-500 text-xs" v-if="errorMessage">{{ errorMessage }}</p>
                </div>


                <!-- Assign driver -->
                <ButtonComponent :type="isDriverAssigned ? 'neutral' : 'info'"
                    :text="isDriverAssigned ? 'Driver Assigned' : 'Assign Driver'"
                    @click="validateAndShowAssignDriver" />

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
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';
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

const emit = defineEmits(['driverSelected', 'removeVehicle'])

const selectedDriver = ref(vehicle?.driver || {})
const showAssignDriver = ref(false)
const noOfPassengers = ref()
const errorMessage = ref('')

const isDriverAssigned = computed(() => {
    // Check if vehicle has a driver or if we have a selected driver with an ID
    const hasVehicleDriver = vehicle?.driver && vehicle.driver.id
    const hasSelectedDriver = selectedDriver.value && selectedDriver.value.id
    const result = !!(hasVehicleDriver || hasSelectedDriver)
    return result
})

const setSelectedDriver = (data) => {
    selectedDriver.value = data

    // Emit the selected driver and vehicle to the parent component
    emit('driverSelected', { ...vehicle, driver: data, no_of_passengers: noOfPassengers.value })
    console.log('Selected Driver:', { ...vehicle, driver: data, no_of_passengers: noOfPassengers.value })
}

const removeVehicle = () => {
    emit('removeVehicle', vehicle)
}

const validateAndShowAssignDriver = () => {
    if (noOfPassengers.value) {
        showAssignDriver.value = true
        errorMessage.value = ''
    } else {
        errorMessage.value = 'Enter number of passengers for this vehicle'
        return
    }
}
</script>

<style lang="scss" scoped></style>