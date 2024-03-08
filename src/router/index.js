import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import AboutView from '../views/AboutView.vue'; 
import RegisterView from '../views/RegisterView.vue';
import Create from '/src/components/data/create.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView // 
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView // 
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/create',
      name: 'creaste',
      component: Create 
    }
  ]
});

export default router;
