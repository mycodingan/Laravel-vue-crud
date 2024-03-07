<template>
    <div class="container border border-info-subtle-800 w-50 text-center">
        <div class="container p-4 ">
            <h1>Login</h1>
        </div>
        <form>
            <div class="row d-inline">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input
                            type="text"
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
                <div class="col-md-6">
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
                </div>
            </div>
            <div class="form-group mt-4">
                <button type="submit" class="btn btn-primary px-5 py-3">Login</button>
            </div>
        </form>
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
                this.message_email = 'email nya  di isi';
            } else {
                this.message_email = '';
            }

            if (!this.password) {
                this.message_password = 'Password di isi woy';
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
    mounted() {
    }
};
</script>

<style scoped>
.invalid-feedback {
    color: #dc3545;
    font-size: 80%;
}
</style>
