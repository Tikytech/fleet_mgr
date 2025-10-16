<template>

    <div class="flex gap-2 items-center">
        <Icon icon="heroicons:list-bullet" class="text-3xl cursor-pointer"
            :class="{ 'bg-cyan-500 text-white rounded-md p-1': isListOrGrid === 'list' }"
            @click="$emit('toggle', 'list')" />
        <Icon icon="hugeicons:grid-view" class="text-3xl cursor-pointer"
            :class="{ 'bg-cyan-500 text-white rounded-md p-1': isListOrGrid === 'grid' }"
            @click="$emit('toggle', 'grid')" />
    </div>

</template>

<script setup>
import { Icon } from '@iconify/vue'

const { isListOrGrid } = defineProps({
    isListOrGrid: {
        type: String,
        default: 'list'
    }
})

</script>

<style lang="scss" scoped></style>