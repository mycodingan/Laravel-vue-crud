<template>
  <div>
    <h1>Edit User</h1>
    <form @submit.prevent="updateUser">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" v-model.trim="editedUser.name" id="name" name="name" class="form-control">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model.trim="editedUser.email" id="email" name="email" class="form-control">
      </div>
      <div class="mb-3">
        <label for="level" class="form-label">Level</label>
        <input type="text" v-model.trim="editedUser.level" id="level" name="level" class="form-control">
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Profile Image</label>
        <input type="file" accept="image/*" @change="handleImageUpload" id="image" name="image" class="form-control">
      </div>
      <img v-if="editedUser.image" :src="editedUser.image" alt="User Image" class="mb-3" style="max-width: 200px;">
      <button type="submit" class="btn btn-primary">Update User</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const editedUser = ref({});

const fetchUser = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const userId = router.currentRoute.value.params.id;
    const response = await axios.get(`http://192.168.11.149:8000/api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    editedUser.value = response.data.data;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

const updateUser = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const userId = router.currentRoute.value.params.id;
    await axios.put(`http://192.168.11.149:8000/api/users/${userId}`, editedUser.value, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    alert('User updated successfully!');
    router.push('/user');
  } catch (error) {
    console.error('Error updating user:', error);
    alert('Failed to update user. Please try again.');
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    editedUser.value.image = e.target.result;
  };
  reader.readAsDataURL(file);
};

onMounted(fetchUser);
</script>
