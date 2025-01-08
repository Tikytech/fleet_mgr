<template>
    <div class="p-4 space-y-5">
        <!-- filters -->
        <div class="">
            <SearchAndButtonBar :filter="true" />
        </div>

        <!-- selected Vehicle -->
        <div class="bg-slate-200 p-3 px-4 text-sm flex flex-wrap justify-between gap-2 items-center"
            v-if="showAssignDriver">
            <div class="">
                <p class="text-[15px] font-semibold mb-2">Vehicle selected details</p>
                <p class=""><span>Name:</span> <span>{{ selectedVehicle.vehicle }}</span></p>
                <p class=""><span>Capacity:</span> <span>{{ selectedVehicle.capacity }}</span></p>
                <p class=""><span>Reg. No.:</span> <span>{{ selectedVehicle.regNo }}</span></p>
            </div>

            <div class="">
                <ButtonComponent type="info" text="Select different vehicle" @click="selectDifferentVehicle" />
            </div>
        </div>

        <!--Vehicle selection table -->
        <div class="" v-if="!showAssignDriver">
            <p class="mb-2 font-semibold text-sm">Select Vehicle for trip</p>
            <VehicleRequestApprovalTable :selected-vehicle="selectedVehicle" @select="setSelectedVehicle" />
        </div>

        <!--Driver selection table -->
        <div class="" v-else>
            <DriverAssignTable :selected-driver="selectedDriver" @select="setSelectedDriver" />
        </div>

        <!-- buttons -->
        <div class="flex justify-end mt-6 gap-2">
            <ButtonComponent v-if="showAssignDriver" text="Approve Request" type="success" type-button="button"
                @click="approveRequest" />
            <ButtonComponent v-else text="Next" type="info" @click="assignDriver" type-button="button" />
            <ButtonComponent text="Cancel" type="border" @click="$emit('close')" type-button="button" />
        </div>
    </div>
</template>

<script setup>
import VehicleRequestApprovalTable from '@/components/tables/request-approval/VehicleRequestApprovalTable.vue';
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';
import DriverAssignTable from '@/components/tables/request-approval/DriverAssignTable.vue';
import { ref } from 'vue';

const emit = defineEmits(['close'])

const selectedVehicle = ref({})
const selectedDriver = ref({})
const showAssignDriver = ref(false)

const setSelectedVehicle = (data) => {
    selectedVehicle.value = data
}

const setSelectedDriver = (data) => {
    selectedDriver.value = data
}

const assignDriver = () => {
    // check if selectedVehicle has data
    if (Object.keys(selectedVehicle.value).length === 0) return
    showAssignDriver.value = true
}

const selectDifferentVehicle = () => {
    showAssignDriver.value = false
}

const approveRequest = () => {
    if (Object.keys(selectedDriver.value).length === 0) return
    selectedDriver.value = {}
    selectedVehicle.value = {}
    showAssignDriver.value = false
    emit('close')
}


</script>

<style scoped></style>