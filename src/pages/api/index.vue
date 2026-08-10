<script setup lang="ts">
import { ref, computed } from 'vue'
import { onMounted, watch } from 'vue'
// import axios from 'axios'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";


const data = ref(null)
const isLoading = ref(false)

// onMounted(async () => {
//     try {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         data.value = res.data
//     } catch (err) {
//         console.error('API Error:', err)
//     }
// })

const productStore = useProductStore()  
const { products, types, loading, error } = str(productStore)

const selectedType = ref('all')

// คำนวณสินค้าที่จะแสดง
const filteredProducts = computed(() => {
    if (selectedType.value === 'all') {
        return products.value
    }
    return products.value?.filter(product => product?.type === selectedType.value) ?? []
})

// ฟังก์ชันสำหรับเปลี่ยนประเภท
const changeType = (type: string) => {
    selectedType.value = type
}

onMounted(async () => {
    isLoading.value = true
    await productStore.fetchs()
    isLoading.value = false
    animatesSticker()
})

watch(isLoading, (newVal) => {
    if (newVal) {
        document.body.classList.add('modal_open')
    } else {
        document.body.classList.remove('modal_open')
    }
})

const process = [
    {
        "collapseId": '1',
        "num": '01',
        "title": 'tkigogj',
        "subtitle": 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        "collapseId": '2',
        "num": '02',
        "title": 'tkigogj',
        "subtitle": 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        "collapseId": '3',
        "num": '03',
        "title": 'tkigogj',
        "subtitle": 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
];

//animation
function animatesSticker() {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline .section-home
    const stkHome = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-home",
            start: "top 20%",
            end: "bottom",
            // markers: true,
            toggleActions: "restart none none none",
        }
    });

    stkHome
        .from(".text-head", {
            scale: 0,
            autoAlpha: 0,
            duration: 1,
            ease: "power2.out",
        })
        .from(".home-right", {
            x: 50,
            autoAlpha: 0,
            duration: 1,
            ease: "power2.out",
        }, "-=0.6")

    // Timeline สำหรับ .card-box
    const stkCard = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-card",
            start: "top center",
            end: "bottom center",
            // markers: true,
            toggleActions: "restart none none none",
        }
    });

    stkCard.from(".card-box .box-api", {
        scale: 0,
        autoAlpha: 0,
        duration: 1.5,
        ease: "sine.inOut",
    });

    //Timeline Process
    const stkProcess = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-process",
            // markers: true,
            start: "top center",
            end: "bottom ",
            toggleActions: "restart none none none",
        },
    })

    stkProcess
        .from(".accordion-item", {
            x: (id) => id % 2 === 0 ? 200 : -200,
            // y: (i) => i * 20,
            autoAlpha: 0,
            duration: 1,
            ease: "sine.inOut",
            stagger: 0.2,
        })
}

function from(arg0: string, arg1: { scale: number; autoAlpha: number; duration: number; ease: string; }) {
    throw new Error('Function not implemented.');
}



</script>

<template>
    <div id="api-page">
        <Loading v-if="isLoading"/>
        <header>
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="nav-brand heading-1-api" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse navbar-list" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="title-api" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="title-api" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="title-api" href="#">About us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="title-api" href="#">Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <div class="section-home">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6 home-left">
                        <div class="text-head">
                            <h1 class="heading-1-api head1">Navigating the digital landscape for success</h1>
                        </div>
                        <div class="text-subtitle">
                            <p class="title-api">Our digital marketing agency helps businesses grow and succeed online
                                through a range of
                                services including SEO, PPC, social media marketing, and content creation.</p>
                        </div>
                        <button>Book a consultation</button>
                    </div>
                    <div class="col-12 col-lg-6 home-right">
                        <div class="image">
                            <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="cloths" width="100%">
                            <!-- <img src="/assets/images/api-page/Illustration.png" alt="group1" width="100%"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-card">
            <div class="container">
                <div class="card-component">
                    <div class="card-head">
                        <h1 class="heading-1-api">Product</h1>
                        <div class="text">
                            <p class="title-api">At our digital marketing agency, we offer a range of services to
                                <br>
                                help businesses grow and succeed online. These services include:
                            </p>
                        </div>
                    </div>
                    <div class="card-product">
                        <ApiTypeNew :selectedType="selectedType" @change-type="changeType" />
                    </div>
                    <div class="card-box" v-if="filteredProducts.length">
                        <div class="row">
                            <ApiCard v-for="apicard in filteredProducts" :key="apicard.id" :id="apicard.id"
                                :img="apicard.img" :title="apicard.title" :text="apicard.text" :price="apicard.price">
                            </ApiCard>
                            <div class="animate-card">
                                <hr>
                                <div class="row">
                                    <ApiCard2 v-for="apiCard2 in filteredProducts" :key="apiCard2.id" :id="apiCard2.id"
                                        :img="apiCard2.img" :title="apiCard2.title" :text="apiCard2.text"
                                        :price="apiCard2.price"></ApiCard2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="w-100 py-3">
                        <p class="mt-3 mx-auto text-center">Not Found Data.</p>
                    </div>

                </div>
            </div>
        </div>
        <div class="section-process">
            <div class="container">
                <div class="process-component">
                    <div class="process-head">
                        <h1 class="heading-2-api">Our Working Process </h1>
                        <div class="text">
                            <p class="title-api">Step-by-Step Guide to Achieving Your Business Goals</p>
                        </div>
                    </div>
                    <div class="process-box">
                        <div class="accordion" id="accordionExample">
                            <ApiProcess v-for="apiprocess in process" :collapseId="apiprocess.collapseId"
                                :num="apiprocess.num" :title="apiprocess.title" :subtitle="apiprocess.subtitle">
                            </ApiProcess>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="text-center title-api">
                © 2020 Copyright:
                <a class="title-api" href="#">Fetch API</a>
            </div>
        </footer>
    </div>
</template>

<style>
.modal_open {
    overflow: hidden !important;
}
</style>

<route lang="yaml">
meta:
    layout: api-page
</route>