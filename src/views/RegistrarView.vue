<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="validarFormulario">
      <div class="form">
        <label for="name">Nombre</label>
        <Field id="name" name="name" type="text" placeholder="Name" />
        <ErrorMessage name="name"></ErrorMessage>
      </div>
      <div class="form">
        <label for="email">email</label>
        <Field id="email" name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { schema } from "../modules/registros/validationSchema";

const validarFormulario = (values) => {
  alert("Formulario enviado");
};
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
