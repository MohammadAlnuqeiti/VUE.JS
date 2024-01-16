<template>
  <div class="products">
    <h2>Products</h2>
    <table id="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.title }}</td>
          <td>{{ p.category }}</td>
          <td>{{ p.brand }}</td>
          <td><img :src="p.images[0]" width="75px" height="50px" /></td>
        </tr>
      </tbody>
    </table>
    <hr />
    <h2>mixins</h2>
    <table id="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(s, i) in students" :key="i">
          <td>{{ s.name }}</td>
          <td>{{ s.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import setMixin from "../mixins/stMixin";
export default {
  mixins: [setMixin],
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>

<style>
#table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#table td,
#table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#table tr:hover {
  background-color: #ddd;
}

#table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
