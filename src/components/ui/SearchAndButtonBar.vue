<template>
  <div class="p-4 flex justify-between items-center bg-white rounded-md">
    <div class="w-[350px]">
      <SearchBar type="border" placeholder="Search for" />
    </div>
    <div class="flex gap-2 items-center">
      <ButtonComponent
        text="Filters"
        icon="heroicons:adjustments-horizontal"
        type="info"
        v-if="filter"
      />
      <ButtonComponent
        :text="buttonText"
        icon="heroicons:plus"
        type="success"
        @click="$emit('add')"
      />
    </div>
  </div>
</template>

<script setup>
import SearchBar from '@/components/ui/SearchBar.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'

const { buttonText, filter } = defineProps({
  buttonText: String,
  filter: Boolean
})
</script>

<style lang="scss" scoped></style>
