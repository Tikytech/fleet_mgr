<template>
  <div class="rounded-md max-w-[500px] mx-auto overflow-hidden bg-white">
    <h3 class="bg-slate-100 p-4 font-bold">Add Staff</h3>

    <form @submit.prevent="submitForm" class="p-4 space-y-4">
      <!-- image -->
      <div class="image py-5">
        <div class="size-28 mx-auto rounded-full relative border-4">
          <Icon
            icon="material-symbols:add-photo-alternate-sharp"
            class="text-2xl absolute bottom-1 right-2 border rounded-full"
          />
        </div>
      </div>

      <!-- Name -->
      <div class="">
        <label for="name" class="">Name</label>
        <input
          required
          class="input mt-1"
          type="text"
          id="name"
          placeholder="Enter Staff Name"
          v-model="staffData.name"
        />
      </div>

      <!-- staff id -->
      <div class="">
        <label for="staff_id">Staff Id</label>
        <input
          required
          class="input mt-1"
          type="text"
          id="staff_id"
          placeholder="Enter Staff Id"
          v-model="staffData.staff_no"
        />
      </div>

      <!-- College -->
      <div class="">
        <label for="college">Choose Staff College</label>
        <select name="college" class="input mt-1 text-sm" id="college" v-model="collegeId" required>
          <option value="" disabled>Select college staff belongs to</option>
          <template v-for="college in colleges" :key="college.id">
            <option :value="college.id">{{ college.name }}</option>
          </template>
        </select>
      </div>

      <div class="">
        <p>Is Staff a Driver?</p>
        <div>
          <span class="mr-3">
            <input
              type="radio"
              name="driver"
              id="yes"
              :value="true"
              v-model="staffData.isDriver"
              required
            />
            <label for="yes" class="text-sm ml-1">Yes</label>
          </span>
          <span>
            <input
              type="radio"
              name="driver"
              id="no"
              :value="false"
              v-model="staffData.isDriver"
              required
            />
            <label for="no" class="text-sm ml-1">No</label>
          </span>
        </div>
      </div>

      <div class="flex justify-end mt-6 gap-2">
        <ButtonComponent text="Close" type="border" @click="$emit('close')" type-button="button" />
        <ButtonComponent text="Add Staff" type="success" :loading="staffStore.loading" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import ButtonComponent from '../ui/ButtonComponent.vue'
import { useStaffStore } from '@/stores/staff'
import { useCollegeStore } from '@/stores/college'
import { onMounted, ref } from 'vue'

const emit = defineEmits(['close'])
const staffStore = useStaffStore()
const collegeStore = useCollegeStore()
const collegeData = ref({})
const collegeId = ref('')
const colleges = ref([])
const staffData = ref({
  name: '',
  staff_no: '',
  college: {},
  isDriver: null
})

async function submitForm() {
  collegeData.value = collegeStore.colleges.find((college) => collegeId.value == college.id)
  staffData.value.college = { id: collegeData.value.id, name: collegeData.value.name }
  console.log(staffData.value)
  await staffStore.addStaff(staffData.value)
  if (staffStore.isSuccessful) {
    await staffStore.getAllStaff()
    staffData.value = {
      name: '',
      staff_no: '',
      college: {},
      isDriver: null
    }
    collegeData.value = {}
    emit('close')
    console.log('emmiting')
  }
}

onMounted(async () => {
  await collegeStore.getAllColleges()
  colleges.value = collegeStore.colleges
})
</script>

<style lang="scss" scoped></style>
