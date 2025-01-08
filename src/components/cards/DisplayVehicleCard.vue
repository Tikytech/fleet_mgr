<template>
  <div
    class="hover:outline-slate-300 outline outline-2 outline-transparent bg-white rounded-md max-w-[500px] overflow-x-auto">
    <router-link :to="{ name: 'VehicleDetails', params: { id: vehicleData.id } }">
      <div class="p-4  gap-5  text-gray-600 pb-6 h-full">
        <!-- image -->
        <div class="relative">
          <img src="/images/vehicles/img-placeholder.jpg" alt="" class="w-full rounded-md" />

          <div class="absolute top-0 right-0 text-sm">
            <BadgeComponent :show-ping="true" type="success">Active</BadgeComponent>
          </div>
        </div>

        <!-- details -->
        <div class="">
          <div class="flex justify-start items-center text-xs font-bold gap-1 my-2">
            <!-- {{ vehicleData?.make }} -->
            <BadgeComponent>
              <span>{{ vehicleData.id }}</span>
            </BadgeComponent>
            <BadgeComponent>
              <span>{{ vehicleData.make }} {{ vehicleData.model }}</span>
            </BadgeComponent>
            <BadgeComponent>
              <span>{{ vehicleData.reg_no }}</span>
            </BadgeComponent>
          </div>

          <!-- icons -->
          <div class="overflow-x-auto no-scrollbar">
            <div class="text-gray-400 flex gap-2 justify-between text-sm ">
              <div class="flex gap-1 items-center">
                <Icon icon="material-symbols:person" class="text-2xl" /> <span>5</span>
              </div>
              <div class="flex gap-1 items-center">
                <Icon icon="material-symbols:settings" class="text-2xl" /> <span>Automatic</span>
              </div>
              <div class="flex gap-1 items-center">
                <Icon icon="ant-design:dashboard-twotone" class="text-2xl" />
                <span class=" text-nowrap">Mileage / 13000km</span>
              </div>
              <div class="flex gap-1 items-center">
                <Icon icon="mdi:snowflake" class="text-2xl" /> <span>A/C</span>
              </div>
            </div>
          </div>

          <!-- car extra details -->
          <div class="text-sm mt-3 space-y-1">
            <p>
              <span class="">College:</span>
              <span class="text-gray-400 ml-2">Engineering</span>
            </p>
            <p>
              <span class="">Purpose:</span>
              <span class="text-gray-400 ml-2">Getting Stationery</span>
            </p>
            <p>
              <span>Last Maintenance:</span>
              <span class="text-gray-400 ml-2">25th Feb 2024</span>
            </p>
            <p>
              <span>Insurance Expiry:</span>
              <span class="text-gray-400 ml-2">25th Feb 2024</span>
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BadgeComponent from '../ui/BadgeComponent.vue'

const { vehicleData } = defineProps({
  vehicleData: Object
})

console.log(vehicleData)
</script>

<style lang="scss" scoped></style>
