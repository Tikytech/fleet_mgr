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
                            <td class="text-left px-4 py-4 capitalize">{{ data?.vehicle }}</td>
                            <td class="text-left px-4 py-4">{{ data?.capacity }}</td>
                            <td class="text-left px-4 py-4 capitalize">{{ data?.regNo }}</td>
                            <td class="text-left px-4 py-4">
                                <BadgeComponent class="w-fit text-xs font-semibold" :type="getStatus(data?.status)">
                                    {{ data?.status }}
                                </BadgeComponent>
                            </td>
                            <td class="text-left px-4 py-4">
                                <button @click="$emit('select', data)"
                                    class="text-xs font-semibold bg-green-500 hover:bg-green-600 rounded px-3 py-1 text-white"
                                    :class="{ '!bg-cyan-500 !hover:bg-cyan-600  ': selectedVehicle?.id === data?.id }">
                                    {{ selectedVehicle?.id === data?.id ? 'Selected' : 'Select' }}
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

const { selectedVehicle } = defineProps({
    selectedVehicle: {
        type: Object,
        required: true
    }
})

function getStatus(status) {
    switch (status.toLowerCase()) {
        case 'active':
            return 'success';
        case 'in maint.':
            return 'warning';
        case 'inactive':
            return 'danger';
        default:
            return '';
    }
}

const tableHead = [
    { title: 'Vehicle' },
    { title: 'Capacity' },
    { title: 'Reg. No.' },
    { title: 'Status' },
    { title: 'Action' }
]

const tableData = [
    {
        id: 1,
        vehicle: 'Toyota Corolla',
        capacity: 5,
        regNo: 'ABC-1234',
        status: 'Active',
    },
    {
        id: 2,
        vehicle: 'Honda Civic',
        capacity: 4,
        regNo: 'DEF-5678',
        status: 'In Maint.',
    },
    {
        id: 3,
        vehicle: 'Ford Explorer',
        capacity: 7,
        regNo: 'GHI-9012',
        status: 'Free',
    },
    {
        id: 4,
        vehicle: 'Chevrolet Impala',
        capacity: 5,
        regNo: 'JKL-3456',
        status: 'Inactive',
    },
    {
        id: 5,
        vehicle: 'Nissan Altima',
        capacity: 5,
        regNo: 'MNO-7890',
        status: 'Active',
    },
    {
        id: 6,
        vehicle: 'Hyundai Elantra',
        capacity: 4,
        regNo: 'PQR-1123',
        status: 'Free',
    },
    {
        id: 7,
        vehicle: 'Subaru Outback',
        capacity: 6,
        regNo: 'STU-4456',
        status: 'In Maint.',
    },
];


//   onMounted(async () => {
//     await supplierStore.getAllSuppliers()
//     tableData.value = supplierStore.suppliers
//   })
</script>

<style lang="scss" scoped></style>