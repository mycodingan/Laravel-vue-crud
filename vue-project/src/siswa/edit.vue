<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Edit Student</h5>
            <form @submit.prevent="editStudent">
              <div class="mb-3">
                <label for="noAbsen" class="form-label">No Absen</label>
                <input type="number" class="form-control" id="noAbsen" v-model="editedStudent.no_absen" required>
              </div>
              <div class="mb-3">
                <label for="nama" class="form-label">Nama</label>
                <input type="text" class="form-control" id="nama" v-model="editedStudent.nama" required>
              </div>
              <div class="mb-3">
                <label for="kelas" class="form-label">Kelas</label>
                <input type="text" class="form-control" id="kelas" v-model="editedStudent.kelas" required>
              </div>
              <div class="mb-3">
                <label for="jurusan" class="form-label">Jurusan</label>
                <input type="text" class="form-control" id="jurusan" v-model="editedStudent.jurusan" required>    
              </div>
              <div class="mb-3">
                <label for="gambar" class="form-label">Gambar</label>
                <input type="file" class="form-control" id="gambar" @change="handleFileUpload">
              </div>
              <button type="submit" class="btn btn-primary m-3">Update</button>
              <router-link to="/siswa" class="btn btn-primary">Back</router-link>
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
      editedStudent: {
        no_absen: '',
        nama: '',
        kelas: '',
        jurusan: '',
        gambar: null 
      }
    };
  },
  methods: {
    async editStudent() {
      try {
        const studentId = this.$route.params.id;
        const token = localStorage.getItem('accessToken');
        const formData = new FormData();

        formData.append('no_absen', this.editStudent.no_absen);
        formData.append('nama', this.editStudent.nama);
        formData.append('kelas', this.editStudent.kelas);
        formData.append('jurusan', this.this.editStudent.jurusan);

        if (this.editedStudent.gambar) {
          formData.append('gambar', this.editedStudent.gambar);
        }

        await axios.put(`http://192.168.11.149:8000/api/siswa/${studentId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data' 
          }
        });
        alert('Student updated successfully!');
        this.$router.push('/siswa'); 
      } catch (error) {
        console.error('Error updating student:', error);
        alert('Failed to update student. Please try again.');
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.editedStudent.gambar = file;
      }
    },
    async fetchStudent() {
      try {
        const studentId = this.$route.params.id;
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`http://192.168.11.149:8000/api/siswa/${studentId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.editedStudent = response.data.data;
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    }
  },
  created() {
    this.fetchStudent();
  }
};
</script>

<style scoped>
</style>
