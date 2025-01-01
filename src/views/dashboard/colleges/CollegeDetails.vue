<template>
    <div>

        <!-- back button -->
        <div class="mb-5 flex">
            <BackComponent :link-object="{ name: 'VehiclesOverview' }" />
        </div>


        <div class="space-y-8">
            <!-- College name -->
            <div class="bg-white p-5 rounded-md text-[15px] space-y-1">
                <h3 class="font-bold text-2xl mb-2">School of Agric</h3>
                <p><span class="font-semibold">Location:</span> Main campus</p>
                <p><span class="font-semibold">Contact person:</span> John Doe</p>
                <p><span class="font-semibold">Contact person no.:</span> 0249876578</p>
                <p><span class="font-semibold">Vehicles in use:</span> 5</p>
            </div>

            <!-- college details -->
            <div class="bg-white p-5 rounded-md space-y-4">
                <div class="mb-5">
                    <h3 class="font-semibold text-2xl mb-1">Trips and Vehicle History</h3>
                    <p class="text-sm text-gray-500">Current and past trips</p>
                </div>

                <SearchAndButtonBar :filter="true" />

                <CollegeVehicleHistoryTable />
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
import CollegeVehicleHistoryTable from '@/components/tables/CollegeVehicleHistoryTable.vue';
import StaffTable from '@/components/tables/StaffTable.vue';
import BackComponent from '@/components/ui/BackComponent.vue';
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue';
</script>

<style lang="scss" scoped></style>