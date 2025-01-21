<template>
  <div>
    <h2>Lista de Tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTask" />
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
        <button @click="removeTask">Borrar Tarea</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const tareas = ref([]);
const nuevaTarea = ref("");

const addTask = () => {
  tareas.value.push(nuevaTarea.value);
  nuevaTarea.value = "";
};

const removeTask = (index) => {
  tareas.value.splice(index);
};
</script>

<style scoped></style>
