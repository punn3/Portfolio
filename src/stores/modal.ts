import { acceptHMRUpdate, defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
    const showIsmodal = ref(false)

    function open() {
        showIsmodal.value = true
    }

    function close() {
        showIsmodal.value = false
    }

    return {
        showIsmodal,
        open,
        close,

    }
})

if (import.meta.hot) {
    import.meta.hot.accept(
        acceptHMRUpdate(useModalStore as any, import.meta.hot),
    )
}
