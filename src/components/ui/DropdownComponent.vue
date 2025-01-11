<template>
    <!-- Overlay -->
    <div class="overlay bg-transparent" v-if="showDropdown" @click="$emit('close')"></div>

    <!-- Dropdown Content -->
    <div class="border absolute bg-white rounded-md divide-y min-w-full top-[100%] right-0 text-sm shadow z-40"
        v-if="showDropdown">
        <template v-for="content in dropdownContent" :key="content.name">
            <div class="flex items-center gap-1 px-3 py-2 hover:bg-gray-100 cursor-pointer" @click="() => {
                $emit(content.emit)
                $emit('close')
            }
                ">
                <Icon :icon="content.icon" /> {{ content.name }}
            </div>
        </template>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const { showDropdown, dropdownContent } = defineProps({
    showDropdown: {
        type: Boolean,
        required: true,
    },
    dropdownContent: {
        type: Array,
        required: true,
    }
})
</script>

<style lang="scss" scoped></style>