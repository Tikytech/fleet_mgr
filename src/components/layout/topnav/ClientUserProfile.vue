<template>
    <div class="h-full cursor-pointer w-fit shrink-0 flex items-center" @click="showDropdown = true">
        <div class="primary-bg py-2 px-2 h-full hidden md:block">
            <div class="flex items-center gap-1">
                <div class="rounded-full size-10 overflow-hidden">
                    <img src="/images/default-avatar.png" class="w-full size-full" />
                </div>

                <div class="space-y- ">
                    <p class="font-semibold w-[150px] text-sm text-ellipsis overflow-clip" :title="clientUser?.email">{{
                        clientUser?.email }}</p>
                    <p :title="clientUser?.name" class="gray-text text-xs">{{ clientUser?.name }}</p>
                    <p :title="clientUser?.contact" class="gray-text text-xs">+{{ clientUser?.contact }}</p>
                </div>
            </div>
        </div>
        <div class="md:hidden flex items-center">
            <div class="rounded-full size-8 overflow-hidden" :title="clientUser?.email">
                <img src="/images/default-avatar.png" class="w-full size-full" />
            </div>
        </div>
    </div>

    <!-- dropdown -->
    <DropdownComponent :show-dropdown="showDropdown" :dropdown-content="dropdown" @close="showDropdown = false"
        v-if="showDropdown" @settings="navigateToSettings" @logout="showPrompt = true" />

    <!-- prompts and modals -->
    <!-- logout prompt -->
    <ModalComponent :show-modal="showPrompt" @close="showPrompt = false" title="Logout" width="400px">
        <PromptCard @close="showPrompt = false" @button-click="clientLogout" text="Are you sure you want to logout?" />
    </ModalComponent>
</template>

<script setup>
import DropdownComponent from '@/components/ui/DropdownComponent.vue'
import ModalComponent from '@/components/ui/ModalComponent.vue'
import PromptCard from '@/components/cards/PromptCard.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authentication'
const showDropdown = ref(false)
const router = useRouter()
const showPrompt = ref(false)
const { clientLogout, clientUser } = useAuthStore()

function navigateToSettings() {
    router.push({ name: 'AccountSettings' })
}

const dropdown = [
    // {
    //     name: 'Account Settings',
    //     emit: 'settings',
    //     icon: 'heroicons:cog-6-tooth'
    // },
    { name: 'Logout', emit: 'logout', icon: 'heroicons:arrow-left-start-on-rectangle', class: 'text-red-500' }
]

onMounted(() => {
    useAuthStore().getClientUser()
})
</script>

<style lang="scss" scoped></style>