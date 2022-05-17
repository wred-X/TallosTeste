/* eslint-disable import/extensions */
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../../components/auth-components/login/LoginComponent'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../../components/auth-components/home/HomeComponent'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../../components/auth-components/register/RegisterComponent'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: 'mongodb://localhost:27017/jwtAuthDb',
  routes,
});

// Lógica NProgress
router.beforeResolve((to, from, next) => {
  // Se caso não for uma página inicial de carregamento
  if (to.name) {
    // Quando houver carregamento de uma página inicial, então usa NProgress:
    NProgress.start();
  }
  next();
});

// Lógica inerente ao realizar o 'Log out' remover o token no local Storage:
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  // Animação NProgress
  NProgress.done();
});

export default router;
