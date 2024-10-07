<template>
  <div class="space-y-4">
    <ModalComponent
      :show-modal="showAdd || showEdit"
      @close="
        () => {
          showAdd = false
          showEdit = false
        }
      "
    >
      <AddCollegeForm @close="showAdd = false" v-if="showAdd" />
      <EditCollegeForm
        @close="
          () => {
            // $router.push({ name: 'Colleges' })
            showEdit = false
          }
        "
        v-if="showEdit"
      />
    </ModalComponent>

    <!-- search and button -->
    <SearchAndButtonBar button-text="Add College" @add="showAdd = true" :filter="true" />

    <CollegeTable />

    <!-- <div class="bg-white rounded-md p-4">
      <div class="grid grid-cols-3 2xl:grid-cols-4 gap-4" v-if="colleges?.length > 0">
        <template v-for="(college, index) in colleges" :key="college.id">
          <CollegeCard
            @add="showAdd = true"
            @edit="showEdit = true"
            :college="college"
            :colors="{
              color: colors[index % colors.length].hex,
              hover: hovers[index % hovers.length].hex
            }"
          />
        </template>
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
            @click="showAdd = true"
          />
        </NoResults>
      </div>
    </div> -->
  </div>
</template>

<script setup>
// import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import SearchAndButtonBar from '@/components/ui/SearchAndButtonBar.vue'
// import NoResults from '@/components/ui/NoResults.vue'
// import CollegeCard from '@/components/cards/CollegeCard.vue'
import AddCollegeForm from '@/components/forms/AddCollegeForm.vue'
import EditCollegeForm from '@/components/forms/EditCollegeForm.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import { ref, watch, onMounted } from 'vue'
import { useCollegeStore } from '@/stores/college'
// import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'
import CollegeTable from '@/components/tables/CollegeTable.vue'

const showAdd = ref(false)
const showEdit = ref(false)
const collegeStore = useCollegeStore()
const route = useRoute()
const colleges = ref(collegeStore.colleges)

watch(
  () => collegeStore.colleges,
  () => {
    console.log('seen')
    colleges.value = collegeStore.colleges
  }
)

watch(
  () => route.query.edit,
  (value) => {
    if (value) {
      showEdit.value = true
    }
  }
)

// const colors = [
//   { name: 'Green', hex: '#006400' },
//   { name: 'Black', hex: '#000000' },
//   // { name: 'Purple', hex: '#800080' },
//   { name: 'Yellow', hex: '#9B870C' },
//   { name: 'Blue', hex: '#00008B' }
// ]

// const hovers = [
//   { name: 'Green', hex: '#008000' },
//   { name: 'Black', hex: '#1C1C1C' },
//   // { name: 'Purple', hex: '#8000bb' },
//   { name: 'Yellow', hex: '#eab308' },
//   { name: 'Blue', hex: '#0000FF' }
// ]

onMounted(async () => {
  await collegeStore.getAllColleges()
  colleges.value = collegeStore.colleges
  if (route.query.edit) {
    showEdit.value = true
  }
})
</script>

<style scoped></style>
