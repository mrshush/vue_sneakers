<script setup>
// import { text_data } from './data.js'
const formattedPrice = (price) => price.toLocaleString()
defineProps({
    title: String,
    imageUrl: String,
    price: Number,
    isFavorite: Boolean,
    isAdded: Boolean
})
</script>

<template lang="pug">

div()
    div(class="relative border border-slate-100 bg-white rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl")
        button(class="absolute left-8 top-8")
            img(:src="!isFavorite ? '/like-1.svg' : '/like-2.svg'", alt="", srcset="")
        img(:src="imageUrl", alt="", srcset="")
        p(class="mt-2 font-thin text-sm") {{ title }}

        div(class="flex justify-between mt-5")
            div(class="flex flex-col")
                span(class="text-slate-400 uppercase text-[11px]") Цена:
                span(class="text-sm font-bold") {{ formattedPrice(price) }} руб.

            button
                img(:src="!isAdded ? '/plus.svg' : '/checked.svg'", alt="", srcset="")

</template>
