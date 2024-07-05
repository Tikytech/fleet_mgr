<template>
  <div class="bg-[#0c0822] text-white h-full p-4">
    <!-- logo -->
    <div class="">
      <h1 class="text-cyan-500 font-bold text-4xl text-center my-4">FLEET</h1>
    </div>

    <!-- title -->
    <div class="my-7">
      <h3 class="uppercase text-xs gray-text font-bold">Menu</h3>
    </div>

    <div>
      <template v-for="item in sideMenu" :key="item.name">
        <div>
          <p
            class="gray-text mb-6 flex justify-between items-center hover:text-[#eee] cursor-pointer transition"
          >
            <span>{{ item.name }}</span
            ><Icon icon="heroicons:chevron-right-16-solid" />
          </p>

          <ul class="ml-2 text-sm">
            <template v-for="link in item.links" :key="link.name">
              <router-link :to="link.link">
                <li
                  class="gray-text mb-6 flex justify-between items-center hover:text-[#eee] cursor-pointer transition"
                >
                  <span>- {{ link.name }}</span>
                </li>
              </router-link>
            </template>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const sideMenu = [
  {
    name: 'Staff Management',
    links: [
      { name: 'All Staff', link: { name: 'Layout' } },
      { name: 'Add Staff Member', link: { name: 'Layout' } }
    ]
  },
  {
    name: 'Vehicle Management',
    links: [
      { name: 'All Vehicles', link: { name: 'Layout' } },
      { name: 'Add Vehicle', link: { name: 'Layout' } }
    ]
  },
  {
    name: 'Supplier Management',
    links: [
      { name: 'All Suppliers', link: '#' },
      { name: 'Add Supplier', link: '#' }
    ]
  }
]
</script>

<style scoped></style>
