<template>
    <div class="bg-slate-200 min-h-dvh">

        <div class="maximum-width py-5">
            <UserInformation />
        </div>

        <div class="maximum-width">
            <NavigationTabs :tabs="tabs" />
        </div>


        <div class="maximum-width py-4">
            <router-view></router-view>
        </div>

    </div>
</template>

<script setup>
import UserInformation from '@/components/custom/staff-requests/UserInformation.vue';
import NavigationTabs from '@/components/ui/NavigationTabs.vue';

const tabs = [
    { tab: 'Your Requests', link: 'StaffRequestList' },
    { tab: 'Staff Requests', link: 'AllStaffRequests' },
    { tab: 'Staff', link: 'AllStaffList' },
    { tab: 'Departments', link: 'DepartmentsList' },
];
</script>

<style lang="scss" scoped></style>