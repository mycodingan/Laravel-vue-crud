<template>
  <main>
    <Navbar />
  </main>
  <div class="container mt-4">
    <router-link to="/siswa/create" class="btn btn-primary">Add data</router-link>
    <div class="row container mt-5">
      <div v-for="student in paginatedStudents" :key="student.id" class="col-md-4 mb-3">
        <div class="card">
          <img :src="student.gambar" class="card-img-top" alt="Student Image">
          <div class="card-body">
            <h5 class="card-title">{{ student.nama }}</h5>
            <p class="card-text">No Absen: {{ student.no_absen }}</p>
            <p class="card-text">Kelas: {{ student.kelas }}</p>
            <p class="card-text">Jurusan: {{ student.jurusan }}</p>
            <router-link :to="{ name: 'siswaEdit', params: { id: student.id } }"
              class="btn btn-primary m-3">Edit</router-link>
            <button type="button" class="btn btn-danger" :data-bs-target="'#exampleModal' + student.id">
              Delete
            </button>

            <!-- modal -->
            <div :id="'exampleModal' + student.id" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure you want to delete this data?</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="deleteStudent(student.id)" class="btn btn-primary">Yes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center mt-3">
        <li class="page-item" :class="{ 'disabled': currentPage === 10 }">
          <button class="page-link" @click="previousPage">Previous</button>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ 'active': currentPage === page }">
          <button class="page-link" @click="gotoPage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
          <button class="page-link" @click="nextPage">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import Navbar from "../asset/navbar.vue"

const currentPage = ref(1);
const pageSize = 10;
const totalPages = ref(0);
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
    totalPages.value = Math.ceil(students.value.length / pageSize);
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

const previousPage = () => {
  if (currentPage.value > 10) {
    currentPage.value--;
    fetchStudents();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchStudents();
  }
};

const gotoPage = (page) => {
  currentPage.value = page;
  fetchStudents();
};

const paginatedStudents = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return students.value.slice(startIndex, endIndex);
});

onMounted(fetchStudents);
</script>
