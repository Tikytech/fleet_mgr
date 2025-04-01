<template>
    <div class="maximum-width py-6" v-if="requestStore.loading">Please wait...</div>
    <main v-else class="maximum-width py-6">

        <!-- back button -->
        <div class="mb-5 flex">
            <BackComponent :link-object="{ name: 'StaffRequestList' }" />
        </div>

        <div class="flex justify-between gap-2 flex-wrap mb-10">
            <h3 class="font-bold text-xl md:text-2xl ">Vehicle Request - {{ request?.purpose }}</h3>
        </div>


        <div class="space-y-8">
            <!-- request details -->
            <div class="bg-white p-5 rounded-md w-full">
                <!-- head -->
                <div class="flex items-center justify-between border-b pb-2 mb-4">
                    <h3 class="font-semibold text-lg">Request details</h3>
                    <div class="cursor-pointer active:scale-90" title="Edit vehicle details" @click="showEdit = true">
                        <Icon icon="heroicons:pencil" class="text-2xl" />
                    </div>
                </div>

                <div className="text-[15px]">
                    <div>
                        <!-- college -->
                        <tr>
                            <td className="py-2 pr-3 font-semibold">College:</td>
                            <td className="text-gray-500">{{ request?.staff?.college?.name }}</td>
                        </tr>
                        <!-- purpose -->
                        <tr>
                            <td className="py-2 pr-3 font-semibold">Request purpose:</td>
                            <td className="text-gray-500">
                                {{ request?.purpose }}
                            </td>
                        </tr>
                        <!-- date -->
                        <tr>
                            <td className="py-2 pr-3 font-semibold">Trip date:</td>
                            <td className="text-gray-500">{{ dayjs(request?.return_date).format("MMM DD, YYYY") }}</td>
                        </tr>
                        <!-- date -->
                        <tr>
                            <td className="py-2 pr-3 font-semibold">Return date:</td>
                            <td className="text-gray-500">{{ dayjs(request?.return_date).format("MMM DD, YYYY") }}</td>
                        </tr>
                        <!-- Year of manufacture -->
                        <tr>
                            <td className="py-2 pr-3 font-semibold">Passengers:</td>
                            <td className="text-gray-500">{{ request?.no_of_passengers }}</td>
                        </tr>
                        <!-- Status -->
                        <tr>
                            <td className="py-2 pr-3 font-semibold">Date requested:</td>
                            <td className="text-gray-500">{{ dayjs(request?.createdAt).format("MMM DD, YYYY") }} ({{
                                dayjs(request?.createdAt).fromNow() }})</td>
                        </tr>
                        <!-- Status -->
                        <tr>
                            <td className="py-2 pr-3 font-semibold">Request status:</td>
                            <td className="text-gray-500">
                                <div class="w-fit">
                                    <BadgeComponent type="warning">{{ request?.status }}</BadgeComponent>
                                </div>
                            </td>
                        </tr>
                    </div>
                </div>
            </div>

            <!-- contact person -->
            <div class="bg-white p-5 rounded-md">
                <h3 class="text-lg font-semibold border-b  pb-2">Contact person</h3>

                <div className="text-[15px]">
                    <div>
                        <!-- contact person-->
                        <tr>
                            <td className="py-2 pr-3 font-semibold">Contact person name:</td>
                            <td className="text-gray-500">{{ request?.staff?.name }}</td>
                        </tr>
                        <!-- Contact person number -->
                        <tr>
                            <td className="py-2 pr-3 font-semibold">Contact person number:</td>
                            <td className="text-gray-500">{{ request?.staff?.contact }}</td>
                        </tr>
                        <!-- Contact person email -->
                        <tr>
                            <td className="py-2 pr-3 font-semibold">Contact person email:</td>
                            <td className="text-gray-500">{{ request?.staff?.email }}</td>
                        </tr>
                    </div>
                </div>
            </div>
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

import BadgeComponent from '@/components/ui/BadgeComponent.vue'
import { Icon } from '@iconify/vue'
import BackComponent from '@/components/ui/BackComponent.vue';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"
import { ref, onMounted } from 'vue';
import { useRequestStore } from '@/stores/requests'
import { useRoute } from 'vue-router';

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