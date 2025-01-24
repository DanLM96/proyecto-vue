<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ name }}</h3>
    <h3>Email: {{ email }}</h3>
    <h2>Barra Lateral</h2>
    <ul>
      <li><router-link to="/Counter">Contador</router-link></li>
      <li><router-link to="/TaskList">Lista de Tareas</router-link></li>
      <li><router-link to="/Registrar">Formulario</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useRegistrarStore } from "@/modules/registros/stores/registrarStore";
import { ref, watch } from "vue";
const registrarStore = useRegistrarStore();
const name = ref(registrarStore.name.value);
const email = ref(registrarStore.email.value);
watch(
  () => registrarStore.name,
  (newValue) => {
    name.value = newValue;
  }
);

watch(
  () => registrarStore.email,
  (newValue) => {
    email.value = newValue;
  }
);
</script>

<style>
.sidebar {
  width: 200px;
  background-color: lightgray;
  color: black;
  /*padding: 20px;*/
}

.sidebar ul {
  background-color: black;
}
</style>
