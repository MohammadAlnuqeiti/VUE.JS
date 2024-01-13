<template>
  <div class="about">
    <h2>About</h2>
    <MyUser :users="users" :isActive="isActive" @updateActive="changeActive" />
    <hr />
    <MyUser :users="users" :isActive="isActive" @updateActive="changeActive" />
  </div>
</template>

<script>
import MyUser from "../components/ListUser.vue";
export default {
  data() {
    return {
      users: ["asad", "roshdi", "asem"],
      isActive: true,
    };
  },
  components: {
    MyUser,
  },
  methods: {
    changeActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style scoped>
h2 {
  color: red;
}
</style>
