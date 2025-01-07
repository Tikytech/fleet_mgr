<template>
    <div>
        <div>
            <TopNavigation :client="true" />
        </div>

        <main class="maximum-width">
            <div class="space-y-4">

                <ModalComponent :show-modal="showAdd" @close="showAdd = false" title="Request a vehicle" width="500px">
                    <RequestVehicleForm @close="showAdd = false" />
                </ModalComponent>

                <SearchAndButtonBar button-text="Request a vehicle" :filter="true" @add="showAdd = true" />

                <StaffRequestTable @add="showAdd = true" />
            </div>
        </main>
    </div>
</template>

<script setup>
import TopNavigation from '@/components/layout/topnav/TopNavigation.vue';
import RequestVehicleForm from '@/components/forms/RequestVehicleForm.vue';
import ModalComponent from '@/components/ui/ModalComponent.vue';
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
import { ref } from 'vue'
import StaffRequestTable from '@/components/tables/staff-request/StaffRequestTable.vue';

const showAdd = ref(false)

</script>

<style lang="scss" scoped></style>