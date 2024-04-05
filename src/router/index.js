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
    // user
    {
      path: '/user',
      name: 'user',
      component: UserData,
      meta: { requiresAuth: true,
        role: 'admin'
      } 
    },
    {
      path: '/user/create',
      name: 'create',
      component: CreateUser,
      meta: { requiresAuth: true,
        role: 'admin'
      } 
    },
    {
      path: '/user/edit',
      name: 'edit',
      component: EditUser,
      meta: {requiresAuth: true,
      role: 'admin'
      }
    },
    //user

    //siswa
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true,  
      role: 'user'
    }
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      meta: { requiresAuth: true ,
        role: 'admin'
      } 
    },
    {
      path: '/edit/:id',
      name: 'editStudent',
      component: EditStudent,
      meta: { requiresAuth: true,
      role: 'admin'
      }
    },
    //siswa
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
    }
  ]
});

router.beforeEach((to, from, push) => {
  const isLoggedIn = localStorage.getItem('accessToken');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const userRole = localStorage.getItem('userRole');

  if (requiresAuth && !isLoggedIn) {
    push('/login');
  } else if (requiresAuth && isLoggedIn) {
    if (to.meta.role === 'admin' && userRole !== 'admin') {
      push('/user');
    } else if (to.meta.role === 'user' && userRole !== 'user') {
      push('/');
    } else {
      push();
    }
  } else {
    push();
  }
});
export default router;
