<template>
  <h2>Mixins & Watch</h2>
  <h4>{{ counter }}</h4>
  <button @click="decrease">Decrease</button>
  <button @click="increase">Increase</button>
  <br />
  <button @click="myArr.push(counter)">Push to array</button>
</template>

<script setup>
import { ref, watch } from "vue";
import counterFunction from "@/mixins/counter";

const myArr = ref([]);
const { counter, decrease, increase } = counterFunction();

// premeteve data type
watch(
  () => counter.value,
  (newVal, oldVal) => {
    console.log(newVal);
    console.log(oldVal);
  }
);

//reference data type
watch(
  () => myArr.value,
  (newVal) => {
    console.log(newVal);
  },
  { deep: true }
);
</script>
