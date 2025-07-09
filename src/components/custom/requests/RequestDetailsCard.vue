<template>
    <!-- request details -->
    <div class="bg-white p-5 rounded-md w-full">
        <!-- head -->
        <div class="flex items-center justify-between border-b pb-2 mb-4">
            <h3 class="font-semibold text-lg">Request details</h3>
            <div v-if="edit" class="cursor-pointer active:scale-90" title="Edit vehicle details"
                @click="showEdit = true">
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
                <!-- Type -->
                <tr>
                    <td className="py-2 pr-3 font-semibold">Request type:</td>
                    <td className="text-gray-500">
                        <Icon icon="heroicons:check-badge-16-solid"
                            class="text-green-500 inline relative bottom-0.5 text-lg"
                            v-if="request?.type === 'official'" />
                        {{
                            request?.type?.charAt(0).toUpperCase() + request?.type?.slice(1) }}
                    </td>
                </tr>
                <!-- date -->
                <tr>
                    <td className="py-2 pr-3 font-semibold">Trip date:</td>
                    <td className="text-gray-500">{{ dayjs(request?.trip_date).format('MMM DD, YYYY [at] hh:mmA') }}
                    </td>
                </tr>
                <!-- date -->
                <tr>
                    <td className="py-2 pr-3 font-semibold">Return date:</td>
                    <td className="text-gray-500">{{ dayjs(request?.return_date).format('MMM DD, YYYY [at] hh:mmA') }}
                    </td>
                </tr>
                <!-- Passengers -->
                <tr>
                    <td className="py-2 pr-3 font-semibold">Passengers:</td>
                    <td className="text-gray-500">{{ request?.no_of_passengers }}</td>
                </tr>

                <!-- Vehicle type -->
                <tr>
                    <td className="py-2 pr-3 font-semibold">Vehicle type requested:</td>
                    <td className="text-gray-500">{{ request?.vehicle_type || 'N/A' }}</td>
                </tr>

                <!-- Date requested -->
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
                            <BadgeComponent :type="getRequestStatusColor(request?.status)">{{ request?.status }}
                            </BadgeComponent>
                        </div>
                    </td>
                </tr>
                <!-- Vehicle Assigned
                <tr>
                    <td className="py-2 pr-3 font-semibold">Vehicle assignment status:</td>
                    <td className="text-gray-500">
                        <div class="w-fit">
                            <BadgeComponent :type="getRequestStatusColor(request?.status)">{{ request?.vehicleAssigned ?
                                'Assigned' : 'Not assigned'
                                }}</BadgeComponent>
                        </div>
                    </td>
                </tr> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import BadgeComponent from '@/components/ui/BadgeComponent.vue'
import { getRequestStatusColor } from '@/utils/utils'
import { Icon } from '@iconify/vue'
import dayjs from 'dayjs'
import { ref } from 'vue'

const { request, edit } = defineProps({
    request: {
        type: Object,
        required: true
    },
    edit: {
        type: Boolean,
        default: false
    }
})

const showEdit = ref(false)
</script>

<style lang="scss" scoped></style>