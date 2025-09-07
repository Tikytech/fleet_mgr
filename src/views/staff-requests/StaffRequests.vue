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
import { useAuthStore } from '@/stores/authentication';
const { user } = useAuthStore()
const tabs = [
    { tab: 'Your Requests', link: 'StaffRequestList', show: true },
    { tab: 'Staff Requests', link: 'AllStaffRequests', show: true },
    { tab: 'Staff', link: 'AllStaffList', show: true },
    { tab: 'Departments', link: 'DepartmentsList', show: true },
];
console.log(user)
</script>

<style lang="scss" scoped></style>