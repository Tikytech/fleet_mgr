<template>
  <div class="p-4 bg-white rounded-md gap-5 max-w-[400px] text-gray-600">
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
          <span>UG-V100</span>
        </BadgeComponent>
        <BadgeComponent>
          <span>Toyota V3 ford 100</span>
        </BadgeComponent>
        <BadgeComponent>
          <span>GV-0034-24</span>
        </BadgeComponent>
      </div>

      <!-- icons -->
      <div class="text-gray-400 flex gap-2 justify-between text-sm">
        <div class="flex gap-1 items-center">
          <Icon icon="material-symbols:person" class="text-2xl" /> <span>5</span>
        </div>
        <div class="flex gap-1 items-center">
          <Icon icon="material-symbols:settings" class="text-2xl" /> <span>Automatic</span>
        </div>
        <div class="flex gap-1 items-center">
          <Icon icon="ant-design:dashboard-twotone" class="text-2xl" />
          <span>Mileage / 13000km</span>
        </div>
        <div class="flex gap-1 items-center">
          <Icon icon="mdi:snowflake" class="text-2xl" /> <span>A/C</span>
        </div>
      </div>

      <div class="text-sm mt-3 space-y-1">
        <p>
          <span class="">Driver Assigned:</span>
          <span class="text-gray-400 ml-2">Nelson Keku</span>
        </p>
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

      <div class="flex justify-between gap-2 mt-4">
        <ButtonComponent text="Assign Vehicle" />
        <router-link :to="{ name: 'VehicleDetails', params: { id: 'UG-V100' } }">
          <ButtonComponent text="View Details" type="info" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import ButtonComponent from '../ui/ButtonComponent.vue'
import BadgeComponent from '../ui/BadgeComponent.vue'

const { vehicleData } = defineProps({
  vehicleData: Object
})

console.log(vehicleData)
</script>

<style lang="scss" scoped></style>
