<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Students</h4>
      </div>
      <div class="card-body">
        <ul
          v-if="Object.keys(errorList).length > 0"
          class="alert alert-warning"
        >
          <li v-for="(error, i) in errorList" :key="i" class="mb-0 ms-3">
            {{ error[0] }}
          </li>
        </ul>
        <div class="mb-3">
          <label for="">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="model.student.name"
          />
        </div>
        <div class="mb-3">
          <label for="">Course</label>
          <input
            type="text"
            class="form-control"
            v-model="model.student.course"
          />
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="email"
            class="form-control"
            v-model="model.student.email"
          />
        </div>
        <div class="mb-3">
          <label for="">Phone</label>
          <input
            type="number"
            class="form-control"
            v-model="model.student.phone"
          />
        </div>
        <div class="mb-3">
          <button type="button" @click="updateStudent" class="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      errorList: "",
      model: {
        student: {
          name: "",
          course: "",
          email: "",
          phone: "",
        },
      },
    };
  },
  mounted() {
    this.getStudent();
  },
  methods: {
    getStudent() {
      axios
        .get(
          `http://localhost:8000/api/students/${this.$route.params.userId}/edit`
        )
        .then((res) => (this.model.student = res.data.student))
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
    updateStudent() {
      var myThis = this;
      axios
        .put(
          `http://localhost:8000/api/students/${this.$route.params.userId}/edit`,
          this.model.student
        )
        .then(() => {
          this.model.student = {
            name: "",
            course: "",
            email: "",
            phone: "",
          };
          this.errorList = "";
          this.$router.push({ name: "students" });
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 422) {
              myThis.errorList = error.response.data.errors;
            } else if (error.response.status == 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
  },
};
</script>
