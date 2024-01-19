<template>
  <div class="container-lg">
    <div class="card">
      <div class="card-header">
        <h4>
          Students
          <RouterLink to="/students/create" class="btn btn-primary float-end">
            Add Student
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Created at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id">
              <td>{{ student.id }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.course }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>{{ student.created_at }}</td>
              <td style="display: flex; gap: 10px; justify-content: center">
                <RouterLink
                  :to="'/students/' + student.id + '/edit'"
                  class="btn btn-success"
                >
                  Edit
                </RouterLink>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="deletStudent(student.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentsView",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    async getStudents() {
      await axios
        .get("http://localhost:8000/api/students")
        .then((res) => (this.students = res.data.students));
    },
    deletStudent(id) {
      if (confirm("Are you sure, you want delete this data?")) {
        axios
          .delete(`http://localhost:8000/api/students/${id}/delete`)
          .then((res) => {
            this.getStudents();
            alert(res.data.message);
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message);
              }
            }
          });
      }
    },
  },
};
</script>
