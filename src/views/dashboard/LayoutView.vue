<template>
  <div>
    <div>
      <!-- Side bar -->
      <Transition name="slide-fade">
        <aside class="fixed top-0 bottom-0 w-[250px] z-50 hidden lg:block" v-if="navbarStore.showSideNav">
          <SideNavigation />
        </aside>
      </Transition>

      <!-- content -->
      <div class="primary-bg main-content min-h-screen" :class="navbarStore.showSideNav ? 'lg:ml-[250px]' : 'lg:ml-0'">
        <TopNavigation />
        <TitleBar />

        <main class="maximum-width py-5">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideNavigation from '@/components/layout/SideNavigation.vue'
import TopNavigation from '@/components/layout/topnav/TopNavigation.vue'
import TitleBar from '@/components/layout/TitleBar.vue'
import { useNavbarStore } from '@/stores/navbar';

const navbarStore = useNavbarStore()
</script>

<style scoped>
.slide-fade-enter-active {
  transition: transform 0.2s linear;
}

.slide-fade-leave-active {
  transition: transform 0.2s linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  /* opacity: 0; */
}

.main-content {
  transition: margin-left 0.2s linear;
}
</style>
