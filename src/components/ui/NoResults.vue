<template>
  <div class="text-center">
    <Icon icon="material-symbols:search-off-rounded" class="text-[100px] mx-auto" />
    <p class="text-lg my-2">No Results Found</p>
    <ButtonComponent :text="buttonText" icon="heroicons:plus" type="success" class="mx-auto mt-4" />
  </div>
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import { Icon } from '@iconify/vue'

const { buttonText } = defineProps({
  buttonText: String
})
</script>

<style lang="scss" scoped></style>
