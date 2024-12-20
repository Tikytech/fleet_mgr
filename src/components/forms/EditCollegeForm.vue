<template>
  <div class="">

    <form @submit.prevent="submitForm" class="p-4 space-y-4">
      <!-- Name -->
      <div class="">
        <label for="name" class="">College Name</label>
        <input required class="input mt-1" type="text" id="name" placeholder="Enter the name of the college"
          v-model="collegeData.name" />
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
  name: ''
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
      name: ''
    }
    closeForm()
  }
}
onBeforeMount(() => {
  console.log(collegeId.value)
  const temp = collegeStore.findCollege(collegeId.value)
  collegeData.value.name = temp.name
})
</script>

<style lang="scss" scoped></style>
