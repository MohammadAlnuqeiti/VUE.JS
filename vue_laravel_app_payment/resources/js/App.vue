<template>
    <div>
        <Navbar />
        <div class="container">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup>
import Navbar from "../js/publicUser/components/Navbar.vue";
</script>
