<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper } from 'swiper'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper/types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default defineComponent({
    name: 'SwiperComponent',
    data() {
        return {
            swiperInstance: null as SwiperType | null
        }
    },
    mounted() {
        this.swiperInstance = new Swiper('.mySwiper', {
            modules: [Navigation],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    },
    beforeUnmount() {
        if (this.swiperInstance) {
            this.swiperInstance.destroy(true, true)
            this.swiperInstance = null
        }
    }
})
</script>
<template>
    <div id="swiper">
        <header class="navbar-section">
            <nav class="navbar">
                <a class="nav-brand" href="#">About</a>
                <a class="nav-brand active" href="#">Project</a>
                <a class="nav-brand" href="#">Contact</a>
            </nav>
        </header>
        <section class="banner_section">
            <div class="image_banner">
                <img src="https://inwfile.com/s-cv/s8oxof.jpg" alt="banner" width="100%" height="100%">
            </div>
        </section>
        <section class="text_section">
            <div class="container">
                <div class="text_content">
                    <h1 class="text_title">TEXT</h1>
                    <div class="text_lorem">
                        <p class="abo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum
                            has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="flex-section">
            <div class="container">
                <div class="flex-content">
                    <div class="flex-row">
                        <div class="flex-col3">
                            <div class="flex-image">
                                <img src="https://pm1.aminoapps.com/7020/9040b8f81426909bb177641489f90d30638359a9r1-855-480v2_uhq.jpg"
                                    alt="haibara" width="100%">
                            </div>
                            <div class="flex-image">
                                <img src="https://pm1.aminoapps.com/7020/9040b8f81426909bb177641489f90d30638359a9r1-855-480v2_uhq.jpg"
                                    alt="haibara" width="100%">
                            </div>
                            <div class="flex-image">
                                <img src="https://pm1.aminoapps.com/7020/9040b8f81426909bb177641489f90d30638359a9r1-855-480v2_uhq.jpg"
                                    alt="haibara" width="100%">
                            </div>
                        </div>
                    </div>
                    <div class="flex-row">
                        <div class="flex-col2">
                            <div class="flex-image">
                                <img src="https://www.siliconera.com/wp-content/uploads/2024/06/amuro-sabo-furuya-tooru-removed-from-role-06232024.jpg?fit=1200%2C675"
                                    alt="Amuro" width="100%">
                            </div>
                            <div class="flex-image">
                                <img src="https://www.siliconera.com/wp-content/uploads/2024/06/amuro-sabo-furuya-tooru-removed-from-role-06232024.jpg?fit=1200%2C675"
                                    alt="Amuro" width="100%">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="showcase_section">
            <div class="container">
                <h1 class="showcase_text">SHOW CASE</h1>
                <div class="case-row">
                    <div class="case-col">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide ">
                                    <img src="https://cdn.shopify.com/s/files/1/0022/4847/4713/files/FAE_Congratulation_480x480.png?v=1720124727"
                                        alt="">
                                </div>
                                <div class="swiper-slide">

                                    <img src="https://s3.amazonaws.com/cdn.tulips.com/images/large/Lavender-Tulips.jpg"
                                        alt="">

                                </div>
                                <div class="swiper-slide">
                                    <img src="https://www.mrfothergills.com.au/cdn/shop/articles/Sunflower.png?v=1743053091&width=1024"
                                        alt="">
                                </div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                        <div class="ngum">
                            <h4>Rose flower</h4>
                            <p>Rose flower is a beautiful flower that is often associated with love and romance.</p>
                        </div>
                    </div>
                    <div class=" case-col">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="https://cdn.shopify.com/s/files/1/0022/4847/4713/files/FAE_Congratulation_480x480.png?v=1720124727"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="https://s3.amazonaws.com/cdn.tulips.com/images/large/Lavender-Tulips.jpg"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="https://www.mrfothergills.com.au/cdn/shop/articles/Sunflower.png?v=1743053091&width=1024"
                                        alt="">
                                </div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                        <div class="ngum">
                            <h4>Rose flower</h4>
                            <p>Rose flower is a beautiful flower that is often associated with love and romance.</p>
                        </div>
                    </div>
                    <div class="case-col">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide ">
                                    <img src="https://cdn.shopify.com/s/files/1/0022/4847/4713/files/FAE_Congratulation_480x480.png?v=1720124727"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="https://s3.amazonaws.com/cdn.tulips.com/images/large/Lavender-Tulips.jpg"
                                        alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="https://www.mrfothergills.com.au/cdn/shop/articles/Sunflower.png?v=1743053091&width=1024"
                                        alt="">
                                </div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                        <div class="ngum">
                            <h4>Rose flower</h4>
                            <p>Rose flower is a beautiful flower that is often associated with love and romance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="text-left">
                        <h3>Merge Test</h3>
                    </div>
                    <div class="text-right">
                        <a href="#Home">Home</a>
                        <a href="#Products">Products</a>
                        <a href="#Contact">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>


<route lang="yaml">
meta:
    layout: swiper
</route>