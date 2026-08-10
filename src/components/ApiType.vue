<!-- <script setup lang="ts">
const props = defineProps(['shirt','pants','jeans','Tshirt'])
</script>

<template>
    <ul class="nav nav-underline">
        <li class="nav-item">
            <a class="nav-link title-api " aria-current="page" href="#">{{props.Tshirt}}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link title-api " href="#">{{props.shirt}}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link title-api " href="#">{{props.pants}}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link title-api " href="#">{{props.jeans}}</a>
        </li>
    </ul>
</template> -->
<script setup lang="ts">
const props = defineProps(['shirt', 'pants', 'jeans', 'Tshirt', 'selectedType'])
const emit = defineEmits(['change-type'])

const selectType = (type: string) => {
    emit('change-type', type)
}
</script>

<template>
    <ul class="nav nav-underline">
        <li class="nav-item">
            <a class="nav-link title-api" :class="{ active: props.selectedType === 'all' }" aria-current="page" href="#"
                @click.prevent="selectType('all')">All</a>
        </li>
        <li class="nav-item">
            <a class="nav-link title-api" :class="{ active: props.selectedType === 'Tshirt' }" href="#"
                @click.prevent="selectType('Tshirt')">{{ props.Tshirt }}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link title-api" :class="{ active: props.selectedType === 'shirt' }" href="#"
                @click.prevent="selectType('shirt')">{{ props.shirt }}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link title-api" :class="{ active: props.selectedType === 'pants' }" href="#"
                @click.prevent="selectType('pants')">{{ props.pants }}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link title-api" :class="{ active: props.selectedType === 'jeans' }" href="#"
                @click.prevent="selectType('jeans')">{{ props.jeans }}</a>
        </li>
    </ul>
</template>