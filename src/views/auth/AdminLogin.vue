<template>
    <main class="bg-[url('/images/legon2.jpg')] bg-cover bg-no-repeat bg-bottom relative">
        <div class="overlay bg-white/30 inset-0 absolute"></div>
        <div class="flex items-center justify-center min-h-screen relative z-50">
            <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <!-- logo -->
                <div class="w-16 mx-auto"><img src="/images/ug-logo.png" alt="ug-logo" class="w-full"></div>
                <!-- login text -->
                <h1 class="text-2xl font-bold text-center">Login</h1>
                <!-- message -->
                <p v-if="errMessage" class="p-2 text-center my-4 bg-red-400/50">{{ errMessage }}</p>
                <!-- form -->
                <form @submit.prevent="handleLogin" class="space-y-6">
                    <!-- email -->
                    <div class="space-y-2">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" v-model="email" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <!-- password -->
                    <div class="space-y-2 relative">
                        <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                        <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        <Icon :icon="showPassword ? 'mdi:eye-off' : 'mdi:eye'" @click="togglePasswordVisibility"
                            class="absolute right-3 top-9 cursor-pointer text-gray-500" />
                    </div>

                    <!-- submit -->
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
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authentication'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const authStore = useAuthStore()
const router = useRouter()
const errMessage = ref('')

const handleLogin = async () => {
    // Handle login logic here
    errMessage.value = ''
    console.log('Email:', email.value)
    console.log('Password:', password.value)
    const status = await authStore.adminLogin({ email: email.value, password: password.value })
    if (status) {
        await authStore.getAdminUser()
        router.push({ name: 'Overview' })
    }
    else if (authStore.error) {
        errMessage.value = authStore.error
    }
    else {
        errMessage.value = 'Something went wrong. Please try again.'
    }
}

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS is being used */
</style>
