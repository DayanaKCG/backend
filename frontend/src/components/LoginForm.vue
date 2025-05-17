<template>
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Correo" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
      <p v-if="error" style="color:red">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '../services/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    await login(email.value, password.value);
    router.push('/dashboard');
  } catch (e) {
    error.value = 'Credenciales inválidas';
  }
};
</script>
