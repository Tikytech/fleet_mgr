<template>
  <div class="text-center">
    <Icon icon="material-symbols:search-off-rounded" class="text-[100px] mx-auto" />
    <p class="text-lg my-2">No Results Found</p>
    <div class="mt-4 mx-auto w-fit">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped></style>
