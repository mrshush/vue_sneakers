<script setup>
defineProps({
  title: String,
  price: Number
})
</script>

<template lang="pug">
    .product 
        h2 Товар: {{ title }} 
        h3 Цена: {{ price }}
        slot
</template>

<style>
.product {
  border: 1px solid blue;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
