<template>
  <div class="com">
    <h3>this is component</h3>

    <p>{{ work }}</p>
    <p>{{ city }}</p>
    <button @click="emits('handleClick')">click</button>
    <button @click="sayHello">say hello</button>
  </div>
</template>

<script setup>
import { defineEmits, inject } from "vue";

// inject
const work = inject("work");
const city = inject("city");
const sayHello = inject("sayHi");

//emits
const emits = defineEmits(["handleClick"]);
</script>
