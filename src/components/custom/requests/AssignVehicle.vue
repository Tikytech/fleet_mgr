<template>
    <div class="p-4 space-y-5">
        <!-- filters -->
        <div class="">
            <SearchAndButtonBar :filter="true" />
        </div>




        <!--Vehicle selection table -->
        <div class="" v-if="!showAssignDriver">
            <p class="mb-2 font-semibold text-sm">Select Vehicle for trip</p>
            <VehicleAssignmentTable :selected-vehicles="selectedVehicles" @select="setSelectedVehicle" />
        </div>

        <!--Driver selection -->
        <div class="" v-else>

            <div class="mb-4 flex items-center text-sm hover:underline cursor-pointer w-fit"
                @click="showAssignDriver = false">
                <Icon icon="heroicons:chevron-left-16-solid" class="text-xl" /> <span>Back</span>
            </div>
            <!-- selected Vehicles -->
            <!-- <SelectedVehicles :selected-vehicles="selectedVehicles" /> -->
            <p class="text-[15px] font-semibold mb-2">Vehicles selected</p>

            <div class="space-y-4">
                <div v-for="vehicle in selectedVehicles" :key="vehicle?.id">
                    <AssignDriverToSelectedVehicle :vehicle="vehicle" :selected-drivers="selectedDrivers"
                        @driver-selected="setSelectedDriversForVehicles" @remove-vehicle="removeVehicle" />
                </div>

                <div class="flex justify-center items-center my-20" v-if="selectedVehicles.length === 0">
                    <p class="text-sm text-gray-500">No vehicles selected</p>
                </div>
            </div>
        </div>

        <!-- buttons -->
        <div class="flex justify-end mt-6 gap-2">
            <ButtonComponent v-if="showAssignDriver" text="Finish" type="success" type-button="button"
                @click="approveRequest" />
            <ButtonComponent v-else text="Next" type="info" @click="assignDriver" type-button="button" />
            <ButtonComponent text="Cancel" type="border" @click="$emit('close')" type-button="button" />
        </div>
    </div>
</template>

<script setup>
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import { Icon } from '@iconify/vue';
// import DriverAssignTable from '@/components/tables/vehicle-assignment/DriverAssignTable.vue';
import { computed, ref } from 'vue';
import VehicleAssignmentTable from '@/components/tables/vehicle-assignment/VehicleAssignmentTable.vue';
// import SelectedVehicles from '@/components/custom/requests/SelectedVehicles.vue';
import AssignDriverToSelectedVehicle from '@/components/custom/requests/AssignDriverToSelectedVehicle.vue';

const emit = defineEmits(['close'])

const selectedVehicles = ref([])
// const selectedDriversForVehicles = ref([])
const showAssignDriver = ref(false)

const selectedDrivers = computed(() => {
    return selectedVehicles.value.map(vehicle => vehicle.driver).filter(driver => driver)
})

const setSelectedVehicle = (data) => {
    const exist = selectedVehicles.value.some(item => item.id === data.id)
    if (exist) {
        selectedVehicles.value = selectedVehicles.value.filter(item => item.id !== data.id)
    } else {
        selectedVehicles.value.push(data)
    }
    console.log(selectedVehicles.value)
    console.log(data)
}

function assignDriver() {
    if (selectedVehicles.value.length === 0) return
    showAssignDriver.value = true
}

function setSelectedDriversForVehicles(data) {
    selectedVehicles.value = selectedVehicles.value.map(item => {
        if (item.id === data.id) {
            return { ...item, driver: data.driver }
        }
        return item
    })
    console.log(selectedVehicles.value)
}

function removeVehicle(data) {
    selectedVehicles.value = selectedVehicles.value.filter(item => item.id !== data.id)
}

const approveRequest = () => {
    const allVehiclesAssigned = selectedVehicles.value.every(vehicle => vehicle.driver)
    if (!allVehiclesAssigned) {
        alert('Please assign a driver to all selected vehicles before approving the request.')
        return
    }
    // hit some api or something
    console.log(selectedVehicles.value)
    //clear the selected vehicles array
    selectedVehicles.value = []
    showAssignDriver.value = false
    emit('close')
}

//Vehicles and Drivers fetched from the database and provided to the using components



</script>

<style scoped></style>