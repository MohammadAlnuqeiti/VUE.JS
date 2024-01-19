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
            v-model="model.students.name"
          />
        </div>
        <div class="mb-3">
          <label for="">Course</label>
          <input
            type="text"
            class="form-control"
            v-model="model.students.course"
          />
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="email"
            class="form-control"
            v-model="model.students.email"
          />
        </div>
        <div class="mb-3">
          <label for="">Phone</label>
          <input
            type="number"
            class="form-control"
            v-model="model.students.phone"
          />
        </div>
        <div class="mb-3">
          <button type="button" @click="saveStudent" class="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "studentCreate",
  data() {
    return {
      errorList: "",
      model: {
        students: {
          name: "",
          course: "",
          email: "",
          phone: "",
        },
      },
    };
  },
  methods: {
    saveStudent() {
      let myThis = this;
      axios
        .post("http://localhost:8000/api/students", this.model.students)
        .then(() => {
          this.model.students = {
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
            }
          }
        });
    },
  },
};
</script>
