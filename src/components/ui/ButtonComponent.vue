<template>
  <div class="relative">
    <div
      class="flex justify-center rounded-md text-white font-semibold transition-colors text-sm overflow-hidden"
      :class="[
        type === 'success'
          ? 'bg-green-500 '
          : type === 'danger'
            ? 'bg-red-500  '
            : type === 'info'
              ? 'bg-cyan-500 '
              : type === 'border'
                ? 'bg-inherit border-2 !text-black hover:border-gray-400'
                : ''
      ]"
    >
      <button
        @click="$emit('buttonClick')"
        :disable="loading"
        :type="typeButton"
        class="min-w-[100px] justify-center py-3 px-4 flex gap-2 items-center"
        :class="[
          type === 'success'
            ? 'bg-green-500 hover:bg-green-600'
            : type === 'danger'
              ? 'bg-red-500  hover:bg-red-600'
              : type === 'info'
                ? 'bg-cyan-500  hover:bg-cyan-600'
                : type === 'border'
                  ? 'bg-inherit border-2 !text-black hover:border-gray-400'
                  : ''
        ]"
      >
        <Icon :icon="icon" v-if="icon" class="text-lg"></Icon>
        <Icon icon="line-md:loading-loop" class="text-xl mx-auto" v-if="loading" />
        <span class="" v-else>{{ text }} </span>
      </button>
      <!-- dropdown btn -->
      <button
        @click="showDropdown = true"
        v-if="dropdown"
        class="p-3 border-l"
        :class="[
          type === 'success'
            ? 'bg-green-500 hover:bg-green-600'
            : type === 'danger'
              ? 'bg-red-500  hover:bg-red-600'
              : type === 'info'
                ? 'bg-cyan-500  hover:bg-cyan-600'
                : type === 'border'
                  ? 'bg-inherit border-2 !text-black hover:border-gray-400'
                  : ''
        ]"
      >
        <Icon icon="material-symbols:keyboard-arrow-down" class="text-xl" />
      </button>
    </div>
    <!-- dropdown -->
    <div
      class="fixed top-0 bottom-0 left-0 right-0 bg-transparent z-40"
      @click="showDropdown = false"
      v-if="showDropdown"
    ></div>
    <div
      class="border absolute bg-white rounded-md divide-y min-w-full top-[100%] right-0 text-sm shadow z-40"
      v-if="showDropdown"
    >
      <template v-for="content in dropdown" :key="content.name">
        <div
          class="flex items-center gap-1 px-3 py-2 hover:bg-gray-100 cursor-pointer"
          @click="
            () => {
              $emit(content.emit)
              showDropdown = false
            }
          "
        >
          <Icon :icon="content.icon" /> {{ content.name }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
const { icon, text, type, loading, typeButton, dropdown } = defineProps({
  icon: String,
  text: String,
  type: {
    type: String,
    default: 'success'
  },
  loading: Boolean,
  typeButton: String,
  dropdown: Object
})

const showDropdown = ref(false)
</script>

<style lang="scss" scoped></style>
