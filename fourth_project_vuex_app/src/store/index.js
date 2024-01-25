import { createStore } from "vuex";
import ProductsModules from "@/store/products/ProductsModules";
export default createStore({
  strict: true,
  state: {
    name: "mohammad alnuqeiti",
    age: 25,
    specialization: "civil engineering",
    graduation: 2021,
  },
  getters: {
    getGraduationDate(state) {
      return (
        "My specialization is: " +
        state.specialization +
        "and graduation date is: " +
        state.graduation
      );
    },
  },
  mutations: {
    changeAge(state) {
      state.age = 30;
    },
  },
  actions: {},
  modules: {
    ProductsModules,
  },
});
