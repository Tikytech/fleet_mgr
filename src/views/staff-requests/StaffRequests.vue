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
const { clientUser } = useAuthStore()
const tabs = [
    { tab: 'Your Requests', link: 'StaffRequestList', show: true },
    { tab: 'Staff Requests', link: 'AllStaffRequests', show: clientUser?.is_department_head  },
    { tab: 'Staff', link: 'AllStaffList', show: clientUser?.is_department_head },
    { tab: 'Departments', link: 'DepartmentsList', show: clientUser?.is_college_head },
];
</script>

<style lang="scss" scoped></style>