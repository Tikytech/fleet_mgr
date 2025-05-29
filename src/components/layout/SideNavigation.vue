<template>
  <div class="bg-[#0c0822] text-white h-full p-4 relative">
    <!-- close Icon -->
    <div
      class="absolute right-4 size-6 rounded-full bg-white text-black flex items-center justify-center cursor-pointer"
      v-if="mobileNav" @click="navbarStore.showMobileNav = false">
      <Icon icon="heroicons:x-mark-16-solid" class="text-2xl" />
    </div>

    <!-- logo -->
    <div class="">
      <!-- logo -->
      <div class="w-16 mx-auto"><img src="/images/ug-logo.png" alt="ug-logo" class="w-full"></div>
      <h3 class="uppercase font-bold text-center text-xs">Ug vehicle manager</h3>
    </div>

    <!-- title -->
    <div class="my-7">
      <h3 class="uppercase text-xs gray-text font-bold">Menu</h3>
    </div>

    <div>
      <ul class="text-sm">
        <template v-for="item in sideMenu" :key="item.name">
          <router-link :to="item.link">
            <li
              class="gray-text text-base mb-6 flex justify-start gap-2 items-center hover:text-[#eee] cursor-pointer transition">
              <Icon :icon="item.icon" class="text-lg" />
              <span>{{ item.name }}</span>
            </li>
          </router-link>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useNavbarStore } from '@/stores/navbar';
import { Icon } from '@iconify/vue'
const navbarStore = useNavbarStore()
const { mobileNav } = defineProps({
  mobileNav: Boolean
})
const sideMenu = [
  {
    name: 'Overview',
    link: { name: 'Overview' },
    icon: 'heroicons:chart-pie'
  },
  {
    name: 'Vehicles',
    link: { name: 'VehiclesOverview' },
    icon: 'heroicons:truck'
  },
  {
    name: 'Departmental Requests',
    link: { name: 'RequestList' },
    icon: 'heroicons:clipboard-document-list'
  },
  {
    name: 'Vehicle Requests',
    link: { name: 'VehicleRequestList' },
    icon: 'heroicons:clipboard-document-list'
  },
  {
    name: 'Staff/Drivers',
    link: { name: 'StaffManagement' },
    icon: 'heroicons:user-group'
  },
  {
    name: 'Colleges',
    link: { name: 'Colleges' },
    icon: 'heroicons:building-library'
  },
  {
    name: 'Suppliers',
    link: { name: 'SupplierManagement' },
    icon: 'heroicons:newspaper'
  }
]
</script>

<style scoped>
.router-link-active li {
  @apply text-white;
}
</style>
