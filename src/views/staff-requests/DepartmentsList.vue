<template>
    <div class="space-y-4">
        <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Add Department">
            <AddDepartmentForm @close="showAdd = false" :college-id="clientUser?.college?.id" />
        </ModalComponent>

        <SearchAndButtonBar button-text="Add Department" :filter="true" @add="showAdd = true" />

        <TableComponent :exclude="['id']" :table-data="departmentTableData" :table-head="tableHead"
            @add="showAdd = true" :loading="departmentStore.loading" />
    </div>
</template>

<script setup>
import ModalComponent from '@/components/ui/ModalComponent.vue'
import TableComponent from '@/components/tables/TableComponent.vue';
import AddDepartmentForm from '@/components/forms/AddDepartmentForm.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import { useDepartmentStore } from '@/stores/department'
import { computed, onMounted, ref, watch } from 'vue'
import { useAuthStore } from '@/stores/authentication'

const showAdd = ref(false)
const departmentStore = useDepartmentStore()
const tableData = ref(departmentStore.departments)
const { clientUser } = useAuthStore()

watch(
    () => departmentStore.departments,
    () => {
        console.log('seen')
        tableData.value = departmentStore.departments
    }
)

const tableHead = [
    { title: 'Department Name' },
    { title: 'College' },
    { title: 'Head of Department' },
    { title: 'Email' },
    { title: 'Contact' },
]

const departmentTableData = computed(() => {
    return tableData.value.map(item => {
        return {
            name: item?.name || "N/A",
            college: item?.college?.name || "N/A",
            staff_name: item?.staff_name || "N/A",
            email: item?.email || "N/A",
            contact: item?.contact || "N/A",
            id: item?.id
        }
    })
})

onMounted(async () => {
    await departmentStore.getAllDepartments()
    tableData.value = departmentStore.departments
})
</script>

<style lang="scss" scoped></style>