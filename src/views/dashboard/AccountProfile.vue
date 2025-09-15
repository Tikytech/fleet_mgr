<template>
    <div class="bg-white p-5 rounded-md">
        <div class="flex items-center gap-3">
            <div class="rounded-full size-20 overflow-hidden">
                <img src="/images/default-avatar.png" class="w-full size-full" />
            </div>

            <div class=" ">
                <p class="font-semibold line-clamp-1 text-base" :title="user?.email">{{ user?.email }}</p>
                <p class="gray-text text-sm">Admin</p>
                <p class="gray-text text-sm mt-1">
                    Profile created at:
                    <span>{{ dayjs(user?.createdAt).format("MMMM D, YYYY h:mm A") }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authentication'
import dayjs from 'dayjs'

const { user } = useAuthStore()
</script>

<style lang="scss" scoped></style>
