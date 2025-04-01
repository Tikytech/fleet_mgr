<template>
    <div class="">
        <!-- Overlay -->
        <div class="overlay bg-transparent" v-if="showDropdown" @click="$emit('close')"></div>

        <!-- Dropdown Content -->
        <div class="border absolute bg-white rounded-md divide-y min-w-[200px] top-[100%] right-0 text-sm shadow z-40"
            v-if="showDropdown">
            <template v-for="content in dropdownContent" :key="content.name">
                <div class="flex items-center gap-1 px-3 py-2 hover:bg-gray-100 cursor-pointer" :class="content?.class"
                    @click="() => {
                        $emit(content.emit)
                        $emit('close')
                    }
                    ">
                    <Icon class="shrink-0 text-lg" :icon="content.icon" /> <span class="text-nowrap">{{ content.name
                        }}</span>
                </div>
            </template>
        </div>
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