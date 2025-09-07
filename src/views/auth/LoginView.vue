<template>
    <main class="bg-[url('/images/legon2.jpg')] bg-cover bg-no-repeat bg-bottom relative">
        <div class="overlay bg-white/30 inset-0 absolute"></div>
        <div class="flex items-center justify-center min-h-screen  maximum-width relative z-50">
            <div class="w-full max-w-md p-8  bg-white rounded-lg shadow-md">
                <!-- logo -->
                <div class="w-16 mx-auto"><img src="/images/ug-logo.png" alt="ug-logo" class="w-full"></div>
                <!-- login text -->
                <h1 class="text-2xl font-bold text-center">Login</h1>
                <!-- messages -->
                <p v-if="mess" class="p-2 text-center my-4" :class="stat ? 'bg-green-400/50' : 'bg-red-400/50'">{{ mess
                }}
                </p>
                <!-- form -->
                <form @submit.prevent="handleLogin" class="space-y-6">
                    <div class="space-y-2">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" v-model="email" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <button type="submit"
                        class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <Icon v-if="authStore.loading" icon="line-md:loading-loop" class="text-2xl m-auto" />
                        <span v-else>Login</span>
                    </button>
                </form>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onUnmounted, ref } from 'vue';
import { useAuthStore } from '@/stores/authentication';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

const email = ref('');
const authStore = useAuthStore()
const router = useRouter()
const mess = ref('')
const stat = ref(false)
const timeout = ref()

const handleLogin = async () => {
    // Handle login logic here
    console.log('Email:', email.value);
    const { status, message } = await authStore.login(email.value)
    mess.value = message
    stat.value = status
    if (status) {
        timeout.value = setTimeout(() => {
            router.push({ name: 'OTP' })
        }, 3000)
    } else {
        timeout.value = setTimeout(() => {
            mess.value = ''
        }, 5000)
    }
};

onUnmounted(() => {
    clearTimeout(timeout.value)
})

</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is being used */
</style>
