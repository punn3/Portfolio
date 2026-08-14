<script setup lang="ts">
const skills = [
  { icon: 'logos:html-5', title: 'Html' },
  { icon: 'logos:css-3', title: 'Css' },
  { icon: 'logos:javascript', title: 'Javascript' },
  { icon: 'logos:bootstrap', title: 'Bootstrap' },
  { icon: 'logos:sass', title: 'Sass' },
  { icon: 'logos:flutter', title: 'Flutter' },
  { icon: 'logos:dart', title: 'Dart' },
  { icon: 'logos:react', title: 'React' },
  { icon: 'logos:typescript', title: 'Typescript' },
  { icon: 'logos:vue', title: 'Vue.js'},
  { icon: 'logos:nextjs', title: 'Next.js' },
  { icon: 'logos:splunk', title: 'Splunk' },
  { icon: 'logos:vmware', title: 'Vmware' },
  { icon: 'logos:mysql', title: 'My Sql' },
  { icon: 'logos:github-icon', title: 'Github' },
  { icon: 'logos:figma', title: 'Figma' },
]
</script>

<template>
  <section class="skills" id="skills">
    <div class="container">
      <div class="skill-header">
        <h2 class="heading-2">Skills</h2>
      </div>
      <div class="skill-icon row">
        <SkillsIcon
          v-for="skill in skills"
          :key="skill.title"
          :icon="skill.icon"
          :title="skill.title"
        />
      </div>
    </div>
  </section>
</template>
