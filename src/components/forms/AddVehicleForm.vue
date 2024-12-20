<template>
  <div class="">
    <form action="" class="p-4 space-y-4" @submit.prevent="submitForm">
      <div class="grid grid-cols-3 gap-5 mb-6">
        <!-- Upload Vehicle Image -->
        <div class="bg-slate-100 row-span-3 relative">
          <div class="bg-white pb-2">
            <label for="">Upload Vehicle Image</label>
            <small class="inline-block">Vehicle image must meet certain specifications</small>
          </div>

          <div class="flex justify-center items-center p-4 pt-14 rounded-sm">
            <button type="button" class="text-xs p-2 px-3 rounded border border-dashed border-gray-400">
              Add Image
            </button>
          </div>
        </div>

        <!-- Form inputs -->
        <template v-for="data in vehicleFormData" :key="data.v_model">
          <div class="" v-if="data.input_type === 'select'">
            <label :for="data.v_model" class="capitalize">{{ data.name }}</label>
            <select @change="updateVehicleData($event, data.v_model)" class="input">
              <option disabled selected value="">{{ data.placeholder }}</option>
              <template v-for="option in getSelectOptions(data.v_model)" :key="option">
                <option :value="option.id">{{ option.name }}</option>
              </template>
            </select>
          </div>
          <div class="">
            <label :for="data.v_model" class="capitalize">{{ data.name }}</label>
            <input required class="input mt-1" :type="data.input_type" :id="data.v_model"
              :placeholder="data.placeholder" @input="updateVehicleData($event, data.v_model)" />
          </div>
        </template>
      </div>
      <!-- buttons -->
      <div class="flex justify-end gap-2">
        <ButtonComponent text="Close" type="border" @click="$emit('close')" typeButton="button" />
        <ButtonComponent text="Add Vehicle" type="success" :loading="vehicleStore.loading" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ButtonComponent from '../ui/ButtonComponent.vue'
import { useVehicleStore } from '@/stores/vehicle'
import { useSupplierStore } from '@/stores/supplier'
import { vehicleFormData } from '@/data/data'

const vehicleStore = useVehicleStore()
const supplierStore = useSupplierStore()
const emit = defineEmits(['close'])
const vehicleData = ref({
  reg_no: '',
  engine_no: '',
  chassis_no: '',
  make: '',
  year: '',
  model: '',
  permissible_gross_weight: '',
  net_weight: '',
  supplierId: null,
  date_purchased: '',
  price_paid_fob: '',
  price_paid_freight: '',
  price_paid_cif: ''
})

function getSelectOptions(key) {
  if (key === 'supplierId') {
    return supplierStore.suppliers
  }
}

function updateVehicleData(e, model) {
  vehicleData.value[model] = e.target.value
  console.log(vehicleData.value[model])
}

async function submitForm() {
  console.log(vehicleData.value)
  await vehicleStore.addVehicle(vehicleData.value)
  if (vehicleStore.isSuccessful) {
    await vehicleStore.getAllVehicles()
    vehicleData.value = {
      reg_no: '',
      engine_no: '',
      chassis_no: '',
      make: '',
      year: '',
      model: '',
      permissible_gross_weight: '',
      net_weight: '',
      supplierId: null,
      date_purchased: '',
      price_paid_fob: '',
      price_paid_freight: '',
      price_paid_cif: ''
    }
    emit('close')
    console.log('emmiting')
  } else {
    console.log('something went wrong teribli')
  }
}

onMounted(async () => {
  if (supplierStore.suppliers.length < 1) {
    await supplierStore.getAllSuppliers()
  }
})
</script>

<style scoped></style>
