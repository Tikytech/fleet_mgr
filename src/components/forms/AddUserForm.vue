<template>
    <div class="">
        <form @submit.prevent="submitForm" class="p-4 space-y-4">

            <!-- Name -->
            <div class="">
                <label for="name" class="">Name</label>
                <input required class="input mt-1" type="text" id="name" placeholder="Enter user name"
                    v-model="userData.name" />
            </div>

            <!-- email -->
            <div class="">
                <label for="email">Email</label>
                <input required class="input mt-1" type="email" id="email" placeholder="Enter user email"
                    v-model="userData.email" />
            </div>

            <!-- Phone number -->
            <div class="">
                <label for="user_id">Phone number</label>
                <input required class="input mt-1" type="number" id="user_id" placeholder="Enter user phone number"
                    v-model="userData.contact" />
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
import { ref } from 'vue'

const emit = defineEmits(['close'])
const userStore = useUserStore()
const userData = ref({
    name: '',
    email: '',
    contact: '',
})

async function submitForm() {
    console.log(userData.value)
    await userStore.addUser({ ...userData.value, collegeId: Number(userData.value.collegeId), contact: '233' + userData.value.contact })
    if (userStore.isSuccessful) {
        await userStore.getAllUser()
        userData.value = {
            name: '',
            email: '',
            contact: '',
        }
        emit('close')
        console.log('emmiting')
    }
}

</script>

<style lang="scss" scoped></style>