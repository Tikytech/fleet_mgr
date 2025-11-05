<template>
    <div>
        <form action="" class="p-4 space-y-4" @submit.prevent="submitForm">
            <div class="grid min-[450px]:grid-cols-2 md:grid-cols-2 gap-5 mb-6">
                <!-- Installation Date -->
                <div class="">
                    <label for="installation_date" class="">Installation Date</label>
                    <input required class="input mt-1" type="date" id="installation_date"
                        v-model="formData.installationDate" />
                </div>

                <!-- Battery Type/Brand -->
                <div class="">
                    <label for="battery_type" class="">Battery Type/Brand</label>
                    <input required class="input mt-1" type="text" id="battery_type"
                        placeholder="e.g., AGM, Lead-Acid, Lithium" v-model="formData.batteryType" />
                </div>
            </div>

            <div class="grid min-[450px]:grid-cols-2 md:grid-cols-2 gap-5 mb-6">
                <!-- Voltage -->
                <div class="">
                    <label for="voltage" class="">Voltage (V)</label>
                    <input required class="input mt-1" type="number" id="voltage" placeholder="e.g., 12, 24"
                        v-model="formData.voltage" />
                </div>

                <!-- Capacity -->
                <div class="">
                    <label for="capacity" class="">Capacity (Ah)</label>
                    <input required class="input mt-1" type="number" id="capacity" placeholder="e.g., 70, 100"
                        v-model="formData.capacity" />
                </div>
            </div>

            <div class="grid min-[450px]:grid-cols-2 md:grid-cols-2 gap-5 mb-6">
                <!-- Service Provider -->
                <div class="">
                    <label for="service_provider" class="">Service Provider/Garage</label>
                    <input required class="input mt-1" type="text" id="service_provider"
                        placeholder="Enter service provider information" v-model="formData.serviceProvider" />
                </div>

                <!-- Service Provided -->
                <div class="">
                    <label for="service_provided" class="">Service Provided</label>
                    <input required class="input mt-1" type="text" id="service_provided"
                        placeholder="e.g., Battery Replacement, Battery Installation"
                        v-model="formData.serviceProvided" />
                </div>
            </div>

            <div class="grid min-[450px]:grid-cols-2 md:grid-cols-2 gap-5 mb-6">
                <!-- Total Cost -->
                <div class="">
                    <label for="total_cost" class="">Total Cost (₵)</label>
                    <input required class="input mt-1" type="number" id="total_cost" placeholder="Enter total cost"
                        v-model="formData.totalCost" step="0.01" />
                </div>

                <!-- Warranty Period -->
                <div class="">
                    <label for="warranty" class="">Warranty Period (months)</label>
                    <input class="input mt-1" type="number" id="warranty" placeholder="e.g., 12, 24"
                        v-model="formData.warrantyPeriod" />
                </div>
            </div>

            <!-- Notes -->
            <div class="mt-4">
                <label for="notes" class="">Notes</label>
                <textarea class="input mt-1" id="notes" rows="3"
                    placeholder="Any additional notes or comments about the battery installation or service"
                    v-model="formData.notes"></textarea>
            </div>

            <!-- buttons -->
            <div class="flex justify-end mt-6 gap-2">
                <ButtonComponent text="Close" type="border" @click="$emit('close')" typeButton="button" />
                <ButtonComponent text="Add Record" type="success" :loading="false" />
            </div>

        </form>
    </div>
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import { ref } from 'vue'
const emit = defineEmits(['close'])

const formData = ref({
    installationDate: '',
    batteryType: '',
    voltage: '',
    capacity: '',
    serviceProvider: '',
    serviceProvided: '',
    totalCost: '',
    warrantyPeriod: '',
    notes: ''
});

async function submitForm() {
    // Handle form submission logic here
    console.log('Form submitted: ', formData.value);
    emit('close'); // Close the modal after submission
}

</script>

<style lang="scss" scoped></style>
