import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"), // lazy load
    meta: {
      title: "About",
    },
  },
  {
    path: "/mixin",
    name: "mixins",
    component: () => import("../views/MixinsView.vue"), // lazy load
    meta: {
      title: "Mixins",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
