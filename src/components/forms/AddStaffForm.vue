<template>
  <div class="">
    <form @submit.prevent="submitForm" class="p-4 space-y-4">
      <!-- image -->
      <div class="image py-5">
        <div class="size-28 mx-auto rounded-full relative border-4">
          <Icon icon="material-symbols:add-photo-alternate-sharp"
            class="text-2xl absolute bottom-1 right-2 border rounded-full" />
        </div>
      </div>

      <!-- Name -->
      <div class="">
        <label for="name" class="">Name</label>
        <input required class="input mt-1" type="text" id="name" placeholder="Enter staff name"
          v-model="staffData.name" />
      </div>

      <!-- staff id -->
      <div class="">
        <label for="staff_id">Staff Id</label>
        <input required class="input mt-1" type="text" id="staff_id" placeholder="Enter staff ID"
          v-model="staffData.staff_no" />
      </div>

      <!-- College -->
      <div class="">
        <label for="college">Choose Staff College</label>
        <select name="college" class="input mt-1 text-sm" id="college" v-model="staffData.collegeId" required>
          <option value="" disabled>Select college staff belongs to</option>
          <template v-for="college in colleges" :key="college.id">
            <option :value="college.id">{{ college.name }}</option>
          </template>
        </select>
      </div>

      <!-- email -->
      <div class="">
        <label for="email">Staff email</label>
        <input required class="input mt-1" type="email" id="email" placeholder="Enter staff email"
          v-model="staffData.email" />
      </div>

      <!-- Phone number -->
      <div class="">
        <label for="staff_id">Staff phone number</label>
        <input required class="input mt-1" type="number" id="staff_id" placeholder="Enter staff phone number"
          v-model="staffData.contact" />
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
const colleges = ref([])
const staffData = ref({
  name: '',
  staff_no: '',
  collegeId: '',
  email: '',
  contact: '',
})

async function submitForm() {
  console.log(staffData.value)
  await staffStore.addStaff({ ...staffData.value, collegeId: Number(staffData.value.collegeId), contact: '233' + staffData.value.contact })
  if (staffStore.isSuccessful) {
    await staffStore.getAllStaff()
    staffData.value = {
      name: '',
      staff_no: '',
      college: '',
      email: '',
      contact: '',
    }
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
