<template>
  <div>
    <div class="flex justify-between">
      <h3 class="font-bold text-2xl mb-10">Vehicle Request - Trip to Aqua Safari</h3>
      <div class="flex gap-2">
        <ButtonComponent text="Approve Request" />
        <ButtonComponent text="Reject Request" type="danger" />
      </div>
    </div>


    <div class="space-y-5">
      <!-- request details -->
      <div class="bg-white p-5 rounded-md w-full">
        <!-- head -->
        <div class="flex items-center justify-between border-b pb-2 mb-4">
          <h3 class="font-semibold text-lg">Request details</h3>
          <div class="cursor-pointer active:scale-90" title="Edit vehicle details" @click="showEdit = true">
            <Icon icon="heroicons:pencil" class="text-2xl" />
          </div>
        </div>

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
      </div>

      <!-- contact person -->
      <div class="bg-white p-5 rounded-md">
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
      <!-- <div class="">
          <h3 class="text-lg font-medium border-b border-gray-400 pb-2">
            Recurring request details
          </h3>
        </div> -->
    </div>

    <!-- <div class="w-[30%]">
        <RequestApprovalCard />
      </div> -->
  </div>

</template>

<script setup>
// import RequestApprovalCard from '@/components/cards/RequestApprovalCard.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import BadgeComponent from '@/components/ui/BadgeComponent.vue'
import { Icon } from '@iconify/vue'
</script>

<style scoped>
td:first-child {
  width: 200px;
}

td:last-child {
  width: 600px;
}
</style>
