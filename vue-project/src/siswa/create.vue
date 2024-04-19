<template>
  <Navbar/>
  <main>
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Create Student Data</div>
            <div class="card-body">
              <form @submit.prevent="addStudent">
                <div class="mb-3">
                  <label for="nama" class="form-label">Nama</label>
                  <input type="text" class="form-control" id="nama" v-model="newStudent.nama" required>
                </div>
                <div class="mb-3">
                  <label for="no_absen" class="form-label">No Absen</label>
                  <input type="text" class="form-control" id="no_absen" v-model="newStudent.no_absen" required>
                </div>
                <div class="mb-3">
                  <label for="kelas" class="form-label">Kelas</label>
                  <input type="text" class="form-control" id="kelas" v-model="newStudent.kelas" required>
                </div>
                <div class="mb-3">
                  <label for="jurusan" class="form-label">Jurusan</label>
                  <input type="text" class="form-control" id="jurusan" v-model="newStudent.jurusan" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import Navbar from "../asset/navbar.vue";

const newStudent = ref({
  nama: '',
  no_absen: '',
  kelas: '',
  jurusan: ''
});

const addStudent = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await axios.post('http://192.168.11.149:8000/api/siswa/', newStudent.value, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    alert('Student added successfully!');
    clearForm();
  } catch (error) {
    console.error('Error adding student:', error);
    alert('Failed to add student. Please try again.');
  }
};

const clearForm = () => {
  newStudent.value.nama = '';
  newStudent.value.no_absen = '';
  newStudent.value.kelas = '';
  newStudent.value.jurusan = '';
};
</script>
