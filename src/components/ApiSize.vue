<script setup lang="ts">
const props = defineProps<{
    radioId: string
    size: string
}>()
</script>

<template>
    <div class=" group" role="group" aria-label="Basic radio toggle button group">
        <label  :for="props.radioId">
            <input type="radio" class="btn-check" name="btnradio" :id="props.radioId" autocomplete="off">
            <div class="btn boxbox">
                <span class="title-api">{{ props.size }}</span>
            </div>
           <!-- <div class="oop"></div> -->
        </label>
    </div>
</template>
