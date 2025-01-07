<template>
  <div class="p-4 flex sm:flex-row flex-col justify-between gap-2 sm:items-center bg-white rounded-md shadow">
    <div class="sm:w-[350px]">
      <SearchBar type="border" placeholder="Search for" />
    </div>
    <div class="flex flex-wrap gap-2 items-center self-end">
      <ButtonComponent text="Filters" icon="heroicons:adjustments-horizontal" type="info" v-if="filter" />
      <ButtonComponent :text="buttonText" icon="heroicons:plus" type="success" @buttonClick="$emit('add')"
        :dropdown="dropdown" v-if="buttonText" />
    </div>
  </div>
</template>

<script setup>
import SearchBar from '@/components/ui/SearchBar.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'

const { buttonText, filter } = defineProps({
  buttonText: String,
  filter: Boolean,
  dropdown: Object
})
</script>

<style lang="scss" scoped></style>
