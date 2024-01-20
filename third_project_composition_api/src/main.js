import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const vueApp = createApp(App);
vueApp.use(router).mount("#app");

vueApp.directive("maxSize", (e, d) => {
  e.style.fontSize = d.value + "px";
});
