<template>
  <div class="rounded-md max-w-[1000px] mx-auto bg-white overflow-hidden">
    <h3 class="bg-slate-100 p-4 font-bold">Add Vehicle</h3>

    <form action="" class="p-4 space-y-4">
      <div class="grid grid-cols-3 gap-5 mb-6">
        <!-- Upload Vehicle Image -->
        <div class="bg-slate-100 row-span-3 relative">
          <div class="bg-white pb-2">
            <label for="">Upload Vehicle Image</label>
            <small class="inline-block">Vehicle image must meet certain specifications</small>
          </div>

          <div class="flex justify-center items-center p-4 pt-14 rounded-sm">
            <button
              type="button"
              class="text-xs p-2 px-3 rounded border border-dashed border-gray-400"
            >
              Add Image
            </button>
          </div>
        </div>

        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Vehicle Model</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Vehicle Make</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Vehicle Year</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Registration Number</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Engine Number</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Chassis Number</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Permissible Gross Weight</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Net Weight</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Supplier</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Purchase Date</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Price Paid Fob</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Price Paid Freight</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
        <!-- Vehicle Model -->
        <div class="">
          <label for="name" class="">Price Paid Cif</label>
          <input required class="input mt-1" type="text" id="name" placeholder="" />
        </div>
      </div>
      <!-- buttons -->
      <div class="flex justify-end gap-2">
        <ButtonComponent text="Close" type="border" @click="$emit('close')" typeButton="button" />
        <ButtonComponent text="Add Vehicle" type="success" :loading="false" />
      </div>
    </form>
  </div>
</template>

<script setup>
import ButtonComponent from '../ui/ButtonComponent.vue'
</script>

<style scoped></style>
