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

const tabs = [
    { tab: "Colleges", show: true, link: 'CollegeList' },
    { tab: "Departments", show: true, link: 'Departments' },
    { tab: "Staff", show: true, link: 'StaffManagement' },]
</script>

<style scoped></style>