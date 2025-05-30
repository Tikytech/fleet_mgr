<template>
    <div class="">
        <form @submit.prevent="submitForm" class="p-4 space-y-4">
            <!-- Name -->
            <div class="">
                <label for="name" class="">Name</label>
                <input required class="input mt-1" type="text" id="name" placeholder="Enter driver name"
                    v-model="driverData.name" />
            </div>

            <!-- driver id -->
            <div class="">
                <label for="driver_id">Driver Id</label>
                <input required class="input mt-1" type="text" id="driver_id" placeholder="Enter driver ID"
                    v-model="driverData.driver_id" />
            </div>

            <!-- email -->
            <div class="">
                <label for="email">Driver email</label>
                <input required class="input mt-1" type="email" id="email" placeholder="Enter driver email"
                    v-model="driverData.email" />
            </div>

            <!-- Phone number -->
            <div class="">
                <label for="phone_number">Driver phone number</label>
                <input required class="input mt-1" type="number" id="phone_number"
                    placeholder="Enter driver phone number" v-model="driverData.contact" />
            </div>


            <div class="flex justify-end mt-6 gap-2">
                <ButtonComponent text="Close" type="border" @click="$emit('close')" type-button="button" />
                <ButtonComponent text="Add Driver" type="success" :loading="driverStore.loading" />
            </div>
        </form>
    </div>
</template>

<script setup>
// import { Icon } from '@iconify/vue'
import ButtonComponent from '../ui/ButtonComponent.vue'
import { useDriverStore } from '@/stores/driver'
import { ref } from 'vue'

const emit = defineEmits(['close'])
const driverStore = useDriverStore()

const driverData = ref({
    name: '',
    driver_id: '',
    email: '',
    contact: '',
})

async function submitForm() {
    console.log(driverData.value)
    // await driverStore.addDriver({ ...driverData.value, contact: '233' + driverData.value.contact })
    if (driverStore.isSuccessful) {
        await driverStore.getAllDriver()
        driverData.value = {
            name: '',
            driver_id: '',
            email: '',
            contact: '',
        }
        emit('close')
        console.log('emmiting')
    }
    emit('close') // remove this when driver endpoint is ready
}

</script>

<style lang="scss" scoped></style>