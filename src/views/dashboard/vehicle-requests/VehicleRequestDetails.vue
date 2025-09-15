<template>
    <div class="" v-if="requestStore.loading">Loading...</div>
    <div v-else>
        <!-- prompts and modals -->
        <!-- reject request -->
        <ModalComponent :show-modal="showReject" @close="showReject = false" title="Reject request">
            <RejectVehicleRequestForm @close="showReject = false" />
        </ModalComponent>

        <!-- Approve request -->
        <ModalComponent :show-modal="showAssign" @close="showAssign = false" title="Assign vehicle" width="900px">
            <AssignVehicle @close="showAssign = false" :request-data="request" @refresh="refreshRequest"
                v-if="showAssign" />
        </ModalComponent>

        <!-- back button -->
        <div class="mb-5 flex">
            <BackComponent />
        </div>

        <div class="flex justify-between gap-2 flex-wrap mb-10">
            <h3 class="font-bold text-xl md:text-2xl ">Vehicle Request - {{ request?.purpose }}</h3>
            <div class="flex gap-2">
                <ButtonComponent text="Select Vehicles" @click="showAssign = true" />
                <!-- <ButtonComponent text="Reject Request" type="danger" @click="showReject = true" /> -->
            </div>
        </div>

        <!-- Driver vehicle assigned table will be here -->

        <div class="space-y-8">
            <RequestDetailsCard :request="request" :edit="false" />

            <ContactPersonCard :contact="request.staff" v-if="request?.staff" />

            <!-- assigned vehicle details -->
            <AssignedVehicleDetails v-if="request?.assignedVehicles" :assigned-vehicles="request.assignedVehicles"
                :return-date="request.return_date" :trip-date="request.trip_date" />



        </div>

        <!-- <div class="w-[30%]">
          <RequestApprovalCard />
        </div> -->
    </div>

</template>

<script setup>
// import RequestApprovalCard from '@/components/cards/RequestApprovalCard.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue';
import RejectVehicleRequestForm from '@/components/forms/RejectVehicleRequestForm.vue';
import BackComponent from '@/components/ui/BackComponent.vue';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import { ref, onMounted } from 'vue';
import { useRequestStore } from '@/stores/requests'
import { useRoute } from 'vue-router';
import RequestDetailsCard from '@/components/custom/requests/RequestDetailsCard.vue';
import ContactPersonCard from '@/components/custom/requests/ContactPersonCard.vue';
import AssignVehicle from '@/components/custom/requests/AssignVehicle.vue';
import AssignedVehicleDetails from '@/components/custom/requests/AssignedVehicleDetails.vue';

dayjs.extend(relativeTime)

const showReject = ref(false)
const showAssign = ref(false)
const request = ref({})
const requestStore = useRequestStore()
const route = useRoute()

const refreshRequest = async () => {
    request.value = await requestStore.getRequestById(route.params.id)
}

onMounted(async () => {
    request.value = await requestStore.getRequestById(route.params.id)
    console.log(route.params.id)
    console.log(request.value)
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