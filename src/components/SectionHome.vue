<script setup lang="ts">
const icons = [
  {
    link: 'https://www.linkedin.com/in/puntareewan-chaiya-228b6829b/',
    icon: 'icon-linkedin',
  },
  {
    link: 'https://www.instagram.com/pnxm.c/?hl=th',
    icon: 'icon-instagram',
  },
  {
    link: 'https://github.com/punn3',
    icon: 'icon-github',
  },
];

</script>

<template>
  <section class="home">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 home-text">
          <h1 class="heading-1">
            Hi, I’m Puntareewan
          </h1>
          <div class="home-title">
            <p class="title">
              Computer Engineering graduate, I'm eager to grow in a dynamic, challenging environment where I can expand
              my skills and learn new technologies. and contribute to team success.
            </p>
          </div>
          <div class="home-icon">
            <HomeIcons v-for="icon in icons" :link="icon.link" :icon="icon.icon" data-aos="fade-up"></HomeIcons>
          </div>
        </div>
        <div class="col-12 col-md-4 home-pic">
          <div class="pic-1">
            <!-- <span class="icon-pic-1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span></span> -->
            <img src="/assets/images/Group1.png" alt="group1">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
