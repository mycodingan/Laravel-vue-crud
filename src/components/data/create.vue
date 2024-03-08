<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Create New Student</h5>
              <form @submit.prevent="createStudent">
                <div class="mb-3">
                  <label for="noAbsen" class="form-label">No Absen</label>
                  <input type="number" class="form-control" id="noAbsen" v-model="newStudent.no_absen" required>
                </div>
                <div class="mb-3">
                  <label for="nama" class="form-label">Nama</label>
                  <input type="text" class="form-control" id="nama" v-model="newStudent.nama" required>
                </div>
                <div class="mb-3">
                  <label for="kelas" class="form-label">Kelas</label>
                  <input type="text" class="form-control" id="kelas" v-model="newStudent.kelas" required>
                </div>
                <div class="mb-3">
                  <label for="jurusan" class="form-label">Jurusan</label>
                  <input type="text" class="form-control" id="jurusan" v-model="newStudent.jurusan" required>
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
              </form>
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
        newStudent: {
          no_absen: '',
          nama: '',
          kelas: '',
          jurusan: ''
        }
      };
    },
    methods: {
      async createStudent() {
        try {
          await axios.post('http://192.168.11.149:8000/api/siswa/', this.newStudent);
          alert('Student created successfully!');
          this.newStudent = {
            no_absen: '',
            nama: '',
            kelas: '',
            jurusan: ''
          };
        } catch (error) {
          console.error('Error creating student:', error);
          alert('Failed to create student. Please try again.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  