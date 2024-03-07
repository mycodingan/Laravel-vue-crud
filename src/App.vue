<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link to="/" class="navbar-brand">Crud josshua wahyu</router-link>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarHeader"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarHeader">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li v-if="user" class="nav-item">
          <a class="nav-link" @click="logout">Logout</a>
        </li>
        <li v-else class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const user = null;

const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<style scoped>
</style>
