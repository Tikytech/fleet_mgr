<template>
    <div class="flex justify-between items-start gap-4 flex-wrap">
        <!-- Left side - User Information -->
        <div class=" w-full sm:w-fit bg-white rounded-lg border border-gray-200 p-4 shadow-sm ">
            <div class="flex items-center gap-3 mb-3">
                <div
                    class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Icon icon="heroicons:user" class="text-white text-lg" />
                </div>
                <div>
                    <h2 class="font-bold text-lg text-gray-900">{{ clientUser?.name }}</h2>
                    <p class="text-xs text-gray-500">User Profile</p>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-2">
                <div class="flex items-center gap-2 text-sm">
                    <Icon icon="heroicons:academic-cap" class="text-blue-600 text-base" />
                    <span class="text-gray-500">College:</span>
                    <span class="text-gray-900 font-medium">{{ clientUser?.college?.name || 'Not Assigned' }}</span>
                </div>

                <div class="flex items-center gap-2 text-sm">
                    <Icon icon="heroicons:building-office" class="text-indigo-600 text-base" />
                    <span class="text-gray-500">Department:</span>
                    <span class="text-gray-900 font-medium">{{ clientUser?.department?.name || 'Not Assigned' }}</span>
                </div>

                <div class="flex items-center gap-2 text-sm">
                    <Icon icon="heroicons:envelope" class="text-green-600 text-base" />
                    <span class="text-gray-500">Email:</span>
                    <span class="text-gray-900 font-medium">{{ clientUser?.email || 'Not Available' }}</span>
                </div>

                <div class="flex items-center gap-2 text-sm">
                    <Icon icon="heroicons:phone" class="text-purple-600 text-base" />
                    <span class="text-gray-500">Contact:</span>
                    <span class="text-gray-900 font-medium">{{ clientUser?.contact || 'Not Available' }}</span>
                </div>
            </div>
        </div>

        <!-- Right side - Department Information (only for college heads) -->
        <SelectDepartment v-if="clientUser?.is_college_head" :initial-department="clientUser?.department?.name"
            @department-changed="handleDepartmentChange" />
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authentication';
import { Icon } from '@iconify/vue';
import SelectDepartment from './SelectDepartment.vue';

const { clientUser } = useAuthStore()

function handleDepartmentChange(newDepartment) {
    console.log('Department changed to:', newDepartment)
    // Here you can add logic to update the user's department
    // For example, call an API to update the user's department
}
</script>

<style lang="scss" scoped></style>