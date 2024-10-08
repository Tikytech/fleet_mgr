<template>
  <div
    class="primary-bg rounded-md p-2 w-full flex items-center gap-2 focus-within:ring-1 ring-gray-400"
    :class="[type === 'border' ? 'bg-inherit border' : '']"
  >
    <Icon icon="material-symbols:search-rounded" class="text-xl text-gray-500" />
    <input
      class="w-full bg-inherit text-sm focus:outline-none"
      :placeholder="placeholder + '...'"
      type="text"
    />
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const { placeholder } = defineProps({
  placeholder: {
    type: String,
    default: 'Search'
  },
  type: String
})
</script>

<style lang="scss" scoped></style>
