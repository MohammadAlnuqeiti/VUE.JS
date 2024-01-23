import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../publicUser/HomeView.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/products",
        name: "products.index",
        component: () => import("../publicUser/components/product/index.vue"),
    },
    {
        path: "/products/:slug",
        name: "products.show",
        component: () => import("../publicUser/components/product/show.vue"),
    },
    {
        path: "/checkout",
        name: "order.checkout",
        component: () => import("../publicUser/components/order/Checkout.vue"),
    },
    {
        path: "/summary",
        name: "order.summary",
        component: () => import("../publicUser/components/order/Summary.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
