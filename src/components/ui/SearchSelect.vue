<template>
    <div class="relative w-full text-sm">
        <div
            class="flex items-center space-x-2 border-2 w-full rounded-md p-1 px-3 group group-focus-within:border-gray-900">
            <input v-model="searchQuery" type="text" placeholder="Search..." @focus="toggleDropdown"
                class="w-full outline-none focus:outline-none" />
            <button type="button" @click="toggleDropdown"
                class="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                {{ dropdownOpen ? 'Hide' : 'Show' }}
            </button>
        </div>

        <ul v-if="dropdownOpen && filteredOptions.length"
            class="absolute z-10 mt-1 w-full max-h-48 overflow-y-auto bg-white border border-gray-300 rounded shadow"
            style="max-height: 10.5rem;">
            <li v-for="(option, index) in filteredOptions" :key="index" @click="selectOption(option)"
                class="p-2 hover:bg-blue-100 cursor-pointer">
                {{ option.label }}
            </li>
        </ul>

        <!-- <p v-if="selectedOption" class="mt-2 text-sm text-gray-600">
            Selected: {{ selectedOption.label }}
        </p> -->
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    options: {
        type: Array,
        required: true,
        default: () => [],
    },
})

const emit = defineEmits(['update-selected'])

const searchQuery = ref('')
const selectedOption = ref(null)
const dropdownOpen = ref(false)

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
}

const filteredOptions = computed(() => {
    const query = searchQuery.value.toLowerCase()
    return props.options.filter(option =>
        option.label.toLowerCase().includes(query)
    )
})

const selectOption = (option) => {
    selectedOption.value = option
    searchQuery.value = option.label
    dropdownOpen.value = false
    emit('update-selected', option)
}
</script>