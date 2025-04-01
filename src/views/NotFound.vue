<template>
    <main class="bg-[url('/images/legon2.jpg')] bg-cover bg-no-repeat bg-bottom relative">
        <div class="overlay bg-white/30 inset-0 absolute"></div>
        <div class="flex flex-col gap-2 justify-center items-center h-dvh relative z-50">
            You are lost
            <ButtonComponent text="Go back to the shadows from whence you came" @click="$router.back" />
        </div>
    </main>
</template>

<script setup>
import ButtonComponent from '@/components/ui/ButtonComponent.vue';


</script>

<style lang="scss" scoped></style>