<script setup>
import { onMounted, ref } from 'vue'

import vueHeader from './components/vueHeader.vue'
import cardList from './components/cardList.vue'
import drawer from './components/drawer.vue'
import axios from 'axios'

const items = ref([])

onMounted(async () => {
    try {
        const { data }  = await axios.get('https://e0974f446e228210.mokky.dev/items');
        items.value = data;
    } catch (err) {
        console.log(err);
    }
})
</script>

<template lang="pug">
// drawer
div(class="w-4/5 m-auto mt-14 rounded-xl shadow-xl bg-white")
    vueHeader

    section(class="p-10")
        div(class="flex justify-between items-center")
            h2(class="text-3xl font-bold") Все кроссовки
            div(class="search flex items-center")
                select(class="mr-1 px-4 py-1.5 border rounded-[10px] font-thin font-inter outline-none text-[14px] border-slate-100")
                    option Сначала дешевые
                    option(selected) Сначала популярные
                input(type="text", value="", placeholder="Поиск...", class="font-inter font-thin px-4 py-1.5 pl-10 bg-[url('/search.svg')] bg-no-repeat bg-[10px] border border-slate-100 rounded-[10px] text-[14px] outline-none focus:border-gray-400")
    cardList(:items="items")

</template>
