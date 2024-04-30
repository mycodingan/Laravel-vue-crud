<template>
    <main>
     <Navbar/>
    </main>
     <div class="container mt-4">
       <div class="row container mt-5">
         <div v-for="barang in barangs  " :key="barang" class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
            <h5 class="card-title">{{ student.nama_barang }}</h5>
            <p class="card-text">code: {{ student.code_barang}}</p>
            <p class="card-text">harga: {{ student.harga_barang }}</p>
            <p class="card-text">jumlah: {{ student.jumlah_barang }}</p>
            <button @click="deleteBarang(student.id)" class="btn btn-danger">Delete</button>
          </div>
          </div>
         </div>
       </div>
     </div>
    <div>
        
    </div>
</template>

<script setup>
import Navbar from '../asset/navbar.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const barangs = ref([]);

const fetchBarang = async () => {
    try {
        const token = localStorage.getItem('accesToken');
        // fungsi dibaeah ini untuk mengambil data dari api
        const response= await axios.get('http://apilaravel.com/api/barang',{
            headers: {
                Authorization: 'Bearer ${token}'
            }
        });
    }catch (error){
        console.error('error untuk memunculkan data');
    } 
};
const deleteBarang = async (barangId) => {
  try {
    const token = localStorage.getItem('accessToken');
    await axios.delete(`http://apilaravel.com/api/barang/${barangId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    alert('barang deleted successfully!');
    fetchBarang();
  } catch (error) {
    console.error('Error deleting barang:', error);
    alert('Failed to delete barang. Please try again.');
  }
};


onMounted(fetchBarang);
</script>