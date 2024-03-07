<template>
    <div class="container border border-info-subtle-800 w-50">
        <div class="container p-4 ">
            <h1>Register</h1>
        </div>
        <form @submit.prevent="submitForm">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Full Name</label>
                        <input
                            type="text"
                            v-model="fullName"
                            id="fullName"
                            name="fullName"
                            placeholder="Full Name"
                            :class="{ 'is-invalid': message_fullName.length > 0 }"
                            class="form-control rounded-lg py-3 px-4 outline-none bg-transparent"
                        />
                        <div v-if="message_fullName.length > 0" class="invalid-feedback">{{ message_fullName }}</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input
                            type="email"
                            v-model="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            :class="{ 'is-invalid': message_email.length > 0 }"
                            class="form-control rounded-lg py-3 px-4 outline-none bg-transparent"
                        />
                        <div v-if="message_email.length > 0" class="invalid-feedback">{{ message_email }}</div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Password</label>
                <input
                    type="password"
                    v-model="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    :class="{ 'is-invalid': message_password.length > 0 }"
                    class="form-control rounded-lg py-3 px-4 outline-none bg-transparent"
                />
                <div v-if="message_password.length > 0" class="invalid-feedback">{{ message_password }}</div>
            </div>
            <div class="form-group mt-4">
                <button type="submit" class="btn btn-primary px-5 py-3">Register</button>
            </div>
        </form>
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
/* Custom styling for invalid feedback */
.invalid-feedback {
    color: #dc3545;
    font-size: 80%;
}
</style>
