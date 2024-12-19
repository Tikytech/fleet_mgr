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
                        <td class="text-left px-4 py-4 capitalize">{{ data?.oilType }}</td>
                        <td class="text-left px-4 py-4 capitalize">{{ data?.servicePerformed }}</td>
                        <td class="text-left px-4 py-4">{{ data?.serviceStation }}</td>
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
    { title: 'Oil type' },
    { title: 'Service perfomed' },
    { title: 'Service station' },
    { title: 'Cost' },
    { title: 'Notes' },
    { title: 'Action' },
]

const tableData = [
    {
        date: "2024-09-01",
        mileage: 10000,
        oilType: "Synthetic 5W-30",
        servicePerformed: "Oil and Filter Change",
        serviceStation: "QuickLube Center",
        cost: 60,
        notes: "Oil filter replaced as part of the service."
    },
    {
        date: "2024-12-01",
        mileage: 15000,
        oilType: "Synthetic 5W-30",
        servicePerformed: "Oil and Filter Change",
        serviceStation: "AutoPro Garage",
        cost: 70,
        notes: "Routine service performed."
    },
    {
        date: "2025-03-01",
        mileage: 20000,
        oilType: "Synthetic 5W-30",
        servicePerformed: "Oil Change and Top-Up",
        serviceStation: "Dealer Service Center",
        cost: 80,
        notes: "Inspection included in the service."
    },
    {
        date: "2025-06-01",
        mileage: 25000,
        oilType: "Synthetic 10W-40",
        servicePerformed: "High-Mileage Oil Change",
        serviceStation: "QuickLube Center",
        cost: 90,
        notes: "Switched to high-mileage oil."
    },
    {
        date: "2025-09-01",
        mileage: 30000,
        oilType: "Synthetic 5W-30",
        servicePerformed: "Full-Service Oil Change",
        serviceStation: "AutoPro Garage",
        cost: 100,
        notes: "Included engine cleaning service."
    }
];



//   onMounted(async () => {
//     await supplierStore.getAllSuppliers()
//     tableData.value = supplierStore.suppliers
//   })
</script>

<style lang="scss" scoped></style>