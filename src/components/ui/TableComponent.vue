<template>
  <div class="rounded-sm bg-white shadow-md">
    <!-- search and button -->
    <div class="p-4 flex justify-between items-center">
      <div class="w-[350px]">
        <SearchBar type="border" placeholder="Search for" />
      </div>
      <div class="flex gap-2 items-center">
        <ButtonComponent text="Filter" icon="heroicons:adjustments-horizontal" type="info" />
        <ButtonComponent :text="add" icon="heroicons:plus" type="success" @click="$emit('add')" />
      </div>
    </div>

    <!-- table -->
    <div class="" v-if="tableData?.tableHead?.length > 0">
      <!-- table -->
      <table class="w-full text-sm">
        <tr class="text-sm font-semibold px-4 py-2 bg-slate-100 border-b">
          <th class="pl-4 w-2 text-left">
            <input type="checkbox" name="" id="" class="accent-blue-900" />
          </th>
          <template v-for="head in tableData?.tableHead" :key="head?.head">
            <th class="text-left px-4 py-2">{{ head?.title }}</th>
          </template>
        </tr>
        <tr class="border-b">
          <td class="pl-4 w-2 text-left">
            <input type="checkbox" name="" id="" class="accent-blue-900" />
          </td>
          <template v-for="data in tableData?.data" :key="data?.id">
            <td class="text-left px-4 py-4">{{ data?.value }}</td>
          </template>
          <td class="text-left px-4 py-4">
            <div class="flex gap-2">
              <Icon icon="heroicons:pencil" class="gray-text text-xl cursor-pointer" />
              <Icon icon="heroicons:trash" class="text-red-500 text-xl cursor-pointer" />
            </div>
          </td>
        </tr>
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

    <div class="flex justify-center py-10" v-else>
      <NoResults :buttonText="add" />
    </div>
  </div>
</template>

<script setup>
import SearchBar from '@/components/ui/SearchBar.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import NoResults from '@/components/ui/NoResults.vue'
import { Icon } from '@iconify/vue'

const { tableData, add } = defineProps({
  tableData: Object,
  add: String
})
</script>

<style lang="scss" scoped></style>
