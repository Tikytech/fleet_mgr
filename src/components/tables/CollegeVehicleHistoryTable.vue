<template>
    <div class="rounded-sm bg-white shadow-md">
        <!-- table -->
        <div class="" v-if="tableData?.length > 0">
            <!-- table -->
            <table class="w-full text-sm">
                <!-- thead -->
                <tr class="text-sm font-semibold px-4 py-2 bg-slate-100 border-b">
                    <template v-for="head in tableHead" :key="head?.head">
                        <th class="text-left px-4 py-4">{{ head?.title }}</th>
                    </template>
                </tr>

                <!-- table data -->
                <template v-for="data in tableData" :key="data?.id">
                    <tr class="border-b">
                        <td class="text-left px-4 py-4 capitalize">{{ data?.tripId }}</td>
                        <td class="text-left px-4 py-4">{{ data?.date }}</td>
                        <td class="text-left px-4 py-4 capitalize">{{ data?.driver }}</td>
                        <!-- <td class="text-left px-4 py-4">{{ data?.department }}</td> -->
                        <td class="text-left px-4 py-4">{{ data?.purpose }}</td>
                        <td class="text-left px-4 py-4">{{ data?.passengers }}</td>
                        <td>
                            <BadgeComponent class="w-fit text-xs font-semibold" :type="getStatus(data?.tripStatus)">{{
                                data?.tripStatus }}</BadgeComponent>
                        </td>
                        <td class="text-left px-4 py-4">
                            <div class="flex gap-2">
                                <Icon icon="heroicons:eye" class="gray-text text-xl cursor-pointer" />
                                <!-- <Icon icon="heroicons:trash" class="text-red-500 text-xl cursor-pointer" /> -->
                            </div>
                        </td>
                    </tr>
                </template>
            </table>

            <!-- Pagination -->
            <div class="flex justify-end p-4 text-sm">
                <div class="flex items-center gap-2">
                    <p class="gray-text">Previous</p>
                    <div class="px-3 py-1.5 bg-cyan-500 rounded-md text-white">1</div>
                    <p class="text-cyan-500">Next</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import BadgeComponent from '../ui/BadgeComponent.vue';
// import { useStaffStore } from '@/stores/staff'
// import { ref } from 'vue'

// const staffStore = useStaffStore()
// const tableData = ref(staffStore.staff)

//   watch(
//     () => staffStore.staff,
//     () => {
//       console.log('seen')
//       tableData.value = staffStore.staff
//     }
//   )

const tableHead = [
    { title: 'Trip ID' },
    { title: 'Date' },
    { title: 'Driver' },
    // { title: 'Department' },
    { title: 'Purpose' },
    { title: 'Passengers' },
    { title: 'Trip status' },
    { title: 'Actions' }
]

const tableData = [
    {
        tripId: '001',
        date: '2024-09-20',
        driver: 'John Doe',
        department: 'Computer Science Department',
        purpose: 'Pickup students for morning class',
        passengers: 18,
        tripStatus: 'active'
    },

    {
        tripId: '002',
        date: '2024-09-21',
        driver: 'Jane Smith',
        department: 'Biology Department',
        purpose: 'Drop off students after afternoon lab session',
        passengers: 15,
        tripStatus: 'abandoned'
    },

    {
        tripId: '003',
        date: '2024-09-22',
        driver: 'Mark Johnson',
        department: 'Sports Department',
        purpose: 'Special trip for inter-college sports event',
        passengers: 20,
        tripStatus: 'completed'
    },

    {
        tripId: '004',
        date: '2024-09-23',
        driver: 'John Doe',
        department: 'History Department',

        purpose: 'Field trip to historical museum',

        passengers: 22,
        tripStatus: 'completed'
    }

]

function getStatus(status) {
    switch (status.toLowerCase()) {
        case 'active':
            return 'success';
        case 'completed':
            return 'info';
        case 'abandoned':
            return 'danger';
        default:
            return '';
    }
}

//   onMounted(async () => {
//     await staffStore.getAllStaff()
//     tableData.value = staffStore.staff
//   })
</script>

<style lang="scss" scoped></style>