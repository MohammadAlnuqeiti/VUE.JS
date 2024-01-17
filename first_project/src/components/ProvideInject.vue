<template>
  <div class="provide">
    <h2>provie inject component</h2>

    <p>name is : {{ name }}</p>
    <p>age is : {{ age }}</p>
    <button @click="myFunction">say hi</button>
  </div>
</template>

<script>
export default {
  inject: ["name", "age", "myFunction"],
};
</script>
