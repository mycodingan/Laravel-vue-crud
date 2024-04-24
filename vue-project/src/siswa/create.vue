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
                  <input type="text" class="form-control" id="nama" v-model.trim="newStudent.nama" required>
                </div>
                <div class="mb-3">
                  <label for="no_absen" class="form-label">No Absen</label>
                  <input type="text" class="form-control" id="no_absen" v-model.trim="newStudent.no_absen" required>
                </div>
                <div class="mb-3">
                  <label for="kelas" class="form-label">Kelas</label>
                  <input type="text" class="form-control" id="kelas" v-model.trim="newStudent.kelas" required>
                </div>
                <div class="mb-3">
                  <label for="jurusan" class="form-label">Jurusan</label>
                  <input type="text" class="form-control" id="jurusan" v-model.trim="newStudent.jurusan" required>
                </div>
                <div class="mb-3">
                  <label for="gambar" class="form-label">Gambar</label>
                  <input type="file" class="form-control" id="gambar" @change="handleFileUpload" accept="image/*" required>
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
  jurusan: '',
  gambar: null,
});

const addStudent = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const formData = new FormData();
    formData.append('gambar', newStudent.value.gambar); 

    formData.append('nama', newStudent.value.nama);
    formData.append('no_absen', newStudent.value.no_absen);
    formData.append('kelas', newStudent.value.kelas);
    formData.append('jurusan', newStudent.value.jurusan);

    const response = await axios.post('http://192.168.11.149:8000/api/siswa/', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    alert('data');
    clearForm();
  } catch (error) {
    console.error('Error adding student:', error);
    alert('gagal');
  }
};

const clearForm = () => {
  newStudent.value.nama = '';
  newStudent.value.no_absen = '';
  newStudent.value.kelas = '';
  newStudent.value.jurusan = '';
  newStudent.value.gambar = null; 
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    newStudent.value.gambar = file;
  }
};
</script>
