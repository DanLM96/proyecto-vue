<template>
  <div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
      <li><router-link to="/Counter">Contador</router-link></li>
      <li><router-link to="/TaskList">Lista de Tareas</router-link></li>
      <li><router-link to="/Registrar">Formulario</router-link></li>
    </ul>
  </div>
</template>

<script setup></script>

<style>
.sidebar {
  width: 200px;
  background-color: lightgray;
  color: black;
  padding: 20px;
}

.sidebar ul {
  background-color: black;
}
</style>
