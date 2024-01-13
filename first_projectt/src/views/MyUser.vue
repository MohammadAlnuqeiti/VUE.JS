<template>
  <div class="my-user">
    <MyUser :users="users" :isActive="isActive" @updateActive="changeActive" />
  </div>
</template>

<script>
import MyUser from "../components/ListUser.vue";
export default {
  data() {
    return {
      users: ["ahmed", "mohammad", "abed", "ali"],
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
