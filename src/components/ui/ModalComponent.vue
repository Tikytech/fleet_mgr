<template>
  <div class="">
    <Transition name="overlay">
      <div class="overlay" :class="[overlay ? 'bg-black/50' : 'bg-black/40']" v-show="showModal"></div>
    </Transition>

    <div class="fixed top-0 right-0 h-dvh left-0 z-50 overflow-y-scroll" v-show="showModal">
      <div class="flex items-center py-10 z-50 justify-center min-h-dvh relative">
        <Transition name="content">
          <div class="relative z-50 w-full maximum-width" v-show="showModal">
            <div class="rounded-md mx-auto overflow-hidden bg-white" :style="{ maxWidth: width }">

              <!-- grey part containing title and close button -->
              <div class="flex justify-between bg-slate-100 p-4 ">
                <h3 class="font-bold capitalize">{{ title }}</h3>
                <Icon icon="heroicons:x-circle" class="text-2xl cursor-pointer" @click="$emit('close')" />
              </div>

              <slot></slot>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

// import { Icon } from '@iconify/vue'
// import { ref } from 'vue'

// const showContent = ref(false)
const { showModal, title, width, overlay } = defineProps({
  showModal: Boolean,
  title: {
    required: true,
    type: String,
    default: "Modal title"
  },
  width: {
    type: String,
    default: '500px'
  },
  overlay: {
    type: Boolean,
    default: true,
  }
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
