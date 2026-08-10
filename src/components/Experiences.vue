<script setup lang="ts">
const props = defineProps(['img','img2','subtitle','description','description2','date'])
</script>

<template>
    <div class="card-item row">
    <div class="image col-12 col-md-5">
        <picture class="thumbnail_result">
            <source :srcset="props.img" media="(min-width: 768px)" type="image/webp">
            <img class="img-fluid w-100" alt="Name_RRR" :src="props.img2" width="335"
                height="227" loading="lazy">
        </picture>
    </div>
    <div class="col-md-7 exper-col">
        <div class="row">
            <div class="title col-lg-8">
                <h5 class="subtitle heading-5-head">{{ props.subtitle }}</h5>
                <ul class="description">
                    <li class="title-head">{{ props.description }}</li>
                    <li class="title-head">{{ props.description2}}</li>
                </ul>
            </div>
            <p class="date title-head col-lg-4">{{ props.date }}</p>
        </div>
    </div>
</div>
</template>