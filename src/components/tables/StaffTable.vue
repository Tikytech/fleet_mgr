<template>
  <div class="rounded-sm bg-white shadow-md">
    <!-- table -->
    <div class="" v-if="tableData?.length > 0">
      <!-- table -->
      <table class="w-full text-sm">
        <!-- thead -->
        <tr class="text-sm font-semibold px-4 py-2 bg-slate-100 border-b">
          <th class="pl-4 w-2 text-left">
            <input type="checkbox" name="" id="" class="accent-blue-900" />
          </th>
          <template v-for="head in tableHead" :key="head?.head">
            <th class="text-left px-4 py-4">{{ head?.title }}</th>
          </template>
        </tr>

        <!-- table data -->
        <template v-for="data in tableData" :key="data?.id">
          <tr class="border-b">
            <td class="pl-4 w-2 text-left">
              <input type="checkbox" name="" id="" class="accent-blue-900" />
            </td>
            <td class="text-left px-4 py-4 capitalize">{{ data?.name }}</td>
            <td class="text-left px-4 py-4">{{ data?.staff_no }}</td>
            <td class="text-left px-4 py-4 capitalize">{{ data?.collegeId ?? 'N/A' }}</td>
            <td class="text-left px-4 py-4">{{ data?.isDriver ? 'Yes' : 'No' }}</td>
            <td class="text-left px-4 py-4">
              <div class="flex gap-2">
                <Icon icon="heroicons:pencil" class="gray-text text-xl cursor-pointer" />
                <Icon icon="heroicons:trash" class="text-red-500 text-xl cursor-pointer" />
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

    <div class="flex justify-center py-10" v-else-if="staffStore.loading">
      <div class="">
        <Icon icon="line-md:loading-loop" class="text-6xl text-cyan-800 mx-auto" />
        <p>Fetching data...</p>
      </div>
    </div>

    <div class="flex justify-center py-10" v-else>
      <NoResults>
        <ButtonComponent
          text="Add Staff"
          icon="heroicons:plus"
          type="success"
          @click="$emit('add')"
        />
      </NoResults>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import NoResults from '@/components/ui/NoResults.vue'
import { Icon } from '@iconify/vue'
import { useStaffStore } from '@/stores/staff'
import { onMounted, ref, watch } from 'vue'

const staffStore = useStaffStore()
const tableData = ref(staffStore.staff)

watch(
  () => staffStore.staff,
  () => {
    console.log('seen')
    tableData.value = staffStore.staff
  }
)

const tableHead = [
  { title: 'Name' },
  { title: 'Staff Id' },
  { title: 'College' },
  { title: 'Driver' },
  { title: 'Action' }
]

onMounted(async () => {
  await staffStore.getAllStaff()
  tableData.value = staffStore.staff
})
</script>

<style lang="scss" scoped></style>
