import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import AboutView from '../views/AboutView.vue'; 
import RegisterView from '../views/RegisterView.vue';
import Create from '/src/components/data/create.vue';
import EditStudent from '/src/components/data/edit.vue';

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
      
      component: AboutView
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
      name: 'creaste',
      component: Create
    },
    {
      path: '/edit/:id',
      name: 'EditStudent',
      component: EditStudent
    }
  ]
});

export default router;
