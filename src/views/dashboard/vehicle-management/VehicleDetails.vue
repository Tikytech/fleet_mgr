<template>
  <div>
    <!-- popups and modals -->
    <ModalComponent :show-modal="showEdit" @close="showEdit = false">
      <EditVehicleForm @close="showEdit = false" />
    </ModalComponent>

    <!-- back button -->
    <div class="mb-5 flex">
      <BackComponent />
    </div>

    <!-- details -->
    <div class="space-y-10">
      <!-- vehicle information -->
      <div class="flex gap-10">
        <!-- image -->
        <div class="w-[40%]">
          <img src="/images/vehicles/img-placeholder.jpg" alt="" class="w-full rounded-md" />
        </div>

        <div class="w-[60%]">
          <!-- head -->
          <div class="flex items-center justify-between">
            <h3 class="font-semibold text-2xl">Vehicle Information</h3>
            <!-- <div class="">
              <ButtonComponent text="Edit"></ButtonComponent>
            </div> -->
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
          <table className="text-[15px]">
            <tbody>
              <!-- vehicle id -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Vehicle ID:</td>
                <td className="text-gray-500">{{ vehicleDetails.id }}</td>
              </tr>
              <!-- Vehicle model and make -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Vehicle model and make:</td>
                <td className="text-gray-500">
                  {{ vehicleDetails.make }} {{ vehicleDetails.model }}
                </td>
              </tr>
              <!-- Registration No. -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Registration No.:</td>
                <td className="text-gray-500">{{ vehicleDetails.reg_no }}</td>
              </tr>
              <!-- Year of manufacture -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Manufacture year:</td>
                <td className="text-gray-500">{{ vehicleDetails.year }}</td>
              </tr>
              <!-- Status -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Status:</td>
                <td className="text-gray-500">
                  <div class="w-fit">
                    <BadgeComponent type="warning">In Maintenance</BadgeComponent>
                  </div>
                </td>
              </tr>
              <span class="text-blue-500 hover:underline cursor-pointer" @click="showEdit = true"
                >More details</span
              >
            </tbody>
          </table>
        </div>
      </div>

      <!-- driver and others -->
      <div
        class="grid grid-cols-3 divide-x justify-between divide-gray-200 bg-white rounded-md p-3"
      >
        <!-- drivers -->
        <div class="p-2">
          <h3 class="font-semibold text-xl">Driver Information</h3>
          <table className="text-[15px]">
            <tbody>
              <!-- driver's name -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Driver's name:</td>
                <td className="text-gray-500">Salifu</td>
              </tr>
              <!-- contact -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Driver's contact:</td>
                <td className="text-gray-500">driver@email.com</td>
              </tr>
              <!-- Licence -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Licence No.:</td>
                <td className="text-gray-500">N/A</td>
              </tr>
              <!-- Licence expiration -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Licence expiration:</td>
                <td className="text-gray-500">25th April, 2024</td>
              </tr>
              <!-- Date Assigned -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Date Assigned:</td>
                <td className="text-gray-500">25th April, 2024</td>
              </tr>
              <!-- Status -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Status:</td>
                <td className="text-gray-500">
                  <div class="w-fit">
                    <BadgeComponent>Free</BadgeComponent>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="w-fit mt-2">
            <ButtonComponent text="Unassign Driver" type="danger"></ButtonComponent>
          </div>
        </div>

        <!-- maintenance details -->
        <div class="p-2">
          <h3 class="font-semibold text-xl">Maintenance Information</h3>

          <table className="text-[15px]">
            <tbody>
              <!-- driver's name -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Last maintenance date:</td>
                <td className="text-gray-500">25th April, 2024</td>
              </tr>
              <!-- contact -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Next maintenance:</td>
                <td className="text-gray-500">25th April, 2024</td>
              </tr>
              <!-- Date Assigned -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Service history:</td>
                <td className="text-gray-500">
                  <span class="text-blue-500 hover:underline cursor-pointer"
                    >View service history</span
                  >
                </td>
              </tr>
              <!-- Status -->
            </tbody>
          </table>

          <div class="w-fit mt-4">
            <ButtonComponent text="Call for Maintenance"></ButtonComponent>
          </div>
        </div>

        <!-- Insurance details -->
        <div class="p-2">
          <h3 class="font-semibold text-xl">Insurance Information</h3>

          <table className="text-[15px]">
            <tbody>
              <!-- driver's name -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Insurance provider:</td>
                <td className="text-gray-500">Star Assurance</td>
              </tr>
              <!-- contact -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Policy number:</td>
                <td className="text-gray-500">sdfe2345</td>
              </tr>
              <!-- Date Assigned -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Expiration date:</td>
                <td className="text-gray-500">25th April, 2024</td>
              </tr>
              <!-- Status -->
            </tbody>
          </table>

          <div class="w-fit mt-4">
            <ButtonComponent text="Edit"></ButtonComponent>
          </div>
        </div>
      </div>

      <!-- history -->
      <div class="">
        <h3 class="font-semibold text-2xl mb-2">Vehicle History</h3>

        <VehicleHistoryTable />

        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackComponent from '@/components/ui/BackComponent.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import BadgeComponent from '@/components/ui/BadgeComponent.vue'
import VehicleHistoryTable from '@/components/tables/VehicleHistoryTable.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { onMounted, ref } from 'vue'
import { useVehicleStore } from '@/stores/vehicle'
import EditVehicleForm from '@/components/forms/EditVehicleForm.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'

const { id } = defineProps({
  id: String
})
const vehicleStore = useVehicleStore()
const vehicleDetails = ref({})
const showEdit = ref(false)

onMounted(async () => {
  await vehicleStore.getAllVehicles()
  vehicleDetails.value = vehicleStore.vehicles.find((vehicle) => vehicle.id == id)
})
</script>

<style scoped></style>
