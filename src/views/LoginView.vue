<template>
    <div class="container-fluid d-flex justify-content-center align-items-center h-100">
      <div class="card border-info-subtle-800 w-50">
        <div class="card-body p-4">
          <h1 class="text-center mb-4">Login</h1>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                v-model="email"
                id="email"
                name="email"
                placeholder="Email"
                :class="{ 'is-invalid': message_email.length > 0 }"
                class="form-control rounded-pill py-3 px-4"
              />
              <div v-if="message_email.length > 0" class="invalid-feedback">{{ message_email }}</div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                v-model="password"
                id="password"
                name="password"
                placeholder="Password"
                :class="{ 'is-invalid': message_password.length > 0 }"
                class="form-control rounded-pill py-3 px-4"
              />
              <div v-if="message_password.length > 0" class="invalid-feedback">{{ message_password }}</div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary rounded-pill px-5 py-3">Login</button>
              <p><small>Belum punya Akun? <router-link to="/register" class="navbar-brand text-primary">Daftar sekarang</router-link></small></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        message_email: '',
        message_password: ''
      };
    },
    methods: {
      submitForm() {
        if (!this.email) {
          this.message_email = 'Email is required';
        } else {
          this.message_email = '';
        }
  
        if (!this.password) {
          this.message_password = 'Password is required';
        } else {
          this.message_password = '';
        }
  
        if (this.email && this.password) {
          axios.post('http://192.168.11.149:8000/api/login', {
              email: this.email,
              password: this.password
            })
            .then(response => {
                console.log(response.data);
                this.$router.push('/');
            })
            .catch(error => {
              console.error(error);
            });
        }
      }
    },
    watch: {
      email() {
        this.message_email = '';
      },
      password() {
        this.message_password = '';
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
  