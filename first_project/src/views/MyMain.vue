<template>
  <div class="my-main">
    <h2 v-maxSize="35" v-changeColor="'blue'">this is maim page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      obcaecati quas quibusdam aspernatur dignissimos. Voluptate error incidunt,
      vel corrupti aspernatur atque nemo, eligendi sint adipisci, aliquam dicta
      voluptatibus necessitatibus minus?
    </p>
    <hr />

    <LifeCycle />

    <hr />

    <h2>Provide and Inject</h2>

    <p>age in parent : {{ age }}</p>

    <button @click="age++">click</button>
    <ProvideInject />
  </div>
</template>

<script>
import ProvideInject from "../components/ProvideInject.vue";
import LifeCycle from "../components/LifeCycle.vue";
export default {
  name: "MyMain",
  data() {
    return {
      name: "mohammad alnuqeiti",
      age: 25,
    };
  },
  components: {
    LifeCycle,
    ProvideInject,
  },
  // provide: {
  //   name: "mohammad",
  // },
  methods: {
    sayHi() {
      console.log("Hi");
    },
  },
  provide() {
    return {
      name: this.name,
      age: this.age,
      myFunction: this.sayHi,
    };
  },
};
</script>
