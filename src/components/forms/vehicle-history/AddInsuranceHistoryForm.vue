<template>
    <form @submit.prevent="handleSubmit" class="space-y-4 p-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Policy Number -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Policy Number</label>
                <input type="text" v-model="formData.policyNumber" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <!-- Insurance Company -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Insurance Company</label>
                <input type="text" v-model="formData.insuranceCompany" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <!-- Start Date -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input type="date" v-model="formData.startDate" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <!-- End Date -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input type="date" v-model="formData.endDate" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <!-- Premium Amount -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Premium Amount (₵)</label>
                <input type="number" v-model="formData.premiumAmount" required min="0" step="0.01"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>

            <!-- Coverage Type -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Coverage Type</label>
                <select v-model="formData.coverageType" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option value="">Select coverage type</option>
                    <option value="Comprehensive">Comprehensive</option>
                    <option value="Third Party">Third Party</option>
                    <option value="Third Party Fire & Theft">Third Party Fire & Theft</option>
                </select>
            </div>
        </div>

        <!-- Notes -->
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <textarea v-model="formData.notes" rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end gap-3">
            <ButtonComponent @click="$emit('close')" text="Cancel" type="border" typeButton="button" />
            <ButtonComponent type="success" text="Save Record" typeButton="submit" />
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue';

const emit = defineEmits(['close']);

const formData = ref({
    policyNumber: '',
    insuranceCompany: '',
    startDate: '',
    endDate: '',
    premiumAmount: '',
    coverageType: '',
    notes: ''
});

const handleSubmit = async () => {
    try {
        // TODO: Add API call to save insurance record
        console.log('Form submitted:', formData.value);
        emit('close');
    } catch (error) {
        console.error('Error saving insurance record:', error);
    }
};
</script>