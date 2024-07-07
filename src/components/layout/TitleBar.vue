<template>
  <div class="bg-white py-2 shadow">
    <div class="maximum-width flex justify-between items-center">
      <h2 class="uppercase font-bold">{{ $route.meta.pageTitle }}</h2>
      <div class="text-sm">
        <span>Dashboards</span>
        <Icon icon="heroicons:chevron-right-16-solid" class="gray-text inline mx-2" />
        <span class="gray-text"> {{ $route.meta.pageTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped></style>
