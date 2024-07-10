<template>
  <div class="">
    <Transition name="overlay">
      <div class="overlay" v-show="showModal"></div>
    </Transition>

    <div class="fixed top-0 right-0 h-screen left-0 z-50 overflow-y-scroll" v-show="showModal">
      <div class="flex items-center py-10 z-50 justify-center min-h-screen relative">
        <Transition name="content">
          <div class="relative z-50" v-show="showModal">
            <slot></slot>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { Icon } from '@iconify/vue'
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
