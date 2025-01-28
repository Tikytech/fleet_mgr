<template>
    <div class="">
        <div class="">
            <NavigationTabs :tabs="tabs" />
        </div>

        <main class="mt-5">
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import NavigationTabs from '@/components/ui/NavigationTabs.vue';

const tabs = [{ tab: "Profile", link: 'AccountProfile' }, { tab: "User Management", link: 'UserManagement' }]
</script>

<style scoped></style>