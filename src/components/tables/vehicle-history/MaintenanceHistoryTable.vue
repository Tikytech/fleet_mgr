<template>
    <div class="rounded-sm bg-white shadow-md">
        <!-- table -->
        <div class="" v-if="tableData?.length > 0">
            <!-- table -->
            <table class="w-full text-sm">
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
                        <td class="text-left px-4 py-4 capitalize">{{ dayjs(data?.date).format('D MMM, YYYY') }}</td>
                        <td class="text-left px-4 py-4">{{ data?.mileage }}</td>
                        <td class="text-left px-4 py-4 capitalize">{{ data?.servicePerformed }}</td>
                        <td class="text-left px-4 py-4">{{ data?.serviceProvider }}</td>
                        <td class="text-left px-4 py-4">GHS{{ data?.cost }}</td>
                        <td class="text-left px-4 py-4">{{ data?.notes }}</td>
                        <td class="text-left px-4 py-4">
                            <div class="flex gap-2">
                                <router-link :to="{ name: 'RequestDetails', params: { id: data?.requestId } }">
                                    <Icon icon="heroicons:eye" class="gray-text text-xl cursor-pointer" />
                                </router-link>
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
import dayjs from 'dayjs';
//   import { useSupplierStore } from '@/stores/supplier'
//   import { onMounted, ref, watch } from 'vue'

//   const supplierStore = useSupplierStore()
//   const tableData = ref(supplierStore.suppliers)

//   watch(
//     () => supplierStore.suppliers,
//     () => {
//       console.log('seen')
//       tableData.value = supplierStore.suppliers
//     }
//   )

const tableHead = [
    { title: 'Date' },
    { title: 'Mileage' },
    { title: 'Service performed' },
    { title: 'Service provider' },
    { title: 'Cost' },
    { title: 'Notes' },
    { title: 'Action' },
]

const tableData = [
    {
        "date": "2024-11-15",
        "mileage": 15000,
        "servicePerformed": "Brake Pad Replacement",
        "serviceProvider": "AutoPro Garage",
        "cost": 200,
        "notes": "Front brake pads replaced, rotors checked and cleaned."
    },
    {
        "date": "2024-12-10",
        "mileage": 18000,
        "servicePerformed": "Battery Replacement",
        "serviceProvider": "Dealer Service Center",
        "cost": 150,
        "notes": "Replaced with a new AGM battery."
    },
    {
        "date": "2025-01-20",
        "mileage": 21000,
        "servicePerformed": "Air Filter Replacement",
        "serviceProvider": "QuickFix Auto",
        "cost": 50,
        "notes": "Cabin air filter replaced as part of routine maintenance."
    },
    {
        "date": "2025-02-15",
        "mileage": 23000,
        "servicePerformed": "Suspension Check",
        "serviceProvider": "AutoPro Garage",
        "cost": 120,
        "notes": "Minor adjustments to suspension system."
    },
    {
        "date": "2025-03-12",
        "mileage": 25000,
        "servicePerformed": "Wheel Alignment",
        "serviceProvider": "Speedy Align Center",
        "cost": 80,
        "notes": "Alignment corrected to avoid uneven tyre wear."
    }
]


//   onMounted(async () => {
//     await supplierStore.getAllSuppliers()
//     tableData.value = supplierStore.suppliers
//   })
</script>

<style lang="scss" scoped></style>