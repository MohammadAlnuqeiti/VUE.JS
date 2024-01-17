<template>
  <h2>Profile Page</h2>

  <p>name is : mohammad alnuqeiti</p>
  <p>id is : {{ $route.params.userId }}</p>

  <ul
    style="display: flex; list-style: none; gap: 15px; justify-content: center"
  >
    <li>
      <router-link :to="{ name: 'my_learning' }">My Learning</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'my_wishlist' }">My Wishlist</router-link>
    </li>
  </ul>
  <hr />

  <router-view />
</template>

<!-- <script></script> -->
