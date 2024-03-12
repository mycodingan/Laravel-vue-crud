<template>
    <div class="container-fluid d-flex justify-content-center align-items-center h-100">
        <div class="card border-info-subtle-800 w-50">
            <div class="card-body p-4">
                <h1 class="text-center mb-4">Register</h1>
                <form @submit.prevent="submitForm">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="fullName" class="form-label">Full Name</label>
                            <input
                                type="text"
                                v-model="fullName"
                                id="fullName"
                                name="fullName"
                                placeholder="Full Name"
                                :class="{ 'is-invalid': message_fullName.length > 0 }"
                                class="form-control rounded-pill py-3 px-4"
                            />
                            <div v-if="message_fullName.length > 0" class="invalid-feedback">{{ message_fullName }}</div>
                        </div>
                        <div class="col-md-6 mb-3">
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
                        <button type="submit" class="btn btn-primary rounded-pill px-5 py-3">Register</button>
                        <p><small>Sudah punya Akun <router-link to="/login" class="navbar-brand text-primary">Login </router-link>lah</small></p>
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
            fullName: '',
            email: '',
            password: '',
            message_fullName: '',
            message_email: '',
            message_password: ''
        };
    },
    methods: {
        submitForm() {
            if (!this.fullName) {
                this.message_fullName = 'Full Name is required';
            } else {
                this.message_fullName = '';
            }

            if (!this.email) {
                this.message_email = 'Email is required';
            } else {
                this.message_email = '';
            }

            if (!this.password) {
                this.message_password = 'Password is required';
            } else {
                this.message_password = '';
            }

            if (this.fullName && this.email && this.password) {
                console.log('Form submitted!');
            }
        }
    },
    watch: {
        fullName() {
            this.message_fullName = '';
        },
        email() {
            this.message_email = '';
        },
        password() {
            this.message_password = '';
        }
    }
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
