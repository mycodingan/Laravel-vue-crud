<template>
    <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="logo">
        <img src="../asset/img/Logo.png" alt="Logo">
    </div>
    <div class="container-fluid d-flex justify-content-center align-items-center h-100 py-5">
        <div class="card border-info-subtle-800 w-50">
            <div class="card-body p-4">
                <h1 class="text-center mb-4">Forgot Password</h1>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" v-model.trim="password" id="password" name="password" placeholder="Password"
                            :class="{ 'is-invalid': message_password }" class="form-control rounded-pill py-3 px-4" />
                        <div v-if="message_password" class="invalid-feedback">{{ message_password }}</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">corfim Password</label>
                        <input type="password" v-model.trim="password" id="password" name="password" placeholder="Password"
                            :class="{ 'is-invalid': message_password }" class="form-control rounded-pill py-3 px-4" />
                        <div v-if="message_password" class="invalid-feedback">{{ message_password }}</div>
                    </div>

                    <div class="text-center">
                        <router-link  type="submit" to="/"  class="btn btn-primary rounded-pill px-5 py-3">Submit</router-link>
                        <p><small>Remember your password? <router-link to="/login"
                                    class="text-primary">Login</router-link></small></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, sans-serif;
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffff;
    overflow: hidden;
}

.background span {}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
}

img {
    width: 360px;
    height: auto;
    filter: brightness(103%) saturate(1000%) contrast(119%) drop-shadow(-11px 10px 5px #292929);
}

h1 {
    color: rgb(45, 45, 45);
    text-shadow: 4px -1px 2px rgba(80, 131, 226, 0.56);
}

.card {
    max-width: 500px;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: #ffffffc0;
    backdrop-filter: blur(50px) sepia(18%);
    border: 12px outset rgba(164, 164, 164, 0.26);
    border-radius: 144px 48px 200px 78px;
    -webkit-border-radius: 144px 48px 200px 78px;
    -moz-border-radius: 144px 48px 200px 78px;
    background: #ffffffc0;
    backdrop-filter: blur(50px) sepia(18%);
    border: 12px outset rgba(164, 164, 164, 0.26);

}

.form-control {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}

.invalid-feedback {
    color: #dc3545;
    font-size: 80%;
}

.btn {
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

.text-center {
    text-align: center;
}

@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffff;
    overflow: hidden;
}

.background span {
    width: 15vmin;
    height: 15vmin;
    border-radius: 15vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 47;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #3c6086;
    top: 3%;
    left: 57%;
    animation-duration: 26s;
    animation-delay: -30s;
    transform-origin: -4vw -18vh;
    box-shadow: -30vmin 0 4.452142213631632vmin currentColor;
}

.background span:nth-child(1) {
    color: #3c6086;
    top: 68%;
    left: 11%;
    animation-duration: 35s;
    animation-delay: -4s;
    transform-origin: -17vw -2vh;
    box-shadow: 30vmin 0 4.694718794201633vmin currentColor;
}

.background span:nth-child(2) {
    color: #5db7e5;
    top: 89%;
    left: 26%;
    animation-duration: 9s;
    animation-delay: -3s;
    transform-origin: -17vw 20vh;
    box-shadow: 30vmin 0 4.565535434523543vmin currentColor;
}

.background span:nth-child(3) {
    color: #5db7e5;
    top: 70%;
    left: 6%;
    animation-duration: 22s;
    animation-delay: -19s;
    transform-origin: 11vw -6vh;
    box-shadow: 30vmin 0 4.117092337098809vmin currentColor;
}

.background span:nth-child(4) {
    color: #f84444;
    top: 96%;
    left: 92%;
    animation-duration: 18s;
    animation-delay: -7s;
    transform-origin: -22vw -11vh;
    box-shadow: -30vmin 0 3.917876289982858vmin currentColor;
}

.background span:nth-child(5) {
    color: #f84444;
    top: 79%;
    left: 30%;
    animation-duration: 34s;
    animation-delay: -21s;
    transform-origin: -18vw 11vh;
    box-shadow: -30vmin 0 4.009553531842034vmin currentColor;
}

.background span:nth-child(6) {
    color: #f84444;
    top: 68%;
    left: 3%;
    animation-duration: 24s;
    animation-delay: -16s;
    transform-origin: -10vw -15vh;
    box-shadow: -30vmin 0 4.485207051065222vmin currentColor;
}

.background span:nth-child(7) {
    color: #5db7e5;
    top: 87%;
    left: 94%;
    animation-duration: 8s;
    animation-delay: -12s;
    transform-origin: 5vw 18vh;
    box-shadow: 30vmin 0 3.9147868625562703vmin currentColor;
}

.background span:nth-child(8) {
    color: #f84444;
    top: 76%;
    left: 97%;
    animation-duration: 19s;
    animation-delay: -24s;
    transform-origin: 7vw -5vh;
    box-shadow: 30vmin 0 4.306215560746147vmin currentColor;
}

.background span:nth-child(9) {
    color: #5db7e5;
    top: 22%;
    left: 12%;
    animation-duration: 30s;
    animation-delay: -18s;
    transform-origin: -21vw 11vh;
    box-shadow: 30vmin 0 4.007328616135938vmin currentColor;
}

.background span:nth-child(10) {
    color: #f84444;
    top: 5%;
    left: 5%;
    animation-duration: 6s;
    animation-delay: -9s;
    transform-origin: 3vw -10vh;
    box-shadow: 30vmin 0 3.8784633749020916vmin currentColor;
}

.background span:nth-child(11) {
    color: #3c6086;
    top: 29%;
    left: 87%;
    animation-duration: 26s;
    animation-delay: -20s;
    transform-origin: -14vw 4vh;
    box-shadow: 30vmin 0 3.7858643151282414vmin currentColor;
}

.background span:nth-child(12) {
    color: #3c6086;
    top: 13%;
    left: 6%;
    animation-duration: 14s;
    animation-delay: -12s;
    transform-origin: -20vw -18vh;
    box-shadow: -30vmin 0 4.678866247422215vmin currentColor;
}
</style>