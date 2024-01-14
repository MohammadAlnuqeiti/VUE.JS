<template>
  <div class="form">
    <h2>Form Page</h2>

    <MyForm />
  </div>
</template>

<script>
import MyForm from "../components/MyForm.vue";

export default {
  name: "FormPage",
  components: {
    MyForm,
  },
};
</script>
