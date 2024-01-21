<template>
  <div class="add-todo" style="width: 70%; margin: 50px auto">
    <h2>Add To Do</h2>
    <form @submit.prevent="addTodo">
      <input
        type="text"
        v-model="TodoOpject.text"
        placeholder="Enter to do"
      /><br />
      <input type="date" v-model="TodoOpject.from" placeholder="from" />
      <input type="date" v-model="TodoOpject.to" placeholder="to" /><br />
      <input type="submit" value="add" />
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Data
const todoList = ref([]);
const TodoOpject = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  currentDate: "",
  isCompleted: false,
});

// Methods
//Hooks
onMounted(() => {
  updatedTodo();
});
const addTodo = () => {
  TodoOpject.value.id = todoList.value.length + 1;
  TodoOpject.value.currentDate = new Date();
  todoList.value.push(TodoOpject.value);
  addTOLocalstorage();
  alert("To Do Added Successfully");
  TodoOpject.value = {
    id: "",
    text: "",
    from: "",
    to: "",
    currentDate: "",
    isCompleted: false,
  };
};

// Add to localStorage
const addTOLocalstorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
};

// Update to do lis
const updatedTodo = () => {
  if (localStorage.getItem("todoList")) {
    todoList.value = JSON.parse(localStorage.getItem("todoList"));
  }
};
</script>
<style>
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
