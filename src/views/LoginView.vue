<template>
    <div class="container-fluid d-flex justify-content-center align-items-center h-100">
        <div class="card border-info-subtle-800">
            <div class="card-body p-4">
                <h1 class="text-center mb-4">Login</h1>
                <form @submit.prevent="validateForm">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input
                            type="email"
                            v-model="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            :class="{ 'is-invalid': message_email.length > 0 }"
                            class="form-control rounded-pill py-3 px-4"
                        />
                        <div v-if="message_email.length > 0" class="invalid-feedback">{{ message_email }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input
                            type="password"
                            v-model="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            :class="{ 'is-invalid': message_password.length > 0 }"
                            class="form-control rounded-pill py-3 px-4"
                        />
                        <div v-if="message_password.length > 0" class="invalid-feedback">{{ message_password }}</div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary rounded-pill px-5 py-3">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            message_email: '',
            message_password: ''
        };
    },
    methods: {
        validateForm() {
            if (!this.email) {
                this.message_email = 'Email harus diisi';
            } else {
                this.message_email = '';
            }

            if (!this.password) {
                this.message_password = 'Password harus diisi';
            } else {
                this.message_password = '';
            }
        }
    },
    watch: {
        email() {
            this.message_email = '';
        },
        password() {
            this.message_password = '';
        }
    },
    mounted() {}
};
</script>

<style scoped>
.invalid-feedback {
    color: #dc3545;
    font-size: 80%;
}
.card {
    max-width: 400px;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>
