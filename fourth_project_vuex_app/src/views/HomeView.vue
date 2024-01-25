<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p>{{ computedState }}</p>
    <p>{{ getGraduationDate }}</p>
    <!-- <p>{{ this.$store.getters.getGraduationDate }}</p> -->
    <button @click="store.commit('changeAge')">fire mutation</button>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

// Access the Vuex store
const store = useStore();

const getGraduationDate = store.getters.getGraduationDate;
// Use computed to create reactive computed properties
const computedState = computed(
  () => `my name is ${store.state.name} and age ${store.state.age}`
);

// You can also use onMounted to perform actions when the component is mounted
onMounted(() => {
  console.log("Component mounted");
});
</script>
