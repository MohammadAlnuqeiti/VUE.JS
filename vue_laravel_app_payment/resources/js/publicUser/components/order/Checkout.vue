<template>
    <div class="checkout">
        <div class="row d-flex flex-row justify-content-center">
            <div class="col-md-8">
                <div class="mt-5">
                    <table class="table">
                        <thead class="table-success">
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(product, index) in dataCart"
                                :key="product.id"
                            >
                                <td class="p-4">{{ product.name }}</td>
                                <td class="p-4">{{ product.quantity }}</td>
                                <td class="p-4">
                                    {{ productTotalPrice(product) }}
                                </td>
                                <td class="w-10 text-right">
                                    <button
                                        class="btn btn-sm btn-danger mt-2"
                                        @click="
                                            store.commit(
                                                'removeFromCart',
                                                index
                                            )
                                        "
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4 fw-bold">Total Amount</td>
                                <td class="p-4 fw-bold">{{ cartQuantity }}</td>
                                <td class="p-4 fw-bold">{{ cartTotal }}</td>
                                <td class="w-10 text-right"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="mt-5 mb-5">
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="firstname">First Name</label>
                            <input
                                type="text"
                                class="form-control"
                                :class="[
                                    {
                                        'is-invalid': errorFor(
                                            'customer.first_name'
                                        ),
                                    },
                                ]"
                                name="first_name"
                                v-model="customer.first_name"
                                :disabled="paymentProcessing"
                            />
                            <span class="form-error">{{
                                errorFor("customer.first_name")
                            }}</span>
                        </div>

                        <div class="col-md-6 form-group">
                            <label for="lastname">Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                :class="[
                                    {
                                        'is-invalid':
                                            errorFor('customer.last_name'),
                                    },
                                ]"
                                name="last_name"
                                v-model="customer.last_name"
                                :disabled="paymentProcessing"
                            />
                            <span class="form-error">{{
                                errorFor("customer.last_name")
                            }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 form-group">
                            <label for="email">Email</label>
                            <input
                                type="text"
                                class="form-control"
                                :class="[
                                    {
                                        'is-invalid':
                                            errorFor('customer.email'),
                                    },
                                ]"
                                name="email"
                                v-model="customer.email"
                                :disabled="paymentProcessing"
                            />
                            <span class="form-error">{{
                                errorFor("customer.email")
                            }}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 form-group">
                            <label for="address">Address</label>
                            <input
                                type="text"
                                class="form-control"
                                name="address"
                                :class="[
                                    {
                                        'is-invalid':
                                            errorFor('customer.address'),
                                    },
                                ]"
                                v-model="customer.address"
                                :disabled="paymentProcessing"
                            />
                            <span class="form-error">{{
                                errorFor("customer.address")
                            }}</span>
                        </div>
                        <div class="col-md-4 form-group">
                            <label for="city">City</label>
                            <input
                                type="text"
                                class="form-control"
                                :class="[
                                    { 'is-invalid': errorFor('customer.city') },
                                ]"
                                name="city"
                                v-model="customer.city"
                                :disabled="paymentProcessing"
                            />
                            <span class="form-error">{{
                                errorFor("customer.city")
                            }}</span>
                        </div>
                        <div class="col-md-2 form-group">
                            <label for="state">State</label>
                            <input
                                type="text"
                                class="form-control"
                                :class="[
                                    {
                                        'is-invalid':
                                            errorFor('customer.state'),
                                    },
                                ]"
                                name="state"
                                v-model="customer.state"
                                :disabled="paymentProcessing"
                            />
                            <span class="form-error">{{
                                errorFor("customer.state")
                            }}</span>
                        </div>
                        <div class="col-md-2 form-group">
                            <label for="zip_code">Zip</label>
                            <input
                                type="text"
                                class="form-control"
                                :class="[
                                    {
                                        'is-invalid':
                                            errorFor('customer.zip_code'),
                                    },
                                ]"
                                name="zip_code"
                                v-model="customer.zip_code"
                                :disabled="paymentProcessing"
                            />
                            <span class="form-error">{{
                                errorFor("customer.zip_code")
                            }}</span>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 form-group">
                            <label for="card-element">Credit Card Info</label>
                            <div id="card-element"></div>
                        </div>
                    </div>

                    <div class="text-center">
                        <buttton
                            class="btn btn-md btn-primary ps-5 pe-5 mt-3"
                            @click="processPayment"
                            :disabled="paymentProcessing"
                        >
                            {{ paymentProcessing ? "Processing" : "Pay Now" }}
                        </buttton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "vue-router";
const store = useStore();
const customer = ref({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
});

let paymentProcessing = ref(false);
let stripe = ref({});
let cardElement = ref({});
let errors = ref(null);
const router = useRouter();
const dataCart = store.state.cart;

const productTotalPrice = (product) => {
    let mount = product.price * product.quantity;
    let price = mount / 100;
    return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};

onMounted(async () => {
    console.log(customer.value);
    stripe = await loadStripe(
        "pk_test_51ObqWGHzApTkbT8wrsI0zrdKQi0Aj66SJq0IgX0tdrF9Bqumy6hINtRInrwxQYt8XwSqut2I00ipkL4TqjrgDStr001cMW3RFW"
    );
    const elements = stripe.elements();
    cardElement.value = elements.create("card", {
        classes: { base: "form-control" },
    });

    cardElement.value.mount("#card-element");
});

const processPayment = async () => {
    paymentProcessing = true;

    const { paymentMethod, error } = await stripe.createPaymentMethod(
        "card",
        cardElement.value,
        {
            billing_details: {
                name: customer.first_name + " " + customer.last_name,
                email: customer.email,
                address: {
                    line1: customer.address,
                    city: customer.city,
                    state: customer.state,
                    postal_code: customer.zip_code,
                },
            },
        }
    );

    if (error) {
        paymentProcessing = false;
        console.error(error);
    } else {
        customer.value.payment_method_id = paymentMethod.id;
        customer.value.amount = store.state.cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        customer.value.cart = JSON.stringify(store.state.cart);

        axios
            .post("/api/purchase", customer.value)
            .then((response) => {
                paymentProcessing = false;

                store.commit("setOrder", response.data);
                store.dispatch("clearCart");

                router.push({ name: "order.summary" });
            })
            .catch((error) => {
                paymentProcessing = false;
                console.error(error);
            });
    }
};
const errorFor = (field) => {
    return errors.value != null && errors[field] ? errors[field][0] : null;
};
const cartQuantity = computed(() => {
    return store.state.cart.reduce((acc, item) => acc + item.quantity, 0);
});
const cartTotal = computed(() => {
    let mount = store.state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    mount = mount / 100;
    return mount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
});
</script>
