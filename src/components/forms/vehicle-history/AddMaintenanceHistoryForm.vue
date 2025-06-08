<template>
    <div>
        <form action="" class="p-4 space-y-4" @submit.prevent="submitForm">
            <div class="grid min-[450px]:grid-cols-2  md:grid-cols-2 gap-5 mb-6">
                <!-- Service Provider -->
                <div class="">
                    <label for="name" class="">Service provider</label>
                    <input required class="input mt-1" type="text" id="name"
                        placeholder="Enter service provider information" v-model="formData.serviceProvider" />
                </div>

                <!-- Summary of Service Provided -->
                <div class="">
                    <label for="name" class="">Service provided</label>
                    <input required class="input mt-1" type="text" id="name" placeholder="Service provided"
                        v-model="formData.servicePerformed" />
                </div>
            </div>

            <!-- Add various individual service items -->
            <div class="">
                <p class="text-sm mb-2">Add various individual service items provided <span
                        class="italic text-gray-600">(Service items,
                        labour cost, Taxes,
                        etc...)</span>
                </p>

                <div class="">
                    <template v-for="item in formData.serviceItems" :key="item.id">
                        <div class="flex gap-2 mb-4 ">
                            <!-- Service Item -->
                            <div class="w-full">
                                <label for="service_item" class="">Service item</label>
                                <input required class="input mt-1" type="text" id="service_item"
                                    placeholder="Enter service item" v-model="item.item" />
                            </div>

                            <!-- Quantity -->
                            <div class="">
                                <label for="quantity" class="">Quantity</label>
                                <input required class="input mt-1" type="number" id="quantity" placeholder=""
                                    v-model="item.quantity" @input="calculateTotals(item.id)" />
                            </div>

                            <!-- Cost -->
                            <div class="">
                                <label for="cost" class="">Cost (₵)</label>
                                <input class="input mt-1" type="number" id="cost" placeholder="Cost" v-model="item.cost"
                                    @input="calculateTotals(item.id)" />
                            </div>
                            <!-- Subtotal -->
                            <div class="">
                                <label for="cost" class="">Sub total (₵)</label>
                                <input class="input mt-1" type="number" id="notes" placeholder=""
                                    v-model="item.subTotal" disabled />
                            </div>
                            <!-- remove -->
                            <div class=" self-center relative top-4">
                                <button v-if="formData.serviceItems.length > 1" type="button"
                                    class="text-red-500 hover:text-red-700" @click="removeServiceItem(item.id)">
                                    <Icon icon="heroicons:trash" class="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </template>

                    <!-- Total -->
                    <div class="flex justify-end gap-2 mb-4">
                        <div class="flex items-center gap-2">
                            <label for="total_cost" class="inline">Total cost (₵):</label>
                            <input required class="input w-auto" type="number" id="total_cost"
                                placeholder="Total cost of all items" v-model="formData.totalCost" disabled />
                        </div>
                    </div>

                    <!-- add button -->
                    <div class="flex justify-end">
                        <button @click="addServiceItem" type="button"
                            class="text-sm text-blue-500 hover:text-blue-700 font-semibold px-2">+
                            Add
                            another service
                            item</button>
                    </div>
                </div>

                <!-- Notes -->
                <div class="mt-4">
                    <label for="notes" class="">Notes</label>
                    <textarea class="input mt-1" id="notes" rows="3"
                        placeholder="Any additional notes or comments and a quick summary of all services purchased"
                        v-model="formData.notes"></textarea>
                </div>
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
import { Icon } from '@iconify/vue';

import { ref } from 'vue'
const emit = defineEmits(['close'])

const formData = ref({
    serviceProvider: '',
    servicePerformed: '',
    serviceItems: [{
        id: Date.now(), // Unique ID for each service item
        item: '',
        quantity: 1,
        cost: 0,
        subTotal: 0
    }],
    totalCost: 0,
    notes: ''
});

function calculateTotals(id) {
    // Find the item by id and calculate its subtotal
    const item = formData.value.serviceItems.find(i => i.id === id);
    // If item exists, calculate its subtotal and update the total cost
    if (item) {
        item.subTotal = item.quantity * parseFloat(item.cost || 0);
        formData.value.serviceItems = formData.value.serviceItems.map(i => {
            if (i.id === item.id) {
                return item;
            }
            return i;
        });
        // Calculate total
        formData.value.totalCost = formData.value.serviceItems.reduce((total, currentItem) => {
            return total + currentItem.subTotal;
        }, 0);
    }
}

function addServiceItem() {
    const newItem = {
        id: Date.now(), // Unique ID for each service item
        item: '',
        quantity: 1,
        cost: 0,
        subTotal: 0
    };
    formData.value.serviceItems.push(newItem);
}

function removeServiceItem(id) {
    formData.value.serviceItems = formData.value.serviceItems.filter(i => i.id !== id)
    // Recalculate total
    formData.value.totalCost = formData.value.serviceItems.reduce((total, currentItem) => {
        return total + currentItem.subTotal;
    }, 0);
}

async function submitForm() {
    // Handle form submission logic here
    console.log('Form submitted: ', formData.value);
    emit('close'); // Close the modal after submission
}


</script>

<style lang="scss" scoped></style>