<template>
  <div class="rounded-md w-[500px] bg-white">
    <h3 class="bg-slate-100 p-4 font-bold">Add Staff</h3>

    <form action="" class="p-4 space-y-4">
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
        <input class="input mt-1" type="text" id="name" placeholder="Enter Staff Name" />
      </div>

      <!-- staff id -->
      <div class="">
        <label for="staff_id">Staff Id</label>
        <input class="input mt-1" type="text" id="staff_id" placeholder="Enter Staff Id" />
      </div>

      <!-- College -->
      <div class="">
        <label for="college">Choose Staff College</label>
        <select name="college" class="input mt-1 text-sm" id="college">
          <option value="">Basic and Applkied Sciences</option>
          <option>Humanities</option>
        </select>
      </div>

      <div class="">
        <p>Is Staff a Driver?</p>
        <div>
          <span class="mr-3">
            <input type="radio" name="driver" id="yes" />
            <label for="yes" class="text-sm ml-1">Yes</label>
          </span>
          <span>
            <input type="radio" name="driver" id="no" />
            <label for="no" class="text-sm ml-1">No</label>
          </span>
        </div>
      </div>

      <div class="flex justify-end mt-6">
        <ButtonComponent text="Add Staff" type="success" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import ButtonComponent from '../ui/ButtonComponent.vue'
</script>

<style lang="scss" scoped></style>
