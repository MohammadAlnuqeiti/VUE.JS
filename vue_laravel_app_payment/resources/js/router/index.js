import { createRouter, createWebHistory } from "vue-router";
import UserLayout from "../publicUser/UserLayout.vue";

const routes = [
    {
        path: "/",
        name: "UserLayout",
        component: () => import("../publicUser/UserLayout.vue"),
        children: [
            {
                path: "/",
                name: "home",
                component: () => import("../publicUser/view/HomeView.vue"),
            },
            {
                path: "/products",
                name: "products.index",
                component: () =>
                    import("../publicUser/components/product/index.vue"),
            },
            {
                path: "/products/:slug",
                name: "products.show",
                component: () =>
                    import("../publicUser/components/product/show.vue"),
            },
            {
                path: "/checkout",
                name: "order.checkout",
                component: () =>
                    import("../publicUser/components/order/Checkout.vue"),
            },
            {
                path: "/summary",
                name: "order.summary",
                component: () =>
                    import("../publicUser/components/order/Summary.vue"),
            },
        ],
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("../adminDashboard/AdminLayout.vue"),
        children: [
            {
                path: "",
                name: "dashboard",
                component: () =>
                    import("../adminDashboard/view/DoasboardView.vue"),
            },
            {
                path: "products",
                name: "product.view",
                component: () =>
                    import("../adminDashboard/view/products/ProductView.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
