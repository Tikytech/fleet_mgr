<template>
    <div class="flex flex-col items-end relative">
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 min-w-[200px] cursor-pointer hover:bg-gray-100 transition-colors"
            @click="toggleDropdown">
            <div class="mb-2">
                <h3 class="text-sm font-semibold text-gray-800">Department</h3>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                <span class="text-gray-900 font-medium">{{ selectedDepartment || 'Not Assigned' }}</span>
                <Icon icon="heroicons:chevron-down" class="w-4 h-4 text-gray-500 transition-transform"
                    :class="{ 'rotate-180': showDropdown }" />
            </div>
            <p class="text-xs text-gray-500 mt-1">Click to change department</p>
        </div>

        <!-- Dropdown -->
        <div v-if="showDropdown"
            class="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[200px]">
            <div class="p-2">
                <div class="text-xs text-gray-500 px-2 py-1 mb-1">Select Department</div>
                <div v-for="dept in departments" :key="dept.id"
                    class="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer transition-colors"
                    @click="selectDepartment(dept.name)">
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span class="text-sm text-gray-700">{{ dept.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
    initialDepartment: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['department-changed'])

const showDropdown = ref(false)
const selectedDepartment = ref('')

// Dummy department data
const departments = ref([
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Engineering' },
    { id: 3, name: 'Business Administration' },
    { id: 4, name: 'Arts & Humanities' },
    { id: 5, name: 'Medicine' },
    { id: 6, name: 'Law' },
    { id: 7, name: 'Agriculture' },
    { id: 8, name: 'Social Sciences' }
])

function toggleDropdown() {
    showDropdown.value = !showDropdown.value
}

function selectDepartment(deptName) {
    selectedDepartment.value = deptName
    showDropdown.value = false
    emit('department-changed', deptName)
}

// Close dropdown when clicking outside
function handleClickOutside(event) {
    const dropdown = event.target.closest('.relative')
    if (!dropdown) {
        showDropdown.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    // Set initial department from props or first dummy department
    selectedDepartment.value = props.initialDepartment || departments.value[0].name
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss" scoped></style>