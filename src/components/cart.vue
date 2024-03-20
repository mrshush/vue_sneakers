<script setup>
import { text_data } from './data.js'
const formattedPrice = (price) => price.toLocaleString()
</script>

<template lang="pug">

ul(v-for="(item, index) in text_data" :key="index")
    li(class="flex mb-5 items-center border border-slate-200 p-4 rounded-xl text-sm")
        img(:src="item.image", alt="", class="w-16 mr-2")
        div(class="flex justify-between")
            div(class="mr-2")
                p {{ item.title }}
                b {{ formattedPrice(item.price) }} руб.
            img(src="/close.svg", alt="", class="opacity-40 hover:opacity-100 transition cursor-pointer")

</template>
