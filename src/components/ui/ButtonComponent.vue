<template>
  <div class="relative">
    <div class="flex justify-center rounded-md text-white font-semibold transition-colors text-sm w-fit"
      :class="buttonContainerClass">
      <!-- Main Button -->
      <button @click="$emit('buttonClick')" :disabled="loading" :type="typeButton"
        class="min-w-[100px] justify-center py-2 px-4 flex gap-2 items-center transition-colors rounded-md"
        :class="buttonClass">
        <Icon :icon="icon" v-if="icon" class="text-lg shrink-0" />
        <Icon icon="line-md:loading-loop" class="text-xl mx-auto" v-if="loading" />
        <span v-else class="break-keep text-nowrap">{{ text }}</span>
      </button>

      <!-- Dropdown Button -->
      <button v-if="dropdown" @click="toggleDropdown" class="p-3 py-2 border-l border-l-gray-300 rounded-r-md"
        :class="buttonClass">
        <Icon icon="material-symbols:keyboard-arrow-down" class="text-xl" />
      </button>
    </div>

    <!-- Overlay -->
    <div class="fixed top-0 bottom-0 left-0 right-0 bg-transparent z-40" v-if="showDropdown"
      @click="showDropdown = false"></div>

    <!-- Dropdown Content -->
    <div class="border absolute bg-white rounded-md divide-y min-w-full top-[100%] right-0 text-sm shadow z-40"
      v-if="showDropdown">
      <template v-for="content in dropdown" :key="content.name">
        <div class="flex items-center gap-1 px-3 py-2 hover:bg-gray-100 cursor-pointer" @click="() => {
          $emit(content.emit)
          showDropdown = false
        }
          ">
          <Icon :icon="content.icon" /> {{ content.name }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'

const { icon, text, type, loading, typeButton, dropdown } = defineProps({
  icon: String,
  text: String,
  type: {
    type: String,
    default: 'success'
  },
  loading: Boolean,
  typeButton: String,
  dropdown: Array
})

const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

// Classes computed dynamically to reduce repetition
const buttonContainerClass = computed(() => {
  const classes = {
    success: 'bg-green-500',
    danger: 'bg-red-500',
    info: 'bg-cyan-500',
    border: 'bg-inherit outline-1 !text-black hover:outline-gray-400',
  }
  return classes[type] || ''
})

const buttonClass = computed(() => {
  const classes = {
    success: 'bg-green-500 hover:bg-green-600 border-2 border-green-500 hover:border-green-600',
    danger: 'bg-red-500 hover:bg-red-600 border-2 border-red-500 hover:border-red-600',
    info: 'bg-cyan-500 hover:bg-cyan-600 border-2 border-cyan-500 hover:border-cyan-600',
    border: 'bg-inherit border-2 !text-black hover:border-gray-400',
  }
  return classes[type] || ''
})
</script>

<style lang="scss" scoped></style>
