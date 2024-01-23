import axios from "axios";
import { createStore } from "vuex";
export default createStore({
    strict: true,
    state: {
        products: [],
        cart: [],
        order: {},
    },
    getters: {},
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addToCart(state, product) {
            let checkProductInCart = state.cart.findIndex(
                (item) => item.slug === product.slug
            ); // اذا لقت العنصر راح ترجع الاندكس الخاص فيه لو ما لقته راح ترجع -1
            if (checkProductInCart != -1) {
                state.cart[checkProductInCart].quantity++;
                return;
            }
            product.quantity = 1;
            state.cart.push(product);
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
        },
        setCart(state, cart) {
            state.cart = cart;
        },
        setOrder(state, order) {
            state.order = order;
        },
    },
    actions: {
        getProducts({ commit }) {
            axios
                .get("/api/products")
                .then((res) => {
                    commit("setProducts", res.data);
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        clearCart({ commit }) {
            commit("setCart", {});
        },
    },
    modules: {},
});
