<template>
  <div class="bg-white rounded-md w-full p-4">
    <h3 class="font-semibold text-lg">Assign Vehicle</h3>

    <div class="my-4 space-y-3">
      <!-- <div class="text-center">
        <p class="">No vehicle Assigned</p>
        <button
          class="flex items-center gap-1 m-auto px-2 py-1 hover:bg-gray-200 cursor-pointer rounded transition-colors"
        >
          <Icon icon="heroicons:plus"></Icon> Assign vehicle
        </button>
      </div> -->

      <div class="text-sm space-y-2">
        <p class="">Vehicle ID: UG-V001</p>
        <p class="">Toyota 207 XR</p>
        <p class="">Licence plate: GV-1056-25</p>

        <hr class="my-4" />
        <p class="">Driver: Akwesi Minter</p>
        <p class="">Contact: 0126136287</p>

        <button
          class="flex items-center gap-1 m-auto px-2 py-1 hover:bg-gray-200 cursor-pointer rounded transition-colors"
        >
          <Icon icon="heroicons:plus"></Icon> Assign another vehicle
        </button>
      </div>
    </div>

    <div class="flex gap-2 mt-8">
      <ButtonComponent text="Approve Request" class="w-1/2" />
      <ButtonComponent text="Reject Request" type="danger" class="w-1/2" />
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped></style>
