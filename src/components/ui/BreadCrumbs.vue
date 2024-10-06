<template>
  <div class="text-sm flex">
    <template v-for="link in links" :key="link.name">
      <div class="" v-if="link.link">
        <router-link :to="{ name: link.link }">
          <span
            class="capitalize gray-text hover:text-black hover:underline transition-colors cursor-pointer"
            >{{ link.name }}</span
          >
        </router-link>
        <Icon icon="heroicons:chevron-right-16-solid" class="gray-text inline mx-2" />
      </div>

      <div class="" v-else>
        <span class="capitalize"> {{ link.name }} </span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const { links } = defineProps({
  links: Object
})
</script>

<style lang="scss" scoped></style>
