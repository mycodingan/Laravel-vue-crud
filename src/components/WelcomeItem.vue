<template>
  <div class="container mt-4">
    <div class="row">
      <div v-for="student in students" :key="student.id" class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ student.nama }}</h5>
            <p class="card-text">No Absen: {{ student.no_absen }}</p>
            <p class="card-text">Kelas: {{ student.kelas }}</p>
            <p class="card-text">Jurusan: {{ student.jurusan }}</p>
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
        // memasukan data data yang berasal dari api
        const response = await axios.get('http://192.168.11.149:8000/api/siswa/');
        this.students = response.data.data;
      } catch (error) {
        console.error('data nya error:', error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    }
  }
};
</script>

<style scoped>
/* Tambahkan styling jika diperlukan */
</style>
