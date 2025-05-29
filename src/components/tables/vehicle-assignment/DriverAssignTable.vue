<template>
    <div class="rounded-sm bg-white shadow-md">
        <!-- table -->
        <div class="" v-if="tableData?.length > 0">
            <!-- table -->
            <div class="overflow-x-auto">
                <table class="text-sm min-w-[800px] w-full">
                    <!-- thead -->
                    <tr class="text-sm font-semibold px-4 py-2 bg-slate-100 border-b">
                        <!-- <th class="pl-4 w-2 text-left">
              <input type="checkbox" name="" id="" class="accent-blue-900" />
            </th> -->
                        <template v-for="head in tableHead" :key="head?.head">
                            <th class="text-left px-4 py-4">{{ head?.title }}</th>
                        </template>
                    </tr>

                    <!-- table data -->
                    <template v-for="data in tableData" :key="data?.id">
                        <tr class="border-b">
                            <!-- <td class="pl-4 w-2 text-left">
                <input type="checkbox" name="" id="" class="accent-blue-900" />
              </td> -->
                            <td class="text-left px-4 py-4 capitalize">{{ data?.driver }}</td>
                            <td class="text-left px-4 py-4">{{ data?.phoneNo }}</td>
                            <td class="text-left px-4 py-4">
                                <BadgeComponent class="w-fit text-xs font-semibold" :type="getStatus(data?.status)">
                                    {{ data?.status }}
                                </BadgeComponent>
                            </td>
                            <td class="text-left px-4 py-4">
                                <button @click="$emit('select', data)" v-if="selectedDriver?.id === data?.id"
                                    class="text-xs font-semibold bg-cyan-500 hover:bg-cyan-600 rounded px-3 py-1 text-white">
                                    Selected
                                </button>
                                <button v-else-if="selectedDrivers?.some(item => item.id === data?.id)"
                                    class="text-xs font-semibold bg-red-400 pointer-events-none rounded px-3 py-1 text-white"
                                    disabled>
                                    Already Assigned
                                </button>
                                <button @click="$emit('select', data)" v-else
                                    class="text-xs font-semibold bg-green-500 hover:bg-green-600 rounded px-3 py-1 text-white">
                                    Assign
                                </button>
                            </td>
                        </tr>
                    </template>
                </table>
            </div>

            <!-- Pagination -->
            <div class="flex justify-end p-4 text-sm">
                <div class="flex items-center gap-2">
                    <p class="gray-text">Previous</p>
                    <div class="px-3 py-1.5 bg-cyan-500 rounded-md text-white">1</div>
                    <p class="text-cyan-500">Next</p>
                </div>
            </div>
        </div>

        <div class="flex justify-center py-10" v-else-if="supplierStore.loading">
            <div class="">
                <Icon icon="line-md:loading-loop" class="text-6xl text-cyan-800 mx-auto" />
                <p>Fetching data...</p>
            </div>
        </div>

        <div class="flex justify-center py-10" v-else>
            <NoResults>
                <ButtonComponent text="Add Supplier" icon="heroicons:plus" type="success" @click="$emit('add')" />
            </NoResults>
        </div>
    </div>
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import NoResults from '@/components/ui/NoResults.vue'
import { Icon } from '@iconify/vue'
import BadgeComponent from '@/components/ui/BadgeComponent.vue';

const { selectedDriver, selectedDrivers } = defineProps({
    selectedDriver: {
        type: Object,
        required: true
    },
    selectedDrivers: {
        type: Array,
        required: true
    }
})

function getStatus(status) {
    switch (status.toLowerCase()) {
        case 'free':
            return 'success';
        case 'busy':
            return 'warning';
        default:
            return '';
    }
}

const tableHead = [
    { title: 'Driver' },
    { title: 'Phone no.' },
    { title: 'Status' },
    { title: 'Action' }
]

const tableData = [
    {
        id: 1,
        driver: 'John Doe',
        phoneNo: '123-456-7890',
        status: 'Busy',
    },
    {
        id: 2,
        driver: 'Jane Smith',
        phoneNo: '234-567-8901',
        status: 'Free',
    },
    {
        id: 3,
        driver: 'Robert Johnson',
        phoneNo: '345-678-9012',
        status: 'Free',
    },
    {
        id: 4,
        driver: 'Emily Davis',
        phoneNo: '456-789-0123',
        status: 'Busy',
    },
    {
        id: 5,
        driver: 'Michael Brown',
        phoneNo: '567-890-1234',
        status: 'Free',
    },
];



//   onMounted(async () => {
//     await supplierStore.getAllSuppliers()
//     tableData.value = supplierStore.suppliers
//   })
</script>

<style lang="scss" scoped></style>