<template>
  <div class="product">
    <h2>this is product page</h2>
    <button @click="getProduct">get product</button>

    <ul>
      <li
        v-for="product in store.state.ProductsModules.products"
        :key="product.id"
      >
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const getProduct = () => {
  store.dispatch("doGetProducts");
};
</script>
