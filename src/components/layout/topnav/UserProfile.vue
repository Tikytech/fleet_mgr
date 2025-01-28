<template>
  <div class="h-full cursor-pointer w-fit shrink-0 flex items-center" @click="showDropdown = true">
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
  <!-- dropdown -->
  <DropdownComponent :show-dropdown="showDropdown" :dropdown-content="dropdown" @close="showDropdown = false"
    v-if="showDropdown" @settings="navigateToSettings" />
</template>

<script setup>
import DropdownComponent from '@/components/ui/DropdownComponent.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const showDropdown = ref(false)
const router = useRouter()

function navigateToSettings() {
  router.push({ name: 'AccountSettings' })
}

const dropdown = [
  {
    name: 'Account Settings',
    emit: 'settings',
    icon: 'heroicons:cog-6-tooth'
  },
  { name: 'Logout', emit: 'logout', icon: 'heroicons:arrow-left-start-on-rectangle' }
]
</script>

<style lang="scss" scoped></style>
