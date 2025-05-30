<template>
  <div class="">

    <form @submit.prevent="submitForm" class="p-4 space-y-4">
      <!-- Name -->
      <div class="">
        <label for="name" class="">College Name</label>
        <input required class="input mt-1" type="text" id="name" placeholder="Enter the name of the college"
          v-model="collegeData.name" />
      </div>

      <!-- College Head name -->
      <div class="">
        <label for="name" class="">Name of college head</label>
        <input required class="input mt-1" type="text" id="name" placeholder="Enter staff name"
          v-model="collegeData.staff_name" />
      </div>

      <!-- College Head id -->
      <div class="">
        <label for="staff_id">ID of college head</label>
        <input required class="input mt-1" type="text" id="staff_id" placeholder="Enter ID no. of college head"
          v-model="collegeData.staff_no" />
      </div>

      <!-- email -->
      <div class="">
        <label for="email">Email of college head</label>
        <input required class="input mt-1" type="email" id="email" placeholder="Enter email"
          v-model="collegeData.email" />
      </div>

      <!-- Phone number -->
      <div class="">
        <label for="phone_number">Phone number of ollege head</label>
        <input required class="input mt-1" type="number" id="phone_number" placeholder="Enter phone number"
          v-model="collegeData.contact" />
      </div>

      <div class="flex justify-end mt-6 gap-2">
        <ButtonComponent text="Close" type="border" @click="closeForm" typeButton="button" />
        <ButtonComponent text="Save Changes" type="success" :loading="collegeStore.loading" />
      </div>
    </form>
  </div>
</template>

<script setup>
// import { Icon } from '@iconify/vue'
import ButtonComponent from '../ui/ButtonComponent.vue'
import { useCollegeStore } from '@/stores/college'
import { onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const emit = defineEmits(['close'])
const route = useRoute()
const router = useRouter()
const collegeStore = useCollegeStore()
const collegeId = ref(route.query.edit)
const collegeData = ref({
  name: '',
  staff_name: '',
  staff_no: '',
  email: '',
  contact: '',
})

function closeForm() {
  emit('close')
  router.push({ name: 'Colleges' })
}

async function submitForm() {
  console.log(collegeData.value)
  await collegeStore.editCollege(collegeData.value, collegeId.value)
  if (collegeStore.isSuccessful) {
    await collegeStore.getAllColleges()
    collegeData.value = {
      name: '',
      staff_name: '',
      staff_no: '',
      email: '',
      contact: '',
    }
    closeForm()
  }
}
onBeforeMount(() => {
  console.log(collegeId.value)
  const temp = collegeStore.findCollege(collegeId.value)
  collegeData.value.name = temp.name
  collegeData.value.staff_name = temp?.staff_name
  collegeData.value.staff_no = temp?.staff_no
  collegeData.value.email = temp?.email
  collegeData.value.contact = temp?.contact
})
</script>

<style lang="scss" scoped></style>
