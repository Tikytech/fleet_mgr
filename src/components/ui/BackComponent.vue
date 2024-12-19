<template>
  <div @click="goBack"
    class="text-sm px-3 py-1 cursor-pointer rounded-md hover:bg-gray-300 transition-colors flex items-center gap-2">
    <Icon icon="heroicons:arrow-left" /> <span>Back</span>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const { linkObject } = defineProps({
  linkObject: Object
})

const router = useRouter()

function goBack() {
  if (linkObject) {
    router.push(linkObject)
  } else {
    router.back()
  }
}
</script>

<style lang="scss" scoped></style>
