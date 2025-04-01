<script setup>
import ToastNotification from './components/ui/ToastNotification.vue';
import { useToastStore } from './stores/toast';
import { storeToRefs } from 'pinia';

const toastStore = useToastStore()

// for notification
const { showToast } = storeToRefs(toastStore)
</script>

<template>

  <Transition name="slide-fade" appear>
    <ToastNotification v-if="showToast" />
  </Transition>


  <RouterView />
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
