<template>
  <div class="form-template">
    <form action="" @submit.prevent="sendData">
      <div class="element">
        <label for="name">neme</label>
        <input type="text" name="name" v-model.lazy="user.name" />
        <!-- <p>result is {{ user.name }}</p> -->
      </div>
      <div class="element">
        <label for="age">age</label>
        <input type="number" name="age" v-model.lazy="user.age" />
        <!-- <p>result is {{ user.age }}</p> -->
      </div>
      <div class="element">
        <label for="email">email</label>
        <input type="email" name="email" v-model.lazy="user.email" />
        <!-- <p>result is {{ user.email }}</p> -->
      </div>
      <div class="element">
        <h3>Sports</h3>
        <label for="tennis">tennis</label>
        <input
          type="checkbox"
          name="tennis"
          v-model.lazy="user.sports.tennis"
        />
        <label for="football">football</label>
        <input
          type="checkbox"
          name="football"
          v-model.lazy="user.sports.football"
        />
        <!-- <p>result is {{ user.sports }}</p> -->
      </div>
      <div class="element">
        <h3>Gender</h3>
        <label for="male">male</label>
        <input
          type="radio"
          name="male"
          value="male"
          v-model.lazy="user.gender"
        />
        <label for="female">female</label>
        <input
          type="radio"
          name="female"
          value="female"
          v-model.lazy="user.gender"
        />
        <!-- <p>result is {{ user.gender }}</p> -->
      </div>
      <div class="element">
        <label for="bio">bio</label>
        <textarea name="bio" id="bio" v-model.lazy="user.bio"></textarea>
        <!-- <p>result is {{ user.bio }}</p> -->
      </div>
      <div class="element">
        <label for="grade">grade</label>
        <select name="grade" id="grade" v-model="user.grade">
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
        </select>
        <!-- <p>result is {{ user.grade }}</p> -->
      </div>
      <div class="actions"></div>
      <div class="actions"></div>
      <div class="actions"></div>
      <div class="actions" style="width: 100%">
        <input
          type="submit"
          value="submit"
          style="width: 100%; cursor: pointer"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: "",
        email: "",
        sports: {
          tennis: "",
          football: "",
        },
        gender: "",
        bio: "",
        grade: "",
      },
      users: [],
    };
  },
  methods: {
    sendData() {
      this.users.push(this.user);
      this.user = {
        name: "",
        age: "",
        email: "",
        sports: {
          tennis: "",
          football: "",
        },
        gender: "",
        bio: "",
        grade: "",
      };
    },
  },
};
</script>
<style>
.form-template form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
.form-template form p {
  color: rgb(175, 206, 63);
}
</style>
