<script setup lang="ts">
// import { useModalStore } from '~/stores/modal'

const productStore = useProductStore()
const { products, types, loading, error } = str(productStore)

const modal = useModalStore()
const { showIsmodal } = storeToRefs(modal)

onMounted(() => {
    productStore.fetchs()
    console.log(productStore);
})

const route = useRoute()
const id = computed(() => route.params.id)

const product = computed(() => products.value.find((p) => {
    return p.id == id.value
}))

function open() {
    showIsmodal.value = true
    document.body.classList.add('modal_open')
}

const sizes = [
    {
        "radioId": '1',
        "size": 'S'
    },
    {
        "radioId": '2',
        "size": 'M'
    },
    {
        "radioId": '3',
        "size": 'L'
    },
    {
        "radioId": '4',
        "size": 'XL'
    },
    {
        "radioId": '5',
        "size": 'XXL'
    },
    {
        "radioId": '6 ',
        "size": 'XXXL'
    },
];
</script>

<template>
    <div id="api-detail">
        <header>
            <div class="container">
                <div class="navbar">
                    <div class="nav-brand">
                        <a href="/api" class="title-api">LOGO</a>
                    </div>
                    <div class="nav-list">
                        <div class="nav-item">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    class="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </a>
                            <!-- <a href="#">fkd</a> -->
                        </div>
                        <div class="nav-item">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    class="bi bi-cart4" viewBox="0 0 16 16">
                                    <path
                                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                </svg>
                            </a>
                        </div>
                        <div class="nav-item">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    class="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="detail-section" v-if="product">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 image-box">
                        <img :src="product.img" alt="img" width="100%">
                    </div>
                    <div class="col-md-6 detail-box">
                        <div class="title">
                            <h2 class="heading-2-api">{{ product.title }}</h2>
                        </div>
                        <div class="subtitle">
                            <p class="title-api">{{ product.text }}</p>
                        </div>
                        <div class="size-component">
                            <div class="title">
                                <h5 class="heading-5-api mb-2">SELECT SIZE</h5>
                            </div>
                            <div class="size-type">
                                <ApiSize v-for="size in sizes" :radioId="size.radioId" :size="size.size"></ApiSize>
                            </div>
                        </div>
                        <div class="price">
                            <h4 class="heading-4-api">฿ {{ product.price }}</h4>
                        </div>

                        <ModalCustom />
                        <div class="buy">
                            <div class="box">
                                <button type="button" class="btn cart col-6 col-md-6 " @click="open()">
                                    <p class="title-api m-0">
                                        Add to cart
                                    </p>
                                </button>
                            </div>
                            <div class="box">
                                <button type="button" class="btn cart buy-now col-6 col-md-6 title-api" @click="open()">
                                    <p class="title-api m-0">
                                        Buy Now
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-section">
        </div>
        <footer class="text-center title-api">
            <p>© 2025 Footer by NongPunn.</p>
        </footer>
    </div>
</template>

<route lang="yaml">
meta:
    layout: api-detail
</route>