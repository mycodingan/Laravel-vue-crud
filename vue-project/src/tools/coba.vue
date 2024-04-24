<template>
    <Navbar />
    <div class="row">
        <div class="col-md-4">
            <Tools />
        </div>
        <div class="col-md-4">
            <kalkulator />
        </div>
    </div>
</template>

<script setup>
import Navbar from "../asset/navbar.vue"
import Tools from "../asset/tools.vue"
import kalkulator from "./components/kalkulator.vue"
</script>