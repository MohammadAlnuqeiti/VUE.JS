<template>
  <div class="my-user">
    <h2>List User</h2>
    <ul>
      <li v-for="(user, i) in Users" :key="i">{{ user }}</li>
    </ul>

    <button @click="deleteUser">change ref</button>

    <p>my active is : {{ isActive }}</p>
    
    <button @click="$emit('updateActive', false)">change active</button>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
  },
  emits: ["updateActive"],
  data() {
    return {
      Users: this.users,
    };
  },
  methods: {
    deleteUser() {
      this.Users.shift();
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  gap: 15px;
  list-style: none;
  font-size: 1.25rem;
  font-weight: bold;
  color: rgb(133, 43, 43);
}
</style>
