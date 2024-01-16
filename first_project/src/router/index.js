import { createRouter, createWebHistory } from "vue-router";
// import MyMain from "../views/MyMain.vue"; or
import MyMain from "@/views/MyMain.vue";
import MyUser from "@/views/MyUser.vue";
import Login from "@/views/LoginPage.vue";
import Signup from "../views/SignUp.vue";
import About from "../views/AboutPage.vue";
import Slot from "../views/SlotPage.vue";
import Form from "../views/FormPage.vue";
import Api from "../views/ApiData.vue";
import Profile from "../views/ProfilePage.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: MyMain,
    meta: {
      title: "Home",
      requiresLogin: false,
      requiresSignup: false,
    },
  },
  {
    name: "User",
    path: "/user",
    component: MyUser,
    meta: {
      title: "User",
      requiresLogin: false,
      requiresSignup: false,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      title: "Login",
      requiresLogin: true,
      requiresSignup: false,
    },
  },
  {
    name: "Signup",
    path: "/signup",
    component: Signup,
    meta: {
      title: "Signup",
      requiresLogin: false,
      requiresSignup: true,
    },
  },
  {
    name: "About",
    path: "/about",
    component: About,
    meta: {
      title: "About",
      requiresLogin: false,
      requiresSignup: false,
    },
  },
  {
    name: "Slot",
    path: "/slot",
    component: Slot,
    meta: {
      title: "Slot",
      requiresLogin: false,
      requiresSignup: false,
    },
  },
  {
    name: "form_page",
    path: "/form",
    component: Form,
    meta: {
      title: "Form",
      requiresLogin: false,
      requiresSignup: false,
    },
  },
  {
    name: "api_page",
    path: "/api",
    component: Api,
    meta: {
      title: "Api",
      requiresLogin: false,
      requiresSignup: false,
    },
  },
  {
    name: "profile_page",
    path: "/profile/:userId",
    component: Profile,
    meta: {
      title: "Profile",
      requiresLogin: false,
      requiresSignup: false,
    },
  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  document.title = to.meta.title;
});

export default router;
