import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import StudentView from "../views/Students/StudentView.vue";
import StudentCreate from "../views/Students/StudentCreate.vue";
import StudentUpdate from "../views/Students/StudentUpdate.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/students",
    name: "students",
    component: StudentView,
  },
  {
    path: "/students/create",
    name: "studentsCreate",
    component: StudentCreate,
  },
  {
    path: "/students/:userId/edit",
    name: "StudentUpdate",
    component: StudentUpdate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
