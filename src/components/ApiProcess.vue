<script setup lang="ts">
const props = defineProps(['collapseId', 'num', 'title', 'subtitle'])

</script>

<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#' + props.collapseId" aria-expanded="true" :aria-controls="props.collapseId"
                >
                <div class="number">
                    <h2 class="heading-1-api">{{ props.num }}</h2>
                </div>
                <h3 class="heading-4-api">{{ props.title }}</h3>
            </button>
            <!-- <hr> -->
            <div :id="props.collapseId" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p class="title-api">{{ props.subtitle }}</p>
                </div>
            </div>
        </h2>
    </div>
</template>