<template>
  <div class="hooks">
    <h2>Life Cycle Hooks</h2>

    <p>{{ counter }}</p>
    <button @click="incCounter">Update Counter</button>
    <br />
    <br />
    <p>Fire Emitt</p>
    <button @click="fireEmit">fire global emitt</button>
  </div>
</template>

<script setup>
import {
  inject,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref,
} from "vue";

const counter = ref(0);

const incCounter = () => {
  counter.value++;
};

onBeforeMount(() => {
  console.log("on before mount");
});
onMounted(() => {
  console.log("on mounted");
});
onBeforeUpdate(() => {
  console.log("on before updated");
});
onUpdated(() => {
  console.log("on updated");
});

const emitter = inject("emitter");

const fireEmit = () => {
  emitter.emit("globalEmitt", "hello");
};
</script>
