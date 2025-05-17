<template>
  <div>
    <h2>Dashboard</h2>
    <p v-if="user">Bienvenido, {{ user.name }}</p>
    <button @click="handleLogout">Cerrar sesión</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUser, logout } from '../services/auth';
import { useRouter } from 'vue-router';

const user = ref(null);
const router = useRouter();

const handleLogout = async () => {
  await logout();
  router.push('/');
};

onMounted(async () => {
  try {
    user.value = await getUser();
  } catch (e) {
    router.push('/');
  }
});
</script>
