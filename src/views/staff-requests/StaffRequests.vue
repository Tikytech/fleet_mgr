<template>
    <div>
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