<template>
    <div class="space-y-4">
        <ModalComponent :show-modal="showAdd || showEdit" @close="() => {
            showAdd = false
            showEdit = false
        }
        " :title="showAdd ? 'Add College' : showEdit ? 'Edit College Details' : ''" width="500px">
            <AddCollegeForm @close="showAdd = false" v-if="showAdd" />
            <EditCollegeForm @close="() => {
                // $router.push({ name: 'Colleges' })
                showEdit = false
            }
            " v-if="showEdit" />
        </ModalComponent>

        <!-- search and button -->
        <SearchAndButtonBar button-text="Add College" @add="showAdd = true" :filter="true" />

        <!-- <CollegeTable @add="showAdd = true" /> -->

        <TableComponent :table-data="tableData" :table-head="tableHead" :loading="collegeStore.loading"
            :actions="actions" @add="showAdd = true" />

    </div>
</template>

<script setup>
// import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
// import NoResults from '@/components/ui/NoResults.vue'
// import CollegeCard from '@/components/cards/CollegeCard.vue'
import AddCollegeForm from '@/components/forms/AddCollegeForm.vue'
import EditCollegeForm from '@/components/forms/EditCollegeForm.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import { ref, watch, onMounted, computed } from 'vue'
import { useCollegeStore } from '@/stores/college'
// import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'
// import CollegeTable from '@/components/tables/CollegeTable.vue'
import TableComponent from '@/components/tables/TableComponent.vue'

const showAdd = ref(false)
const showEdit = ref(false)
const collegeStore = useCollegeStore()
const route = useRoute()
const colleges = ref(collegeStore.colleges)

watch(
    () => collegeStore.colleges,
    () => {
        console.log('seen')
        colleges.value = collegeStore.colleges
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

const tableData = computed(() => {
    return colleges.value.map((item, index) => {
        return {
            collegeId: item?.id,
            collegeName: item?.name,
            location: collegeData[index % 4]?.location,
            contactPerson: collegeData[index % 4]?.contactPerson,
            contactNumber: collegeData[index % 4]?.contactNumber,
            noOfVehicles: collegeData[index % 4]?.numberOfVehiclesAssigned,
        }
    })
})

const tableHead = [
    { title: 'College ID' },
    { title: 'College Name' },
    { title: 'Location' },
    { title: 'Contact Person' },
    { title: 'Contact Number' },
    { title: 'No of Vehicles Assigned' },
]

const actions = {
    view: {
        link: 'CollegeDetails',
        param: 'collegeId',
    },
    edit: {
        link: 'CollegeList',
        param: 'collegeId'
    }
}

const collegeData = [
    {
        collegeId: '001',
        collegeName: 'Computer Science',
        location: 'Main Campus',
        contactPerson: 'Alice Johnson',
        contactNumber: '123-456-7890',
        email: 'alice.johnson@university.edu',
        numberOfVehiclesAssigned: 5
    },
    {
        collegeId: '002',
        collegeName: 'Biology Department',
        location: 'Science Building',
        contactPerson: 'Bob Smith',
        contactNumber: '234-567-8901',
        email: 'bob.smith@university.edu',
        numberOfVehiclesAssigned: 3
    },
    {
        collegeId: '003',
        collegeName: 'Sports Department',
        location: 'Athletic Center',
        contactPerson: 'Charlie Brown',
        contactNumber: '345-678-9012',
        email: 'charlie.brown@university.edu',
        numberOfVehiclesAssigned: 4
    },
    {
        collegeId: '004',
        collegeName: 'History Department',
        location: 'Humanities Building',
        contactPerson: 'Diana Prince',
        contactNumber: '456-789-0123',
        email: 'diana.prince@university.edu',
        numberOfVehiclesAssigned: 2
    }
]

onMounted(async () => {
    await collegeStore.getAllColleges()
    colleges.value = collegeStore.colleges
    if (route.query.edit) {
        showEdit.value = true
    }
})
</script>

<style scoped></style>