<script setup lang="ts">
const experiences = [
    {
        "img": "/assets/images/merge.png",
        "img2": "/assets/images/merge-2.png",
        "subtitle": "Internship at Merge digital agency",
        "description": "I am internship frontend devloper",
        "description2": "The final project of the internship is a web portfolio that is a land scape using the vue.js framework and deployed to netify web staff, various tools, bootstrap, Swiper, or Animation using Gsap.",
        "date": "21 April 2025 - 6 June 2025"
    },
    {
        "img": "/assets/images/ticket.png",
        "img2": "/assets/images/ticket.png",
        "subtitle": "CUBS BLOCKATHON The Next Gen Business Innovation",
        "description": "We have developed a solution called TicketBuddy, a platform that facilitates the buying, selling, and exchanging of tickets.",
        "description2": "Each ticket is transformed into an NFT, ensuring that there is only one seat per ticket. All transaction data is securely stored and managed using blockchain technology, providing transparency and traceability.",
        "date": "1 JUL 2024 - 27 JUL 2024"
    },
    {
        "img": "/assets/images/game.png",
        "img2": "/assets/images/game.png",
        "subtitle": "The 25th National Software Contest: NSC 2023",
        "description": "Why Can’t be my yourself ?",
        "description2": "It’s a story-driven adventure computer game designed to help players understand LGBTQ+ topics.",
        "date": "29 NOV 2022 - 22 MAR 2023"
    }
]

</script>

<template>
    <section class="experience" id="experience">
        <div class="container">
            <div class="exper-header">
                <h2 class="heading-2-head">Experience</h2>
            </div>
            <div class="card-component ">
                <Experiences v-for="exper in experiences" :img="exper.img" :img2="exper.img2" :subtitle="exper.subtitle"
                    :description="exper.description" :description2="exper.description2" :date="exper.date">
                </Experiences>
            </div>
        </div>
    </section>
</template>