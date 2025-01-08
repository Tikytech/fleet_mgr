import { ref } from "vue";
import { defineStore } from "pinia";

export const useNavbarStore = defineStore('navbar', () => {
    const showSideNav = ref(true)
    const showMobileNav = ref(false)

    return {showSideNav, showMobileNav}
})