<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="name">Nombre</label>
        <Field
          v-model="name"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
        />
        <ErrorMessage name="name"></ErrorMessage>
      </div>
      <div class="form">
        <label for="email">email</label>
        <Field
          v-model="email"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
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
import { useRegistrarStore } from "@/modules/registros/stores/registrarStore";
import { ref } from "vue";

const registrarStore = useRegistrarStore();
const name = ref("");
const email = ref("");

const onSubmit = () => {
  registrarStore.guardarRegistro(name.value, email.value);
  console.log("Formulario enviado");
};
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
