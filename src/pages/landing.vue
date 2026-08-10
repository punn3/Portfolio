<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper } from 'swiper'
import { Pagination } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default defineComponent({
    name: 'SwiperComponent',
    data() {
        return {
            swiper: null as Swiper | null
        }
    },
    mounted() {
        const swiperOptions: SwiperOptions = {
            modules: [Pagination],
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        }

        this.swiper = new Swiper(".mySwiper", swiperOptions)
    },
    beforeUnmount() {
        if (this.swiper) {
            this.swiper.destroy()
            this.swiper = null
        }
    }
})
</script>

<template>
    <div id="landing-page">
        <header class="header_section">
            <div class="container">
                <a class="header-brand">
                    <img src="/assets/images/landing/Icon.png" alt="Nexcent">
                    <p class="d-inline-block g-8">Nexcent</p>
                </a>
            </div>
        </header>
        <section class="showcase_section">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="container">
                            <div class="showcase_content">
                                <div class="row row_showcase">
                                    <div class="col-12 col-md-7">
                                        <h1>Lessons and insights</h1>
                                        <h1 class="text-hilight">from 8 years</h1>
                                        <p>Where to grow your business as a photographer: site or social media?</p>
                                        <button type="button" class="btn-register">Register</button>
                                    </div>
                                    <div class="col-12 col-md-5 pic_box">
                                        <img src="/assets/images/landing/Illustration.png" alt="Illustration">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="container">
                            <div class="showcase_content">
                                <div class="row row_showcase">
                                    <div class="col-12 col-md-7">
                                        <h1>Lessons and insights</h1>
                                        <h1 class="text-hilight">from 8 years</h1>
                                        <p>Where to grow your business as a photographer: site or social media?</p>
                                        <button type="button" class="btn-register">Register</button>
                                    </div>
                                    <div class="col-12 col-md-5">
                                        <img src="/assets/images/landing/Illustration.png" alt="Illustration">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="container">
                            <div class="showcase_content">
                                <div class="row row_showcase ">
                                    <div class="col-12 col-md-7">
                                        <h1>Lessons and insights</h1>
                                        <h1 class="text-hilight">from 8 years</h1>
                                        <p>Where to grow your business as a photographer: site or social media?</p>
                                        <button type="button" class="btn-register">Register</button>
                                    </div>
                                    <div class="col-12 col-md-5">
                                        <img src="/assets/images/landing/Illustration.png" alt="Illustration">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
        <section class="clients_section">
            <div class="container">
                <div class="clients_content">
                    <h2>Our clients</h2>
                    <p>We have been working with some Fortune 500+ clients</p>
                </div>
                <div class="clients_logos row">
                    <div class="col-6 col-md-1">
                        <img src="/assets/images/landing/Logo.png" alt="Logo1">
                    </div>
                    <div class="col-6 col-md-1">
                        <img src="/assets/images/landing/Logo-1.png" alt="Logo2">
                    </div>
                    <div class="col-6 col-md-1">
                        <img src="/assets/images/landing/Logo-2.png" alt="Logo3">
                    </div>
                    <div class="col-6 col-md-1">
                        <img src="/assets/images/landing/Logo-3.png" alt="Logo-4">
                    </div>
                    <div class="col-6 col-md-1">
                        <img src="/assets/images/landing/Logo-4.png" alt="Logo-4">
                    </div>
                    <div class="col-6 col-md-1">
                        <img src="/assets/images/landing/Logo-5.png" alt="Logo-5">
                    </div>
                    <div class="col-6 col-md-1">
                        <img src="/assets/images/landing/Logo-6.png" alt="Logo-6">
                    </div>
                </div>

            </div>
            <!-- </div> -->
        </section>
        <section class="community_section">
            <div class="container">
                <div class="community_content">
                    <h2>Manage your entire community in a single system</h2>
                    <p>Who is Nextcent suitable for?</p>
                </div>
                <div class="community_logo row">
                    <div class="col-12 col-md-4">
                        <div class="tedt">
                            <div class="commu_text">
                                <img src="/assets/images/landing/Icon2.png" alt="Icon2">
                                <h3>Membership Organisations</h3>
                            </div>
                            <p style="margin:0 24px 24px;">Our membership management software provides full automation
                                of
                                membership renewals and
                                payments</p>
                        </div>

                    </div>
                    <div class="col-12 col-md-4 logo_box">
                        <div class="tedt">
                            <div class="commu_text">
                                <img src="/assets/images/landing/Icon2-1.png" alt="Icon2-1">
                                <h3>National Associations</h3>
                            </div>
                            <p style="margin:0 24px 24px;">Our membership management software provides full automation
                                of
                                membership renewals and payments</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 logo_box">
                        <div class="tedt">
                            <div class="commu_text">
                                <!-- class tedt -->
                                <img src="/assets/images/landing/Icon2-2.png" alt="Icon2-2">
                                <h3>Clubs And Groups</h3>
                            </div>
                            <p style="margin:0 24px 24px;">Our membership management software provides full automation
                                of
                                membership renewals and payments </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_four">
            <div class="container">
                <div class="row g-3">
                    <div class="col-12 col-lg-5 four_pic">
                        <img src="/assets/images/landing/Frame 35.png" alt="Frame35">
                    </div>
                    <div class="col-12 col-lg-7 four_text">
                        <h2>The unseen of spending three years at Pixelgrade</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
                            accumsan
                            quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam
                            mattis
                            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,
                            aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button type="button" class="btn-register">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_five">
            <div class="container">
                <div class="row five_content">
                    <div class="col-12 col-md-6 five_left">
                        <h2>Helping a local</h2>
                        <h2 class="text-hilight">business reinvent itself</h2>
                        <p style="color: #18191F;">We reached here with our hard work and dedication</p>
                    </div>
                    <div class="col-12 col-md-6 five_right">
                        <div class="row ">
                            <div class="col-6 col-md-6 right_content">
                                <div>
                                    <img src="/assets/images/landing/Icon3.png" alt="Icon3">
                                </div>
                                <div class="five_text">
                                    <h3>2,245,341</h3>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div class="col-6 col-md-6 right_content">
                                <div>
                                    <img src="/assets/images/landing/Icon3-1.png" alt="Icon3-1">
                                </div>
                                <div class="five_text">
                                    <h3>46,328</h3>
                                    <p>Clubs</p>
                                </div>
                            </div>
                            <div class="col-6 col-md-6 right_content ">
                                <div>
                                    <img src="/assets/images/landing/Icon3-2.png" alt="Icon3-2">
                                </div>
                                <div class="five_text">
                                    <h3>828,867</h3>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                            <div class="col-6 col-md-6 right_content ">
                                <div>
                                    <img src="/assets/images/landing/Icon3-3.png" alt="Icon3-3">
                                </div>
                                <div class="five_text">
                                    <h3>1,926,436</h3>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_six">
            <div class="container">
                <div class="row g-3">
                    <div class="col-12  col-lg-5 six_row">
                        <img src="/assets/images/landing/pana.png" alt="Pana">
                    </div>
                    <div class="col-12 col-lg-7 six_text">
                        <h2>How to design your site footer like we did</h2>
                        <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
                            molestie,
                            massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices
                            mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis
                            finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi
                            eget
                            nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac,
                            hendrerit
                            venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button type="button" class="btn-register">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_seven">
            <div class="container">
                <div class="market_content">
                    <h2>Caring is the new marketing</h2>
                    <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more.
                        See
                        who's joining the community, read about how our community are increasing their membership income
                        and
                        lot's more.​</p>
                </div>
                <div class="row market_card ">
                    <div class="col-12 col-md-4 card_new">
                        <div class="card card_image">
                            <img src="/assets/images/landing/image 18.png" alt="image18">
                        </div>
                        <div class="card card_text">
                            <h4>Creating Streamlined Safeguarding Processes with OneRen</h4>
                            <div class="card_button">
                                <button type="button" class="btn">Readmore </button>
                                <img src="/assets/images/landing/Right.png" alt="arrow">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 card_new">
                        <div class="card card_image">
                            <img src="/assets/images/landing/image 19.png" alt="image19">
                        </div>
                        <div class="card card_text">
                            <h4>What are your safeguarding responsibilities and how can you manage them?</h4>
                            <div class="card_button">
                                <button type="button" class="btn">Readmore </button>
                                <img src="/assets/images/landing/Right.png" alt="arrow">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 card_new">
                        <div class="card card_image">
                            <img src="/assets/images/landing/image 20.png" alt="image20">
                        </div>
                        <div class="card card_text">
                            <h4>Revamping the Membership Model with Triathlon Australia</h4>
                            <div class="card_button">
                                <button type="button" class="btn">Readmore </button>
                                <img src="/assets/images/landing/Right.png" alt="arrow">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer_section ">
            <div class="container">
                <div class="footer_content">
                    <h1>Pellentesque suscipit <br>fringilla libero eu.</h1>
                    <button type="button" class="btn-register">Get a Demo
                        <img src="/assets/images/landing/Right2.png" alt="arrow">
                    </button>
                </div>
            </div>
        </footer>
    </div>
</template>


<route lang="yaml">
meta:
    layout: landing
</route>