<template>
  <div>
    <div>
      <!-- Side bar -->
      <aside class="fixed top-0 bottom-0 w-[250px]">
        <SideNavigation />
      </aside>

      <!-- content -->
      <div class="ml-[250px] primary-bg min-h-screen">
        <TopNavigation />
        <TitleBar />

        <main class="maximum-width py-5">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideNavigation from '@/components/layout/SideNavigation.vue'
import TopNavigation from '@/components/layout/topnav/TopNavigation.vue'
import TitleBar from '@/components/layout/TitleBar.vue'
</script>

<style lang="scss" scoped></style>
