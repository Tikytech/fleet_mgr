<template>
  <div class="bg-white border-b sticky top-0 z-40">
    <nav class="flex gap-3 md:gap-3 maximum-width">
      <div class="py-4 flex justify-between items-center w-full">

        <!-- client -->
        <div class="flex items-center gap-2" v-if="client">
          <img src="/images/ug-logo.png" alt="ug logo" class="w-12">
          <h2 class="uppercase font-bold text-sm">Vehicle request portal</h2>
        </div>

        <!-- admin -->
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
      <!-- client -->
      <div class="w-fit shrink-0 flex items-center relative cursor-pointer" v-if="client" title="logout">
        <Icon icon="heroicons:arrow-left-start-on-rectangle" class="text-2xl text-red-500" @click="showPrompt = true" />
      </div>

      <!-- admin -->
      <div class="w-fit shrink-0 flex items-center relative" v-else>
        <UserProfile />
      </div>

      <!-- logout propmt for client -->
      <!-- logout prompt -->
      <ModalComponent :show-modal="showPrompt" @close="showPrompt = false" title="Logout" width="400px">
        <PromptCard @close="showPrompt = false" @button-click="useAuthStore().logout()"
          text="Are you sure you want to logout?" />
      </ModalComponent>
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
import { useAuthStore } from '@/stores/authentication'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import PromptCard from '@/components/cards/PromptCard.vue'
import { ref } from 'vue'

const navbarStore = useNavbarStore()

const { client } = defineProps({
  client: Boolean
})

const showPrompt = ref(false)

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
