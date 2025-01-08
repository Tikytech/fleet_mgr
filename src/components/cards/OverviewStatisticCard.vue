<template>
  <div class="shadow rounded p-3 md:p-4 bg-white hover:-translate-y-1 transition-transform duration-500">
    <h3 class="gray-text uppercase text-sm font-medium">{{ stat?.title }}</h3>
    <p class="text-3xl md:text-4xl font-bold mt-2 md:mt-4 text-gray-700">
      <span v-if="!stat?.statistic && loading">
        <Icon icon="line-md:loading-loop" class="text-5sxl text-cyan-800" />
      </span>
      <span v-else>
        {{ stat?.statistic }}
      </span>
    </p>
    <div class="flex justify-between items-end">
      <router-link v-if="stat?.linkName" :to="stat?.link" class="text-sm text-blue-700 underline">{{
        stat?.linkName
        }}</router-link>
      <div class="" v-else></div>
      <div class="flex justify-between items-center bg-green-400 p-2 md:p-3 rounded">
        <Icon :icon="stat?.icon" class="text-2xl text-white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const { stat, loading } = defineProps({
  stat: Object,
  loading: Boolean
})
</script>

<style scoped></style>
