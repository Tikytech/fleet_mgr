<template>
  <div>
    <h3 class="font-bold text-2xl mb-10">Vehicle Request - 002</h3>

    <div class="flex gap-10">
      <div class="w-[70%] space-y-5">
        <!-- request details -->
        <div class="">
          <h3 class="text-lg font-medium border-b border-gray-400 pb-2">Request details</h3>

          <table className="text-[15px]">
            <tbody>
              <!-- college -->
              <tr>
                <td className="py-2 pr-3 font-semibold">College:</td>
                <td className="text-gray-500">Computer science departments</td>
              </tr>
              <!-- purpose -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Request purpose:</td>
                <td className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam mollitia enim,
                  nobis fugiat corporis dolorum quaerat, ratione quas soluta, aperiam officiis
                  consequuntur quo quam dolor provident eaque expedita qui velit.
                </td>
              </tr>
              <!-- date -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Trip date:</td>
                <td className="text-gray-500">25th April, 2024</td>
              </tr>
              <!-- date -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Return date:</td>
                <td className="text-gray-500">25th April, 2024</td>
              </tr>
              <!-- Year of manufacture -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Passengers:</td>
                <td className="text-gray-500">N/A</td>
              </tr>
              <!-- Status -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Recurring request:</td>
                <td className="text-gray-500">No</td>
              </tr>
              <!-- Status -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Request status:</td>
                <td className="text-gray-500">
                  <div class="w-fit">
                    <BadgeComponent type="warning">Pending</BadgeComponent>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <ButtonComponent type="info" text="Edit request" />
        </div>

        <!-- contact person -->
        <div class="">
          <h3 class="text-lg font-medium border-b border-gray-400 pb-2">Contact person</h3>

          <table className="text-[15px]">
            <tbody>
              <!-- contact person-->
              <tr>
                <td className="py-2 pr-3 font-semibold">Contact person name:</td>
                <td className="text-gray-500">Float Tremendous</td>
              </tr>
              <!-- Contact person number -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Contact person number:</td>
                <td className="text-gray-500">1234567890</td>
              </tr>
              <!-- Contact person email -->
              <tr>
                <td className="py-2 pr-3 font-semibold">Contact person email:</td>
                <td className="text-gray-500">staff@st.ug.edu.gh</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- recurring request -->
        <div class="">
          <h3 class="text-lg font-medium border-b border-gray-400 pb-2">
            Recurring request details
          </h3>
        </div>
      </div>

      <div class="w-[30%]">
        <RequestApprovalCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import RequestApprovalCard from '@/components/cards/RequestApprovalCard.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import BadgeComponent from '@/components/ui/BadgeComponent.vue'
// import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped></style>
