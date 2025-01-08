<template>
    <div class="overflow-x-auto">
        <div class="navigation-tabs flex border-b border-gray-300">
            <div v-for="tab in tabs" :key="tab" @click="() => { $emit('active-tab', tab.tab) }">
                <router-link class="block tab px-4 py-2 text-nowrap cursor-pointer font-semibold"
                    :to="{ name: tab.link }">
                    {{ tab.tab }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const { tabs } = defineProps({
    tabs: {
        type: Array,
        required: true
    },

})


</script>

<style scoped>
.router-link-exact-active {
    @apply border-b-2 border-cyan-500 text-cyan-500
}
</style>