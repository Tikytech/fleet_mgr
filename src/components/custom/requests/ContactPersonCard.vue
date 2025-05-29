<template>
    <!-- contact person -->
    <div class="bg-white p-5 rounded-md">
        <h3 class="text-lg font-semibold border-b  pb-2">Contact person</h3>

        <div className="text-[15px]">
            <div>
                <!-- contact person-->
                <tr>
                    <td className="py-2 pr-3 font-semibold">Contact person name:</td>
                    <td className="text-gray-500">{{ contact?.name }}</td>
                </tr>
                <!-- Contact person number -->
                <tr>
                    <td className="py-2 pr-3 font-semibold">Contact person number:</td>
                    <td className="text-gray-500">{{ contact?.contact }}</td>
                </tr>
                <!-- Contact person email -->
                <tr>
                    <td className="py-2 pr-3 font-semibold">Contact person email:</td>
                    <td className="text-gray-500">{{ contact?.email }}</td>
                </tr>
            </div>
        </div>
    </div>
</template>

<script setup>
const { contact } = defineProps({
    contact: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped></style>