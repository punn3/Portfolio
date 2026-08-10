<script setup lang="ts">
defineProps<{
  icon: string
  title: string
}>()
</script>

<template>
  <div class="skill-gap col-6">
    <div class="skill-item">
      <iconify-icon :icon="icon" width="50" height="50" />
      <h5 class="heading-5">{{ title }}</h5>
    </div>
  </div>
</template>
