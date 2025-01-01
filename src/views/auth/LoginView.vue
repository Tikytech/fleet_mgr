<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h1 class="text-2xl font-bold text-center">Login</h1>
            <form @submit.prevent="handleLogin" class="space-y-6">
                <div class="space-y-2">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" id="email" v-model="email" required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <button type="submit"
                    class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const email = ref('');

const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email.value);
};

</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is being used */
</style>
