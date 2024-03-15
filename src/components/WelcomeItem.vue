<script setup>
import Navbar from '../components/nav.vue';
</script>
<template>
  <main>
    <Navbar/>
  </main>
  <div>
    <router-link to="/create" class="btn btn-secondary">Add data</router-link>
  </div>
  <div class="container mt-4">
    <div class="row">
      <div v-for="student in students" :key="student.id" class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ student.nama }}</h5>
            <p class="card-text">No Absen: {{ student.no_absen }}</p>
            <p class="card-text">Kelas: {{ student.kelas }}</p>
            <p class="card-text">Jurusan: {{ student.jurusan }}</p>
            <router-link :to="{ name: 'EditStudent', params: { id: student.id } }" class="btn btn-primary m-3   ">Edit</router-link>
            <button @click="deleteStudent(student.id)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      students: []
    };
  },
  mounted() {
    this.fetchStudents();
  },
  methods: {
    async fetchStudents() {
      try {
        const response = await axios.get('http://192.168.11.149:8000/api/siswa/');
        this.students = response.data.data;
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    },
    async deleteStudent(studentId) {
      try {
        await axios.delete(`http://192.168.11.149:8000/api/siswa/${studentId}`);
        alert('Student deleted successfully!');
        this.fetchStudents();
      } catch (error) {
        console.error('Error deleting student:', error);
        alert('Failed to delete student. Please try again.');
      }
    }
  }
};
</script>

<style scoped>
</style>
