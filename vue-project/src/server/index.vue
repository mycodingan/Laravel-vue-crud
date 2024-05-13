<template>
  <div>
    <Navbar />
    <div class="container mt-4">
      <div class="row mt-5">
        <div v-for="server in servers" :key="server.id" class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <p class="card-text">{{ server.nama_koneksi }}</p>
              <p class="card-text">{{ server.driver }}</p>
              <p class="card-text">{{ server.host }}</p>
              <p class="card-text">{{ server.port }}</p>
              <p class="card-text">{{ server.username }}</p>
              <p class="card-text">{{ server.password }}</p>
              <p class="card-text">{{ server.note }}</p>
              <button @click="deleteServer(server.id)" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "../asset/navbar.vue";
const servers = ref([]);

const fetchServers = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axios.get("http://192.168.11.149:8000/api/server/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    servers.value = response.data;
  } catch (error) {
    console.error("Error fetching servers:", error);
  }
};

const deleteServer = async (serverId) => {
  try {
    const token = localStorage.getItem("accessToken");
    await axios.delete(`http://192.168.11.149:8000/api/server/${serverId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    alert("Server deleted successfully!");
    fetchServers();
  } catch (error) { 
    console.error("Error deleting server:", error);
    alert("Failed to delete server. Please try again.");
  }
};

onMounted(fetchServers);
</script>
