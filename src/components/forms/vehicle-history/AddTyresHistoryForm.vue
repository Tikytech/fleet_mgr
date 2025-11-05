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

                <!-- Tyre Type/Brand -->
                <div class="">
                    <label for="tyre_type" class="">Tyre Type/Brand</label>
                    <input required class="input mt-1" type="text" id="tyre_type"
                        placeholder="e.g., Michelin, Bridgestone, Goodyear" v-model="formData.tyreType" />
                </div>
            </div>

            <div class="grid min-[450px]:grid-cols-2 md:grid-cols-2 gap-5 mb-6">
                <!-- Tyre Size -->
                <div class="">
                    <label for="tyre_size" class="">Tyre Size</label>
                    <input required class="input mt-1" type="text" id="tyre_size" placeholder="e.g., 205/55R16"
                        v-model="formData.tyreSize" />
                </div>

                <!-- Position -->
                <div class="">
                    <label for="position" class="">Position</label>
                    <select required class="input mt-1" id="position" v-model="formData.position">
                        <option value="">Select position</option>
                        <option value="Front Left">Front Left</option>
                        <option value="Front Right">Front Right</option>
                        <option value="Rear Left">Rear Left</option>
                        <option value="Rear Right">Rear Right</option>
                        <option value="Spare">Spare</option>
                        <option value="All Four">All Four</option>
                    </select>
                </div>
            </div>

            <div class="grid min-[450px]:grid-cols-2 md:grid-cols-2 gap-5 mb-6">
                <!-- Tread Depth -->
                <div class="">
                    <label for="tread_depth" class="">Tread Depth (mm)</label>
                    <input class="input mt-1" type="number" id="tread_depth" placeholder="e.g., 5, 7, 8"
                        v-model="formData.treadDepth" />
                </div>

                <!-- Service Provider -->
                <div class="">
                    <label for="service_provider" class="">Service Provider/Garage</label>
                    <input required class="input mt-1" type="text" id="service_provider"
                        placeholder="Enter service provider information" v-model="formData.serviceProvider" />
                </div>
            </div>

            <div class="grid min-[450px]:grid-cols-2 md:grid-cols-2 gap-5 mb-6">
                <!-- Service Provided -->
                <div class="">
                    <label for="service_provided" class="">Service Provided</label>
                    <input required class="input mt-1" type="text" id="service_provided"
                        placeholder="e.g., Tyre Replacement, Tyre Rotation, Tyre Repair"
                        v-model="formData.serviceProvided" />
                </div>

                <!-- Total Cost -->
                <div class="">
                    <label for="total_cost" class="">Total Cost (₵)</label>
                    <input required class="input mt-1" type="number" id="total_cost" placeholder="Enter total cost"
                        v-model="formData.totalCost" step="0.01" />
                </div>
            </div>

            <!-- Notes -->
            <div class="mt-4">
                <label for="notes" class="">Notes</label>
                <textarea class="input mt-1" id="notes" rows="3"
                    placeholder="Any additional notes or comments about the tyre installation or service"
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
    tyreType: '',
    tyreSize: '',
    position: '',
    treadDepth: '',
    serviceProvider: '',
    serviceProvided: '',
    totalCost: '',
    notes: ''
});

async function submitForm() {
    // Handle form submission logic here
    console.log('Form submitted: ', formData.value);
    emit('close'); // Close the modal after submission
}

</script>

<style lang="scss" scoped></style>
