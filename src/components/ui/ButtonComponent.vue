<template>
  <button
    class="rounded-md py-3 px-4 text-sm flex gap-2 items-center text-white font-semibold transition-colors"
    :class="[
      type === 'success'
        ? 'bg-green-500 hover:bg-green-600'
        : type === 'danger'
          ? 'bg-red-500  hover:bg-red-600'
          : type === 'info'
            ? 'bg-cyan-500  hover:bg-cyan-600'
            : ''
    ]"
  >
    <Icon :icon="icon" v-if="icon" class="text-lg"></Icon>
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
// import { defineProps } from 'vue'
import { Icon } from '@iconify/vue'
const { icon, text, type } = defineProps({
  icon: String,
  text: String,
  type: {
    type: String,
    default: 'success'
  }
})
</script>

<style lang="scss" scoped></style>
