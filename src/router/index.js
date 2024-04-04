import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/layout/HomeView.vue';
import LoginView from '../views/componen login/LoginView.vue';
import AboutView from '../views/layout/AboutView.vue'; 
import RegisterView from '../views/componen login/RegisterView.vue';
import Create from '/src/components/data/create.vue';
import EditStudent from '/src/components/data/edit.vue';
import UserData from '/src/components/user/index.vue';
import CreateUser from '../components/user/create.vue';
import EditUser from '../components/user/edit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true } 
    },
    // user
    {
      path: '/user',
      name: 'user',
      component: UserData,
      meta: { requiresAuth: true } 
    },
    {
      path: '/user/create',
      name: 'create',
      component: CreateUser,
      meta: { requiresAuth: true } 
    },
    {
      path: '/user/edit',
      name: 'edit',
      component: EditUser,
      meta: {requiresAuth: true}
    },
    //user
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { requiresAuth: true } 
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      meta: { requiresAuth: true } 
    },
    {
      path: '/edit/:id',
      name: 'editStudent',
      component: EditStudent,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, _from, next) => {
  const isAuthenticated = !!localStorage.getItem('accessToken');
  console.log(localStorage.getItem('accessToken '))

  if (to.meta.requiresAuth && !isAuthenticated) {
    console.log(1)
    next({ name: 'login' });
  } else {
    console.log(2)
    next();
  }
});

export default router;
