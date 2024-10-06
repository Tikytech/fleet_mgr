<template>
  <div class="bg-white py-2 shadow">
    <div class="maximum-width flex justify-between items-center">
      <h2 class="uppercase font-bold">{{ $route.meta.pageTitle }}</h2>

      <div class="" v-if="$route.meta.links">
        <BreadCrumbs :links="$route.meta.links" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BreadCrumbs from '../ui/BreadCrumbs.vue'
</script>

<style lang="scss" scoped></style>
