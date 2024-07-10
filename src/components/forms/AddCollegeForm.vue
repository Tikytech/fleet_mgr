<template>
  <div class="rounded-md w-[500px] bg-white">
    <h3 class="bg-slate-100 p-4 font-bold">Add College</h3>

    <form @submit.prevent="submitForm" class="p-4 space-y-4">
      <!-- image -->
      <!-- <div class="image py-5">
        <div class="size-28 mx-auto rounded-full relative border-4">
          <Icon
            icon="material-symbols:add-photo-alternate-sharp"
            class="text-2xl absolute bottom-1 right-2 border rounded-full"
          />
        </div>
      </div> -->

      <!-- Name -->
      <div class="">
        <label for="name" class="">College Name</label>
        <input
          required
          class="input mt-1"
          type="text"
          id="name"
          placeholder="Enter the name of the college"
          v-model="collegeData.name"
        />
      </div>

      <div class="flex justify-end mt-6 gap-2">
        <ButtonComponent text="Close" type="border" @click="$emit('close')" typeButton="button" />
        <ButtonComponent text="Add College" type="success" :loading="collegeStore.loading" />
      </div>
    </form>
  </div>
</template>

<script setup>
// import { Icon } from '@iconify/vue'
import ButtonComponent from '../ui/ButtonComponent.vue'
import { useCollegeStore } from '@/stores/college'
import { ref } from 'vue'

const emit = defineEmits(['close'])
const collegeStore = useCollegeStore()
const collegeData = ref({
  name: ''
})

async function submitForm() {
  console.log(collegeData.value)
  await collegeStore.addCollege(collegeData.value)
  if (collegeStore.isSuccessful) {
    await collegeStore.getAllColleges()
    collegeData.value = {
      name: ''
    }
    emit('close')
    console.log('emmiting')
  }
}
</script>

<style lang="scss" scoped></style>
