<template>
  <div class="space-y-4">
    <SearchAndButtonBar button-text="Request a vehicle" :filter="true" />

    <RequestTable />
  </div>
</template>

<script setup>
import RequestTable from '@/components/tables/RequestTable.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
</script>

<style lang="scss" scoped></style>
