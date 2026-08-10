<script setup lang="ts">
const props = defineProps(['selectedType'])
const emit = defineEmits(['change-type'])

const productStore = useProductStore()
const { types } = str(productStore)

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
        <li v-for="type in types" :key="type.id" class="nav-item">
            <a style="cursor: pointer;" class="nav-link title-api" :class="{ active: props.selectedType === type.id }"
                aria-current="page" href="#" @click.prevent="selectType(type.id)">
                {{ type.name }}
            </a>
        </li>
    </ul>
</template>
