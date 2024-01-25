<template>
    <div class="checkout">
        <div class="row d-flex flex-row justify-content-center">
            <div class="col-md-6">
                <div class="mt-5">
                    <h4 class="text-muted small" v-text="'Transaction ID: ' + order.transaction_id"></h4>
                    <h2 class="text-muted">Thank you for your purchase</h2>
                    <table class="table">
                        <thead class="table-success">
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="product in order.products"
                                :key="product.id"
                            >
                                <td class="p-4">{{ product.name }}</td>
                                <td class="p-4">{{ product.pivot.quantity }}</td>
                                <td class="p-4">
                                    {{ productTotalPrice(product) }}
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4 fw-bold">Total Amount</td>
                                <td class="p-4 fw-bold">{{ orderQuantity }}</td>
                                <td class="p-4 fw-bold">{{ orderTotal }}</td>
                                <td class="w-10 text-right"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const productTotalPrice = (product) => {
    let mount = product.price * product.pivot.quantity;
    let price = mount / 100;
    return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};
const order = store.state.order;

const orderQuantity = computed(() => {
    return store.state.order.products.reduce((acc, item) => acc + Number(item.pivot.quantity), 0);
});
const orderTotal = computed(() => {
    let mount = store.state.order.products.reduce(
        (acc, item) => acc + (item.price * Number(item.pivot.quantity)),
        0
    );
    mount = mount / 100;
    return mount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
});
</script>
