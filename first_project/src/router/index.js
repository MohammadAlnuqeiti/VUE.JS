import { createRouter, createWebHashHistory } from "vue-router";
// import MyMain from "../views/MyMain.vue"; or
import MyMain from "@/views/MyMain.vue";
import MyUser from "@/views/MyUser.vue";
import Login from "@/views/LoginPage.vue";
import SignUo from "../views/SignUp.vue";
import About from "../views/AboutPage.vue";
import Slot from "../views/SlotPage.vue";

const routes = [
  {
    name: "my_main",
    path: "/",
    component: MyMain,
  },
  {
    name: "my_user",
    path: "/user",
    component: MyUser,
  },
  {
    name: "login_page",
    path: "/login",
    component: Login,
  },
  {
    name: "signup_page",
    path: "/signup",
    component: SignUo,
  },
  {
    name: "about_page",
    path: "/about",
    component: About,
  },
  {
    name: "slot_page",
    path: "/slot",
    component: Slot,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
