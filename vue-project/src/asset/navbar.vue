<style>
.navbar {
  background-color: #ffffff;
  /* border-radius: 20px; */
  box-shadow: #000 24px 24px 24pc;

}

.navbar-brand {
  font-weight: 500;
  color: #007754;
  font-size: 24px;
  transition: 0.3s, color;
}

.login-button {
  background-color: #009970;
  color: #fff;
  font-size: 14px;
  padding: 8px 20px;
  border-radius: 50px;
  text-decoration: none;
  transition: 0.3s background-color;
}

.login-button:hover {
  background-color: #007754;
}

.navbar-toggler {
  border: none;
  font-size: 1.25rem;
}

.navbar-toggler:focus,
.btn-close:focus {
  box-shadow: none;
  outline: none;
}

.nav-link {
  color: #666777;
  font-weight: 500;
}

.nav-link:hover,
.nav-link.active {
  color: #000;
}

@media (min-width: 911px) {
  .nav-link::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 0;
    height: 2px;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }

  .nav-link::before,
  .nav-link.active::before {
    width: 100%;
    visibility: visible;
  }
}
</style>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand me-auto" href="#">Tugas Magang</a>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Tugas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="/siswa">Siswa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="/user">User</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
      <a href="/login" class="login-button">Login</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="userDropdown" class="dropdown">
        <button class="login-button dropdown-toggle" type="button" id="userDropdownBtn" data-bs-toggle="dropdown"
          aria-expanded="false">
          User
        </button>
        <ul class="dropdown-menu" aria-labelledby="userDropdownBtn">
          <li><a class="dropdown-item" href="#" id="logoutBtn">Log Out</a></li>
        </ul>
      </div>
    </div>

  </nav>
</template>
<script>
// const accessToken = "token123";
// const userName = "John Doe";

// if (accessToken) {
//   const userDropdown = document.getElementById("userDropdown");
//   const userDropdownBtn = document.getElementById("userDropdownBtn");
//   const logoutBtn = document.getElementById("logoutBtn");

//   userDropdownBtn.textContent = userName;

//   userDropdownBtn.addEventListener("click", function () {
//     userDropdown.classList.toggle("show");
//   });
//   logoutBtn.addEventListener("click", function () {
//     accessToken = null;
//     window.location.href = "/logout";
//   });
// }
</script>