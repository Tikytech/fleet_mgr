<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-fit">
            <h2 class="text-2xl font-bold mb-2 text-center">Enter OTP</h2>
            <p class="text-center mb-6">An OTP has been sent to your email</p>
            <div class="flex space-x-2 mb-6">
                <input v-for="(digit, index) in otp" :key="index" type="text" maxlength="1"
                    class="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    v-model="otp[index]" @input="onInput(index, $event)" @keydown="onKeydown(index, $event)"
                    @paste="onPaste($event)" />
            </div>
            <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" @click="confirmOtp">
                Confirm OTP
            </button>
            <p class="text-center mt-4 text-sm">
                Didn't receive code?
                <a href="#" :class="{ 'text-blue-500': timer === 0, 'text-gray-500': timer > 0 }" @click="resendOtp"
                    :disabled="timer > 0">
                    Resend OTP
                </a>
                <span v-if="timer > 0">({{ timer }}s)</span>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const otp = ref(['', '', '', '', '', '']);
const timer = ref(30);

const onInput = (index) => {
    if (otp.value[index].length === 1 && index < otp.value.length - 1) {
        document.querySelectorAll('input')[index + 1].focus();
    }
};

const onKeydown = (index, event) => {
    if (event.key === 'Backspace' && otp.value[index] === '' && index > 0) {
        document.querySelectorAll('input')[index - 1].focus();
    }
};

const onPaste = (event) => {
    const paste = event.clipboardData.getData('text');
    if (paste.length === otp.value.length) {
        otp.value = paste.split('');
        document.querySelectorAll('input')[otp.value.length - 1].focus();
    }
};

const confirmOtp = () => {
    alert(`OTP Entered: ${otp.value.join('')}`);
};

const resendOtp = () => {
    if (timer.value === 0) {
        // Logic to resend OTP
        timer.value = 30;
        startTimer();
    }
};

const startTimer = () => {
    const interval = setInterval(() => {
        if (timer.value > 0) {
            timer.value--;
        } else {
            clearInterval(interval);
        }
    }, 1000);
};

onMounted(() => {
    startTimer();
});
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

a:disabled {
    pointer-events: none;
}
</style>
