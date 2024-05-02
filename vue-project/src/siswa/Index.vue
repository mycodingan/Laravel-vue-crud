<template>
  <main>
    <Navbar />
  </main>
  <div class="container mt-4">
    <router-link to="/siswa/create" class="btn btn-primary">Add data</router-link>
    <div class="row container mt-5">
      <div v-for="student in students" :key="student.id" class="col-md-4 mb-3">
        <div class="card ">
          <img :src="student.gambar" class="card-img-top" alt="Student Image">
          <div class="card-body">
            <h5 class="card-title">{{ student.nama }}</h5>
            <p class="card-text">No Absen: {{ student.no_absen }}</p>
            <p class="card-text">Kelas: {{ student.kelas }}</p>
            <p class="card-text">Jurusan: {{ student.jurusan }}</p>
            <router-link :to="{ name: 'siswaEdit', params: { id: student.id } }"
              class="btn btn-primary m-3">Edit</router-link>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Delete
            </button>

            <!-- modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content"> 
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">apa anda yakin mau menghapus data</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="deleteStudent(student.id)" class="btn btn-primary">yes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
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
    students.value = response.data.data.map(student => ({
      ...student,
      gambar: `http://192.168.11.149:8000${student.gambar}`
    }));
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
