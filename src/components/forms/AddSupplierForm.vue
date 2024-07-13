<template>
  <div class="rounded-md max-w-[500px] mx-auto overflow-hidden bg-white">
    <h3 class="bg-slate-100 p-4 font-bold">Add Supplier</h3>

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
          placeholder="Enter Supplier Name"
          v-model="supplierData.name"
        />
      </div>

      <!-- contact person -->
      <div class="">
        <label for="contact_person">Contact Person's Name</label>
        <input
          required
          class="input mt-1"
          type="text"
          id="contact_person"
          placeholder="Enter Contact Person's Name"
          v-model="supplierData.contact_person"
        />
      </div>

      <!-- Contact person phone number -->
      <div class="">
        <label for="contact_phone">Contact Person's Phone Number</label>
        <input
          required
          class="input mt-1"
          type="text"
          id="contact_phone"
          placeholder="Enter Contact Person's Phone Number"
          v-model="supplierData.contact_phone"
        />
      </div>

      <!-- address -->
      <div class="">
        <label for="address">Address</label>
        <input
          required
          class="input mt-1"
          type="text"
          id="address"
          placeholder="Enter Address"
          v-model="supplierData.address"
        />
      </div>

      <div class="flex justify-end mt-6 gap-2">
        <ButtonComponent text="Close" type="border" @click="$emit('close')" type-button="button" />
        <ButtonComponent text="Add Supplier" type="success" :loading="supplierStore.loading" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import ButtonComponent from '../ui/ButtonComponent.vue'
import { useSupplierStore } from '@/stores/supplier'
import { ref } from 'vue'

const emit = defineEmits(['close'])
const supplierStore = useSupplierStore()
const supplierData = ref({
  name: '',
  contact_person: '',
  contact_phone: '',
  address: ''
})

async function submitForm() {
  console.log(supplierData.value)
  await supplierStore.addSupplier(supplierData.value)
  if (supplierStore.isSuccessful) {
    await supplierStore.getAllSuppliers()
    supplierData.value = {
      name: '',
      contact_person: '',
      contact_phone: '',
      address: ''
    }
    emit('close')
    console.log('emmiting')
  }
}
</script>

<style lang="scss" scoped></style>
