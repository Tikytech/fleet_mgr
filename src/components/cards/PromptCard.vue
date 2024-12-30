<template>
    <div class="p-4">


        <!-- buttons -->
        <div class="flex justify-end mt-6 gap-2">
            <ButtonComponent text="Yes" type="danger" :loading="loading" @click="$emit('button-click')"
                type-button="button" />
            <ButtonComponent text="No" type="border" @click="$emit('close')" type-button="button" />
        </div>
    </div>
</template>

<script setup>
import ButtonComponent from '../ui/ButtonComponent.vue';
const { loading } = defineProps({
    loading: Boolean
})
</script>

<style scoped></style>
