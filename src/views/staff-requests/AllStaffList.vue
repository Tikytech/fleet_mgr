<template>
    <div class="space-y-4">
        <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Add Staff">
            <AddStaffForm @close="showAdd = false" />
        </ModalComponent>

        <SearchAndButtonBar button-text="Add Staff" :filter="true" @add="showAdd = true" />

        <!-- <StaffTable @add="showAddModal" /> -->

        <TableComponent :exclude="['id']" :table-data="staffTableData" :table-head="tableHead" @add="showAdd = true"
            :loading="staffStore.loading" />
    </div>
</template>

<script setup>
// import StaffTable from '@/components/tables/StaffTable.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import TableComponent from '@/components/tables/TableComponent.vue';
import AddStaffForm from '@/components/forms/AddStaffForm.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import { useStaffStore } from '@/stores/staff'
import { computed, onMounted, ref, watch } from 'vue'

const showAdd = ref(false)
const staffStore = useStaffStore()
const tableData = ref(staffStore.staff)

watch(
    () => staffStore.staff,
    () => {
        console.log('seen')
        tableData.value = staffStore.staff
    }
)

const tableHead = [
    { title: 'Name' },
    { title: 'Staff Id' },
    { title: 'College' },
    { title: 'Email' },
    { title: 'Contact' },
]

const staffTableData = computed(() => {
    return tableData.value.map(item => {
        return {
            name: item?.name || "N/A",
            staffId: item?.staff_no || "N/A",
            college: item?.college?.name || "N/A",
            email: item?.email || "N/A",
            contact: item?.contact || "N/A",
            id: item?.id
        }
    })
})

onMounted(async () => {
    await staffStore.getAllClientStaffInDepartment()
    tableData.value = staffStore.clientStaff
})
</script>

<style lang="scss" scoped></style>