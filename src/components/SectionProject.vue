<script setup lang="ts">
const projects = [
  {
    "img": '/assets/images/vaccine.png',
    "img2": '/assets/images/vaccine-2.png',
    'subtitle': 'Web Application for Safe Vaccination Recommendations. Chatbot',
    "description":
      '4th-year project is Responsive web application has an input that is the health condition of the vaccine recipient without identifying the patient, and an output that is the list of appropriate vaccines along with recommendations and practices for vaccination. This development was done using the Next.js framework.  This application requires an active connection to KKU Wi-Fi.',
    "link": 'http://vaccine-screener.kku.ac.th/',
    "icon": 'icon-external-link',
  },
  {
    "img": '/assets/images/chat-bot.png',
    "img2": '/assets/images/chat-bot.png',
    'subtitle': 'Library Chatbot',
    "description":
      'Chatbot web applicaton answer question about khon kaen university library',
    "link": '',
    "icon": '',
  },
  {
    "img": '/assets/images/game.png',
    "img2": '/assets/images/game.png',
    'subtitle': 'Why can’t I be myself ?',
    "description":
      'It’s a story-driven adventure computer game designed to help players understand LGBTQ+ topics.',
    "link": '',
    "icon": '',
  },
  {
    "img": '/assets/images/shelfie.png',
    "img2": '/assets/images/shelfie-2.png',
    'subtitle': 'Shelfie',
    "description":
      'Encountering problems where we are unaware of which books we already have leads to situations of buying duplicate books, and having a large accumulation of unread books. Having a notification to remind the user to come back to reading is an advantage of developing this app as a mobile app.',
    "link": '',
    "icon": '',
  },
  {
    "img": '/assets/images/api.png',
    "img2": '/assets/images/api-2.png',
    'subtitle': 'Api-page',
    "description":
      'Making a landing page using a vue.js loop. This exercise uses an API from the mockapi website, along with the use of gsap animations.',
    "link": '/api',
    "icon": 'icon-external-link',
  },
  {
    "img": '/assets/images/scroll.png',
    "img2": '/assets/images/scroll-2.png',
    "subtitle": 'Scroll Page',
    "description":
      'Scrolling the tab menu and main content independently without affecting other sections. When clicking on a tab menu image, the corresponding image in the main content will change. Developed using HTML, CSS, Bootstrap, and jQuery.',
    "link": '/scroll',
    "icon": 'icon-external-link',
  },
  {
    "img": '/assets/images/landing-page.png',
    "img2": '/assets/images/landing-page-2.png',
    'subtitle': 'Landing Page Nexcent',
    "description":
      'A responsive landing page example developed using HTML, CSS, and Bootstrap.',
    "link": '/landing',
    "icon": 'icon-external-link',
  },
  {
    "img": '/assets/images/flex-portfolio.png',
    "img2": '/assets/images/flex-portfolio-2.png',
    'subtitle': 'Flex Portfolio',
    "description":
      'A portfolio example focusing on the use of Flexbox, developed using HTML, CSS, and Bootstrap.',
    "link": '/flex-port',
    "icon": 'icon-external-link',
  },
  {
    "img": '/assets/images/swiper.png',
    "img2": '/assets/images/swiper-2.png',
    'subtitle': 'Swiper Exercise',
    "description":
      'This exercise includes a showcase swiper implemented with Swiperjs and use row column in bootstrap.',
    "link": '/swiper',
    "icon": 'icon-external-link',
  },
  {
    "img": '/assets/images/ex.png',
    "img2": '/assets/images/ex-2.png',
    'subtitle': 'Exercise Day-1 at Merge',
    "description":
      'The first exercise I worked on as an intern. It uses aspect-ratio to make the image cover the screen and includes a showcase swiper implemented with JavaScript.',
    "link": '/ex1',
    "icon": 'icon-external-link',
  },

];
</script>

<template>
  <section class="project" id="project">
    <div class="container">
      <h2 class="heading-2">Project</h2>
      <div class="card-component ">
        <!-- <Projects v-for="project in projects" :img="project.img" :img2="project.img2"
                    :subtitle="project.subtitle" :description="project.description" :link="project.link"
                    :icon="project.icon">
                </Projects> -->
        <Projects v-for="(project, index) in projects" :key="index" :img="project.img" :img2="project.img2"
          :subtitle="project.subtitle" :description="project.description" :link="project.link" :icon="project.icon"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'">
        </Projects>

      </div>
    </div>
  </section>
</template>
