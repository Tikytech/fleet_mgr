<template>
    <div class="">
        <form @submit.prevent="submitForm" class="p-4 space-y-4">

            <!-- Staff -->
            <div class="">
                <label for="name" class="mb-1 inline-block">Select staff</label>
                <!-- <input required class="input mt-1" type="text" id="name" placeholder="Enter user name"
                    v-model="userData.name" /> -->
                <SearchSelect :options="fieldOptions" @update-selected="handleSelect" />
            </div>

            <!-- email -->
            <div class="">
                <label for="email">Email</label>
                <input required class="input mt-1" type="email" id="email" placeholder="Enter user email"
                    v-model="userData.email" />
            </div>

            <!-- Password -->
            <div class="">
                <label for="password">Password</label>
                <input required class="input mt-1" type="password" id="password" placeholder="Enter user password"
                    v-model="userData.password" />
            </div>

            <div class="flex justify-end mt-6 gap-2">
                <ButtonComponent text="Close" type="border" @click="$emit('close')" type-button="button" />
                <ButtonComponent text="Add User" type="success" :loading="userStore.loading" />
            </div>
        </form>
    </div>
</template>

<script setup>
import ButtonComponent from '../ui/ButtonComponent.vue'
import { useUserStore } from '@/stores/user'
import { ref, onMounted } from 'vue'
import SearchSelect from '../ui/SearchSelect.vue'
import { useStaffStore } from '@/stores/staff'

const emit = defineEmits(['close'])
const userStore = useUserStore()
const staffStore = useStaffStore()
const userData = ref({
    email: '',
    password: '',
})
const selectedStaffId = ref(null)

async function submitForm() {
    console.log(userData.value)
    await userStore.addUser({ ...userData.value, staffId: selectedStaffId.value })
    if (userStore.isSuccessful) {
        await userStore.getAllUsers()
        userData.value = {
            email: '',
            password: '',
        }
        emit('close')
        console.log('emmiting')
    }
}

const fieldOptions = staffStore.staff.map(item => { return { ...item, label: item.name } })

function handleSelect(option) {
    console.log('Selected field:', option)
    selectedStaffId.value = option?.id
}

onMounted(async () => {
    if (staffStore.staff.length === 0) {
        await staffStore.getAllStaff()
    }
})

</script>

<style lang="scss" scoped></style>