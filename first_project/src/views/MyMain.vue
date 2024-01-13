<template>
  <div class="my-main">
    <h2>this is maim page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      obcaecati quas quibusdam aspernatur dignissimos. Voluptate error incidunt,
      vel corrupti aspernatur atque nemo, eligendi sint adipisci, aliquam dicta
      voluptatibus necessitatibus minus?
    </p>
    <hr />

    <LifeCycle />
  </div>
</template>

<script>
import LifeCycle from "../components/LifeCycle.vue";
export default {
  name: "MyMain",
  components: {
    LifeCycle,
  },
};
</script>
