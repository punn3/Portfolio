<script setup lang="ts">
import { onMounted } from 'vue'

const slideIndex: number[] = [1, 1, 1]
const slideId: string[] = ['mySlides1', 'mySlides2', 'mySlides3']

function plusSlides(n: number, no: number): void {
    slideIndex[no] += n
    showSlides(slideIndex[no], no)
}

function showSlides(n: number, no: number): void {
    const elements = document.getElementsByClassName(
        slideId[no]
    ) as HTMLCollectionOf<HTMLElement>

    if (n > elements.length) slideIndex[no] = 1
    if (n < 1) slideIndex[no] = elements.length

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none'
    }

    const current = elements[slideIndex[no] - 1]
    if (current) {
        current.style.display = 'block'
    }
}

onMounted(() => {
    showSlides(1, 0)
    showSlides(1, 1)
    showSlides(1, 2)
})
</script>
<template>
    <div id="ex1">
        <div class="images-header">
            <img src="https://inwfile.com/s-cv/s8oxof.jpg" width="100%" />
        </div>
        <div>
            <article class="article">
                <h1>TEXT</h1>
                <p>This is a sample article. It contains some text to demonstrate the layout.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</p><br>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p><br>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.</p>
                <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra,
                    est eros bibendum elit, nec luctus magna felis sollicitudin.</p> <br>
                <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
                    Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula
                    vel nunc egestas porttitor.</p>
            </article>
        </div>
        <div class="square"></div>
        <h2 style="text-align: center;">SHOW CASE</h2>
        <div class="bigbox">
            <div class="slideshow-container">
                <div class="mySlides1">
                    <img src="https://cdn.shopify.com/s/files/1/0022/4847/4713/files/FAE_Congratulation_480x480.png?v=1720124727"
                        width="600" height="400">
                    <h4>Rose flower</h4>
                    <p>Rose flower is a beautiful flower that is often associated with love and romance.</p>
                </div>
                <div class="mySlides1">
                    <img src="https://s3.amazonaws.com/cdn.tulips.com/images/large/Lavender-Tulips.jpg" width="600"
                        height="400">
                    <h4>Tulips flower</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, in blanditiis quis quos!</p>
                </div>
                <div class="mySlides1">
                    <img src="https://www.mrfothergills.com.au/cdn/shop/articles/Sunflower.png?v=1743053091&width=1024"
                        width="600" height="400">
                    <h4>Sunflower</h4>
                    <p>Rose flower is a beautiful flower that is often associated with love and romance.</p>
                </div>
                <a class="prev" @click="plusSlides(-1, 0)">&#10094;</a>
                <a class="next" @click="plusSlides(1, 0)">&#10095;</a>
            </div>
            <div class="slideshow-container">
                <div class="mySlides2">
                    <img src="https://cdn.shopify.com/s/files/1/0022/4847/4713/files/FAE_Congratulation_480x480.png?v=1720124727"
                        width="600" height="400">
                    <h4>Rose flower</h4>
                    <p>Rose flower is a beautiful flower that is often associated with love and romance.</p>
                </div>
                <div class="mySlides2">
                    <img src="https://s3.amazonaws.com/cdn.tulips.com/images/large/Lavender-Tulips.jpg" width="600"
                        height="400">
                    <h4>Tulips flower</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, in blanditiis quis quos!</p>
                </div>
                <div class="mySlides2">
                    <img src="https://www.mrfothergills.com.au/cdn/shop/articles/Sunflower.png?v=1743053091&width=1024"
                        width="600" height="400">
                    <h4>Sunflower</h4>
                    <p>Rose flower is a beautiful flower that is often associated with love and romance.</p>
                </div>
                <a class="prev" @click="plusSlides(-1, 1)">&#10094;</a>
                <a class="next" @click="plusSlides(1, 1)">&#10095;</a>
            </div>
            <div class="slideshow-container">
                <div class="mySlides3">
                    <img src="https://cdn.shopify.com/s/files/1/0022/4847/4713/files/FAE_Congratulation_480x480.png?v=1720124727"
                        width="600" height="400">
                    <h4>Rose flower</h4>
                    <p>Rose flower is a beautiful flower that is often associated with love and romance.</p>
                </div>
                <div class="mySlides3">
                    <img src="https://s3.amazonaws.com/cdn.tulips.com/images/large/Lavender-Tulips.jpg" width="600"
                        height="400">
                    <h4>Tulips flower</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, in blanditiis quis quos!</p>
                </div>
                <div class="mySlides3">
                    <img src="https://www.mrfothergills.com.au/cdn/shop/articles/Sunflower.png?v=1743053091&width=1024"
                        width="600" height="400">
                    <h4>Sunflower</h4>
                    <p>Rose flower is a beautiful flower that is often associated with love and romance.</p>
                </div>
                <a class="prev" @click="plusSlides(-1, 2)">&#10094;</a>
                <a class="next" @click="plusSlides(1, 2)">&#10095;</a>
            </div>
        </div>
    
        <div id="footer">
            <div class="footer-content">
                <h3>Merge Test</h3>
                <nav>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Products">Products</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>


<route lang="yaml">
meta:
    layout: ex1
</route>