<template>
  <div class="p-4 bg-white rounded-md gap-5 flex text-gray-600">
    <!-- image -->
    <div class="w-[33%]">
      <img src="/images/vehicles/vehicle.jpg" alt="" class="w-full rounded-md" />
    </div>

    <!-- details -->
    <div class="w-[67%] px-4">
      <div class="flex justify-between items-start">
        <h3 class="text-3xl text-gray-600 font-bold">
          {{ vehicleData.make }}
          <span
            class="rounded-full px-3 bg-cyan-400/30 text-cyan-800 text-sm py-1 ml-2 align-middle"
            >Saloon</span
          >
        </h3>
        <div
          class="rounded-full px-3 bg-green-400/30 text-green-800 text-sm py-0.5 flex items-center gap-2"
        >
          <span>Active</span>

          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"
            ></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
        </div>
      </div>

      <!-- icons -->
      <div class="text-gray-400 flex gap-3 mt-2 text-sm">
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

      <div class="text-sm mt-3 space-y-1 font-medium">
        <p><span>Driver assigned:</span> <span class="text-gray-400 ml-2">Nelson Keku</span></p>
        <p><span>College:</span> <span class="text-gray-400 ml-2">Enginerring</span></p>
        <p><span>Purpose:</span> <span class="text-gray-400 ml-2">Getting Stationery</span></p>
        <p>
          <span>Date and time assigned:</span>
          <span class="text-gray-400 ml-2">25th Feb 2024 | 2:45pm</span>
        </p>
      </div>

      <div class="flex justify-end gap-2 mt-2">
        <ButtonComponent text="Assign Vehicle" />
        <ButtonComponent text="View Details" type="info" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import ButtonComponent from '../ui/ButtonComponent.vue'

const { vehicleData } = defineProps({
  vehicleData: Object
})
</script>

<style lang="scss" scoped></style>
