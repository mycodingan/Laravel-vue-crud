<template>
  <navbar/>
    <main>
      <div class="container mt-4">
        <router-link to="/user/create" class="btn btn-secondary btn-lg ">Add data</router-link>
        <div class="row container mt-5">
          <div class="col-md-4 mb-3" v-for="user in users" :key="user.id">
            <div class="card">
              <img :src="user.gambar" class="card-img-top" alt="User Image">
              <div class="card-body">
                <h5 class="card-title">{{ user.name }}</h5>
                <p class="card-text">Email: {{ user.email }}</p>
                <p class="card-text">Level: {{ user.level }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <router-link :to="{ name: 'userEdit', params: { id: user.id } }" class="btn btn-primary">Edit</router-link>
                  <button @click="deleteUser(user.id)" class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import axios from 'axios';
  import navbar from '@/asset/navbar.vue';
  import { ref, onMounted } from 'vue';
  
  const users = ref([]);
  
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get('http://192.168.11.149:8000/api/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      users.value = response.data.data.map(users => ({
      ...users,
      gambar: `http://192.168.11.149:8000${users.gambar}` 
    }));    } catch (error) { 
      console.error('Error fetching users:', error);
    }
  };
  
  const deleteUser = async (userId) =>  
   {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete(`http://192.168.11.149:8000/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('User deleted successfully!');
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user. Please try again.');
    }
  };
  
  onMounted(fetchUsers);
  </script>
  