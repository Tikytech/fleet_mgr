<template>
  <div class="">
    <Transition name="overlay">
      <div class="fixed top-0 left-0 bottom-0 right-0 z-40 bg-black/50" v-show="showModal"></div>
    </Transition>

    <div
      class="fixed top-0 bottom-0 right-0 left-0 z-50 flex items-center justify-center"
      v-show="showModal"
    >
      <Transition name="content">
        <div class="relative z-50 rounded-md overflow-hidden" v-show="showModal">
          <Icon
            icon="heroicons:x-mark"
            class="text-3xl absolute right-3 top-3 cursor-pointer"
            @click="$emit('close-modal')"
          />
          <slot></slot>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
// import { ref } from 'vue'

// const showContent = ref(false)
const { showModal } = defineProps({
  showModal: Boolean
})
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.5s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
