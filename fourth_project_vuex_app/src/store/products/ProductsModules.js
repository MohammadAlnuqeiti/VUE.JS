export default {
  state: {
    products: "",
  },
  getters: {},
  mutations: {
    getProducts(state, products) {
      state.products = products;
      console.log(state.products);
    },
  },
  actions: {
    async doGetProducts(context) {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          context.commit("getProducts", data.products);
        });
    },
  },
};
