<template>
    <div>
        <form @submit.prevent="submitForm" class="p-4 space-y-4">
            <!-- reason form -->
            <div class="">
                <label for="reason">Reason for rejecting request</label>
                <textarea required rows="4" class="input mt-1"
                    placeholder="Provide reason to reject this vehicle request"></textarea>
            </div>

            <!-- buttons -->
            <div class="flex justify-end mt-6 gap-2">
                <ButtonComponent text="Reject request" type="danger" :loading="loading" @click="$emit('button-click')"
                    type-button="button" />
                <ButtonComponent text="Cancel" type="border" @click="$emit('close')" type-button="button" />
            </div>
        </form>

    </div>
</template>

<script setup>
import ButtonComponent from '../ui/ButtonComponent.vue';
</script>

<style scoped></style>