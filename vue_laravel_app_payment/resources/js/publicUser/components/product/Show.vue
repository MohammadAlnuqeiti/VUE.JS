<template>
    <div class="row mt-3">
        <div class="d-flex flex-row justify-content-around">
            <div class="col-md-6">
                <img
                    class="card-img"
                    src="https://dummyimage.com/450x400/bbb/555"
                    alt="Vans"
                />
            </div>

            <div class="col-md-5" v-if="product">
                <h6 class="subtitle mb-2 text-muted">
                    <span
                        class="me-2"
                        v-for="category in product.categories"
                        :key="category.id"
                        >{{ category.name }}</span
                    >
                </h6>
                <h4 class="title">{{ product.name }}</h4>

                <p class="card-text text-justify">{{ product.description }}</p>
                <hr />

                <div
                    class="buy d-flex justify-content-between align-items-center"
                >
                    <div class="price text-success">
                        <h4 class="mt-4">
                            {{ formatCurrency(product.price) }}
                        </h4>
                    </div>
                    <button
                        class="btn btn-danger mt-3"
                        @click="store.commit('addToCart', product)"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
onMounted(() => {
    getProducts();
});

const getProducts = () => {
    store.dispatch("getProducts");
};

const product = computed(() => {
    return store.state.products.find(
        (product) => product.slug === route.params.slug
    );
});

//convert price
const formatCurrency = (amount) => {
    amount = amount / 100;
    return amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};
</script>
