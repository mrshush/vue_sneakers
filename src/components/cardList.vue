<script setup>
import card from './card.vue'

defineProps({
    items: Array
})

</script>

<template lang="pug">

div(class="grid grid-cols-4 p-10 gap-5")
    card(v-for="item in items",
        :key="item.id",
        :title="item.title",
        :imageUrl="item.imageUrl",
        :price="item.price",
        :isAdded="false",
        :isFavorite="false")

</template>
