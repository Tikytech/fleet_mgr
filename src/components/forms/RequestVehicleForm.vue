<template>
    <div class="">

        <form @submit.prevent="submitForm" class="p-4 space-y-4">
            <!-- Request purpose -->
            <div class="">
                <label for="purpose" class="">Request purpose</label>
                <input required class="input mt-1" type="text" id="purpose" placeholder="State reason for request"
                    v-model="supplierData.name" />
            </div>

            <!-- Detailed Description -->
            <div class="">
                <label for="contact_person">Detailed reason</label>
                <textarea class="input mt-1" type="text" id="detailed" placeholder="Detailed reason for request"
                    rows="4" v-model="supplierData.contact_person"></textarea>
            </div>

            <!-- Trip date and time -->
            <div class="">
                <label>Select trip date and time</label>
                <div class="grid grid-cols-2 gap-4">

                    <!-- Trip date -->
                    <div class="">
                        <input required class="input mt-1" type="date" id="trip_date"
                            placeholder="Enter Contact Person's Phone Number" v-model="supplierData.trip_date" />
                    </div>

                    <!-- Trip time -->
                    <div class="">
                        <input required class="input mt-1" type="time" id="time" placeholder="Enter Time"
                            v-model="supplierData.time" />
                    </div>
                </div>
            </div>

            <!-- Return date and time -->
            <div class="">
                <label>Select return date and time</label>
                <div class="grid grid-cols-2 gap-4">

                    <!-- Return date -->
                    <div class="">
                        <input required class="input mt-1" type="date" id="trip_date"
                            placeholder="Enter Contact Person's Phone Number" v-model="supplierData.trip_date" />
                    </div>

                    <!-- Retirm time -->
                    <div class="">
                        <input required class="input mt-1" type="time" id="time" placeholder="Enter Time"
                            v-model="supplierData.time" />
                    </div>
                </div>
            </div>

            <!-- Number of passengers -->
            <div class="">
                <label for="passengers" class="">Number of passengers</label>
                <input required class="input mt-1" type="number" id="passengers" placeholder="Number of passengers"
                    v-model="supplierData.passengers" />
            </div>

            <div class="flex justify-end mt-6 gap-2">
                <ButtonComponent text="Close" type="border" @click="$emit('close')" type-button="button" />
                <ButtonComponent text="Send request" type="success" :loading="supplierStore.loading" />
            </div>
        </form>
    </div>
</template>

<script setup>
// import { Icon } from '@iconify/vue'
import ButtonComponent from '../ui/ButtonComponent.vue'
import { useSupplierStore } from '@/stores/supplier'
import { ref } from 'vue'

const emit = defineEmits(['close'])
const supplierStore = useSupplierStore()
const supplierData = ref({
    name: '',
    contact_person: '',
    contact_phone: '',
    address: ''
})

async function submitForm() {
    console.log(supplierData.value)
    await supplierStore.addSupplier(supplierData.value)
    if (supplierStore.isSuccessful) {
        await supplierStore.getAllSuppliers()
        supplierData.value = {
            name: '',
            contact_person: '',
            contact_phone: '',
            address: ''
        }
        emit('close')
        console.log('emmiting')
    }
}
</script>

<style lang="scss" scoped></style>