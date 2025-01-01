<template>
    <div>

        <!-- back button -->
        <div class="mb-5 flex">
            <BackComponent :link-object="{ name: 'VehiclesOverview' }" />
        </div>

        <!-- College name -->
        <div class="">
            <h3 class="font-bold text-2xl mb-10">School of Agric</h3>
        </div>

        <div class="space-y-8">
            <!-- college details -->
            <div class="bg-white p-5 rounded-md">
                <div class="mb-5">
                    <h3 class="font-semibold text-2xl mb-1">Vehicle History</h3>
                    <p class="text-sm text-gray-500">Checkout all the history of this vehicle</p>
                </div>
            </div>

            <!-- staff in college -->
            <div class="bg-white p-5 rounded-md">
                <div class="mb-5">
                    <h3 class="font-semibold text-2xl mb-1">College Staff</h3>
                    <p class="text-sm text-gray-500">All the staff in this college</p>
                </div>

                <div class="">
                    <StaffTable />
                </div>
            </div>

            <!-- Vehicles in college -->

        </div>

    </div>
</template>

<script setup>
import StaffTable from '@/components/tables/StaffTable.vue';
import BackComponent from '@/components/ui/BackComponent.vue';
</script>

<style lang="scss" scoped></style>