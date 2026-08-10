<script setup lang="ts">
const props = defineProps(['id', 'img', 'title', 'text', 'price'])
</script>

<template>
    <div class="col-6 col-sm-6 col-md-4 col-lg-3 box-api">
        <router-link :to="{ name: '/api/[id]', params: { id: props.id } }">
            <div class="box">
                <div class="box_images">
                    <div class="image">
                        <img :src="props.img" class="card-img-top" alt="pic" width="100%" height="100%">
                    </div>
                </div>

                <div class="box-body">
                    <h5 class="card-title heading-5-api">{{ props.title }}</h5>
                    <p class="card-text title-api">{{ props.text }}</p>
                    <div class="price text-end">
                        <h5 class="card-price heading-5-api">{{ props.price }}</h5>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>