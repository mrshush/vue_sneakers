export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  if (count.value > 0) {
    count.value--
  }
}

//function updateCount(event) {
//  count.value = Number(event.target.value)
// }

</script>

<template lang="pug">

    h1 {{ count }}
    button(@click="increment") Нажми на меня!
    button(@click="decrement") Нажми на меня!
    input(v-model="count")
    
</template>

<style scoped>
.text {
  background: red;
}
</style>
