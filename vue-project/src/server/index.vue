<template>
    <!-- NAvbar -->
    <Navbar />
    <div class="container mt-4">
        <div class="row mt-5">
            <div v-for="student in students" :key="student.id" class="col-md-4 mb-3">
                <div v-for="student in students" :key="student.id" class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">{{ server.nama_koneksi }}</p>
                            <p class="card-text">{{ server.driver }}</p>
                            <p class="card-text">{{ server.host }}</p>
                            <p class="card-text">{{ server.port }}</p>
                            <p class="card-text">{{ server.username }}</p>
                            <p class="card-text">{{ server.password }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import Navbar from "../asset/navbar.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const server = ref([]);

const fetchServer = async () => {
    try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://192.168.11.149:8000/api/server/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}
const deleteServer = async (serverId) => {
    try{
        const token = localStorage.getItem('accessToken');
        await axios.delete(`http://192.168.11.149:8000/api/siswa/${serverId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    alert('Student deleted successfully!');
    fetchServer();
  } catch (error) {
    console.error('Error deleting student:', error);
    alert('Failed to delete student. Please try again.');
  }
};

onMounted(fetchServer);
</script>