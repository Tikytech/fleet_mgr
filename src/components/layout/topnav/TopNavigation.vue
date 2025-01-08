<template>
  <div class="bg-white border-b sticky top-0 z-40">
    <nav class="flex gap-3 md:gap-5 maximum-width">
      <div class="py-4 flex justify-between items-center w-full">
        <!-- search and collapse icon -->
        <div class="flex items-center gap-4" v-if="client">
          <h2 class="uppercase font-bold">Vehicle request portal</h2>
        </div>
        <div class="flex items-center gap-4" v-else>
          <Icon icon="heroicons:bars-3-bottom-left" class="gray-text text-3xl cursor-pointer lg:block hidden"
            @click="navbarStore.showSideNav = !navbarStore.showSideNav" />
          <Icon icon="heroicons:bars-3-bottom-left" class="gray-text text-3xl cursor-pointer lg:hidden"
            @click="navbarStore.showMobileNav = true" />
          <div class="md:w-[250px] mr-2">
            <SearchBar />
          </div>
        </div>

        <!-- Icons -->
        <div class="flex gap-">
          <ThemeIcon />
          <NotificationIcon />
        </div>
      </div>

      <!-- user profile -->
      <div class="w-fit shrink-0 flex items-center" v-if="!client">
        <UserProfile />
      </div>
    </nav>

    <!-- mobile nav -->
    <div class="">
      <!-- overlay -->
      <div class="fixed top-0 left-0 h-full w-full z-40" v-if="navbarStore.showMobileNav"
        @click="navbarStore.showMobileNav = false"></div>
      <Transition name="slide-fade">
        <aside class="fixed top-0 bottom-0 w-[250px] z-50 lg:hidden" v-if="navbarStore.showMobileNav">
          <SideNavigation :mobile-nav="true" />
        </aside>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import SearchBar from '@/components/ui/SearchBar.vue'
import NotificationIcon from '@/components/layout/topnav/NotificationIcon.vue'
import ThemeIcon from '@/components/layout/topnav/ThemeIcon.vue'
import UserProfile from '@/components/layout/topnav/UserProfile.vue'
import { useNavbarStore } from '@/stores/navbar'
import SideNavigation from '../SideNavigation.vue'

const navbarStore = useNavbarStore()

const { client } = defineProps({
  client: Boolean
})
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
</style>
