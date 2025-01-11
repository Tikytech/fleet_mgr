<template>
  <div class="h-full cursor-pointer w-fit shrink-0 flex items-center">
    <div class="primary-bg py-4 px-3 h-full hidden md:block">
      <div class="flex items-center gap-3">
        <div class="rounded-full size-8 overflow-hidden">
          <img src="/images/users/avatar-1.jpg" class="w-full size-full" />
        </div>

        <div class="space-y-">
          <p class="font-semibold text-sm">Anna Adame</p>
          <p class="gray-text text-xs">Admin</p>
        </div>
      </div>
    </div>
    <div class="md:hidden flex items-center">
      <div class="rounded-full size-8 overflow-hidden">
        <img src="/images/users/avatar-1.jpg" class="w-full size-full" />
      </div>
    </div>
  </div>

  <!-- Overlay -->
  <div class="overlay bg-transparent" v-if="showDropdown" @click="showDropdown = false"></div>


</template>

<script setup></script>

<style lang="scss" scoped></style>
