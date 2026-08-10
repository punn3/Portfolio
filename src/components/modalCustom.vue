<script setup lang="ts">
const modal = useModalStore()
const { showIsmodal } = storeToRefs(modal)

const targetIsModal = ref(null)

function close() {
    showIsmodal.value = false
    document.body.classList.remove('modal_open')
}
onClickOutside(targetIsModal, event => close())
</script>

<template>
    <Transition name="fade" :duration="550">
        <div v-if="showIsmodal" class="modal_wrapper">
            <div class="overlay" />
            <div class="popup_content">
                <div ref="targetIsModal" class="content">
                    <button class="box_icon" @click="close()" />
                    <div class="title heading-4-api">
                        <h4>Oops! SORRY</h4>
                    </div>
                    <div class="wrapper title-api">
                        This size sold out.
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<!-- <style lang="scss" scoped>

</style> -->
