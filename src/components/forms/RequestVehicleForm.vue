<template>
    <div class="">

        <form @submit.prevent="submitForm" class="p-4 space-y-4">
            <!-- Request purpose -->
            <div class="">
                <label for="purpose" class="">Request purpose</label>
                <input required class="input mt-1" type="text" id="purpose" placeholder="Keep it brief and concise"
                    v-model="requestData.purpose" />
            </div>

            <!-- Detailed Description -->
            <div class="">
                <label for="contact_person">Detailed reason</label>
                <textarea class="input mt-1" type="text" id="detailed" placeholder="Detailed reason for request"
                    rows="4" v-model="requestData.detailed_reason"></textarea>
            </div>

            <!-- Trip dates -->
            <div class="">
                <label>Select trip date and return date</label>
                <div class="grid grid-cols-2 gap-4">

                    <!-- Trip date -->
                    <div class="">
                        <input required class="input mt-1" type="date" id="trip_date" :min="today"
                            placeholder="Enter Contact Person's Phone Number" v-model="requestData.trip_date" />
                    </div>

                    <!-- Return date -->
                    <div class="">
                        <input required class="input mt-1" type="date" id="return_date" :min="today"
                            placeholder="Enter Contact Person's Phone Number" v-model="requestData.return_date" />
                    </div>


                    <!-- Trip time
                    <div class="">
                        <input required class="input mt-1" type="time" id="time" placeholder="Enter Time"
                            v-model="requestData.trip_time" />
                    </div> -->
                </div>
            </div>

            <!-- Return date and time -->
            <!-- <div class="">
                <label>Select return date and time</label>
                <div class="grid grid-cols-2 gap-4">

                    Returm time
                    <div class="">
                        <input required class="input mt-1" type="time" id="time" placeholder="Enter Time"
                            v-model="requestData.return_time" />
                    </div>
                </div>
            </div> -->

            <!-- Number of passengers -->
            <div class="">
                <label for="passengers" class="">Number of passengers</label>
                <input required class="input mt-1" type="number" id="passengers" placeholder="Number of passengers"
                    v-model="requestData.no_of_passengers" />
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
    trip_date: '',
    return_date: '',
    no_of_passengers: '',
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

    isClient ? await requestStore.clientRequestVehicle(requestData.value) : await requestStore.requestVehicle(requestData.value)
    if (requestStore.isSuccessful) {
        isClient ? await requestStore.getAllClientRequests() : await requestStore.getAllRequests()
        requestData.value = {
            purpose: '',
            detailed_reason: '',
            trip_date: '',
            return_date: '',
            no_of_passengers: '',
        }
        emit('close')
        console.log('emmiting')
    }
}
</script>

<style lang="scss" scoped></style>