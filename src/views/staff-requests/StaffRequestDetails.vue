<template>
    <div class="maximum-width py-6" v-if="requestStore.loading">Please wait...</div>
    <main v-else class="maximum-width py-6 ">

        <!-- back button -->
        <div class="mb-5 flex">
            <BackComponent />
        </div>

        <div class="flex justify-between gap-2 flex-wrap mb-10">
            <h3 class="font-bold text-xl md:text-2xl ">Vehicle Request - {{ request?.purpose }}</h3>

            <div class="flex gap-2">
                <ButtonComponent text="Approve Request" />
                <ButtonComponent text="Reject Request" type="danger" @click="showReject = true" />
            </div>
        </div>


        <div class="space-y-8">
            <!-- request details -->
            <RequestDetailsCard :request="request" :edit="true" />

            <!-- contact person -->


            <ContactPersonCard v-if="request?.staff" :contact="request.staff" />
            <!-- recurring request -->
            <!-- <div class="">
            <h3 class="text-lg font-medium border-b border-gray-400 pb-2">
              Recurring request details
            </h3>
          </div> -->
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
import { ref, onMounted } from 'vue';
import { useRequestStore } from '@/stores/requests'
import { useRoute } from 'vue-router';
import RequestDetailsCard from '@/components/custom/requests/RequestDetailsCard.vue';
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import ContactPersonCard from '@/components/custom/requests/ContactPersonCard.vue';

dayjs.extend(relativeTime)
const request = ref({})
const requestStore = useRequestStore()
const route = useRoute()

onMounted(async () => {
    request.value = await requestStore.getClientRequestById(route.params.id)
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