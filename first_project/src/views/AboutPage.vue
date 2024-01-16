<template>
  <div class="about">
    <h2 v-color="'blue'">About</h2>
    <MyUser :users="users" :isActive="isActive" @updateActive="changeActive" />
    <hr />
    <MyUser :users="users" :isActive="isActive" @updateActive="changeActive" />
    <hr />
    <h2>computed</h2>
    <p>full name is : {{ fullName }}</p>
    <p>accumulative number is : {{ calcNums }}</p>

    <input type="text" v-model="search" />
    <table id="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(s, i) in searchSt" :key="i">
          <td>{{ s.name }}</td>
          <td>{{ s.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import setMixin from "../mixins/stMixin";
import MyUser from "../components/ListUser.vue";
export default {
  mixins: [setMixin],
  directives: {
    color(el, o) {
      el.style.color = o.value;
    },
  },
  data() {
    return {
      users: ["asad", "roshdi", "asem"],
      firstNmae: "mohammad",
      lastName: "alnuqeiti",
      myArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      search: "",
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
  computed: {
    fullName() {
      return `${this.firstNmae} ${this.lastName}`;
    },
    calcNums() {
      return this.myArray.reduce((acc, cur) => acc + cur);
    },
    getOldSt() {
      return this.students.filter((st) => st.age >= 14);
    },
    searchSt() {
      return this.students.filter((st) => st.name.match(this.search));
    },
  },
};
</script>
<style scoped>
h2 {
  color: red;
}
</style>
