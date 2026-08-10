<script setup lang="ts">
import { ref } from 'vue'

// Define props with types for better TypeScript support
const props = defineProps<{
  icon: string
  text: string
  copy: string
}>()


const source = computed(()=> props.text)
const { text, copy, copied, isSupported } = useClipboard({ source })


</script>

<template>
  <div class="contact-item">
    <div class="image">
      <span class="span-item-head" :class="props.icon"></span>
    </div>
    <h2 class="heading-4-head copy">{{ props.text }}</h2>

    <button @click="copy( props.text)" v-if="isSupported">
      <span class="span-item-head" :class="props.copy"></span>
    </button>
    <!-- Bind the reactive copyStatus -->
    <span class="copy-status title-head" v-if="copied">copied</span>
  </div>
</template>
