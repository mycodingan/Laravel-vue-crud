<template>
  <Navbar/>

  <div class="container-fluid mt-4">
    <div class="row text-center">
      <div class="col-md-2">
        <div class="card">
          <div class="card-header">
            Total User
          </div>
          <div class="card-body">
            <h5 class="card-title">Jumlah Total User: 100</h5>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <div class="card">
          <div class="card-header">
            Total Siswa
          </div>
          <div class="card-body">
            <h5 class="card-title">Jumlah Total Siswa: {{ totalSiswa }}</h5>
          </div>
        </div>      
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const totalSiswa = ref(0)

onMounted(async () => {
  const response = await fetch('http://192.168.11.149:8000/api/total-siswa')
  const data = await response.json()
  totalSiswa.value = data.response
})

</script>
