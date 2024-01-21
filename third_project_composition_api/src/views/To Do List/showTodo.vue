<template>
  <div class="add-todo">
    <h2>Show To Do</h2>
    <table id="todo">
      <thead>
        <tr>
          <th>#</th>
          <th>text</th>
          <th>from</th>
          <th>to</th>
          <th>current date</th>
          <th>completed</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody v-if="todoList.length > 0">
        <tr
          v-for="(t, i) in todoList"
          :key="t.id"
          :style="`${
            t.isCompleted ? 'background : #00d699' : 'background : trensparent'
          }`"
        >
          <td>{{ t.id }}</td>
          <td>{{ t.text }}</td>
          <td>{{ t.from }}</td>
          <td>{{ t.to }}</td>
          <td>{{ new Date(t.currentDate).toLocaleDateString() }}</td>
          <td class="complete" @click="markCompleted(t)">
            {{ t.isCompleted ? "in completed" : "&#10003;" }}
          </td>
          <td class="delete" @click="deleteTodo(i)">X</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="7">Not To Do Show</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Data
const todoList = ref([]);

//Hooks
onMounted(() => {
  getTodoList();
});

// Get to do list
const getTodoList = () => {
  if (localStorage.getItem("todoList")) {
    todoList.value = JSON.parse(localStorage.getItem("todoList"));
  }
};

// Delete to do
const deleteTodo = (index) => {
  if (confirm("Are you sure, you want delete this to do?")) {
    todoList.value.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList.value));
  }
};

// Mark completed
const markCompleted = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
};
</script>

<style>
#todo {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#todo td,
#todo th {
  border: 1px solid #ddd;
  padding: 8px;
}

#todo tr:nth-child(even) {
  background-color: #f2f2f2;
}

#todo tr:hover {
  background-color: #ddd;
}

#todo th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #04aa6d;
  color: white;
  text-align: center;
}
.delete {
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
}
.delete:hover {
  color: red;
}
.complete {
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
}
.complete:hover {
  color: green;
}
</style>
