<template>
    <div v-if="showSuccessAlert" class="alert alert-success alert-dismissible fade show" role="alert">
    Login Berhasil! Anda akan diarahkan ke halaman utama dalam 3 detik.
    <button type="button" class="btn-close" @click="showSuccessAlert = false"></button>
  </div>
  <div class="container-fluid d-flex justify-content-center align-items-center h-100 mt-5">
    <div class="card border-info-subtle-800 w-50">
      <div class="card-body p-4">
        <h1 class="text-center mb-4">Login</h1>
        <!-- Form -->
        <form @submit.prevent="submitForm">
          <!-- Email Input -->
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" v-model.trim="email" id="email" name="email" placeholder="Email"
              :class="{ 'is-invalid': message_email }" class="form-control rounded-pill py-3 px-4" />
            <div v-if="message_email" class="invalid-feedback">{{ message_email }}</div>
          </div>
          <!-- Password Input -->
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" v-model.trim="password" id="password" name="password" placeholder="Password"
              :class="{ 'is-invalid': message_password }" class="form-control rounded-pill py-3 px-4" />
            <div v-if="message_password" class="invalid-feedback">{{ message_password }}</div>
          </div>
          <!-- Login Button -->
          <div class="text-center">
            <button type="submit" class="btn btn-primary rounded-pill px-5 py-3">Login</button>
            <p><small>Belum punya Akun? <router-link to="/register" class="navbar-brand text-primary">Daftar
                  sekarang</router-link></small></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Success Alert Popup -->

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      message_email: '',
      message_password: '',
      token: '',
      showSuccessAlert: false
    };
  },
  methods: {
    async submitForm() {
      this.message_email = '';
      this.message_password = '';

      if (!this.email) {
        this.message_email = 'Email is required';
      }

      if (!this.password) {
        this.message_password = 'Password is required';
      }

      if (this.email && this.password) {
        try {
          const response = await axios.post('http://192.168.11.149:8000/api/login', {
            email: this.email,
            password: this.password
          });
          this.token = response.data.token;
          localStorage.setItem('accessToken', this.token);
          this.showSuccessAlert = true;
          setTimeout(() => {
            this.showSuccessAlert = false;
            this.$router.push('/');
          }, 3000);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
};
</script>

<style scoped>
.invalid-feedback {
  color: #dc3545;
  font-size: 80%;
}

.card {
  max-width: 400px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>
