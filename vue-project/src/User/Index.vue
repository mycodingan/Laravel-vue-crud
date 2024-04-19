<template>
  <div>
    <navbar/>
    <main>
      <div class="container mt-4">
        <router-link to="/user/create" class="btn btn-secondary btn-lg">Add Data</router-link>
        <div class="row mt-5">
          <div v-if="users.length === 0" class="col-md-12">
            <p>No users found.</p>
          </div>
          <div v-else v-for="user in users" :key="user.id" class="col-md-4 mb-3">
            <div class="card">
              <img :src="getImageUrl(user)" class="card-img-top" alt="User Image">
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
  </div>
</template>

<script setup>
import axios from 'axios';
import navbar from '@/asset/navbar.vue';
import { ref, onMounted } from 'vue';

const users = ref([]);

const fetchUsers = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Access token not found.');
      return;
    }
    const response = await axios.get('http://192.168.11.149:8000/api/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response);
    users.value = response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    alert('Failed to fetch users. Please try again.');
  }
};

const deleteUser = async (userId) => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Access token not found.');
      return;
    }
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

const getImageUrl = (user) => {
  return user.gambar ? `http://192.168.11.149:8000/${user.gambar}` : '';
};

onMounted(fetchUsers);
</script>
