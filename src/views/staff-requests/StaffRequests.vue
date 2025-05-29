<template>
    <div class="bg-slate-200 min-h-dvh">
        <div>
            <TopNavigation :client="true" />
        </div>


        <router-view></router-view>

    </div>
</template>

<script setup>
import TopNavigation from '@/components/layout/topnav/TopNavigation.vue';
</script>

<style lang="scss" scoped></style>