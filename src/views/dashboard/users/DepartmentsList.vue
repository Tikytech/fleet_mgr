<template>
    <div class="space-y-4">
        <ModalComponent :show-modal="showAdd || showEdit" @close="() => {
            showAdd = false
            showEdit = false
        }" :title="showAdd ? 'Add Department' : showEdit ? 'Edit Department Details' : ''">
            <AddDepartmentForm @close="showAdd = false" v-if="showAdd" />
            <EditDepartmentForm @close="() => {
                showEdit = false
            }
            " v-if="showEdit" />
        </ModalComponent>

        <SearchAndButtonBar button-text="Add Department" :filter="true" @add="showAdd = true" />

        <TableComponent :exclude="['id']" :table-data="departmentTableData" :table-head="tableHead"
            @add="showAdd = true" :loading="departmentStore.loading" :actions="actions" />
    </div>
</template>

<script setup>
import ModalComponent from '@/components/ui/ModalComponent.vue'
import TableComponent from '@/components/tables/TableComponent.vue';
import AddDepartmentForm from '@/components/forms/AddDepartmentForm.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import EditDepartmentForm from '@/components/forms/EditDepartmentForm.vue'
import { useDepartmentStore } from '@/stores/department'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const showAdd = ref(false)
const showEdit = ref(false)
const departmentStore = useDepartmentStore()
const tableData = ref(departmentStore.departments)
const route = useRoute()

watch(
    () => departmentStore.departments,
    () => {
        console.log('seen')
        tableData.value = departmentStore.departments
    }
)

watch(
    () => route.query.edit,
    (value) => {
        if (value) {
            showEdit.value = true
        }
    }
)

const tableHead = [
    { title: 'Department ID' },
    { title: 'Department Name' },
    { title: 'College' },
    // { title: 'Head of Department' },
    // { title: 'Email' },
]

const departmentTableData = computed(() => {
    return tableData.value.map(item => {
        return {
            id: item?.id,
            departmentId: item?.id,
            name: item?.name || "N/A",
            college: item?.college?.name || "N/A",
            // staff_name: item?.staff_name || "N/A",
            // email: item?.email || "N/A",
            // contact: item?.contact || "N/A",
        }
    })
})

const actions = {
    // view: {
    //     link: 'CollegeDetails',
    //     param: 'collegeId',
    // },
    edit: {
        link: 'Departments',
        param: 'departmentId'
    }
}



onMounted(async () => {
    await departmentStore.getAllDepartments()
    tableData.value = departmentStore.departments
    if (route.query.edit) {
        showEdit.value = true
    }
})
</script>

<style lang="scss" scoped></style>