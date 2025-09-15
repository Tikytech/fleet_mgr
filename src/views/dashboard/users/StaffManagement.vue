<template>
    <div class="space-y-5">
        <!-- Modals and popups -->
        <!-- add user modal -->
        <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Add Staff" width="500px">
            <AddStaffForm @close="showAdd = false" />
        </ModalComponent>

        <!-- Search and buttonbar -->
        <div class=" ">
            <SearchAndButtonBar button-text="Add Staff" @add="showAdd = true" />
        </div>

        <!-- table -->
        <div class="">
            <TableComponent :exclude="['id']" :table-data="tableData" :table-head="tableHead" :actions="actions"
                :badge="{ column: 'status' }" :get-status="getStatus" @add="showAdd = true" :loading="loading" />
        </div>
    </div>
</template>

<script setup>
import AddStaffForm from '@/components/forms/AddStaffForm.vue';
import TableComponent from '@/components/tables/TableComponent.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue';
import { onMounted, ref, computed } from 'vue';
// import { useUserStore } from '@/stores/user'
// import dayjs from 'dayjs';
import { storeToRefs } from 'pinia';
import { useStaffStore } from '@/stores/staff'

const showAdd = ref(false)
// const userStore = useUserStore()
const staffStore = useStaffStore()
// const { users, loading: userLoading } = storeToRefs(userStore)
const { staff, loading } = storeToRefs(staffStore)

const tableHead = [
    { title: 'User ID' },
    { title: 'Name' },
    { title: 'Email' },
    { title: 'Phone' },
    { title: 'Role' },
    { title: 'Level' },
]

const tableData = computed(() => {
    return staff.value.map(item => {
        return {
            userId: item?.staff_no || "N/A",
            // college: item?.staff?.college?.name || "N/A",
            name: item?.name || "N/A",
            email: item?.email || "N/A",
            phone: item?.contact || "N/A",
            role: item?.role?.name || "N/A",
            level: item?.role?.level.toString() || "N/A",
        }
    })
})

const actions = {
    edit: {
        link: 'StaffManagement',
    },
    delete: {
        link: 'StaffManagement'
    }
}

function getStatus(status) {
    switch (status.toLowerCase()) {
        case 'active':
            return 'success';
        case 'inactive':
            return 'danger';
        default:
            return '';
    }
}

onMounted(async () => {
    // await userStore.getAllUsers()
    await staffStore.getAllStaff()
})

// const tableData = [
//     {
//         "id": 1,
//         "name": "John Doe",
//         "email": "johndoe@example.com",
//         "phone": "+233-24-123-4567",
//         "status": "Active",
//         "lastLogin": "2025-01-01T08:30:00Z"
//     },
//     {
//         "id": 2,
//         "name": "Jane Smith",
//         "email": "janesmith@example.com",
//         "phone": "+233-54-234-5678",
//         "status": "Inactive",
//         "lastLogin": "2024-12-25T15:45:00Z"
//     },
//     {
//         "id": 3,
//         "name": "Sam Brown",
//         "email": "sambrown@example.com",
//         "phone": "+233-20-345-6789",
//         "status": "Active",
//         "lastLogin": "2025-01-01T10:15:00Z"
//     },
//     {
//         "id": 4,
//         "name": "Alice Johnson",
//         "email": "alicejohnson@example.com",
//         "phone": "+233-50-456-7890",
//         "status": "Inactive",
//         "lastLogin": null
//     },
//     {
//         "id": 5,
//         "name": "Michael Lee",
//         "email": "michaellee@example.com",
//         "phone": "+233-26-567-8901",
//         "status": "Active",
//         "lastLogin": "2024-12-31T22:10:00Z"
//     }
// ]

</script>

<style lang="scss" scoped></style>