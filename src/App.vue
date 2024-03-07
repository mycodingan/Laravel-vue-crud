<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <RouterLink to="/" class=" navbar-brand">Crud josshua wahyu</RouterLink>
      </div>
    <button
    class=" navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarHeader">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarHeader">
      <ul class=" navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
        <li class="nav-item">
          <a class="nav-link" style="cursor: pointer;"> Logout</a>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
<script>
export default {
  data() {
    return {
      message_success_post: "",
      user: null
    }
  }
}
</script>