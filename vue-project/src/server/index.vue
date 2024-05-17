<template>
  <div>
    <Navbar />
    <div class="container mt-4">
      <div class="row mt-5">
        <div v-for="server in servers" :key="server.id" class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Nama Koneksi driver: <b>{{ server.nama_koneksi }}</b>
              </p>
              <p class="card-text">
                driver: <b>{{ server.driver }}</b>
              </p>
              <p class="card-text">
                host: <b>{{ server.host }}</b>
              </p>
              <p class="card-text">
                port: <b>{{ server.port }}</b>
              </p>
              <p class="card-text">
                username: <b>{{ server.username }}</b>
              </p>
              <p class="card-text">
                note: <b>{{ server.note }}</b>
              </p>
              <button @click="editServer(server)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
                Edit
              </button>
              <button @click="deleteServer(server.id)" class="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Edit Server -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">Edit Server</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateServer">
              <div class="mb-3">
                <label for="nama_koneksi" class="form-label">Nama Koneksi</label>
                <input v-model="currentServer.nama_koneksi" type="text" class="form-control" id="nama_koneksi" required>
              </div>
              <div class="mb-3">
                <label for="driver" class="form-label">Driver</label>
                <input v-model="currentServer.driver" type="text" class="form-control" id="driver" required>
              </div>
              <div class="mb-3">
                <label for="host" class="form-label">Host</label>
                <input v-model="currentServer.host" type="text" class="form-control" id="host" required>
              </div>
              <div class="mb-3">
                <label for="port" class="form-label">Port</label>
                <input v-model="currentServer.port" type="text" class="form-control" id="port" required>
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input v-model="currentServer.username" type="text" class="form-control" id="username" required>
              </div>
              <div class="mb-3">
                <label for="note" class="form-label">Note</label>
                <input v-model="currentServer.note" type="text" class="form-control" id="note">
              </div>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import Navbar from "../asset/navbar.vue";

const servers = ref([]);
const currentServer = reactive({
  id: null,
  nama_koneksi: "",
  driver: "",
  host: "",
  port: "",
  username: "",
  note: ""
});

const fetchServers = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axios.get("http://192.168.11.149:8000/api/server/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    servers.value = response.data.data;
  } catch (error) {
    console.error("Error fetching servers:", error);
  }
};

const deleteServer = async (serverId) => {
  try {
    const token = localStorage.getItem("accessToken");
    await axios.delete(`http://192.168.11.149:8000/api/server/${serverId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("delet berhasil");
    fetchServers();
  } catch (error) {
    console.error("Error deleting server:", error);
    alert("gagal");
  }
};

const editServer = (server  ) => {
  Object.assign(currentServer, server);
};

const updateServer = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    await axios.post(`http://192.168.11.149:8000/api/server/${currentServer.id}`, currentServer, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("berhasil update");
    fetchServers();
  } catch (error) {
    console.error("salah update:", error);  
    alert("gagal");
  }
};

onMounted(fetchServers);
</script>
