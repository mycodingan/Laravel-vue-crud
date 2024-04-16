<template>
  <main>
    <Navbar/>
  </main>
  <div class="container mt-4">
      <div class="row">
        <div v-for="student in students" :key="student.id" class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <img :src="student.gambar" alt="">
              <h5 class="card-title">{{ student.nama }}</h5>
              <p class="card-text">No Absen: {{ student.no_absen }}</p>
              <p class="card-text">Kelas: {{ student.kelas }}</p>
              <p class="card-text">Jurusan: {{ student.jurusan }}</p>
              <router-link :to="{ name: 'siswaEdit', params: { id: student.id } }" class="btn btn-primary m-3">Edit</router-link>
              <button @click="deleteStudent(student.id)" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
        <router-link to="/create/siswa" class="btn btn-secondary">Add data</router-link>
      </div>

  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref, onMounted } from   'vue';
  import Navbar from "../asset/navbar.vue"
  
  const students = ref([]);
  
  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem('accessToken'); 
      const response = await axios.get('http://192.168.11.149:8000/api/siswa/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      students.value = response.data.data;
    } catch (error) {   
      console.error('Error fetching students:', error);
    }
  };
  
  const deleteStudent = async (studentId) => { 
    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete(`http://192.168.11.149:8000/api/siswa/${studentId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        } 
      });
      alert('Student deleted successfully!');
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Failed to delete student. Please try again.');
    }
  };
  
  onMounted(fetchStudents);
  </script>
  
      