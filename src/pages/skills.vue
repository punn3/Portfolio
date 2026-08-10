<script setup lang="ts">
const router = useRouter()

useHead({
  title: () => 'test',
})
</script>

<template>
  <div class="text-primary">
    Test
    <Sum></Sum>
  </div>
</template>
