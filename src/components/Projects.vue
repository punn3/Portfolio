<script setup lang="ts">
const props = defineProps(['img', 'img2','subtitle', 'description', 'link', 'icon'])
</script>

<template>
    <div class="card-item card-black row">
        <div class="image col-12 col-md-6 ">
            <picture class="thumbnail_result">
                <source :srcset="props.img" media="(min-width: 768px)" type="image/webp">
                <img class="img-fluid w-100" alt="Name_RRR" :src="props.img2" width="335" height="227" loading="lazy">
            </picture>
        </div>
        <div class="title col-12 col-md-6">
            <h5 class="subtitle heading-5">{{ props.subtitle }}</h5>
            <p>{{ props.description }}</p>
            <a :href="props.link"><span class=" span-item " :class="props.icon"></span></a>
        </div>
    </div>
</template>
