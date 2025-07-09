<template>
  <div class="rounded px-2 bg-cyan-400/30 text-cyan-800 py-0.5 flex items-center gap-2" :class="type === 'success'
    ? 'bg-green-400/30 text-green-800'
    : type === 'warning'
      ? 'bg-yellow-400/30 text-yellow-800'
      : type === 'danger'
        ? 'bg-red-400/30 text-red-800'
        : type === 'neutral'
          ? 'bg-gray-400/30 text-gray-800'
          : ''
    ">
    <div>
      <slot></slot>
    </div>

    <span class="relative flex h-2 w-2" v-if="showPing">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
    </span>
  </div>
</template>

<script setup>
const { type, showPing } = defineProps({
  type: {
    type: String
  },
  showPing: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped></style>
