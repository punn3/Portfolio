<script setup lang="ts">
const router = useRouter()

useHead({
  title: () => 'Portfolio',
})
</script>

<template>
  <div>
    <SectionHome></SectionHome>
    <SectionAboutMe ></SectionAboutMe>
    <SectionSkill></SectionSkill>
    <SectionExperience></SectionExperience>
    <SectionProject></SectionProject>
    <SectionContact></SectionContact>
  </div>
</template>
