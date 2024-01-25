<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ myName }} {{ store.state.age }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

// Access the Vuex store
const store = useStore();

// Use ref to create reactive state variables
const myName = ref(store.state.name); // Replace 'myModule' and 'myState' with your actual module and state names
</script>
