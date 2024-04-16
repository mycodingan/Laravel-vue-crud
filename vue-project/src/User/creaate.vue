<template>
    <div>
      <h1>Create User</h1>
      <form @submit.prevent="createUser">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" v-model.trim="newUser.name" id="name" name="name" class="form-control">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model.trim="newUser.email" id="email" name="email" class="form-control">
        </div>
        <div class="mb-3">
          <label for="level" class="form-label">Level</label>
          <input type="text" v-model.trim="newUser.level" id="level" name="level" class="form-control">
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Profile Image</label>
          <input type="file" accept="image/*" @change="handleImageUpload" id="image" name="image" class="form-control">
        </div>
        <img v-if="newUser.image" :src="newUser.image" alt="User Image" class="mb-3" style="max-width: 200px;">
        <button type="submit" class="btn btn-primary">Create User</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  
  const newUser = ref({});
  
  const createUser = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.post('http://192.168.11.149:8000/api/users', newUser.value, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('User created successfully!');
      router.push('/user');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user. Please try again.');
    }
  };
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      newUser.value.image = e.target.result;
    };
    reader.readAsDataURL(file);
  };
  </script>
  