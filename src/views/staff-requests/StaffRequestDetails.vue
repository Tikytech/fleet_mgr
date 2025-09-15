<template>
    <div class="maximum-width py-6" v-if="requestStore.loading">Please wait...</div>
    <main v-else class="maximum-width py-6 ">

        <!-- prompts and modals -->
        <!-- reject request -->
        <ModalComponent :show-modal="showReject" @close="showReject = false" title="Reject request">
            <RejectVehicleRequestForm @close="showReject = false" @button-click="rejectRequest" :loading="loading" />
        </ModalComponent>

        <ModalComponent :show-modal="showCancel" @close="showCancel = false" title="Cancel request" width="400px">
            <PromptCard @close="showCancel = false" @button-click="cancelRequest"
                text="Are you sure you want to cancel this request?" :loading="loading" />
        </ModalComponent>

        <!-- back button -->
        <div class="mb-5 flex">
            <BackComponent />
        </div>

        <div class="flex justify-between gap-2 flex-wrap mb-10">
            <h3 class="font-bold text-xl md:text-2xl ">Vehicle Request - {{ request?.purpose }}</h3>

            <!-- buttons -->
            <div class="flex gap-2" v-if="userRole.level >= 2 && request.status === 'Pending'">
                <ButtonComponent text="Approve Request" @click="approveRequest" :loading="loading" />
                <ButtonComponent text="Reject Request" type="danger" @click="showReject = true" />
            </div>
        </div>


        <div class="space-y-8">
            <!-- request details -->
            <RequestDetailsCard :request="request" :edit="true" />

            <!-- contact person -->


            <ContactPersonCard v-if="request?.staff" :contact="request.staff" />

            <!-- assigned vehicle details -->
            <AssignedVehicleDetails v-if="request?.assignedVehicles" :assigned-vehicles="request.assignedVehicles"
                :return-date="request.return_date" :trip-date="request.trip_date" />

            <!-- Cancel Request -->
            <div class="flex justify-end" v-if="user?.id === request?.staff?.id && request.status === 'Pending'">
                <ButtonComponent text="Cancel Request" type="border" @click="showCancel = true" />
            </div>
        </div>

        <!-- <div class="w-[30%]">
          <RequestApprovalCard />
        </div> -->
    </main>

</template>

<script setup>

// import BadgeComponent from '@/components/ui/BadgeComponent.vue'
// import { Icon } from '@iconify/vue'
import BackComponent from '@/components/ui/BackComponent.vue';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import { ref, onMounted, onUnmounted } from 'vue';
import { useRequestStore } from '@/stores/requests'
import { useRoute } from 'vue-router';
import RequestDetailsCard from '@/components/custom/requests/RequestDetailsCard.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import ContactPersonCard from '@/components/custom/requests/ContactPersonCard.vue';
import AssignedVehicleDetails from '@/components/custom/requests/AssignedVehicleDetails.vue';
import { useAuthStore } from '@/stores/authentication';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import RejectVehicleRequestForm from '@/components/forms/RejectVehicleRequestForm.vue';
import PromptCard from '@/components/cards/PromptCard.vue';
import { useToastStore } from '@/stores/toast';
dayjs.extend(relativeTime)
const { user, userRole } = useAuthStore()
const request = ref({})
const requestStore = useRequestStore()
const route = useRoute()
const showReject = ref(false)
const showCancel = ref(false)
// const router = useRouter()
const loading = ref(false)
const toast = useToastStore()

async function approveRequest() {
    loading.value = true
    console.log('approve request')
    await requestStore.updateVehicleRequest({ status: 'Approved Pending Vehicle' }, route.params.id)
    if (requestStore.isSuccessful) {
        request.value = await requestStore.getRequestById(route.params.id, false)
        loading.value = false
        toast.addToastMessage('success', 'Success', 'Request approved successfully')
    }
    loading.value = false
}

async function cancelRequest() {
    loading.value = true
    console.log('cancel request')
    await requestStore.updateVehicleRequest({ status: 'Canceled' }, route.params.id)
    console.log(route.params.id)
    if (requestStore.isSuccessful) {
        request.value = await requestStore.getRequestById(route.params.id, false)
        loading.value = false
        showCancel.value = false
        toast.addToastMessage('success', 'Success', 'Request canceled successfully')
    }
    loading.value = false
}

async function rejectRequest() {
    loading.value = true
    console.log('reject request')
    await requestStore.updateVehicleRequest({ status: 'Rejected' }, route.params.id)
    if (requestStore.isSuccessful) {
        request.value = await requestStore.getRequestById(route.params.id, false)
        loading.value = false
        showReject.value = false
        toast.addToastMessage('success', 'Success', 'Request rejected successfully')
    }
    loading.value = false
}



onMounted(async () => {
    request.value = await requestStore.getRequestById(route.params.id)
    console.log(route.params.id)
    console.log(request.value)
    console.log(user)
})

onUnmounted(async () => {
    await requestStore.getAllRequests()
})

</script>

<style scoped>
td:first-child {
    max-width: 200px;
}

td:last-child {
    max-width: 600px;
}
</style>