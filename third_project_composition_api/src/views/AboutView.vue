<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>my name is : {{ name }}</p>
    <p>my age is : {{ age }}</p>

    <button @click="incAge">incAge</button>

    <hr />
    <p>computed</p>

    <p>{{ currentYear }}</p>
    <p>{{ totYear }}</p>

    <hr />

    <AboutCom @handle-click="executeFunction" />
  </div>
</template>

<script setup>
import AboutCom from "@/components/AboutCom.vue";
import { ref, computed, provide } from "vue";

const name = ref("Mohammad Alnuqeiti");
const age = ref(25);
const year = ref(2024);
const work = ref("civil engineering");
const city = ref("aqaba");

function incAge() {
  age.value++;
}

// computed
const currentYear = computed(() => `the current year is ${year.value}`);

const totYear = computed(
  () => `the current year is ${year.value + 5} after 5years`
);

const executeFunction = () => {
  console.log("execute emits");
};

//provide
const sayHello = () => {
  console.log("sey hello");
};
provide("work", work.value);
provide("city", city.value);
provide("sayHi", sayHello);
</script>
