<template>
  <div class="rounded-sm bg-white shadow-md">
    <!-- table -->
    <div class="" v-if="tableData?.length > 0">
      <!-- table -->
      <table class="w-full text-sm">
        <!-- thead -->
        <tr class="text-sm font-semibold px-4 py-2 bg-slate-100 border-b">
          <!-- <th class="pl-4 w-2 text-left">
              <input type="checkbox" name="" id="" class="accent-blue-900" />
            </th> -->
          <template v-for="head in tableHead" :key="head?.head">
            <th class="text-left px-4 py-4">{{ head?.title }}</th>
          </template>
        </tr>

        <!-- table data -->
        <template v-for="(data, index) in tableData" :key="data?.id">
          <tr class="border-b">
            <!-- <td class="pl-4 w-2 text-left">
                <input type="checkbox" name="" id="" class="accent-blue-900" />
              </td> -->
            <td class="text-left px-4 py-4 capitalize">{{ data?.id }}</td>
            <td class="text-left px-4 py-4">{{ data?.name }}</td>
            <td class="text-left px-4 py-4 capitalize">{{ collegeData[index % 4]?.location }}</td>
            <td class="text-left px-4 py-4">{{ collegeData[index % 4]?.contactPerson }}</td>
            <td class="text-left px-4 py-4">{{ collegeData[index % 4]?.contactNumber }}</td>
            <td class="text-left px-4 py-4">
              {{ collegeData[index % 4]?.numberOfVehiclesAssigned }}
            </td>
            <td class="text-left px-4 py-4">
              <div class="flex gap-2">
                <Icon icon="heroicons:eye" class="gray-text text-xl cursor-pointer" />
                <router-link :to="{ name: 'Colleges', query: { edit: data?.id } }">
                  <Icon icon="heroicons:pencil" class="gray-text text-xl cursor-pointer" />
                </router-link>
                <!-- <Icon icon="heroicons:trash" class="text-red-500 text-xl cursor-pointer" /> -->
              </div>
            </td>
          </tr>
        </template>
      </table>

      <!-- Pagination -->
      <div class="flex justify-end p-4 text-sm">
        <div class="flex items-center gap-2">
          <p class="gray-text">Previous</p>
          <div class="px-3 py-1.5 bg-cyan-500 rounded-md text-white">1</div>
          <p class="text-cyan-500">Next</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center py-10" v-else-if="collegeStore.loading">
      <div class="">
        <Icon icon="line-md:loading-loop" class="text-6xl text-cyan-800 mx-auto" />
        <p>Fetching data...</p>
      </div>
    </div>

    <div class="flex justify-center py-10" v-else>
      <NoResults>
        <ButtonComponent
          text="Add College"
          icon="heroicons:plus"
          type="success"
          @click="$emit('add')"
        />
      </NoResults>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import NoResults from '@/components/ui/NoResults.vue'
import { Icon } from '@iconify/vue'
import { useCollegeStore } from '@/stores/college'
import { onMounted, ref, watch } from 'vue'

const collegeStore = useCollegeStore()
const tableData = ref(collegeStore.colleges)

watch(
  () => collegeStore.colleges,
  () => {
    console.log('seen')
    tableData.value = collegeStore.colleges
  }
)

const tableHead = [
  { title: 'College ID' },
  { title: 'College Name' },
  { title: 'Location' },
  { title: 'Contact Person' },
  { title: 'Contact Number' },
  { title: 'No of Vehicles Assigned' },
  { title: 'Action' } // Optional: for actions like edit or delete
]

const collegeData = [
  {
    collegeId: '001',
    collegeName: 'Computer Science',
    location: 'Main Campus',
    contactPerson: 'Alice Johnson',
    contactNumber: '123-456-7890',
    email: 'alice.johnson@university.edu',
    numberOfVehiclesAssigned: 5
  },
  {
    collegeId: '002',
    collegeName: 'Biology Department',
    location: 'Science Building',
    contactPerson: 'Bob Smith',
    contactNumber: '234-567-8901',
    email: 'bob.smith@university.edu',
    numberOfVehiclesAssigned: 3
  },
  {
    collegeId: '003',
    collegeName: 'Sports Department',
    location: 'Athletic Center',
    contactPerson: 'Charlie Brown',
    contactNumber: '345-678-9012',
    email: 'charlie.brown@university.edu',
    numberOfVehiclesAssigned: 4
  },
  {
    collegeId: '004',
    collegeName: 'History Department',
    location: 'Humanities Building',
    contactPerson: 'Diana Prince',
    contactNumber: '456-789-0123',
    email: 'diana.prince@university.edu',
    numberOfVehiclesAssigned: 2
  }
]

onMounted(async () => {
  await collegeStore.getAllColleges()
  tableData.value = collegeStore.colleges
})
</script>

<style lang="scss" scoped></style>
