<template>
  <div class="life">
    <h2>Life Cycle Hooks</h2>
    <p>age : {{ age }}</p>
    <button @click="age++">inc age</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "mohammad",
      age: "25",
    };
  },
  beforeCreate() {
    console.log("before created");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("before updated");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    confirm("before unmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
<style scoped>
h2 {
  color: red;
}
</style>
