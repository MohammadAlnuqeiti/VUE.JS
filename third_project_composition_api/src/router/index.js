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
  {
    path: "/hooks",
    name: "hooks",
    component: () => import("../views/LifeCycle.vue"), // lazy load
    meta: {
      title: "Life Cycle",
    },
  },
  {
    path: "/add-todo",
    name: "add-todo",
    component: () => import("../views/To Do List/addTodo.vue"), // lazy load
    meta: {
      title: "Add To Do",
    },
  },
  {
    path: "/show-todo",
    name: "show-todo",
    component: () => import("../views/To Do List/showTodo.vue"), // lazy load
    meta: {
      title: "Show To Do",
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
