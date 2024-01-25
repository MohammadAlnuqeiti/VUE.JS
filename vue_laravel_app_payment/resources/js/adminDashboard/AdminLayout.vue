<template>
    <NavBar />
    <SideBar />
    <router-view></router-view>
</template>

<script setup>
import SideBar from "../adminDashboard/components/SideBar.vue";
import NavBar from "../adminDashboard/components/NavBar.vue";
</script>

<style>
.router-link-exact-active  {
    color: #b00000 !important;
}
</style>
