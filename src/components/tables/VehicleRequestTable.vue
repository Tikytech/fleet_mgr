<template>
  <div class="rounded bg-white shadow">
    <div class="p-4 flex justify-between border-b">
      <h3 class="text-gray-700 font-medium">Vehicle Requests</h3>
      <Icon icon="heroicons:ellipsis-vertical" class="text-xl gray-text" />
    </div>

    <div class="tabl w-full px-4">
      <!-- table -->
      <table class="w-full text-sm">
        <!-- table data -->
        <template v-for="data in tableData" :key="data?.id">
          <tr class="hover:cursor-pointer hover:bg-slate-50 border-b border-dashed s">
            <td class="text-left pr-2 py-4 capitalize">
              <div class="bg-slate-100 shadow-md py-2 px-4 rounded-md text-center">
                <p class="text-xl text-gray-700 font-medium">{{ data?.date }}</p>
                <p class="gray-text">{{ data?.day }}</p>
              </div>
            </td>
            <td class="text-left pl-2 py-4 capitalize">
              <div class="">
                <p class="gray-text font-medium mb-1">{{ data?.college }}</p>
                <p class=" line-clamp-2">{{ data?.request }}</p>
              </div>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const tableData = [
  {
    date: 25,
    day: 'Wed',
    request: 'Engineering college requesting a vehicle for a field trip to a construction site',
    college: 'Engineering'
  },
  {
    date: 26,
    day: 'Thu',
    request: 'Business college requesting a vehicle for a conference in the city',
    college: 'Business'
  },
  {
    date: 27,
    day: 'Fri',
    request: 'Health Sciences college requesting a vehicle for a hospital visit',
    college: 'Health Sciences'
  },
  {
    date: 28,
    day: 'Sat',
    request: 'Arts and Humanities college requesting a vehicle for a museum visit',
    college: 'Arts and Humanities'
  }
]
</script>

<style lang="scss" scoped></style>
