import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const vueApp = createApp(App);
vueApp.use(router).mount("#app");
vueApp.directive("maxSize", (el, o) => {
  el.style.fontSize = o.value + "px";
});
vueApp.directive("changeColor", (el, o) => {
  el.style.color = o.value;
});
