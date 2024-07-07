<template>
  <button
    :disable="loading"
    class="min-w-[100px] justify-center rounded-md py-3 px-4 text-sm flex gap-2 items-center text-white font-semibold transition-colors"
    :class="[
      type === 'success'
        ? 'bg-green-500 hover:bg-green-600'
        : type === 'danger'
          ? 'bg-red-500  hover:bg-red-600'
          : type === 'info'
            ? 'bg-cyan-500  hover:bg-cyan-600'
            : type === 'border'
              ? 'bg-inherit border-2 !text-black hover:border-gray-400'
              : ''
    ]"
  >
    <Icon :icon="icon" v-if="icon" class="text-lg"></Icon>
    <Icon icon="line-md:loading-loop" class="text-xl mx-auto" v-if="loading" />
    <span class="" v-else>{{ text }} </span>
  </button>
</template>

<script setup>
// import { defineProps } from 'vue'
import { Icon } from '@iconify/vue'
const { icon, text, type, loading } = defineProps({
  icon: String,
  text: String,
  type: {
    type: String,
    default: 'success'
  },
  loading: Boolean
})
</script>

<style lang="scss" scoped></style>
