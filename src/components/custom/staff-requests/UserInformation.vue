<template>
    <div class="">
        <h2 class="font-bold text-xl">{{ clientUser?.name }}</h2>
        <p class="text-gray-500 text-sm"><span class="">College:</span> <span class="">{{
            clientUser?.college?.name }}</span>
        </p>
        <p class="text-gray-500 text-sm"><span class="">Email:</span> <span class="">{{ clientUser?.email
        }}</span>
        </p>
        <p class="text-gray-500 text-sm"><span class="">Contact:</span> <span class="">{{
            clientUser?.contact
                }}</span>
        </p>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authentication';
const { clientUser } = useAuthStore()
</script>

<style lang="scss" scoped></style>