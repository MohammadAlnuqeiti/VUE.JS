<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <span
        ><strong style="text-transform: uppercase">{{ props.name }}</strong>
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/mixin">Mixins</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/hooks">Life Cycle</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add-todo"
              >Add To Do List</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/show-todo"
              >Show To Do</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, inject, onMounted } from "vue";

const emitter = inject("emitter");

onMounted(() => {
  emitter.on("globalEmitt", (data) => {
    console.log(data);
  });
});
//props
const props = defineProps({
  name: {
    type: String,
    require: true,
  },
});
</script>
