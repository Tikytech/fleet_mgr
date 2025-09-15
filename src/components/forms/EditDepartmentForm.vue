<template>
    <div class="">
        <form @submit.prevent="submitForm" class="p-4 space-y-4">
            <!-- Department Name -->
            <div class="">
                <label for="name" class="">Department Name</label>
                <input required class="input mt-1" type="text" id="name" placeholder="Enter department name"
                    v-model="departmentData.name" />
            </div>

            <!-- College -->
            <div class="">
                <label for="college">College</label>
                <select name="college" class="input mt-1" id="college" v-model="departmentData.collegeId">
                    <option value="" disabled>Select college</option>
                    <template v-for="college in colleges" :key="college.id">
                        <option :value="college.id">{{ college.name }}</option>
                    </template>
                </select>
                <div v-if="colleges.length === 0">
                    <p class="text-red-500 text-sm text-center mt-1">No colleges found. Add a college first.</p>
                </div>
            </div>

            <!-- Name of Department Head -->
            <!-- <div class="">
                <label for="staff_name">Name of Department Head</label>
                <input required class="input mt-1" type="text" id="staff_name"
                    placeholder="Enter name of department head" v-model="departmentData.staff_name" />
            </div> -->

            <!-- ID of Department Head -->
            <!-- <div class="">
                <label for="staff_no">ID of Department Head</label>
                <input required class="input mt-1" type="text" id="staff_no" placeholder="Enter ID of department head"
                    v-model="departmentData.staff_no" />
            </div> -->

            <!-- Email of Department Head -->
            <!-- <div class="">
                <label for="email">Email of Department Head</label>
                <input required class="input mt-1" type="email" id="email" placeholder="Enter email of department head"
                    v-model="departmentData.email" />
            </div> -->

            <!-- Contact of Department Head -->
            <!-- <div class="">
                <label for="contact">Contact of Department Head</label>
                <input required class="input mt-1" type="text" id="contact"
                    placeholder="Enter contact of department head" v-model="departmentData.contact" />
            </div> -->

            <div class="flex justify-end mt-6 gap-2">
                <ButtonComponent text="Close" type="border" @click="closeForm" type-button="button" />
                <ButtonComponent text="Add Department" type="success" :loading="departmentStore.updating" />
            </div>
        </form>
    </div>
</template>

<script setup>
import ButtonComponent from '../ui/ButtonComponent.vue'
import { useDepartmentStore } from '@/stores/department'
import { ref, onBeforeMount } from 'vue'
// import { useToastStore } from '@/stores/toast'
// import { validateContact } from '@/utils/utils'
import { useCollegeStore } from '@/stores/college'
import { useRoute, useRouter } from 'vue-router'

const emit = defineEmits(['close'])
const departmentStore = useDepartmentStore()
// const toastStore = useToastStore()
const collegeStore = useCollegeStore()
const route = useRoute()
const router = useRouter()

const props = defineProps({
    collegeId: {
        type: Number,
    }
})

const colleges = ref([])

const departmentData = ref({
    name: '',
    collegeId: props.collegeId || '',
    // staff_name: '',
    // staff_no: '',
    // email: '',
    // contact: '',
})

function closeForm() {
    emit('close')
    router.push({ name: 'Departments' })
}

async function submitForm() {
    // console.log(departmentData.value)
    // const contact = validateContact(departmentData.value.contact)
    // if (!contact) {
    //     toastStore.addToastMessage('danger', 'Error', 'Invalid contact number format')
    //     return
    // }
    await departmentStore.createDepartment({
        ...departmentData.value,
        // collegeId: props.collegeId,
        // contact
    })
    if (departmentStore.isSuccessful) {
        await departmentStore.getAllDepartments()
        departmentData.value = {
            name: '',
            collegeId: props.collegeId,
            // staff_name: '',
            // staff_no: '',
            // email: '',
            // contact: '',
        }
        emit('close')
        console.log('emmiting')
        closeForm()
    }
}



onBeforeMount(async () => {
    await collegeStore.getAllColleges()
    const temp = departmentStore.findDepartment(route.query.edit)
    console.log(temp)
    departmentData.value.name = temp?.name
    departmentData.value.collegeId = temp?.collegeId
    colleges.value = collegeStore.colleges
})
</script>

<style lang="scss" scoped></style>