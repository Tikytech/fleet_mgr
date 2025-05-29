<template>
    <div class="">

        <form @submit.prevent="submitForm" class="p-4 space-y-4">
            <!-- Request purpose -->
            <div class="">
                <label for="purpose" class="required">Request purpose</label>
                <input required class="input mt-1" type="text" id="purpose" placeholder="Keep it brief and concise"
                    v-model="requestData.purpose" />
            </div>

            <!-- Detailed Description -->
            <div class="">
                <label for="contact_person" class="required">Detailed reason</label>
                <textarea class="input mt-1" type="text" id="detailed" placeholder="Detailed reason for request"
                    rows="4" v-model="requestData.detailed_reason"></textarea>
            </div>

            <!-- Official Trip? -->
            <div class="space-y-1">
                <label class="required">What type of trip is this</label>
                <div class="space-x-4">
                    <label for="official" class="cursor-pointer"><input required id="official" type="radio"
                            value="official" name="trip_type" v-model="requestData.type" />
                        Official</label>
                    <label for="personal" class="cursor-pointer"><input id="personal" value="personal" type="radio"
                            name="trip_type" v-model="requestData.type" />
                        Personal</label>
                </div>
            </div>

            <!-- Trip dates -->
            <div class="">
                <label class="required">Select trip date and time</label>
                <div class="grid grid-cols-2 gap-4 mb-4">

                    <!-- Trip date -->
                    <div class="">
                        <input required class="input mt-1" type="date" id="trip_date" :min="today"
                            placeholder="Enter Contact Person's Phone Number" v-model="requestData.trip_date" />
                    </div>

                    <!-- Trip time -->
                    <div class="">
                        <input required class="input mt-1" type="time" id="trip_time" placeholder="Enter Time"
                            v-model="requestData.trip_time" />
                    </div>
                </div>

                <label class="required">Select return date and time</label>
                <div class="grid grid-cols-2 gap-4">

                    <!-- Return date -->
                    <div class="">
                        <input required class="input mt-1" type="date" id="return_date" :min="today"
                            placeholder="Enter Contact Person's Phone Number" v-model="requestData.return_date" />
                    </div>

                    <!-- Return time -->
                    <div class="">
                        <input required class="input mt-1" type="time" id="return_time" placeholder="Enter Time"
                            v-model="requestData.return_time" />
                    </div>

                </div>
            </div>

            <!-- Number of passengers -->
            <div class="">
                <label for="passengers" class="required">Number of passengers</label>
                <input required class="input mt-1" type="number" id="passengers" placeholder="Number of passengers"
                    v-model="requestData.no_of_passengers" />
            </div>

            <!-- Type of Vehicle -->
            <div class="">
                <label for="vehicle_type">Type of vehicle(s) you want for this trip</label>
                <select class="input mt-1" id="vehicle_type" v-model="requestData.vehicle_type">
                    <option value="" disabled selected>Select vehicle type</option>
                    <option value="car">Car</option>
                    <option value="bus">Bus</option>
                    <option value="van">Van</option>
                    <option value="truck">Truck</option>
                </select>
            </div>

            <div class="flex justify-end mt-6 gap-2">
                <ButtonComponent text="Close" type="border" @click="$emit('close')" type-button="button" />
                <ButtonComponent text="Send request" type="success" :loading="requestStore.loading" />
            </div>
        </form>
    </div>
</template>

<script setup>
// import { Icon } from '@iconify/vue'
import ButtonComponent from '../ui/ButtonComponent.vue'
import { useRequestStore } from '@/stores/requests'
import { useToastStore } from '@/stores/toast'
import { ref } from 'vue'
import dayjs from 'dayjs'
import { toISODate } from '@/utils/utils'

const emit = defineEmits(['close'])
const { isClient } = defineProps({
    isClient: {
        type: Boolean,
        default: false,
    }
})
const requestStore = useRequestStore()
const toast = useToastStore()
const today = ref(new Date().toISOString().split("T")[0])
const requestData = ref({
    purpose: '',
    detailed_reason: '',
    type: '',
    trip_date: '',
    trip_time: '',
    return_date: '',
    return_time: '',
    no_of_passengers: '',
    vehicle_type: '',
})

async function submitForm() {
    console.log(requestData.value)

    // validate dates
    const returnDate = dayjs(requestData.value.return_date);
    const tripDate = dayjs(requestData.value.trip_date);

    if (returnDate.isBefore(tripDate)) {
        toast.addToastMessage("danger", "Date Error", "Return date should not be before trip date!")
        return
    }

    const formattedData = {
        ...requestData.value, trip_date: toISODate(requestData.value.trip_date, requestData.value.trip_time), return_date: toISODate(requestData.value.return_date, requestData.value.return_time)
    }

    isClient ? await requestStore.clientRequestVehicle(formattedData) : await requestStore.requestVehicle(formattedData)
    if (requestStore.isSuccessful) {
        isClient ? await requestStore.getAllClientRequests() : await requestStore.getAllRequests()
        requestData.value = {
            purpose: '',
            detailed_reason: '',
            type: '',
            trip_date: '',
            return_date: '',
            no_of_passengers: '',
            trip_time: '',
            return_time: '',
            vehicle_type: '',
        }
        emit('close')
        console.log('emmiting')
    }
}
</script>

<style scoped>
.required::after {
    content: '*';
    color: red;
    margin-left: 2px;
}
</style>