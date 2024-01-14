<template>
  <nav class="my-nav">
    <div class="logo">
      <router-link to="/"><img :src="logo" alt="logo" /></router-link>
    </div>
    <div class="links">
      <ul>
        <li v-for="(link, i) in links" :key="i">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="buttons">
      <span><router-link to="/login">Login</router-link></span>
      <span><router-link to="/signUp">SignUp</router-link></span>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/logo-white.png"),
      links: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "User",
          path: "/user",
        },
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Slot",
          path: "/slot",
        },
        {
          name: "Form",
          path: "/form",
        },
        {
          name: "Api",
          path: "/api",
        },
      ],
    };
  },
};
</script>

<style scoped>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: rgb(0, 0, 0);
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  flex-wrap: wrap;
}
.my-nav a {
  color: white;
  text-decoration: none;
}
.links ul {
  display: flex;
  justify-content: center;
  gap: 15px;
  list-style: none;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}
.logo img {
  width: 75px;
  height: 75px;
}

h2 {
  color: red;
}
</style>
