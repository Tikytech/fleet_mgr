<template>
  <div
    class="border rounded-[4px] max-w-[400px] p-4 text-white"
    :style="{ 'background-color': colors.color }"
  >
    <div class="flex gap-2 border-b pb-4">
      <Icon icon="heroicons:building-library" class="text-6xl shrink-0" />
      <p class="font-bold text-xl">{{ college?.name }}</p>
    </div>
    <div class="flex pt-4 gap-2">
      <div class="w-1/2">
        <button
          class="w-full gap-2 flex justify-center items-center active:scale-95 transition-transform mx-auto rounded-md py-2"
          :style="{ 'background-color': colors.hover }"
        >
          <Icon icon="heroicons:pencil" /> Edit
        </button>
      </div>
      <div class="w-1/2">
        <button
          class="w-full gap-2 flex justify-center items-center bg-red-500 mx-auto rounded-md py-2 active:scale-95 transition-transform"
        >
          <Icon icon="heroicons:trash" /> Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const { college, colors } = defineProps({
  college: Object,
  colors: Object
})

console.log(colors)
</script>

<style lang="scss" scoped></style>
