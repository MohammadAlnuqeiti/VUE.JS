<template>
  <div class="home">
    <h1 v-colorize="'red'">This is an home page</h1>
    <p v-colorize="'green'" v-maxSize="20">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, est
      facere autem veritatis error maiores quia eveniet molestiae consequuntur
      vel dicta iure beatae harum ducimus praesentium alias asperiores soluta
      accusamus.
    </p>
  </div>
</template>

<script setup>
const vColorize = {
  mounted: (ele, data) => {
    ele.style.color = data.value;
  },
};
</script>
