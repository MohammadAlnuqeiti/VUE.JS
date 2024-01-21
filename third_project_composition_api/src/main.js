import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import mitt from "mitt";

// emitt config
const emitter = mitt();
const vueApp = createApp(App);
vueApp.provide("emitter", emitter).use(router).mount("#app");

vueApp.directive("maxSize", (e, d) => {
  e.style.fontSize = d.value + "px";
});
