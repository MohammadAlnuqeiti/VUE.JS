<template>
    <div>
        <Navbar />
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Navbar from "../publicUser/components/Navbar.vue";
</script>
