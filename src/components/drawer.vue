<script setup>
import cart from './cart.vue'
</script>

<template lang="pug">

div(class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70")
div(class="bg-white flex flex-col w-96 h-full fixed right-0 top-0 z-20 p-8")
    div(class="flex items-center gap-5 mb-10")
        svg(width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition hover:-translate-x-1")
            path(d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
            path(d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")

        h2(class="font-bold text-2xl") Корзина

    cart

    div(class="mt-auto")
        div(class="mb-3 flex justify-between items-end text-base")
            span Итого:
            div(class="relative mx-2 -top-1 flex-1 border-t border-dashed")
            span(class="font-bold text-base") 21 498 руб.
        div(class="flex justify-between mb-10")
            span Налог 5%:
            div(class="relative mx-2 -top-1 flex-1 border-b border-dashed")
            span(class="font-bold text-base") 1074 руб.

        button(class=" hover:bg-lime-600 transition w-full py-3 bg-lime-500 text-white rounded-2xl bg-[url('/arrow-next.svg')] bg-no-repeat bg-right px-5 bg-origin-content text-base") Оформить заказ

</template>
