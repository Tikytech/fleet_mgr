<template>
  <div class="" v-if="vehicleStore.loading">Please wait...</div>
  <main v-else>
    <!-- popups and modals -->
    <ModalComponent :show-modal="showEdit" @close="showEdit = false" title="Vehicle details" width="800px">
      <EditVehicleForm @close="showEdit = false" :vehicle="vehicleDetails" v-if="showEdit" />
    </ModalComponent>

    <!-- back button -->
    <div class="mb-5 flex">
      <BackComponent :link-object="{ name: 'VehiclesOverview' }" />
    </div>

    <!-- details -->
    <div class="space-y-8">
      <!-- vehicle information -->
      <div class="flex flex-col md:flex-row gap-4 lg:gap-10 bg-white p-5 rounded-md">
        <!-- image -->
        <div class="md:w-[50%] border">
          <img src="/images/vehicles/img-placeholder.jpg" alt="" class="w-full rounded-md" />
        </div>

        <div class="md:w-[50%]">
          <!-- head -->
          <div class="flex items-center justify-between">
            <h3 class="font-semibold text-xl sm:text-2xl">Vehicle Information</h3>
            <div class="cursor-pointer active:scale-90" title="Edit vehicle details" @click="showEdit = true">
              <Icon icon="heroicons:pencil" class="text-2xl" />
            </div>
          </div>

          <!-- icons -->
          <div class="text-gray-500 flex gap-3 text-sm my-4">
            <div class="flex gap-1 items-center">
              <Icon icon="material-symbols:person" class="text-2xl" /> <span>5</span>
            </div>
            <div class="flex gap-1 items-center">
              <Icon icon="material-symbols:settings" class="text-2xl" /> <span>Automatic</span>
            </div>
            <div class="flex gap-1 items-center">
              <Icon icon="ant-design:dashboard-twotone" class="text-2xl" />
              <span>Mileage / 13000km</span>
            </div>
            <div class="flex gap-1 items-center">
              <Icon icon="mdi:snowflake" class="text-2xl" /> <span>A/C</span>
            </div>
          </div>

          <!-- details -->
          <div className="text-[15px]">
            <div>
              <!-- vehicle id -->
              <tr>
                <td className="py-1.5 pr-3 font-semibold">Vehicle ID:</td>
                <td className="text-gray-500">{{ vehicleDetails.id }}</td>
              </tr>
              <!-- Vehicle model and make -->
              <tr>
                <td className="py-1.5 pr-3 font-semibold">Vehicle model and make:</td>
                <td className="text-gray-500">
                  {{ vehicleDetails.make }} {{ vehicleDetails.model }}
                </td>
              </tr>
              <!-- Registration No. -->
              <tr>
                <td className="py-1.5 pr-3 font-semibold">Registration No:</td>
                <td className="text-gray-500">{{ vehicleDetails.reg_no }}</td>
              </tr>
              <!-- Year of manufacture -->
              <tr>
                <td className="py-1.5 pr-3 font-semibold">Manufacture year:</td>
                <td className="text-gray-500">{{ vehicleDetails.year }}</td>
              </tr>
              <!-- Chassis -->
              <tr>
                <td className="py-1.5 pr-3 font-semibold">Chassis No:</td>
                <td className="text-gray-500">{{ vehicleDetails.chassis_no }}</td>
              </tr>
              <!-- Engine -->
              <tr>
                <td className="py-1.5 pr-3 font-semibold">Engine No:</td>
                <td className="text-gray-500">{{ vehicleDetails.engine_no }}</td>
              </tr>
              <!-- College -->
              <tr>
                <td className="py-1.5 pr-3 font-semibold">College:</td>
                <td className="text-gray-500">N/A</td>
              </tr>
              <!-- Status -->
              <tr>
                <td className="py-1.5 pr-3 font-semibold">Status:</td>
                <td className="text-gray-500">
                  <div class="w-fit">
                    <BadgeComponent type="warning">In Maintenance</BadgeComponent>
                  </div>
                </td>
              </tr>

            </div>
          </div>
        </div>
      </div>

      <!-- history -->
      <div class="bg-white rounded-md p-5">
        <div class="mb-5">
          <h3 class="font-semibold text-xl sm:text-2xl mb-1">Vehicle History</h3>
          <p class="text-sm text-gray-500">Checkout all the history of this vehicle</p>
        </div>

        <div class="">
          <NavigationTabs :tabs="tabLinks" />

          <div class="py-5">
            <router-view></router-view>
          </div>
        </div>

        <div class=""></div>
      </div>
    </div>
  </main>
</template>

<script setup>
import BackComponent from '@/components/ui/BackComponent.vue'
import BadgeComponent from '@/components/ui/BadgeComponent.vue'
// import VehicleHistoryTable from '@/components/tables/VehicleHistoryTable.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { onMounted, ref } from 'vue'
import { useVehicleStore } from '@/stores/vehicle'
import EditVehicleForm from '@/components/forms/EditVehicleForm.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import NavigationTabs from '@/components/ui/NavigationTabs.vue'

const { id } = defineProps({
  id: String
})
const vehicleStore = useVehicleStore()
const vehicleDetails = ref({})
const showEdit = ref(false)

const tabLinks = [
  { tab: 'Requests', link: 'RequestHistory' },
  { tab: 'Maintenance/Repairs', link: 'MaintenanceHistory' },
  { tab: 'Tyres/Batteries', link: 'AccessoriesHistory' },
  { tab: 'Insurance', link: 'InsuranceHistory' },
]

onMounted(async () => {
  await vehicleStore.getAllVehicles()
  vehicleDetails.value = vehicleStore.vehicles.find((vehicle) => vehicle.id == id)
})
</script>

<style scoped></style>
