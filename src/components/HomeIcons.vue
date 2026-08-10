<script setup lang="ts">
const props = defineProps(['link','icon'])
</script>

<template>
    <div class="icon-item p-3">
        <a class="text-decoration-none" :href="props.link" target="_blank"><span class=" span-item " :class="props.icon"></span></a>
        <!-- <span class="span-item" :class="props.icon"></span> -->
    </div>
</template>